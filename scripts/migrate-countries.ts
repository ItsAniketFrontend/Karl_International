/**
 * One-time migration: import the existing country page content (from
 * src/lib/data.ts's `countryDetails` + src/lib/content/*.ts's `countryContent`)
 * into Sanity as `countryOverride` documents, so the full /study-abroad/[country]
 * pages become editable in the admin panel from day one, matching the fields
 * the countryOverride schema actually covers.
 *
 * PREREQUISITES:
 *   1. A Sanity write token in .env.local as SANITY_API_WRITE_TOKEN
 *      (create at sanity.io/manage -> API -> Tokens -> Editor role).
 *   2. Run:  npm run migrate:countries   (uses tsx)
 *
 * Safe to re-run: uses createOrReplace keyed by a stable _id per country,
 * so it updates rather than duplicating.
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

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
      "   paste it into .env.local, then re-run: npm run migrate:countries\n",
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

import { destinations, countryDetails } from "../src/lib/data";
import { countryContent } from "../src/lib/content";

function docId(country: string) {
  return `countryOverride-${country}`;
}

function key() {
  return Math.random().toString(36).slice(2, 10);
}

function withKeys<T extends object>(arr: T[] | undefined): (T & { _key: string })[] | undefined {
  return arr?.map((item) => ({ ...item, _key: key() }));
}

async function run() {
  console.log(
    `\nMigrating country overrides for ${destinations.length} countries to Sanity (${projectId}/${dataset})...\n`,
  );

  for (const dest of destinations) {
    const detail = countryDetails[dest.slug];
    const content = countryContent[dest.slug];
    if (!detail) {
      console.log(`  – ${dest.name}: no countryDetails entry, skipped`);
      continue;
    }

    const intakes = (content?.intakes ?? []).map((i) => ({
      name: i.name,
      months: i.months,
      status: i.status,
      summary: i.summary,
    }));

    const doc = {
      _id: docId(dest.slug),
      _type: "countryOverride",
      country: dest.slug,
      intro: detail.intro,
      costTuition: detail.costTuition,
      costLiving: detail.costLiving,
      workRights: detail.workRights,
      topUniversities: detail.topUniversities,
      popularCourses: detail.popularCourses,
      scholarships: content?.scholarships,
      intakes: withKeys(intakes),
      faqs: withKeys(detail.faqs),
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${dest.name} (${dest.slug})`);
  }

  console.log(`\n✅ Done. Country overrides imported.\n`);
}

run().catch((e) => {
  console.error("\n❌ Migration failed:", e.message);
  process.exit(1);
});
