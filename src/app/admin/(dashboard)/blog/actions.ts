"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeClient, newKey } from "@/sanity/write-client";
import type { PortableTextBlock } from "@/lib/portable-text-types";

export type BlogPostDoc = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime?: string;
  publishedAt: string;
  coverImage?: { asset?: { _ref: string; _type: "reference" } } | null;
  body: PortableTextBlock[];
};

function docId(slug: string) {
  return `blogPost-${slug}`;
}

export async function listBlogPosts(): Promise<BlogPostDoc[]> {
  return writeClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc){
      _id, title, "slug": slug.current, category, excerpt, readTime, publishedAt, coverImage, body
    }`,
  );
}

export async function getBlogPostById(id: string): Promise<BlogPostDoc | null> {
  return writeClient.fetch(
    `*[_type == "blogPost" && _id == $id][0]{
      _id, title, "slug": slug.current, category, excerpt, readTime, publishedAt, coverImage, body
    }`,
    { id },
  );
}

export async function uploadBlogCoverImage(formData: FormData) {
  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) throw new Error("No file provided");
  const asset = await writeClient.assets.upload("image", file, {
    filename: file.name,
  });
  return { _type: "image" as const, asset: { _type: "reference" as const, _ref: asset._id } };
}

export async function saveBlogPost(formData: FormData) {
  const title = String(formData.get("title") || "");
  const slug = String(formData.get("slug") || "");
  const category = String(formData.get("category") || "");
  const excerpt = String(formData.get("excerpt") || "");
  const readTime = String(formData.get("readTime") || "");
  const publishedAt = String(formData.get("publishedAt") || "");
  const bodyJson = String(formData.get("bodyJson") || "[]");
  const coverImageJson = String(formData.get("coverImageJson") || "");
  const previousId = String(formData.get("previousId") || "");

  if (!title || !slug || !category || !excerpt || !publishedAt) {
    throw new Error("Missing required fields");
  }

  const body: PortableTextBlock[] = JSON.parse(bodyJson).map(
    (b: PortableTextBlock) => ({
      ...b,
      _key: b._key || newKey(),
      children: b.children.map((c) => ({ ...c, _key: c._key || newKey() })),
    }),
  );

  const id = docId(slug);
  const doc: { _id: string; _type: string } & Record<string, unknown> = {
    _id: id,
    _type: "blogPost",
    title,
    slug: { _type: "slug", current: slug },
    category,
    excerpt,
    publishedAt: new Date(publishedAt).toISOString(),
    body,
  };
  if (readTime) doc.readTime = readTime;
  if (coverImageJson) {
    doc.coverImage = JSON.parse(coverImageJson);
  }

  await writeClient.createOrReplace(doc);

  if (previousId && previousId !== id) {
    await writeClient.delete(previousId);
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  if (previousId && previousId !== id) {
    const prevSlug = previousId.replace(/^blogPost-/, "");
    revalidatePath(`/blog/${prevSlug}`);
  }

  redirect("/admin/blog");
}

export async function deleteBlogPost(id: string) {
  const doc = await writeClient.fetch<{ slug: string } | null>(
    `*[_id == $id][0]{ "slug": slug.current }`,
    { id },
  );
  await writeClient.delete(id);
  revalidatePath("/blog");
  if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
}
