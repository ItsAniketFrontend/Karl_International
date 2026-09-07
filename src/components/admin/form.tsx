"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { Plus, Trash, CircleNotch, CheckCircle } from "@phosphor-icons/react";

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

/**
 * Submit button whose "pending" state comes from React's real form-submission
 * lifecycle (useFormStatus), not local state -- local state has no way to
 * know when a server action actually finishes (or throws), so it used to get
 * stuck on the pending label forever on any action that doesn't navigate
 * away or throws an error with no visible message.
 */
export function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
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

/**
 * Same as SubmitButton, but shows a brief "Saved" confirmation after a
 * successful submit that doesn't navigate away (e.g. the Site Settings
 * singleton, which stays on the same page after saving).
 */
export function SubmitButtonWithConfirm({
  label,
  pendingLabel,
  savedLabel = "Saved",
}: {
  label: string;
  pendingLabel: string;
  savedLabel?: string;
}) {
  const { pending } = useFormStatus();
  const [justSaved, setJustSaved] = useState(false);
  const [wasPending, setWasPending] = useState(false);

  useEffect(() => {
    if (wasPending && !pending) {
      setJustSaved(true);
      const t = setTimeout(() => setJustSaved(false), 2500);
      return () => clearTimeout(t);
    }
    setWasPending(pending);
  }, [pending, wasPending]);

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.98] disabled:opacity-70"
    >
      {pending ? (
        <>
          <CircleNotch size={18} className="animate-spin" />
          {pendingLabel}
        </>
      ) : justSaved ? (
        <>
          <CheckCircle size={18} weight="fill" />
          {savedLabel}
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
