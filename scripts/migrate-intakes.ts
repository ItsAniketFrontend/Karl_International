/**
 * One-time migration: import the existing intake landing pages (the
 * `intakes` array inside each src/lib/content/*.ts country file) into Sanity
 * as `intakePage` documents, so the full /study-abroad/[country]/[intake]
 * pages become editable in the CMS from day one.
 *
 * PREREQUISITES:
 *   1. A Sanity write token in .env.local as SANITY_API_WRITE_TOKEN
 *      (create at sanity.io/manage -> API -> Tokens -> Editor role).
 *   2. Run:  npm run migrate:intakes   (uses tsx)
 *
 * Safe to re-run: uses createOrReplace keyed by a stable _id per
 * country + intake slug, so it updates rather than duplicating.
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Minimal .env.local loader (no dotenv dependency)
function loadEnv() {
  try {
    const raw = readFileSync(resolve(__dirname, "../.env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
    }
  } catch {
    /* ignore */
  }
}
loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error(
    "\n❌ Missing SANITY_API_WRITE_TOKEN in .env.local.\n" +
      "   Create an Editor token at https://www.sanity.io/manage → your project → API → Tokens,\n" +
      "   paste it into .env.local, then re-run: npm run migrate:intakes\n",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

// tsx resolves the TypeScript source directly.
import { countryContent } from "../src/lib/content";

function docId(country: string, intakeSlug: string) {
  return `intakePage-${country}-${intakeSlug}`;
}

function key() {
  return Math.random().toString(36).slice(2, 10);
}

/** Adds a stable _key to each item of an array-of-objects field, which
 * Sanity's Studio expects for editing (plain string/number arrays don't
 * need one). Leaves undefined fields as undefined. */
function withKeys<T extends object>(arr: T[] | undefined): (T & { _key: string })[] | undefined {
  return arr?.map((item) => ({ ...item, _key: key() }));
}

async function run() {
  const countries = Object.keys(countryContent);
  const totalIntakes = countries.reduce(
    (sum, c) => sum + countryContent[c].intakes.length,
    0,
  );
  console.log(
    `\nMigrating ${totalIntakes} intake pages across ${countries.length} countries to Sanity (${projectId}/${dataset})...\n`,
  );

  for (const country of countries) {
    const content = countryContent[country];
    for (const intake of content.intakes) {
      const doc = {
        _id: docId(country, intake.slug),
        _type: "intakePage",
        country,
        intakeSlug: intake.slug,
        name: intake.name,
        season: intake.season,
        months: intake.months,
        status: intake.status,
        summary: intake.summary,
        intro: intake.intro,
        whatIsIt: intake.whatIsIt,
        whyChoose: withKeys(intake.whyChoose),
        timeline: withKeys(intake.timeline),
        deadlines: intake.deadlines,
        courseCategories: withKeys(intake.courseCategories),
        universities: withKeys(intake.universities),
        eligibility: withKeys(intake.eligibility),
        englishTests: intake.englishTests,
        documents: intake.documents,
        applySteps: withKeys(intake.applySteps),
        scholarships: intake.scholarships,
        comparison: withKeys(intake.comparison),
        comparisonMainLabel: intake.comparisonMainLabel,
        verdict: intake.verdict,
        faqs: withKeys(intake.faqs),
      };
      await client.createOrReplace(doc);
      console.log(`  ✓ ${country} / ${intake.name} (${intake.slug})`);
    }
  }

  console.log(`\n✅ Done. ${totalIntakes} intake pages imported.\n`);
}

run().catch((e) => {
  console.error("\n❌ Migration failed:", e.message);
  process.exit(1);
});
