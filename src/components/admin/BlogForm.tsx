"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowClockwise } from "@phosphor-icons/react";
import { Field, inputBase, SubmitButton } from "@/components/admin/form";
import {
  BlockEditor,
  portableTextToBlocks,
  blocksToPortableText,
  type EditableBlock,
} from "@/components/admin/BlockEditor";
import { slugify } from "@/lib/admin-slug";
import type { BlogPostDoc } from "@/app/admin/(dashboard)/blog/actions";
import { saveBlogPost, uploadBlogCoverImage } from "@/app/admin/(dashboard)/blog/actions";

const categories = [
  "Planning",
  "Applications",
  "Test Prep",
  "Funding",
  "Visas",
  "MBBS Abroad",
  "Student Life",
];

function toDateInputValue(iso: string): string {
  if (!iso) return new Date().toISOString().slice(0, 10);
  return iso.slice(0, 10);
}

export function BlogForm({ post }: { post?: BlogPostDoc }) {
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [blocks, setBlocks] = useState<EditableBlock[]>(
    portableTextToBlocks(post?.body),
  );
  const [coverImageJson, setCoverImageJson] = useState<string>(
    post?.coverImage?.asset?._ref
      ? JSON.stringify({
          _type: "image",
          asset: { _type: "reference", _ref: post.coverImage.asset._ref },
        })
      : "",
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setPreviewUrl(URL.createObjectURL(file));
    try {
      const fd = new FormData();
      fd.set("file", file);
      const image = await uploadBlogCoverImage(fd);
      setCoverImageJson(JSON.stringify(image));
    } finally {
      setUploading(false);
    }
  }

  return (
    <form action={saveBlogPost} className="flex flex-col gap-5">
      <input type="hidden" name="previousId" value={post?._id || ""} />
      <input type="hidden" name="bodyJson" value={JSON.stringify(blocksToPortableText(blocks))} />
      <input type="hidden" name="coverImageJson" value={coverImageJson} />

      <Field label="Title" htmlFor="title">
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={inputBase}
        />
      </Field>

      <Field label="Slug (URL)" htmlFor="slug" hint="/blog/your-slug">
        <div className="flex gap-2">
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className={inputBase}
          />
          <button
            type="button"
            onClick={() => setSlug(slugify(title))}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-pine-700/20 px-4 text-sm font-semibold text-pine-700 hover:bg-bone-deep"
          >
            <ArrowClockwise size={16} />
            Generate
          </button>
        </div>
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Category" htmlFor="category">
          <select
            id="category"
            name="category"
            defaultValue={post?.category || ""}
            required
            className={inputBase}
          >
            <option value="" disabled>
              Select
            </option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Published date" htmlFor="publishedAt">
          <input
            id="publishedAt"
            name="publishedAt"
            type="date"
            defaultValue={toDateInputValue(post?.publishedAt || "")}
            required
            className={inputBase}
          />
        </Field>
      </div>

      <Field label="Read time" htmlFor="readTime" hint='e.g. "5 min read" — leave blank to auto-estimate'>
        <input id="readTime" name="readTime" defaultValue={post?.readTime || ""} className={inputBase} />
      </Field>

      <Field label="Excerpt" htmlFor="excerpt">
        <textarea
          id="excerpt"
          name="excerpt"
          defaultValue={post?.excerpt || ""}
          rows={3}
          required
          maxLength={220}
          className={`${inputBase} resize-none`}
        />
      </Field>

      <Field label="Cover image">
        <div className="flex items-center gap-4">
          {(previewUrl || post?.coverImage?.asset?._ref) && (
            <div className="relative h-20 w-32 overflow-hidden rounded-xl border border-pine-700/15 bg-bone">
              {previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previewUrl} alt="Cover preview" className="h-full w-full object-cover" />
              ) : (
                <Image src={coverImageUrl(post)} alt="Cover" fill className="object-cover" />
              )}
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-sm text-pine-700"
          />
          {uploading && <span className="text-xs text-pine-700/60">Uploading…</span>}
        </div>
      </Field>

      <BlockEditor blocks={blocks} onChange={setBlocks} label="Body" />

      <div>
        <SubmitButton label={post ? "Save changes" : "Create post"} pendingLabel="Saving…" />
      </div>
    </form>
  );
}

function coverImageUrl(post?: BlogPostDoc): string {
  return post?.coverImage?.asset?._ref ? assetRefToUrl(post.coverImage.asset._ref) : "";
}

function assetRefToUrl(ref: string): string {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const [, id, dims, ext] = ref.split("-");
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dims}.${ext}`;
}
