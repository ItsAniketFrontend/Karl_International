# Replace before launch

This site currently ships with **realistic placeholder data and stock (Unsplash)
photos** so the client preview looks complete. Replace the items below with real,
verified, licensed content before going live.

## 1. Images — swap stock for your own (licensed) photos

All photos use live Unsplash URLs. To swap, drop a file in `/public` and change the
`img`/`src` value to e.g. `/country-australia.jpg`.

| Where | File / location | What to replace |
| --- | --- | --- |
| Country photos (9) | `src/lib/data.ts` → `destinations[].img` | Real destination/landmark photos |
| Hero student photo | `src/components/sections/Hero.tsx` | A real student / brand photo |
| Who-we-are photo | `src/components/sections/WhyUs.tsx` | Real counselling-team photo |
| University campus gallery (3) | `src/components/sections/Universities.tsx` → `gallery` | Real partner-campus photos |
| Study-abroad testimonials portraits | `src/components/sections/Testimonials.tsx` → `studyReviews[].img` | Real student photos (with consent) |
| Language testimonials portraits | `src/components/sections/Testimonials.tsx` → `languageReviews[].img` | Real student photos (with consent) |
| About hero + team (4) | `src/app/about/page.tsx` → hero `src`, `team[].img` | Real office + team photos |
| Test-prep hero photos (IELTS/PTE/German) | `src/app/test-prep/{ielts,pte,german}/page.tsx` | Real coaching/classroom photos |
| Language-page hero photos (5) | `src/lib/language-pages.ts` → `heroImg` | Real classroom/destination photos |
| MBBS hero photo | `src/app/mbbs-abroad/page.tsx` | Real medical-student / campus photo |

Note: the old clay illustrations `public/{hero,who_we_are,universities,ielts-hero,pte-hero,german-hero,dest-*}.png` are now unused on live pages and can be deleted once you're happy with the real photos.

`public/student-1.png` is a real existing image and is still used.

## 2. Content to verify with your team (do not assume)

- **Intakes** (`src/lib/data.ts` → `destinations[].intakes`) — confirm each country's
  current intake months per the universities/courses you actually work with. UK is set
  to three intakes (Sep / Jan / May) per the feedback.
- **Testimonials** (`src/components/sections/Testimonials.tsx`) — replace all sample
  quotes/names/universities with **real, consented** student stories.
- **Partner universities** (`src/components/sections/Universities.tsx` → `partners`) —
  list your genuine partner institutions.
- **MBBS Abroad** (`src/lib/data.ts` → `mbbsCountries`) — verify NMC/WHO recognition,
  programme `duration`, `medium` and especially the **`feeRange`** (indicative ₹ figures
  are placeholders) for each country. Add the actual universities you place students at.
  These fields drive both the homepage MBBS section AND the `/mbbs-abroad` page. The page
  also states NEET/eligibility rules and FMGE/NExT — confirm wording with your team.
- **Stats** used across the site (5,000+ students placed, 98% visa success, 250+ partner
  universities, 9 study destinations, 40+ team members) — confirm each is accurate and
  defensible. Note: per client feedback, all "since 2009" / "16 years" claims and all
  star-rating / review-count claims have been removed sitewide — do not reintroduce them
  without real, verifiable data.
- **Blog posts** (`src/lib/blog.ts` → `blogPosts`) — the 6 sample articles are realistic
  placeholders. Replace with the client's real posts (or wire to a CMS). They drive both
  the homepage Insights teaser AND the `/blog` + `/blog/[slug]` pages.
- **Country pages** (`src/lib/data.ts` → `countryDetails`) — the per-country `/study-abroad/[slug]`
  pages use indicative **tuition, living costs, work rights, intakes, popular courses and
  top universities**. These are realistic but must be VERIFIED against current official
  sources before quoting to students. All figures are marked indicative on the pages.

### ⚠️ 2a. Deep country + intake content — FACT-CHECK REQUIRED (highest priority)

`src/lib/content/*.ts` (one file per country) holds the long-form content for the deep
country pages **and** every `/study-abroad/[country]/[intake]` landing page. This content
was written to the client-approved structure and reads as authoritative — but **none of
the specifics are verified**. Before launch, someone on the team must check, per country:

| Claim type | Where | Risk if wrong |
| --- | --- | --- |
| **Intake months & seasons** | `intakes[].months`, `.season`, `.status` | Students plan around these |
| **Application deadlines** | `intakes[].deadlines`, `.timeline` | Missed applications |
| **University lists** | `universities[]`, `intakes[].universities[]` | Naming a uni that doesn't offer that intake |
| **Tuition & living costs** | `tuitionCosts`, `livingCosts` | Budget/trust damage (shown as indicative, but still) |
| **Eligibility rules** | `eligibility[]`, `englishTests` | Wrong advice on entry requirements |
| **Documents required** | `documents[]` | Incomplete visa/application files |
| **Scholarship schemes** | `scholarships`, `namedScholarships[]` | Schemes change/close yearly |
| **Visa & work rights** | `visa`, `countryDetails[].workRights` | Legally sensitive — verify against official immigration sources |

Country-specific items that especially need checking: **Germany** (blocked account amount,
APS certificate), **China** (NEET requirement, NMC/WHO screening, JW202), **UK** (Graduate
Route, three intakes), **Australia** (485 visa, fortnightly work hours), **USA** (OPT/STEM
OPT duration), **Europe** (rules differ per country — the page treats it as a region).

**Recommendation:** assign one counsellor per country to sign off their file before launch.
- **Scholarships** (`src/app/scholarships/page.tsx`) — scheme names (Chevening/DAAD/CSC/DSU)
  are real but details change yearly; confirm before promoting specifics.
- **Universities** (`src/app/universities/page.tsx`) — the page groups universities by
  country, pulled from `src/lib/content/*.ts` → `universities[]`. These are representative
  institutions, not confirmed partners. Replace with your genuine partner list (and the
  "250+ partner universities" stat) before launch.
- **Legal pages** (`/privacy`, `/terms`, `/refund`, `/disclaimer` in `src/app/`) —
  ⚠️ **TEMPLATE TEXT ONLY. Have a lawyer review and adapt before launch.** Do not treat as
  final legal copy.

## 3. Contact details (placeholders)

- Phone / WhatsApp: `+91 97723 00000` / `919772300000`
  → `src/components/ui/StickyActions.tsx`, `Footer.tsx`, `contact/page.tsx`.
- Email: `hello@karlkonsult.com` (Footer + Contact).
- Address: *3rd Floor, Crystal Mall, C-Scheme, Jaipur 302001* (Footer + Contact + map iframe).
- Social profile URLs are all `#` → `src/components/sections/SocialLinks.tsx` and `Footer.tsx`.

## 4. Functional wiring

- **Enquiry form** — ✅ NOW LIVE. Submits to `/api/enquiry`, which stores each lead in
  Sanity (viewable in `/studio` → Enquiry Leads). **To actually capture leads you must set
  the `SANITY_API_WRITE_TOKEN` env var** (local + Vercel) — see CMS-SETUP.md. Without it,
  the form still works for users but leads are only logged, not saved. Captured fields:
  name, email, phone, city, age, qualification, degree, destination, intake, IELTS/PTE
  score, message + source page + timestamp. (Optional future add-on: email alert per lead.)
- **Footer legal links** (Privacy Policy, Terms & Conditions, Refund Policy, Legal) point
  to `#`. Create the actual pages/policies and link them.
- **Logo**: `public/logo-white.png` is an auto-generated white knockout of `logo.png`
  for the dark footer. If you update the logo, regenerate the white version.

## 5. SEO

- `metadataBase` in `src/app/layout.tsx` is set to `https://karlkonsult.com` — change to
  the real production domain. Keyword-rich titles/descriptions are in place across
  layout, About and Contact. Add a real OG image and `sitemap.xml`/`robots.txt` before launch.
