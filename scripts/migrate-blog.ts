/**
 * One-time migration: import the 6 hardcoded blog posts from src/lib/blog.ts
 * into Sanity as blogPost documents (with Portable Text bodies).
 *
 * PREREQUISITES:
 *   1. A Sanity write token in .env.local as SANITY_API_WRITE_TOKEN
 *      (create at sanity.io/manage -> API -> Tokens -> Editor role).
 *   2. Run:  npm run migrate:blog   (uses tsx)
 *
 * Safe to re-run: uses createOrReplace keyed by a stable _id per slug, so it
 * updates rather than duplicating.
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
      "   paste it into .env.local, then re-run: npm run migrate:blog\n",
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
import { blogPosts } from "../src/lib/blog";

function toBlock(text: string) {
  return {
    _type: "block",
    _key: Math.random().toString(36).slice(2, 10),
    style: "normal",
    markDefs: [],
    children: [
      { _type: "span", _key: Math.random().toString(36).slice(2, 10), text, marks: [] },
    ],
  };
}

function slugToId(slug: string) {
  return `blogPost-${slug}`;
}

async function run() {
  console.log(`\nMigrating ${blogPosts.length} posts to Sanity (${projectId}/${dataset})...\n`);
  for (const p of blogPosts) {
    const doc = {
      _id: slugToId(p.slug),
      _type: "blogPost",
      title: p.title,
      slug: { _type: "slug", current: p.slug },
      category: p.category,
      excerpt: p.excerpt,
      readTime: p.read,
      publishedAt: new Date(p.date).toISOString?.() || new Date().toISOString(),
      body: p.body.map(toBlock),
    };
    await client.createOrReplace(doc);
    console.log(`  ✓ ${p.title}`);
  }
  console.log(
    `\n✅ Done. ${blogPosts.length} posts imported.\n` +
      `   Note: cover images were NOT migrated (the originals are Unsplash URLs).\n` +
      `   Upload a cover image per post in the Studio at /studio, or they'll use a default.\n`,
  );
}

run().catch((e) => {
  console.error("\n❌ Migration failed:", e.message);
  process.exit(1);
});
