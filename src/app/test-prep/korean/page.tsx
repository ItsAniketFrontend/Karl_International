import type { Metadata } from "next";
import { LanguagePage } from "@/components/sections/LanguagePage";
import { languagePages } from "@/lib/language-pages";

export const metadata: Metadata = {
  title: "Korean Language Classes in Jaipur | TOPIK 1–3 Coaching — Karl Konsult",
  description:
    "Learn Korean in Jaipur with Karl Konsult International. TOPIK-ready coaching for studying, GKS scholarships and work in Korea. Book a free trial class today.",
};

export default function KoreanPage() {
  return <LanguagePage data={languagePages.korean} />;
}
