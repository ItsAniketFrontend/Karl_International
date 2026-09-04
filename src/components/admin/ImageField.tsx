"use client";

import { useRef, useState } from "react";
import Image from "next/image";

function assetRefToUrl(ref: string): string {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const [, id, dims, ext] = ref.split("-");
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dims}.${ext}`;
}

/**
 * A single-image upload field: shows the current image (if any), lets staff
 * pick a replacement, uploads it to Sanity via the given action, and stores
 * the resulting image reference in a hidden input named `hiddenFieldName`.
 */
export function ImageField({
  label,
  hint,
  hiddenFieldName,
  currentAssetRef,
  uploadAction,
  previewClassName = "h-16 w-40",
}: {
  label: string;
  hint?: string;
  hiddenFieldName: string;
  currentAssetRef?: string;
  uploadAction: (formData: FormData) => Promise<{ asset: { _ref: string } }>;
  previewClassName?: string;
}) {
  const [imageJson, setImageJson] = useState<string>(
    currentAssetRef
      ? JSON.stringify({ _type: "image", asset: { _type: "reference", _ref: currentAssetRef } })
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
      const image = await uploadAction(fd);
      setImageJson(JSON.stringify(image));
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-pine-800">{label}</label>
      {hint && <p className="text-xs text-pine-700/55">{hint}</p>}
      <input type="hidden" name={hiddenFieldName} value={imageJson} />
      <div className="flex items-center gap-4">
        {(previewUrl || currentAssetRef) && (
          <div className={`relative overflow-hidden rounded-xl border border-pine-700/15 bg-bone ${previewClassName}`}>
            {previewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={previewUrl} alt="" className="h-full w-full object-contain" />
            ) : (
              <Image src={assetRefToUrl(currentAssetRef!)} alt="" fill className="object-contain" />
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
    </div>
  );
}
