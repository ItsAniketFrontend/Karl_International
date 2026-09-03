import { groq } from "next-sanity";
import { client } from "./client";
import type { IntakeDetail } from "@/lib/country-content-types";

/**
 * Intake landing page CMS overrides. Fetches the optional `intakePage`
 * document for a country + intake slug and merges any filled-in fields on
 * top of the code content (src/lib/content/*.ts). Empty/missing fields fall
 * back to code, so a partly-filled or absent override never breaks the page.
 * Unlike countryOverride, this covers every IntakeDetail field since the
 * whole intake page is meant to be editable.
 */

type Override = {
  name?: string;
  season?: string;
  months?: string;
  status?: string;
  summary?: string;
  intro?: string[];
  whatIsIt?: string[];
  whyChoose?: { title?: string; desc?: string }[];
  timeline?: { period?: string; tasks?: string[] }[];
  deadlines?: string[];
  courseCategories?: { category?: string; courses?: string[] }[];
  universities?: { name?: string; note?: string }[];
  eligibility?: { label?: string; points?: string[] }[];
  englishTests?: string[];
  documents?: string[];
  applySteps?: { title?: string; desc?: string }[];
  scholarships?: string[];
  comparison?: { factor?: string; thisIntake?: string; mainIntake?: string }[];
  comparisonMainLabel?: string;
  verdict?: string[];
  faqs?: { q?: string; a?: string }[];
};

const OVERRIDE_QUERY = groq`*[_type == "intakePage" && country == $country && intakeSlug == $intakeSlug][0]{
  name, season, months, status, summary,
  intro, whatIsIt,
  whyChoose[]{ title, desc },
  timeline[]{ period, tasks },
  deadlines,
  courseCategories[]{ category, courses },
  universities[]{ name, note },
  eligibility[]{ label, points },
  englishTests, documents,
  applySteps[]{ title, desc },
  scholarships,
  comparison[]{ factor, thisIntake, mainIntake },
  comparisonMainLabel,
  verdict,
  faqs[]{ q, a }
}`;

async function fetchOverride(country: string, intakeSlug: string): Promise<Override | null> {
  try {
    return await client.fetch<Override | null>(
      OVERRIDE_QUERY,
      { country, intakeSlug },
      { next: { revalidate: 60 } },
    );
  } catch {
    return null;
  }
}

const nonEmpty = <T>(v: T | undefined | null): v is T =>
  v !== undefined && v !== null && (!Array.isArray(v) || v.length > 0) && v !== "";

/**
 * Returns the IntakeDetail for a country + intake slug, with any CMS
 * overrides merged in. Pass the code-based detail; get back the merged
 * version.
 */
export async function getMergedIntake(
  country: string,
  intakeSlug: string,
  detail: IntakeDetail,
): Promise<IntakeDetail> {
  const o = await fetchOverride(country, intakeSlug);
  if (!o) return detail;

  return {
    ...detail,
    name: nonEmpty(o.name) ? o.name! : detail.name,
    season: nonEmpty(o.season) ? o.season! : detail.season,
    months: nonEmpty(o.months) ? o.months! : detail.months,
    status: nonEmpty(o.status) ? o.status! : detail.status,
    summary: nonEmpty(o.summary) ? o.summary! : detail.summary,
    intro: nonEmpty(o.intro) ? o.intro! : detail.intro,
    whatIsIt: nonEmpty(o.whatIsIt) ? o.whatIsIt! : detail.whatIsIt,
    whyChoose: nonEmpty(o.whyChoose)
      ? o.whyChoose!
          .filter((w) => w.title && w.desc)
          .map((w) => ({ title: w.title!, desc: w.desc! }))
      : detail.whyChoose,
    timeline: nonEmpty(o.timeline)
      ? o.timeline!
          .filter((t) => t.period && nonEmpty(t.tasks))
          .map((t) => ({ period: t.period!, tasks: t.tasks! }))
      : detail.timeline,
    deadlines: nonEmpty(o.deadlines) ? o.deadlines! : detail.deadlines,
    courseCategories: nonEmpty(o.courseCategories)
      ? o.courseCategories!
          .filter((c) => c.category && nonEmpty(c.courses))
          .map((c) => ({ category: c.category!, courses: c.courses! }))
      : detail.courseCategories,
    universities: nonEmpty(o.universities)
      ? o.universities!.filter((u) => u.name).map((u) => ({ name: u.name!, note: u.note }))
      : detail.universities,
    eligibility: nonEmpty(o.eligibility)
      ? o.eligibility!
          .filter((e) => e.label && nonEmpty(e.points))
          .map((e) => ({ label: e.label!, points: e.points! }))
      : detail.eligibility,
    englishTests: nonEmpty(o.englishTests) ? o.englishTests! : detail.englishTests,
    documents: nonEmpty(o.documents) ? o.documents! : detail.documents,
    applySteps: nonEmpty(o.applySteps)
      ? o.applySteps!
          .filter((s) => s.title && s.desc)
          .map((s) => ({ title: s.title!, desc: s.desc! }))
      : detail.applySteps,
    scholarships: nonEmpty(o.scholarships) ? o.scholarships! : detail.scholarships,
    comparison: nonEmpty(o.comparison)
      ? o.comparison!
          .filter((c) => c.factor && c.thisIntake && c.mainIntake)
          .map((c) => ({ factor: c.factor!, thisIntake: c.thisIntake!, mainIntake: c.mainIntake! }))
      : detail.comparison,
    comparisonMainLabel: nonEmpty(o.comparisonMainLabel)
      ? o.comparisonMainLabel!
      : detail.comparisonMainLabel,
    verdict: nonEmpty(o.verdict) ? o.verdict! : detail.verdict,
    faqs: nonEmpty(o.faqs)
      ? o.faqs!.filter((f) => f.q && f.a).map((f) => ({ q: f.q!, a: f.a! }))
      : detail.faqs,
  };
}
