"use client";

import { useState } from "react";
import { ArrowClockwise } from "@phosphor-icons/react";
import { Field, inputBase, SubmitButton } from "@/components/admin/form";
import {
  BlockEditor,
  portableTextToBlocks,
  blocksToPortableText,
  type EditableBlock,
} from "@/components/admin/BlockEditor";
import { slugify } from "@/lib/admin-slug";
import type { NewsItemDoc } from "@/app/admin/(dashboard)/news/actions";
import { saveNewsItem } from "@/app/admin/(dashboard)/news/actions";

const categories = ["Intake Alert", "Visa Update", "Scholarship", "Event", "Announcement"];

function toDateInputValue(iso: string): string {
  if (!iso) return new Date().toISOString().slice(0, 10);
  return iso.slice(0, 10);
}

export function NewsForm({ item }: { item?: NewsItemDoc }) {
  const [title, setTitle] = useState(item?.title || "");
  const [slug, setSlug] = useState(item?.slug || "");
  const [blocks, setBlocks] = useState<EditableBlock[]>(portableTextToBlocks(item?.body));

  return (
    <form action={saveNewsItem} className="flex flex-col gap-5">
      <input type="hidden" name="previousId" value={item?._id || ""} />
      <input type="hidden" name="bodyJson" value={JSON.stringify(blocksToPortableText(blocks))} />

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

      <Field label="Slug (URL)" htmlFor="slug">
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
            defaultValue={item?.category || "Announcement"}
            required
            className={inputBase}
          >
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
            defaultValue={toDateInputValue(item?.publishedAt || "")}
            required
            className={inputBase}
          />
        </Field>
      </div>

      <Field label="Summary" htmlFor="summary">
        <textarea
          id="summary"
          name="summary"
          defaultValue={item?.summary || ""}
          rows={3}
          required
          maxLength={280}
          className={`${inputBase} resize-none`}
        />
      </Field>

      <label className="flex items-center gap-2.5 text-sm font-semibold text-pine-800">
        <input
          type="checkbox"
          name="pinned"
          defaultChecked={item?.pinned || false}
          className="h-4 w-4 rounded border-pine-700/30 text-emerald-600 focus:ring-emerald-400"
        />
        Pin to top
      </label>

      <BlockEditor
        blocks={blocks}
        onChange={setBlocks}
        label="Full details (optional)"
      />

      <div>
        <SubmitButton label={item ? "Save changes" : "Create news item"} pendingLabel="Saving…" />
      </div>
    </form>
  );
}
