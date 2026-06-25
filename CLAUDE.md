# CLAUDE.md

Guidance for AI agents working in this repo. Read before making changes.

## What this is

Marketing site for **Karl Konsult International** (overseas-education consultancy).
Next.js 15 (App Router) + Tailwind v4 + Motion + Phosphor icons + TypeScript.
Deploys to Vercel from `main`. **Keep Next.js patched** — Vercel rejects vulnerable
versions (15.1.6 was blocked; 15.5.19 passed).

## Design system — IMPORTANT gotcha

The theme is a **playful 3D-clay "study abroad" look**: vibrant sky-blue primary,
sunny-yellow + coral accents, deep-navy ink, soft sky-white background. Font is
**Outfit** everywhere (loaded via `next/font` in `layout.tsx`).

**Tailwind color tokens are misleadingly named.** In `src/app/globals.css` `@theme`,
the scale named `emerald` actually holds **sky-blue** values (`emerald-600 = #1576d6`).
Likewise:

- `gold` = sunny yellow
- `coral` = coral pop
- `pine` = deep navy ink (`pine-900 = #15233f`)
- `bone` / `bone-deep` = soft sky-white backgrounds

So `bg-emerald-600` renders **blue**, not green. This is intentional (the theme was
re-skinned several times without renaming classes). **To recolor, edit the hex values
in `@theme`** — do not rename classes across the codebase. Hardcoded shadow tints use
`rgba(21,35,63,...)` (navy).

Per-page accents: IELTS = blue (default), PTE = coral, German = gold, via `!important`
overrides on the shared `EnquiryButton`.

## Reusable components (`src/components/ui/`)

- **EnquiryForm** — the single lead form. Demo submit only; wire to a real endpoint.
- **enquiry-store.ts** — global store so any CTA opens the popup. `enquiry.open()`.
- **StickyActions** — Call/WhatsApp/Enquiry floating buttons + the popup modal.
  Mounted once per `page.tsx` (not in layout).
- **EnquiryButton / EnquiryTrigger** — CTAs that open the popup.
- **Button** — exports `buttonClass()` helper shared with EnquiryButton.
- **Reveal** — scroll-reveal wrapper (`direction` = up|left|right|scale).
- **Faq** — animated accordion (`items`, `accent`).
- **Decor** — Cloud / Blob / Sparkles. CSS utils: `.blob`, `.dot-grid`, `.animate-floaty`.

## Conventions

- **Always `npm run build` to verify** before declaring done. The dev server state is
  flaky; the build is reliable.
- After adding **nested routes**, a stale `.next` can throw a bogus `/_not-found`
  `PageNotFoundError`. Fix: `rm -rf .next && npm run build`.
- Section layouts should not repeat — vary the layout family (split / bento / stepper /
  magazine / timeline) so sections feel distinct.
- Mobile: `<body>` has `overflow-x: hidden`; section padding is responsive
  (`py-14 sm:py-16 lg:py-24`); test at ~390px.
- `.next/` and `node_modules/` are gitignored. Commit/push only when asked.

## Placeholders to replace before launch

- Form endpoint (EnquiryForm), phone/WhatsApp/address (StickyActions + footer/contact),
  team photos (`public/team-1..4.png`), blog thumbnails.
