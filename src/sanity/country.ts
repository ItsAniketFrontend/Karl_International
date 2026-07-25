import { groq } from "next-sanity";
import { client } from "./client";
import type { CountryDetail } from "@/lib/data";
import type { CountryContent, IntakeDetail } from "@/lib/country-content-types";

/**
 * Country page CMS overrides. Fetches the optional `countryOverride` document
 * for a slug and merges any filled-in fields on top of the code content
 * (src/lib/data.ts + src/lib/content/*.ts). Empty/missing fields fall back to
 * code, so a partly-filled or absent override never breaks the page.
 */

type Override = {
  intro?: string;
  costTuition?: string;
  costLiving?: string;
  workRights?: string;
  topUniversities?: string[];
  popularCourses?: string[];
  scholarships?: string[];
  intakes?: { name?: string; months?: string; status?: string; summary?: string }[];
  faqs?: { q?: string; a?: string }[];
};

const OVERRIDE_QUERY = groq`*[_type == "countryOverride" && country == $slug][0]{
  intro, costTuition, costLiving, workRights,
  topUniversities, popularCourses, scholarships,
  intakes[]{ name, months, status, summary },
  faqs[]{ q, a }
}`;

async function fetchOverride(slug: string): Promise<Override | null> {
  try {
    return await client.fetch<Override | null>(OVERRIDE_QUERY, { slug }, {
      next: { revalidate: 60 },
    });
  } catch {
    return null;
  }
}

const nonEmpty = <T>(v: T | undefined | null): v is T =>
  v !== undefined && v !== null && (!Array.isArray(v) || v.length > 0) && v !== "";

/**
 * Returns the CountryDetail + CountryContent for a slug, with any CMS overrides
 * merged in. Pass the code-based detail/content; get back merged versions.
 */
export async function getMergedCountry(
  slug: string,
  detail: CountryDetail,
  content: CountryContent,
): Promise<{ detail: CountryDetail; content: CountryContent }> {
  const o = await fetchOverride(slug);
  if (!o) return { detail, content };

  const mergedDetail: CountryDetail = {
    ...detail,
    intro: nonEmpty(o.intro) ? o.intro! : detail.intro,
    costTuition: nonEmpty(o.costTuition) ? o.costTuition! : detail.costTuition,
    costLiving: nonEmpty(o.costLiving) ? o.costLiving! : detail.costLiving,
    workRights: nonEmpty(o.workRights) ? o.workRights! : detail.workRights,
    faqs: nonEmpty(o.faqs)
      ? o.faqs!.filter((f) => f.q && f.a).map((f) => ({ q: f.q!, a: f.a! }))
      : detail.faqs,
  };

  // Merge intake summaries by name, keeping the code intake's deep content.
  let mergedIntakes: IntakeDetail[] = content.intakes;
  if (nonEmpty(o.intakes)) {
    mergedIntakes = content.intakes.map((code) => {
      const ov = o.intakes!.find((x) => x.name === code.name);
      if (!ov) return code;
      return {
        ...code,
        months: nonEmpty(ov.months) ? ov.months! : code.months,
        status: nonEmpty(ov.status) ? ov.status! : code.status,
        summary: nonEmpty(ov.summary) ? ov.summary! : code.summary,
      };
    });
  }

  const mergedContent: CountryContent = {
    ...content,
    heroIntro: nonEmpty(o.intro) ? [o.intro!, ...content.heroIntro.slice(1)] : content.heroIntro,
    universities: nonEmpty(o.topUniversities)
      ? o.topUniversities!.map((name) => ({ name }))
      : content.universities,
    scholarships: nonEmpty(o.scholarships) ? o.scholarships! : content.scholarships,
    intakes: mergedIntakes,
  };

  // popularCourses in CountryContent is grouped by category; the override is a
  // flat list, so we only apply it to the flat detail-level courses if present.
  if (nonEmpty(o.popularCourses)) {
    // keep code course categories, but if staff supplied a flat list, surface it
    // as a single "Popular courses" category at the top.
    mergedContent.courseCategories = [
      { category: "Popular courses", courses: o.popularCourses! },
      ...content.courseCategories,
    ];
  }

  return { detail: mergedDetail, content: mergedContent };
}
