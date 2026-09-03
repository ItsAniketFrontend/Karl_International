"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash, PencilSimple, Plus } from "@phosphor-icons/react";

export function ListHeader({
  title,
  description,
  newHref,
  newLabel = "New",
}: {
  title: string;
  description?: string;
  newHref?: string;
  newLabel?: string;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-pine-900">{title}</h1>
        {description && <p className="mt-1 text-sm text-pine-700/65">{description}</p>}
      </div>
      {newHref && (
        <Link
          href={newHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          <Plus size={16} weight="bold" />
          {newLabel}
        </Link>
      )}
    </div>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-pine-700/25 bg-white/60 px-6 py-14 text-center text-sm text-pine-700/60">
      {message}
    </div>
  );
}

export function ListCard({
  title,
  subtitle,
  editHref,
  onDelete,
}: {
  title: string;
  subtitle?: string;
  editHref: string;
  onDelete: () => Promise<void>;
}) {
  const [confirming, setConfirming] = useState(false);
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-pine-700/15 bg-white px-5 py-4">
      <div className="min-w-0">
        <p className="truncate font-semibold text-pine-900">{title}</p>
        {subtitle && <p className="truncate text-sm text-pine-700/60">{subtitle}</p>}
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {confirming ? (
          <>
            <span className="text-sm text-pine-700/70">Delete this?</span>
            <button
              type="button"
              disabled={pending}
              onClick={() =>
                startTransition(async () => {
                  await onDelete();
                  router.refresh();
                })
              }
              className="rounded-full bg-coral-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-coral-600 disabled:opacity-60"
            >
              {pending ? "Deleting…" : "Confirm"}
            </button>
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="rounded-full border border-pine-700/20 px-3 py-1.5 text-sm font-semibold text-pine-700"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <Link
              href={editHref}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-pine-700/15 text-pine-700 transition-colors hover:bg-bone-deep"
              aria-label="Edit"
            >
              <PencilSimple size={16} />
            </Link>
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-coral-500/30 text-coral-500 transition-colors hover:bg-coral-500/10"
              aria-label="Delete"
            >
              <Trash size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
