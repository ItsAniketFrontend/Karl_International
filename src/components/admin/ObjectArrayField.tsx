"use client";

import { AddRowButton, RemoveRowButton, inputBase } from "./form";
import { StringArrayField } from "./ArrayField";

type FieldSpec<T> =
  | { key: keyof T; label: string; kind: "text" }
  | { key: keyof T; label: string; kind: "textarea" }
  | { key: keyof T; label: string; kind: "stringArray" };

export function ObjectArrayField<T extends Record<string, unknown>>({
  label,
  items,
  onChange,
  fields,
  emptyItem,
  previewLabel,
}: {
  label: string;
  items: T[];
  onChange: (items: T[]) => void;
  fields: FieldSpec<T>[];
  emptyItem: () => T;
  previewLabel?: (item: T, index: number) => string;
}) {
  function update(i: number, key: keyof T, value: unknown) {
    onChange(items.map((it, idx) => (idx === i ? { ...it, [key]: value } : it)));
  }
  function remove(i: number) {
    onChange(items.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([...items, emptyItem()]);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-pine-800">{label}</p>
        <AddRowButton onClick={add} />
      </div>

      {items.length === 0 && (
        <p className="text-xs text-pine-700/50">Nothing added yet.</p>
      )}

      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-pine-700/15 bg-bone p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-pine-700/50">
                {previewLabel ? previewLabel(item, i) : `Item ${i + 1}`}
              </p>
              <RemoveRowButton onClick={() => remove(i)} />
            </div>
            <div className="flex flex-col gap-3">
              {fields.map((f) => {
                const value = item[f.key];
                if (f.kind === "stringArray") {
                  return (
                    <StringArrayField
                      key={String(f.key)}
                      label={f.label}
                      values={(value as string[]) || []}
                      onChange={(v) => update(i, f.key, v)}
                    />
                  );
                }
                if (f.kind === "textarea") {
                  return (
                    <div key={String(f.key)} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-pine-800">{f.label}</label>
                      <textarea
                        value={(value as string) || ""}
                        onChange={(e) => update(i, f.key, e.target.value)}
                        rows={2}
                        className={`${inputBase} resize-y`}
                      />
                    </div>
                  );
                }
                return (
                  <div key={String(f.key)} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-pine-800">{f.label}</label>
                    <input
                      value={(value as string) || ""}
                      onChange={(e) => update(i, f.key, e.target.value)}
                      className={inputBase}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
