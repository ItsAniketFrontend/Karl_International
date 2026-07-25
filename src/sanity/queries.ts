import { groq } from "next-sanity";
import { client } from "./client";
import { urlForImage } from "./image";
import { blogPosts as fallbackPosts, type BlogPost } from "@/lib/blog";

/**
 * Data layer for CMS content. Reads from Sanity, but if Sanity has no content
 * yet (or is unreachable), the blog reads fall back to the hardcoded sample
 * posts in src/lib/blog.ts — so the site is never blank during the transition.
 */

export type PortableTextBlock = { _type: string; [key: string]: unknown };

export type CmsBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // display string
  read: string;
  img: string;
  // body is either Sanity portable text (rich) or plain paragraphs (fallback)
  body: PortableTextBlock[] | null;
  bodyParagraphs: string[] | null;
};

export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  pinned: boolean;
  body: PortableTextBlock[] | null;
};

const POSTS_QUERY = groq`*[_type == "blogPost"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  excerpt,
  category,
  "publishedAt": publishedAt,
  readTime,
  "coverImage": coverImage,
  body
}`;

const POST_BY_SLUG_QUERY = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  excerpt,
  category,
  "publishedAt": publishedAt,
  readTime,
  "coverImage": coverImage,
  body
}`;

const NEWS_QUERY = groq`*[_type == "newsItem"] | order(pinned desc, publishedAt desc){
  "slug": slug.current,
  title,
  category,
  summary,
  "publishedAt": publishedAt,
  pinned,
  body
}`;

type RawPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime?: string;
  coverImage?: { asset?: unknown } | null;
  body?: PortableTextBlock[] | null;
};

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function estimateRead(body?: PortableTextBlock[] | null): string {
  if (!body) return "3 min read";
  const words = body
    .filter((b) => b._type === "block")
    .flatMap((b) => {
      const children = (b as { children?: { text?: string }[] }).children;
      return Array.isArray(children) ? children : [];
    })
    .map((c) => c.text ?? "")
    .join(" ")
    .split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function mapPost(p: RawPost): CmsBlogPost {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: fmtDate(p.publishedAt),
    read: p.readTime || estimateRead(p.body),
    img: p.coverImage?.asset
      ? urlForImage(p.coverImage as never).width(1200).height(750).fit("crop").url()
      : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=70",
    body: p.body ?? null,
    bodyParagraphs: null,
  };
}

// Convert a hardcoded fallback post to the CMS shape (plain paragraphs).
function fallbackToCms(p: BlogPost): CmsBlogPost {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    date: p.date,
    read: p.read,
    img: p.img,
    body: null,
    bodyParagraphs: p.body,
  };
}

export async function getBlogPosts(): Promise<CmsBlogPost[]> {
  try {
    const posts = await client.fetch<RawPost[]>(POSTS_QUERY, {}, {
      next: { revalidate: 60 },
    });
    if (posts && posts.length > 0) return posts.map(mapPost);
  } catch {
    // fall through to fallback
  }
  return fallbackPosts.map(fallbackToCms);
}

export async function getBlogPost(slug: string): Promise<CmsBlogPost | null> {
  try {
    const post = await client.fetch<RawPost | null>(POST_BY_SLUG_QUERY, { slug }, {
      next: { revalidate: 60 },
    });
    if (post) return mapPost(post);
  } catch {
    // fall through
  }
  const fb = fallbackPosts.find((p) => p.slug === slug);
  return fb ? fallbackToCms(fb) : null;
}

export async function getBlogSlugs(): Promise<string[]> {
  try {
    const posts = await client.fetch<{ slug: string }[]>(
      groq`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`,
    );
    if (posts && posts.length > 0) return posts.map((p) => p.slug);
  } catch {
    // fall through
  }
  return fallbackPosts.map((p) => p.slug);
}

export async function getNews(): Promise<NewsItem[]> {
  try {
    const items = await client.fetch<
      { slug: string; title: string; category: string; summary: string; publishedAt: string; pinned: boolean; body?: PortableTextBlock[] | null }[]
    >(NEWS_QUERY, {}, { next: { revalidate: 60 } });
    if (items && items.length > 0) {
      return items.map((n) => ({
        slug: n.slug,
        title: n.title,
        category: n.category,
        summary: n.summary,
        date: fmtDate(n.publishedAt),
        pinned: n.pinned,
        body: n.body ?? null,
      }));
    }
  } catch {
    // fall through
  }
  return [];
}
