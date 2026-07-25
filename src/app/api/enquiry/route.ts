import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/serverClient";

export const runtime = "nodejs";

// Fields we accept from the form. Anything else is ignored.
const FIELDS = [
  "name",
  "email",
  "phone",
  "city",
  "age",
  "qualification",
  "degree",
  "destination",
  "intake",
  "score",
  "message",
  "source",
] as const;

function clean(v: unknown, max = 500): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Real users leave it empty.
  if (clean(body.company)) {
    // Pretend success so bots don't learn anything.
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Please add your name, email and phone number." },
      { status: 422 },
    );
  }

  const doc: { _type: "lead"; [key: string]: string } = { _type: "lead" };
  for (const f of FIELDS) {
    const val = clean(body[f], f === "message" ? 2000 : 300);
    if (val) doc[f] = val;
  }
  doc.submittedAt = new Date().toISOString();

  // If no write token is configured yet, don't hard-fail the user's submission —
  // log it so the form still "works" during setup, and surface it in server logs.
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.warn(
      "[enquiry] SANITY_API_WRITE_TOKEN is not set — lead was NOT saved. Payload:",
      { name, email, phone, destination: doc.destination },
    );
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    await writeClient.create(doc);
    return NextResponse.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[enquiry] Failed to store lead:", err);
    // Still return ok so the user isn't blocked; the error is in server logs.
    return NextResponse.json({ ok: true, stored: false });
  }
}
