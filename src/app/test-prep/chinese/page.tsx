import type { Metadata } from "next";
import { LanguagePage } from "@/components/sections/LanguagePage";
import { languagePages } from "@/lib/language-pages";

export const metadata: Metadata = {
  title: "Chinese (Mandarin) Classes in Jaipur | HSK 1–4 Coaching — Karl Konsult",
  description:
    "Learn Chinese Mandarin in Jaipur with Karl Konsult International. HSK 1–4 coaching for China scholarships and exchange programmes. Book a free trial class.",
};

export default function ChinesePage() {
  return <LanguagePage data={languagePages.chinese} />;
}
