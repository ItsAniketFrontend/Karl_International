import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2";

const sizes = {
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  // emerald fill, white text -> AA contrast verified
  primary:
    "bg-emerald-600 text-white shadow-[0_10px_30px_-12px_rgba(122,34,51,0.4)] hover:bg-emerald-700 hover:-translate-y-[2px]",
  // emerald outline on light surfaces
  outline:
    "border border-emerald-200 bg-white text-emerald-700 hover:border-emerald-600 hover:-translate-y-[2px]",
  // for dark (ink) sections: amber pill
  ghost:
    "bg-gold-400 text-pine-900 hover:bg-gold-300 hover:-translate-y-[2px]",
};

type Props = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: keyof typeof sizes;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
