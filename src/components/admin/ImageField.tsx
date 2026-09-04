"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { UploadSimple } from "@phosphor-icons/react";

function assetRefToUrl(ref: string): string {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const [, id, dims, ext] = ref.split("-");
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dims}.${ext}`;
}

/**
 * A single-image upload field: shows the current image (or a placeholder box
 * if none is set), lets staff pick a replacement via a styled button (native
 * file inputs render inconsistently across browsers), uploads it to Sanity
 * via the given action, and stores the resulting image reference in a hidden
 * input named `hiddenFieldName`.
 */
export function ImageField({
  label,
  hint,
  hiddenFieldName,
  currentAssetRef,
  uploadAction,
  previewClassName = "h-16 w-40 bg-bone",
  emptyTextClassName = "text-pine-700/40",
}: {
  label: string;
  hint?: string;
  hiddenFieldName: string;
  currentAssetRef?: string;
  uploadAction: (formData: FormData) => Promise<{ asset: { _ref: string } }>;
  previewClassName?: string;
  emptyTextClassName?: string;
}) {
  const [imageJson, setImageJson] = useState<string>(
    currentAssetRef
      ? JSON.stringify({ _type: "image", asset: { _type: "reference", _ref: currentAssetRef } })
      : "",
  );
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
    try {
      const fd = new FormData();
      fd.set("file", file);
      const image = await uploadAction(fd);
      setImageJson(JSON.stringify(image));
    } finally {
      setUploading(false);
    }
  }

  const hasImage = previewUrl || currentAssetRef;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-pine-800">{label}</label>
      {hint && <p className="text-xs text-pine-700/55">{hint}</p>}
      <input type="hidden" name={hiddenFieldName} value={imageJson} />
      <div className="flex items-center gap-4">
        <div className={`relative shrink-0 overflow-hidden rounded-xl border border-pine-700/15 ${previewClassName}`}>
          {hasImage ? (
            previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={previewUrl} alt="" className="h-full w-full object-contain" />
            ) : (
              <Image src={assetRefToUrl(currentAssetRef!)} alt="" fill className="object-contain" />
            )
          ) : (
            <div className={`flex h-full w-full items-center justify-center text-xs ${emptyTextClassName}`}>
              No logo set
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-pine-700/20 bg-white px-4 py-2 text-sm font-semibold text-pine-700 transition-colors hover:bg-bone-deep disabled:opacity-60"
          >
            <UploadSimple size={16} weight="bold" />
            {uploading ? "Uploading…" : hasImage ? "Replace image" : "Upload image"}
          </button>
          {fileName && !uploading && (
            <span className="text-xs text-pine-700/55">{fileName}</span>
          )}
        </div>
      </div>
    </div>
  );
}
