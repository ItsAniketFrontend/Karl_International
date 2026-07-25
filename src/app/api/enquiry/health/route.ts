import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * TEMPORARY diagnostic. Reports whether the server can see the env vars the
 * enquiry route needs — WITHOUT ever revealing the token value. Safe to expose
 * briefly; delete this file once leads are confirmed working.
 */
export async function GET() {
  const token = process.env.SANITY_API_WRITE_TOKEN || "";
  return NextResponse.json({
    hasWriteToken: token.length > 0,
    tokenLength: token.length,
    tokenPrefix: token ? token.slice(0, 3) : null,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || null,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || null,
  });
}
