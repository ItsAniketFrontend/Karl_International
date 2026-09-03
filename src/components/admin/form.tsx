"use client";

import { useState } from "react";
import { Plus, Trash, CircleNotch } from "@phosphor-icons/react";

export const inputBase =
  "w-full rounded-xl border border-pine-700/20 bg-bone px-4 py-3 text-pine-900 placeholder:text-pine-700/45 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200";

export function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-pine-800">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-pine-700/55">{hint}</p>}
    </div>
  );
}

export function Section({
  title,
  description,
  children,
  defaultOpen = false,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="overflow-hidden rounded-2xl border border-pine-700/15 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div>
          <h3 className="font-bold text-pine-900">{title}</h3>
          {description && <p className="text-xs text-pine-700/60">{description}</p>}
        </div>
        <span className="text-sm font-semibold text-emerald-600">
          {open ? "Hide" : "Edit"}
        </span>
      </button>
      {open && <div className="border-t border-pine-700/10 px-5 py-5">{children}</div>}
    </div>
  );
}

export function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const [pending, setPending] = useState(false);
  return (
    <button
      type="submit"
      onClick={() => setPending(true)}
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.98] disabled:opacity-70"
    >
      {pending ? (
        <>
          <CircleNotch size={18} className="animate-spin" />
          {pendingLabel}
        </>
      ) : (
        label
      )}
    </button>
  );
}

export function AddRowButton({ onClick, label = "Add" }: { onClick: () => void; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
    >
      <Plus size={16} weight="bold" />
      {label}
    </button>
  );
}

export function RemoveRowButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Remove"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-coral-500/30 text-coral-500 transition-colors hover:bg-coral-500/10"
    >
      <Trash size={16} />
    </button>
  );
}
