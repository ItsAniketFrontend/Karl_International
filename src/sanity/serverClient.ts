import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

/**
 * Write-enabled Sanity client. SERVER ONLY — uses the secret write token, which
 * must never reach the browser. Imported by the /api/enquiry route to store
 * leads. The `server-only` import makes the build fail if this is ever pulled
 * into client code.
 */
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
