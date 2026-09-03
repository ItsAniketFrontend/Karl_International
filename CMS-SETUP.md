# CMS setup — Karl Konsult (Sanity)

The site uses **Sanity** as its CMS. Non-technical staff log in at **`/studio`** to
manage content; the public site reads it live. This is **Phase 1: Blog + News**.

The site is built so that **if the CMS is empty or unreachable, the blog falls back
to the built-in sample posts** — so nothing ever breaks during setup.

---

## What's editable now

| Content | Where staff edit it | Where it shows |
| --- | --- | --- |
| **Blog posts** | `/studio` → Blog Posts | `/blog`, `/blog/[slug]`, homepage "Blogs & guides" |
| **News / announcements** | `/studio` → News & Updates | `/news`, navbar → News |
| **Enquiry leads** | `/studio` → Enquiry Leads (view only) | — (staff view submissions) |
| **Country pages** | `/studio` → Country Pages | `/study-abroad/[country]` |
| **Intake pages** | `/studio` → Intake Pages | `/study-abroad/[country]/[intake]` |
| **Site-wide contact info & socials** | `/studio` → Site Settings | Sticky Call/WhatsApp buttons, footer, `/contact`, homepage social links |

---

## Country pages (Phase 3)

Staff can override the **high-churn** parts of each country page from the CMS
without touching code. In `/studio` → **Country Pages** → **＋ Create**, pick a
country, and fill only the fields you want to change:

- Intro paragraph, indicative tuition & living cost, work-rights summary
- Top universities, popular courses, scholarships
- Intake summaries (name / months / status / summary)
- FAQs

**Every field is optional.** Anything left blank falls back to the built-in
content, so you can override just one figure (say, updated UK tuition) and leave
the rest alone. A country with no override document shows the default content.

The **deep nested structures** (application timelines, comparison tables, the
full course grids) stay in code on this page by design — this covers the
text/list content that actually changes year to year. The per-intake landing
pages themselves are fully editable — see the next section.

Changes appear on the live page within ~60 seconds (ISR).

---

## Intake pages (Phase 4)

Staff can now edit the **entire** per-intake landing page — the deep pages at
`/study-abroad/[country]/[intake]` (e.g. "September Intake" for the UK) — from
the CMS. In `/studio` → **Intake Pages** → **＋ Create**, pick a country and
enter the intake's slug (must match the URL, e.g.
`september-intake-2027`), then fill in any of:

- Name, season, months, status, summary (the intake-card fields)
- Intro paragraphs and the "what is this intake?" paragraphs
- Why choose this intake
- Application timeline
- Deadlines
- Course categories
- Universities
- Eligibility (undergraduate / postgraduate blocks)
- English tests, documents
- How-to-apply steps
- Scholarships
- Comparison table (vs the country's main intake) and its label
- Verdict paragraphs
- FAQs

**Every field is optional.** Anything left blank falls back to the built-in
content in `src/lib/content/*.ts`, so a partly-filled document — or none at
all — never breaks the page. Use **Import existing intake pages** below to
pre-populate every intake from the current code content so staff start from
real, editable text instead of a blank form.

Changes appear on the live page within ~60 seconds (ISR).

---

## Site settings (Phase 5)

Phone number, WhatsApp number, email, office address, office hours and social
media links are editable from `/studio` → **Site Settings** — a single
document (there's only ever one). It drives:

- The sticky Call / WhatsApp buttons shown on every page
- The footer's address, phone, email and social icons
- The `/contact` page's call/WhatsApp/email cards and office info
- The homepage social links section

**Every field is optional.** Anything left blank falls back to the current
defaults (the values the site shipped with), so filling in just the phone
number, for example, leaves everything else untouched. Phone/WhatsApp have two
fields each: a **display** version (e.g. "+91 97723 00000") and a **dial**
version used in `tel:`/`wa.me` links (e.g. "+919772300000" / "919772300000" —
digits and `+` only, no spaces).

Changes appear on the live site within ~60 seconds (ISR).

---

## Enquiry leads (Phase 2)

The website enquiry form now submits to **`/api/enquiry`**, which saves each
submission as a **Lead** in Sanity. Staff view them in the Studio under
**Enquiry Leads** (newest first, read-only — you view, you don't edit).

### ⚠️ Required: add a write token (or leads are NOT saved)
The form works either way, but **without a write token, submissions are logged
to the server but not stored**. To actually capture leads:

1. Create a token: sanity.io/manage → project **ik7gcwnu** → **API → Tokens →
   Add API token** → name it "Website writes", role **Editor**. Copy it.
2. **Local:** put it in `.env.local` as `SANITY_API_WRITE_TOKEN=...`
3. **Vercel:** add the same as an environment variable
   `SANITY_API_WRITE_TOKEN` (Production + Preview), then **redeploy**.

Keep this token **secret** — it's server-side only and gitignored. It is NOT one
of the `NEXT_PUBLIC_*` vars; the browser never sees it.

### Test it
Submit the enquiry form on the site (or the popup). Within a few seconds the
lead appears in `/studio` → **Enquiry Leads**. Includes name, email, phone, city,
age, qualification, degree, destination, intake, IELTS/PTE score, message, the
page it came from, and a timestamp.

### Spam protection
The form has a hidden honeypot field; bot submissions that fill it are silently
discarded. Required fields (name, email, phone) are validated server-side.

---

## One-time setup

### 1. Environment variables
Local dev already has `.env.local` with:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=ik7gcwnu
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
SANITY_API_WRITE_TOKEN=        # only for migration / future lead writes
```
**On Vercel:** add these same three `NEXT_PUBLIC_*` vars in
Project → Settings → Environment Variables (the write token is NOT needed for the
site to run — only for the one-time migration script). Redeploy after adding.

### 2. CORS (so the Studio can talk to Sanity)
At <https://www.sanity.io/manage> → project **ik7gcwnu** → **API → CORS origins**,
add (with credentials allowed):
- `http://localhost:3000` (local)
- your Vercel URL, e.g. `https://karlweb.vercel.app`
- your final custom domain once live

### 3. Log in to the Studio
Visit `/studio` (locally `http://localhost:3000/studio`). Sign in with the Google/GitHub
account that owns the Sanity project. Invite staff as project members at
sanity.io/manage → **Members** (give them Editor role — they do NOT need code access).

---

## Import the 6 existing blog posts (optional, one-time)

The site already shows the 6 sample posts via fallback. To make them **editable in the
CMS**, import them once:

1. Create an **Editor token**: sanity.io/manage → project → **API → Tokens → Add token**
   (Editor role). Copy it.
2. Paste it into `.env.local` as `SANITY_API_WRITE_TOKEN=...` (keep it secret; it's
   gitignored).
3. Run:
   ```
   npm run migrate:blog
   ```
   This creates 6 Blog Post documents. Cover images are **not** imported (the originals
   are stock URLs) — upload a cover per post in the Studio, or they use a default image.

Once posts exist in Sanity, the site reads those instead of the fallback automatically.

---

## Import existing intake pages (optional, one-time)

The site already shows the full intake landing pages via the built-in content
in `src/lib/content/*.ts`. To make them **editable in the CMS** (pre-filled
with the current live text instead of blank documents), import them once:

1. Create an **Editor token**: sanity.io/manage → project → **API → Tokens → Add token**
   (Editor role). Copy it.
2. Paste it into `.env.local` as `SANITY_API_WRITE_TOKEN=...` (keep it secret; it's
   gitignored).
3. Run:
   ```
   npm run migrate:intakes
   ```
   This creates one Intake Page document per intake across all 9 countries (UK,
   Australia, USA, Germany, France, Italy, New Zealand, Europe, China —
   2-3 intakes each). Safe to re-run; it updates existing documents rather than
   duplicating them.

Once the documents exist in Sanity, the site merges any edited fields on top of
the code content automatically — no redeploy needed.

---

## Day-to-day: how staff publish

1. Go to `yoursite.com/studio`
2. **Blog Post** or **News** → **＋ Create**
3. Fill in title, slug (click *Generate*), category, excerpt, cover image, body
4. Click **Publish**
5. The site updates within ~60 seconds (ISR). No developer or redeploy needed.

---

## How it works (for developers)

- `sanity.config.ts` + `src/app/studio/[[...tool]]/page.tsx` — the embedded Studio.
- `src/sanity/schemaTypes/*` — content schemas (`blogPost`, `newsItem`).
- `src/sanity/queries.ts` — GROQ queries + typed fetchers, **with fallback** to
  `src/lib/blog.ts`. All reads go through here.
- `src/components/ui/PortableBody.tsx` — renders CMS rich text (and fallback paragraphs).
- Pages use ISR (`export const revalidate = 60`) so new content appears without a rebuild.
- Blog `dynamicParams = true`, so posts created in the CMS after deploy still render.
