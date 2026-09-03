"use client";

import { AddRowButton, RemoveRowButton, inputBase } from "./form";

export function StringArrayField({
  label,
  values,
  onChange,
  placeholder,
  multiline = false,
}: {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  multiline?: boolean;
}) {
  function update(i: number, value: string) {
    onChange(values.map((v, idx) => (idx === i ? value : v)));
  }
  function remove(i: number) {
    onChange(values.filter((_, idx) => idx !== i));
  }
  function add() {
    onChange([...values, ""]);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-pine-800">{label}</p>
        <AddRowButton onClick={add} />
      </div>
      {values.length === 0 && (
        <p className="text-xs text-pine-700/50">Nothing added yet.</p>
      )}
      <div className="flex flex-col gap-2">
        {values.map((v, i) =>
          multiline ? (
            <div key={i} className="flex items-start gap-2">
              <textarea
                value={v}
                onChange={(e) => update(i, e.target.value)}
                placeholder={placeholder}
                rows={2}
                className={`${inputBase} resize-y`}
              />
              <RemoveRowButton onClick={() => remove(i)} />
            </div>
          ) : (
            <div key={i} className="flex items-center gap-2">
              <input
                value={v}
                onChange={(e) => update(i, e.target.value)}
                placeholder={placeholder}
                className={inputBase}
              />
              <RemoveRowButton onClick={() => remove(i)} />
            </div>
          ),
        )}
      </div>
    </div>
  );
}
