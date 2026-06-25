import type { Metadata } from "next";
import { LanguagePage } from "@/components/sections/LanguagePage";
import { languagePages } from "@/lib/language-pages";

export const metadata: Metadata = {
  title: "Italian Language Classes in Jaipur | CILS / CELI Coaching — Karl Konsult",
  description:
    "Learn Italian in Jaipur with Karl Konsult International. CILS/CELI-aligned A1–B2 coaching for studying and living in Italy. Book a free trial class today.",
};

export default function ItalianPage() {
  return <LanguagePage data={languagePages.italian} />;
}
