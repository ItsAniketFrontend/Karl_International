import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";

/**
 * Write-capable Sanity client for the custom /admin panel only. Uses the
 * Editor-role SANITY_API_WRITE_TOKEN (server-side only — never import this
 * from a client component). Separate from src/sanity/client.ts, which stays
 * read-only/cached for the public site.
 */
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  throw new Error("Missing environment variable: SANITY_API_WRITE_TOKEN");
}

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

export function newKey(): string {
  return Math.random().toString(36).slice(2, 10);
}
