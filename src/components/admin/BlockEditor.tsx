"use client";

import { AddRowButton, RemoveRowButton, inputBase } from "./form";
import type { EditableBlock, PortableTextBlock } from "@/lib/portable-text-types";

export type { EditableBlock, PortableTextBlock };

function randomKey(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function portableTextToBlocks(blocks: PortableTextBlock[] | null | undefined): EditableBlock[] {
  if (!blocks || blocks.length === 0) return [];
  return blocks
    .filter((b) => b._type === "block")
    .map((b) => ({
      _key: b._key || randomKey(),
      style: (b.style === "h2" || b.style === "h3" || b.style === "blockquote"
        ? b.style
        : "normal") as EditableBlock["style"],
      listItem: b.listItem === "bullet" || b.listItem === "number" ? b.listItem : undefined,
      text: (b.children || []).map((c) => c.text).join(""),
    }));
}

export function blocksToPortableText(blocks: EditableBlock[]): PortableTextBlock[] {
  return blocks
    .filter((b) => b.text.trim() !== "")
    .map((b) => ({
      _type: "block",
      _key: b._key,
      style: b.style,
      listItem: b.listItem,
      markDefs: [],
      children: [{ _type: "span", _key: randomKey(), text: b.text, marks: [] }],
    }));
}

const blockTypeOptions: { value: string; label: string }[] = [
  { value: "normal", label: "Paragraph" },
  { value: "h2", label: "Heading" },
  { value: "h3", label: "Subheading" },
  { value: "blockquote", label: "Quote" },
  { value: "bullet", label: "Bullet list item" },
  { value: "number", label: "Numbered list item" },
];

function encodeType(b: EditableBlock): string {
  if (b.listItem) return b.listItem;
  return b.style;
}

function decodeType(value: string): Pick<EditableBlock, "style" | "listItem"> {
  if (value === "bullet" || value === "number") {
    return { style: "normal", listItem: value };
  }
  return { style: value as EditableBlock["style"], listItem: undefined };
}

export function BlockEditor({
  blocks,
  onChange,
  label = "Body content",
}: {
  blocks: EditableBlock[];
  onChange: (blocks: EditableBlock[]) => void;
  label?: string;
}) {
  function update(index: number, patch: Partial<EditableBlock>) {
    onChange(blocks.map((b, i) => (i === index ? { ...b, ...patch } : b)));
  }

  function remove(index: number) {
    onChange(blocks.filter((_, i) => i !== index));
  }

  function add() {
    onChange([...blocks, { _key: randomKey(), style: "normal", text: "" }]);
  }

  function move(index: number, dir: -1 | 1) {
    const target = index + dir;
    if (target < 0 || target >= blocks.length) return;
    const next = [...blocks];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-pine-800">{label}</p>
        <AddRowButton onClick={add} label="Add block" />
      </div>

      {blocks.length === 0 && (
        <p className="rounded-xl border border-dashed border-pine-700/25 px-4 py-6 text-center text-sm text-pine-700/55">
          No content blocks yet. Add one to start writing.
        </p>
      )}

      <div className="flex flex-col gap-3">
        {blocks.map((b, i) => (
          <div key={b._key} className="rounded-xl border border-pine-700/15 bg-bone p-3">
            <div className="mb-2 flex items-center gap-2">
              <select
                value={encodeType(b)}
                onChange={(e) => update(i, decodeType(e.target.value))}
                className="rounded-lg border border-pine-700/20 bg-white px-2.5 py-1.5 text-sm text-pine-900"
              >
                {blockTypeOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <div className="ml-auto flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => move(i, -1)}
                  disabled={i === 0}
                  className="h-8 w-8 rounded-lg border border-pine-700/15 text-sm text-pine-700 disabled:opacity-30"
                  aria-label="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => move(i, 1)}
                  disabled={i === blocks.length - 1}
                  className="h-8 w-8 rounded-lg border border-pine-700/15 text-sm text-pine-700 disabled:opacity-30"
                  aria-label="Move down"
                >
                  ↓
                </button>
                <RemoveRowButton onClick={() => remove(i)} />
              </div>
            </div>
            <textarea
              value={b.text}
              onChange={(e) => update(i, { text: e.target.value })}
              rows={3}
              placeholder="Block text..."
              className={`${inputBase} resize-y`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
