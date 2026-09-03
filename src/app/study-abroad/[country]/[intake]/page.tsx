import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IntakePage } from "@/components/sections/IntakePage";
import { destinations } from "@/lib/data";
import { countryContent } from "@/lib/content";
import { getMergedIntake } from "@/sanity/intake";

type Params = { country: string; intake: string };

export function generateStaticParams(): Params[] {
  return destinations.flatMap((d) => {
    const content = countryContent[d.slug];
    if (!content) return [];
    return content.intakes.map((i) => ({ country: d.slug, intake: i.slug }));
  });
}

async function resolve(country: string, intakeSlug: string) {
  const dest = destinations.find((d) => d.slug === country);
  const content = dest ? countryContent[dest.slug] : undefined;
  const intake = content?.intakes.find((i) => i.slug === intakeSlug);
  if (!dest || !intake) return { dest, intake: undefined };
  const merged = await getMergedIntake(dest.slug, intakeSlug, intake);
  return { dest, intake: merged };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { country, intake: intakeSlug } = await params;
  const { dest, intake } = await resolve(country, intakeSlug);
  if (!dest || !intake) return {};
  return {
    title: `${intake.name} in ${dest.name} | Complete Guide for Indian Students — Karl Konsult`,
    description:
      `${intake.name} in ${dest.name}: intakes, deadlines, top universities, courses, eligibility, documents, scholarships and the student-visa process — explained for Indian students by Karl Konsult International, study abroad consultants in Jaipur.`.slice(
        0,
        320,
      ),
  };
}

export default async function CountryIntakePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { country, intake: intakeSlug } = await params;
  const { dest, intake } = await resolve(country, intakeSlug);
  if (!dest || !intake) notFound();
  return <IntakePage dest={dest} intake={intake} />;
}
