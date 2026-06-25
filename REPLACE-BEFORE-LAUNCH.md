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
- **Stats** used across the site (5,000+ students, 98% visa success, 16 yrs, 250+
  universities, 4.9/5) — confirm these are accurate and defensible.
- **Blog posts** (`src/components/sections/Insights.tsx`) — replace placeholder articles;
  wire "View all guides" + cards to real blog URLs. Currently the section id is `#blogs`.

## 3. Contact details (placeholders)

- Phone / WhatsApp: `+91 97723 00000` / `919772300000`
  → `src/components/ui/StickyActions.tsx`, `Footer.tsx`, `contact/page.tsx`.
- Email: `hello@karlkonsult.com` (Footer + Contact).
- Address: *3rd Floor, Crystal Mall, C-Scheme, Jaipur 302001* (Footer + Contact + map iframe).
- Social profile URLs are all `#` → `src/components/sections/SocialLinks.tsx` and `Footer.tsx`.

## 4. Functional wiring

- **Enquiry form** (`src/components/ui/EnquiryForm.tsx`) is a demo (setTimeout). Wire
  `handleSubmit` to your real CRM / email endpoint. New fields now captured: `city`,
  `intake`, `score` (in addition to name, email, phone, age, qualification, degree,
  destination, message).
- **Footer legal links** (Privacy Policy, Terms & Conditions, Refund Policy, Legal) point
  to `#`. Create the actual pages/policies and link them.
- **Logo**: `public/logo-white.png` is an auto-generated white knockout of `logo.png`
  for the dark footer. If you update the logo, regenerate the white version.

## 5. SEO

- `metadataBase` in `src/app/layout.tsx` is set to `https://karlkonsult.com` — change to
  the real production domain. Keyword-rich titles/descriptions are in place across
  layout, About and Contact. Add a real OG image and `sitemap.xml`/`robots.txt` before launch.
