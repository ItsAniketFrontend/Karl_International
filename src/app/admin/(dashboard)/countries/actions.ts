"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeClient, newKey } from "@/sanity/write-client";

export type IntakeSummary = { _key: string; name: string; months: string; status: string; summary: string };
export type Faq = { _key: string; q: string; a: string };

export type CountryOverrideDoc = {
  _id: string;
  country: string;
  intro?: string;
  costTuition?: string;
  costLiving?: string;
  workRights?: string;
  topUniversities?: string[];
  popularCourses?: string[];
  scholarships?: string[];
  intakes?: IntakeSummary[];
  faqs?: Faq[];
};

function docId(country: string) {
  return `countryOverride-${country}`;
}

export async function listCountryOverrides(): Promise<CountryOverrideDoc[]> {
  return writeClient.fetch(
    `*[_type == "countryOverride"] | order(country asc){
      _id, country, intro, costTuition, costLiving, workRights,
      topUniversities, popularCourses, scholarships,
      intakes[]{ _key, name, months, status, summary },
      faqs[]{ _key, q, a }
    }`,
  );
}

export async function getCountryOverrideById(id: string): Promise<CountryOverrideDoc | null> {
  return writeClient.fetch(
    `*[_type == "countryOverride" && _id == $id][0]{
      _id, country, intro, costTuition, costLiving, workRights,
      topUniversities, popularCourses, scholarships,
      intakes[]{ _key, name, months, status, summary },
      faqs[]{ _key, q, a }
    }`,
    { id },
  );
}

function parseArray(formData: FormData, field: string): string[] {
  const raw = String(formData.get(field) || "[]");
  const arr = JSON.parse(raw) as string[];
  return arr.filter((v) => v.trim() !== "");
}

function withKeys<T extends object>(items: T[]): (T & { _key: string })[] {
  return items.map((item) => ({ ...item, _key: (item as { _key?: string })._key || newKey() }));
}

export async function saveCountryOverride(formData: FormData) {
  const country = String(formData.get("country") || "");
  if (!country) throw new Error("Country is required");

  const intro = String(formData.get("intro") || "");
  const costTuition = String(formData.get("costTuition") || "");
  const costLiving = String(formData.get("costLiving") || "");
  const workRights = String(formData.get("workRights") || "");
  const topUniversities = parseArray(formData, "topUniversitiesJson");
  const popularCourses = parseArray(formData, "popularCoursesJson");
  const scholarships = parseArray(formData, "scholarshipsJson");
  const intakes = withKeys(
    JSON.parse(String(formData.get("intakesJson") || "[]")) as IntakeSummary[],
  ).filter((i) => i.name);
  const faqs = withKeys(
    JSON.parse(String(formData.get("faqsJson") || "[]")) as Faq[],
  ).filter((f) => f.q);

  const previousId = String(formData.get("previousId") || "");
  const id = docId(country);

  const doc: { _id: string; _type: string } & Record<string, unknown> = {
    _id: id,
    _type: "countryOverride",
    country,
  };
  if (intro) doc.intro = intro;
  if (costTuition) doc.costTuition = costTuition;
  if (costLiving) doc.costLiving = costLiving;
  if (workRights) doc.workRights = workRights;
  if (topUniversities.length) doc.topUniversities = topUniversities;
  if (popularCourses.length) doc.popularCourses = popularCourses;
  if (scholarships.length) doc.scholarships = scholarships;
  if (intakes.length) doc.intakes = intakes;
  if (faqs.length) doc.faqs = faqs;

  await writeClient.createOrReplace(doc);

  if (previousId && previousId !== id) {
    await writeClient.delete(previousId);
  }

  revalidatePath("/study-abroad/[country]", "page");
  revalidatePath(`/study-abroad/${country}`);

  redirect("/admin/countries");
}

export async function deleteCountryOverride(id: string) {
  const doc = await writeClient.fetch<{ country: string } | null>(
    `*[_id == $id][0]{ country }`,
    { id },
  );
  await writeClient.delete(id);
  if (doc?.country) revalidatePath(`/study-abroad/${doc.country}`);
}
