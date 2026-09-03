"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeClient, newKey } from "@/sanity/write-client";
import type { PortableTextBlock } from "@/lib/portable-text-types";

export type NewsItemDoc = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  publishedAt: string;
  pinned: boolean;
  body?: PortableTextBlock[] | null;
};

function docId(slug: string) {
  return `newsItem-${slug}`;
}

export async function listNewsItems(): Promise<NewsItemDoc[]> {
  return writeClient.fetch(
    `*[_type == "newsItem"] | order(pinned desc, publishedAt desc){
      _id, title, "slug": slug.current, category, summary, publishedAt, pinned, body
    }`,
  );
}

export async function getNewsItemById(id: string): Promise<NewsItemDoc | null> {
  return writeClient.fetch(
    `*[_type == "newsItem" && _id == $id][0]{
      _id, title, "slug": slug.current, category, summary, publishedAt, pinned, body
    }`,
    { id },
  );
}

export async function saveNewsItem(formData: FormData) {
  const title = String(formData.get("title") || "");
  const slug = String(formData.get("slug") || "");
  const category = String(formData.get("category") || "");
  const summary = String(formData.get("summary") || "");
  const publishedAt = String(formData.get("publishedAt") || "");
  const pinned = formData.get("pinned") === "on";
  const bodyJson = String(formData.get("bodyJson") || "[]");
  const previousId = String(formData.get("previousId") || "");

  if (!title || !slug || !category || !summary || !publishedAt) {
    throw new Error("Missing required fields");
  }

  const rawBody: PortableTextBlock[] = JSON.parse(bodyJson);
  const body = rawBody.map((b) => ({
    ...b,
    _key: b._key || newKey(),
    children: b.children.map((c) => ({ ...c, _key: c._key || newKey() })),
  }));

  const id = docId(slug);
  const doc: { _id: string; _type: string } & Record<string, unknown> = {
    _id: id,
    _type: "newsItem",
    title,
    slug: { _type: "slug", current: slug },
    category,
    summary,
    publishedAt: new Date(publishedAt).toISOString(),
    pinned,
  };
  if (body.length > 0) doc.body = body;

  await writeClient.createOrReplace(doc);

  if (previousId && previousId !== id) {
    await writeClient.delete(previousId);
  }

  revalidatePath("/news");
  redirect("/admin/news");
}

export async function deleteNewsItem(id: string) {
  await writeClient.delete(id);
  revalidatePath("/news");
}
