"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeClient, newKey } from "@/sanity/write-client";

export type WhyChoose = { _key: string; title: string; desc: string };
export type TimelineStep = { _key: string; period: string; tasks: string[] };
export type CourseCategory = { _key: string; category: string; courses: string[] };
export type University = { _key: string; name: string; note: string };
export type Eligibility = { _key: string; label: string; points: string[] };
export type ApplyStep = { _key: string; title: string; desc: string };
export type Comparison = { _key: string; factor: string; thisIntake: string; mainIntake: string };
export type Faq = { _key: string; q: string; a: string };

export type IntakePageDoc = {
  _id: string;
  country: string;
  intakeSlug: string;
  name?: string;
  season?: string;
  months?: string;
  status?: string;
  summary?: string;
  intro?: string[];
  whatIsIt?: string[];
  whyChoose?: WhyChoose[];
  timeline?: TimelineStep[];
  deadlines?: string[];
  courseCategories?: CourseCategory[];
  universities?: University[];
  eligibility?: Eligibility[];
  englishTests?: string[];
  documents?: string[];
  applySteps?: ApplyStep[];
  scholarships?: string[];
  comparison?: Comparison[];
  comparisonMainLabel?: string;
  verdict?: string[];
  faqs?: Faq[];
};

function docId(country: string, intakeSlug: string) {
  return `intakePage-${country}-${intakeSlug}`;
}

const LIST_PROJECTION = `
  _id, country, intakeSlug, name, season, months, status, summary,
  intro, whatIsIt,
  whyChoose[]{ _key, title, desc },
  timeline[]{ _key, period, tasks },
  deadlines,
  courseCategories[]{ _key, category, courses },
  universities[]{ _key, name, note },
  eligibility[]{ _key, label, points },
  englishTests, documents,
  applySteps[]{ _key, title, desc },
  scholarships,
  comparison[]{ _key, factor, thisIntake, mainIntake },
  comparisonMainLabel,
  verdict,
  faqs[]{ _key, q, a }
`;

export async function listIntakePages(): Promise<IntakePageDoc[]> {
  return writeClient.fetch(
    `*[_type == "intakePage"] | order(country asc, intakeSlug asc){ ${LIST_PROJECTION} }`,
  );
}

export async function getIntakePageById(id: string): Promise<IntakePageDoc | null> {
  return writeClient.fetch(
    `*[_type == "intakePage" && _id == $id][0]{ ${LIST_PROJECTION} }`,
    { id },
  );
}

function parseStringArray(formData: FormData, field: string): string[] {
  const raw = String(formData.get(field) || "[]");
  const arr = JSON.parse(raw) as string[];
  return arr.filter((v) => v.trim() !== "");
}

function withKeys<T extends { _key?: string }>(items: T[]): (T & { _key: string })[] {
  return items.map((item) => ({ ...item, _key: item._key || newKey() }));
}

function parseObjectArray<T extends { _key?: string }>(formData: FormData, field: string): T[] {
  const raw = String(formData.get(field) || "[]");
  return withKeys(JSON.parse(raw) as T[]);
}

export async function saveIntakePage(formData: FormData) {
  const country = String(formData.get("country") || "");
  const intakeSlug = String(formData.get("intakeSlug") || "");
  if (!country || !intakeSlug) throw new Error("Country and intake slug are required");

  const name = String(formData.get("name") || "");
  const season = String(formData.get("season") || "");
  const months = String(formData.get("months") || "");
  const status = String(formData.get("status") || "");
  const summary = String(formData.get("summary") || "");
  const comparisonMainLabel = String(formData.get("comparisonMainLabel") || "");

  const intro = parseStringArray(formData, "introJson");
  const whatIsIt = parseStringArray(formData, "whatIsItJson");
  const deadlines = parseStringArray(formData, "deadlinesJson");
  const englishTests = parseStringArray(formData, "englishTestsJson");
  const documents = parseStringArray(formData, "documentsJson");
  const scholarships = parseStringArray(formData, "scholarshipsJson");
  const verdict = parseStringArray(formData, "verdictJson");

  const whyChoose = parseObjectArray<WhyChoose>(formData, "whyChooseJson").filter((w) => w.title);
  const timeline = parseObjectArray<TimelineStep>(formData, "timelineJson").filter((t) => t.period);
  const courseCategories = parseObjectArray<CourseCategory>(formData, "courseCategoriesJson").filter(
    (c) => c.category,
  );
  const universities = parseObjectArray<University>(formData, "universitiesJson").filter((u) => u.name);
  const eligibility = parseObjectArray<Eligibility>(formData, "eligibilityJson").filter((e) => e.label);
  const applySteps = parseObjectArray<ApplyStep>(formData, "applyStepsJson").filter((s) => s.title);
  const comparison = parseObjectArray<Comparison>(formData, "comparisonJson").filter((c) => c.factor);
  const faqs = parseObjectArray<Faq>(formData, "faqsJson").filter((f) => f.q);

  const previousId = String(formData.get("previousId") || "");
  const id = docId(country, intakeSlug);

  const doc: { _id: string; _type: string } & Record<string, unknown> = {
    _id: id,
    _type: "intakePage",
    country,
    intakeSlug,
  };
  if (name) doc.name = name;
  if (season) doc.season = season;
  if (months) doc.months = months;
  if (status) doc.status = status;
  if (summary) doc.summary = summary;
  if (intro.length) doc.intro = intro;
  if (whatIsIt.length) doc.whatIsIt = whatIsIt;
  if (whyChoose.length) doc.whyChoose = whyChoose;
  if (timeline.length) doc.timeline = timeline;
  if (deadlines.length) doc.deadlines = deadlines;
  if (courseCategories.length) doc.courseCategories = courseCategories;
  if (universities.length) doc.universities = universities;
  if (eligibility.length) doc.eligibility = eligibility;
  if (englishTests.length) doc.englishTests = englishTests;
  if (documents.length) doc.documents = documents;
  if (applySteps.length) doc.applySteps = applySteps;
  if (scholarships.length) doc.scholarships = scholarships;
  if (comparison.length) doc.comparison = comparison;
  if (comparisonMainLabel) doc.comparisonMainLabel = comparisonMainLabel;
  if (verdict.length) doc.verdict = verdict;
  if (faqs.length) doc.faqs = faqs;

  await writeClient.createOrReplace(doc);

  if (previousId && previousId !== id) {
    await writeClient.delete(previousId);
  }

  revalidatePath("/study-abroad/[country]/[intake]", "page");
  revalidatePath(`/study-abroad/${country}/${intakeSlug}`);
  revalidatePath(`/study-abroad/${country}`);

  redirect("/admin/intakes");
}

export async function deleteIntakePage(id: string) {
  const doc = await writeClient.fetch<{ country: string; intakeSlug: string } | null>(
    `*[_id == $id][0]{ country, intakeSlug }`,
    { id },
  );
  await writeClient.delete(id);
  if (doc) {
    revalidatePath(`/study-abroad/${doc.country}/${doc.intakeSlug}`);
    revalidatePath(`/study-abroad/${doc.country}`);
  }
}
