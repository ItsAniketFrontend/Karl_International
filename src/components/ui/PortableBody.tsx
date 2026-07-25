import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/image";
import type { PortableTextBlock } from "@/sanity/queries";

/**
 * Renders blog/news body content. Handles BOTH shapes:
 * - Sanity Portable Text (rich content from the CMS)
 * - Plain string paragraphs (the hardcoded fallback posts)
 * so pages work whether or not the CMS has content yet.
 */

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-bold text-pine-900 sm:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-bold text-pine-900">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-emerald-500 bg-bone py-3 pl-5 pr-4 text-pine-800 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="my-4 ml-5 list-disc space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="my-4 ml-5 list-decimal space-y-2">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-pine-900">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={(value as { href?: string })?.href}
        className="font-semibold text-emerald-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlForImage(value).width(900).fit("max").url();
      return (
        <span className="my-8 block overflow-hidden rounded-2xl">
          <Image
            src={url}
            alt={value.alt || ""}
            width={900}
            height={560}
            className="h-auto w-full object-cover"
          />
        </span>
      );
    },
  },
};

export function PortableBody({
  blocks,
  paragraphs,
}: {
  blocks: PortableTextBlock[] | null;
  paragraphs: string[] | null;
}) {
  if (blocks && blocks.length > 0) {
    return (
      <div className="space-y-6 text-lg leading-relaxed text-pine-800/90">
        <PortableText value={blocks} components={components} />
      </div>
    );
  }
  if (paragraphs && paragraphs.length > 0) {
    return (
      <div className="space-y-6 text-lg leading-relaxed text-pine-800/90">
        {paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? "text-xl text-pine-900" : undefined}>
            {p}
          </p>
        ))}
      </div>
    );
  }
  return null;
}
