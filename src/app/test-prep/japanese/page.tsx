import type { Metadata } from "next";
import { LanguagePage } from "@/components/sections/LanguagePage";
import { languagePages } from "@/lib/language-pages";

export const metadata: Metadata = {
  title: "Japanese Language Classes in Jaipur | JLPT N5–N3 Coaching — Karl Konsult",
  description:
    "Learn Japanese in Jaipur with Karl Konsult International. JLPT N5–N3 coaching for studying, scholarships and work in Japan. Book a free trial class today.",
};

export default function JapanesePage() {
  return <LanguagePage data={languagePages.japanese} />;
}
