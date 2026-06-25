import type { Metadata } from "next";
import { LanguagePage } from "@/components/sections/LanguagePage";
import { languagePages } from "@/lib/language-pages";

export const metadata: Metadata = {
  title: "French Language Classes in Jaipur | DELF / TEF Coaching — Karl Konsult",
  description:
    "Learn French in Jaipur with Karl Konsult International. DELF/TEF-ready A1–C1 coaching for studying in France and boosting your Canada PR. Book a free trial class.",
};

export default function FrenchPage() {
  return <LanguagePage data={languagePages.french} />;
}
