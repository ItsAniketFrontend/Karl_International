/**
 * Single source of truth for destinations, language courses, MBBS countries and
 * intakes. Edit here and every section/menu updates.
 *
 * IMAGES: each item carries an `img` Unsplash URL so the site looks real today.
 * To swap to your own licensed/partner photos later, drop a file in /public and
 * change `img` to e.g. "/country-australia.jpg". See REPLACE-BEFORE-LAUNCH.md.
 *
 * INTAKES: verified against typical institutional calendars (Jun 2026). Always
 * confirm against the specific university/course before quoting to a student.
 */

export type Destination = {
  name: string;
  code: string; // flagcdn ISO code; "eu" handled specially
  slug: string;
  img: string;
  fact: string;
  intakes: string[];
  popular?: boolean;
};

// Unsplash source helper — stable, optimized, no API key. Swap for /public files later.
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=70`;

export const destinations: Destination[] = [
  {
    name: "Australia",
    code: "au",
    slug: "australia",
    img: u("1506973035872-a4ec16b8e8d9"), // Sydney Opera House
    fact: "Post-study work visa up to 4 years",
    intakes: ["February 2027", "July 2026", "November 2026"],
    popular: true,
  },
  {
    name: "United Kingdom",
    code: "gb",
    slug: "uk",
    img: u("1513635269975-59663e0ac1ad"), // London
    fact: "2-year Graduate Route to stay & work",
    // UK actually runs three major intakes
    intakes: ["September 2026", "January 2027", "May 2027"],
    popular: true,
  },
  {
    name: "New Zealand",
    code: "nz",
    slug: "new-zealand",
    img: u("1469854523086-cc02fe5d8800"),
    fact: "Open work visa after you graduate",
    intakes: ["February 2027", "July 2026"],
  },
  {
    name: "USA",
    code: "us",
    slug: "usa",
    img: u("1485738422979-f5c462d49f74"), // NYC
    fact: "World top-ranked universities & OPT",
    intakes: ["Fall 2026", "Spring 2027"],
    popular: true,
  },
  {
    name: "Germany",
    code: "de",
    slug: "germany",
    img: u("1467269204594-9661b134dd2b"), // Berlin
    fact: "Low / no tuition at public universities",
    intakes: ["Winter 2026 (Oct)", "Summer 2027 (Apr)"],
    popular: true,
  },
  {
    name: "France",
    code: "fr",
    slug: "france",
    img: u("1502602898657-3e91760cbb34"), // Paris
    fact: "Affordable fees, many English programmes",
    intakes: ["September 2026", "January 2027"],
  },
  {
    name: "Italy",
    code: "it",
    slug: "italy",
    img: u("1516483638261-f4dbaf036963"), // Tuscany / Italy
    fact: "Low tuition & generous regional scholarships",
    intakes: ["September 2026", "February 2027"],
  },
  {
    name: "Europe",
    code: "eu",
    slug: "europe",
    img: u("1491557345352-5929e343eb89"), // European cityscape
    fact: "Schengen access across 25+ study hubs",
    intakes: ["September 2026", "February 2027"],
  },
  {
    name: "China",
    code: "cn",
    slug: "china",
    img: u("1474181487882-5abf3f0ba6c2"), // Shanghai
    fact: "Scholarship-rich, fast-growing study hub",
    intakes: ["September 2026", "March 2027"],
  },
];

export type LanguageCourse = {
  name: string;
  blurb: string;
  meta: string;
  href?: string;
};

export const languageCourses: LanguageCourse[] = [
  {
    name: "IELTS / PTE / Duolingo",
    blurb:
      "Band-targeted English coaching with weekly mocks for university and visa requirements.",
    meta: "Most popular",
    href: "/test-prep/ielts",
  },
  {
    name: "German Language",
    blurb:
      "Goethe-aligned A1–C1 classes for German universities, blocked accounts and work visas.",
    meta: "A1 – C1",
    href: "/test-prep/german",
  },
  {
    name: "French",
    blurb:
      "DELF/TEF-ready French for study and PR pathways in France and Canada.",
    meta: "A1 – B2",
  },
  {
    name: "Italian",
    blurb: "Beginner to intermediate Italian for study and life in Italy.",
    meta: "A1 – B1",
  },
  {
    name: "Japanese",
    blurb: "JLPT-focused Japanese for study, scholarships and work in Japan.",
    meta: "N5 – N3",
  },
  {
    name: "Chinese (Mandarin)",
    blurb: "HSK-aligned Mandarin for China scholarships and exchange programmes.",
    meta: "HSK 1 – 4",
  },
  {
    name: "Korean",
    blurb: "TOPIK-ready Korean for Korea's growing roster of global degrees.",
    meta: "TOPIK 1 – 3",
  },
];

export type MbbsCountry = {
  name: string;
  code: string;
  blurb: string;
  highlight: string;
};

export const mbbsCountries: MbbsCountry[] = [
  {
    name: "China",
    code: "cn",
    blurb: "English-medium MBBS at NMC-screened, WHO-listed universities.",
    highlight: "5.5-year programme",
  },
  {
    name: "Russia",
    code: "ru",
    blurb: "State medical universities with long-standing Indian-student communities.",
    highlight: "Globally recognised",
  },
  {
    name: "Kazakhstan",
    code: "kz",
    blurb: "Affordable tuition and a low cost of living for medical aspirants.",
    highlight: "Budget-friendly",
  },
  {
    name: "Uzbekistan",
    code: "uz",
    blurb: "Newer, fast-growing destination with modern teaching hospitals.",
    highlight: "Emerging choice",
  },
];

// Helpers
export const popularDestinations = destinations.filter((d) => d.popular);
export const destinationByName = (name: string) =>
  destinations.find((d) => d.name === name);
