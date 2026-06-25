# Karl Konsult International

Marketing website for **Karl Konsult International**, an overseas-education consultancy
(study abroad, test prep, visas). Built with Next.js, Tailwind CSS v4 and Motion.

## Tech stack

- **Next.js 15** (App Router, React Server Components)
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Motion** (`motion/react`) for animation
- **@phosphor-icons/react** for icons
- **Outfit** font via `next/font`
- TypeScript

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

> If `localhost:3000` does not load in the browser but the terminal shows the
> server running, it is almost always browser cache. Hard-refresh
> (`Ctrl+Shift+R`), use a private window, or try `http://127.0.0.1:3000`.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/contact` | Contact Us |
| `/test-prep/ielts` | IELTS coaching |
| `/test-prep/pte` | PTE Academic coaching |
| `/test-prep/german` | German language classes |

## Project structure

```
src/
  app/                 # routes (App Router)
    layout.tsx         # root layout, Outfit font
    globals.css        # Tailwind + design tokens (@theme)
    page.tsx           # home
    about/ contact/    # inner pages
    test-prep/{ielts,pte,german}/
  components/
    sections/          # page sections (Navbar, Hero, Footer, ...)
    ui/                # reusable bits (Button, EnquiryForm, Faq, ...)
public/                # images (logo + 3D clay illustrations)
```

See [CLAUDE.md](./CLAUDE.md) for design-system notes and conventions.

## Deployment

Auto-deploys to **Vercel** from the `main` branch. Vercel blocks vulnerable
Next.js versions, so keep Next.js patched.

## Before launch — TODO

- Wire the enquiry form (`src/components/ui/EnquiryForm.tsx`) to a real CRM/endpoint.
- Replace placeholder phone/WhatsApp/address in `src/components/ui/StickyActions.tsx`
  and the footer/contact page with real details.
- Add real team photos (`public/team-1.png` … `team-4.png`) and blog thumbnails.
