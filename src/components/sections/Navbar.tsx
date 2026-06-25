"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  List,
  X,
  CaretDown,
  CaretRight,
  MapPin,
  GraduationCap,
  FirstAidKit,
  Exam,
  Translate,
} from "@phosphor-icons/react";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { destinations } from "@/lib/data";

/* ---- data ---- */

const countries = destinations; // single source of truth (9 destinations incl Europe + China)

type Col1 = { label: string; Icon: typeof MapPin; hasFlyout: boolean; href: string };

const studyAbroadCols: Col1[] = [
  { label: "Destinations", Icon: MapPin, hasFlyout: true, href: "#destinations" },
  { label: "Universities", Icon: GraduationCap, hasFlyout: true, href: "#universities" },
  { label: "MBBS Abroad", Icon: FirstAidKit, hasFlyout: false, href: "/mbbs-abroad" },
];

const testPrep = [
  { label: "IELTS / Duolingo", Icon: Exam, href: "/test-prep/ielts" },
  { label: "PTE Academic", Icon: Exam, href: "/test-prep/pte" },
  { label: "German Language", Icon: Translate, href: "/test-prep/german" },
  { label: "French", Icon: Translate, href: "/test-prep/french" },
  { label: "Italian", Icon: Translate, href: "/test-prep/italian" },
  { label: "Japanese", Icon: Translate, href: "/test-prep/japanese" },
  { label: "Chinese (Mandarin)", Icon: Translate, href: "/test-prep/chinese" },
  { label: "Korean", Icon: Translate, href: "/test-prep/korean" },
];

const simpleLinks = [
  { label: "About Us", href: "/about" },
  { label: "MBBS Abroad", href: "/mbbs-abroad" },
  { label: "Blog", href: "/#blogs" },
  { label: "Contact Us", href: "/contact" },
];

/* ---- cascading Study Abroad mega menu ---- */

function NavFlag({ code, className }: { code: string; className?: string }) {
  if (code === "eu") {
    return (
      <span
        className={`grid place-items-center rounded-sm bg-[#003399] text-[8px] font-bold text-[#FFCC00] ring-1 ring-pine-900/10 ${className ?? ""}`}
        aria-hidden
      >
        ★
      </span>
    );
  }
  return (
    <Image
      src={`https://flagcdn.com/h24/${code}.png`}
      alt=""
      width={26}
      height={18}
      className={`rounded-sm object-cover ring-1 ring-pine-900/10 ${className ?? ""}`}
    />
  );
}

function StudyAbroadMenu() {
  const [col1, setCol1] = useState<string>("Destinations");
  const [country, setCountry] = useState<string>(countries[0].name);
  const activeCountry = countries.find((c) => c.name === country);

  return (
    <div className="absolute left-0 top-full pt-3">
      <div className="flex overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-[0_30px_70px_-30px_rgba(21,35,63,0.4)]">
        {/* column 1 */}
        <div className="w-[230px] shrink-0 border-r border-emerald-100/70 p-2">
          {studyAbroadCols.map(({ label, Icon, hasFlyout, href }) => (
            <Link
              key={label}
              href={href}
              onMouseEnter={() => setCol1(label)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors ${
                col1 === label ? "bg-emerald-50" : "hover:bg-emerald-50/60"
              }`}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                <Icon size={18} weight="fill" />
              </span>
              <span className="flex-1 text-sm font-semibold text-pine-800">{label}</span>
              {hasFlyout && <CaretRight size={14} weight="bold" className="text-pine-700/30" />}
            </Link>
          ))}
        </div>

        {/* column 2: countries (for the flyout columns) */}
        {col1 !== "MBBS Abroad" && (
          <div className="grid w-[260px] shrink-0 gap-0.5 border-r border-emerald-100/70 p-2">
            {countries.map((c) => (
              <Link
                key={c.code}
                href="#destinations"
                onMouseEnter={() => setCountry(c.name)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  country === c.name ? "bg-emerald-50" : "hover:bg-emerald-50/60"
                }`}
              >
                <NavFlag code={c.code} className="h-[18px] w-[26px]" />
                <span className="flex-1 text-sm font-medium text-pine-800">
                  Study in {c.name}
                </span>
                {col1 === "Destinations" && (
                  <CaretRight size={13} weight="bold" className="text-pine-700/25" />
                )}
              </Link>
            ))}
          </div>
        )}

        {/* column 3: intakes (Destinations only) */}
        {col1 === "Destinations" && activeCountry && (
          <div className="w-[250px] shrink-0 p-3">
            <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wide text-pine-700/50">
              {activeCountry.name} intakes
            </p>
            {activeCountry.intakes.map((intake) => (
              <Link
                key={intake}
                href="#counselling"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-pine-800 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
              >
                {intake}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---- simple (Test Prep) dropdown ---- */

function TestPrepMenu() {
  return (
    <div className="absolute left-0 top-full w-[280px] pt-3">
      <div className="overflow-hidden rounded-2xl border border-emerald-100 bg-white p-2 shadow-[0_30px_70px_-30px_rgba(21,35,63,0.4)]">
        {testPrep.map(({ label, Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-emerald-50"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
              <Icon size={18} weight="fill" />
            </span>
            <span className="text-sm font-semibold text-pine-800">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---- navbar ---- */

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<null | "study" | "test">(null);
  const [mobileSub, setMobileSub] = useState<null | "study" | "test">(null);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100/70 bg-bone/85 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Karl Konsult International home">
          <Image src="/logo.png" alt="Karl Konsult International" width={168} height={72} priority className="h-14 w-auto" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="rounded-full px-4 py-2 text-[15px] font-semibold text-emerald-700">
            Home
          </Link>

          <div className="relative" onMouseEnter={() => setMenu("study")} onMouseLeave={() => setMenu(null)}>
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-pine-700 transition-colors hover:text-emerald-600">
              Study Abroad
              <CaretDown size={14} weight="bold" className={`transition-transform ${menu === "study" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {menu === "study" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.16 }}>
                  <StudyAbroadMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setMenu("test")} onMouseLeave={() => setMenu(null)}>
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium text-pine-700 transition-colors hover:text-emerald-600">
              Test Prep
              <CaretDown size={14} weight="bold" className={`transition-transform ${menu === "test" ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {menu === "test" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.16 }}>
                  <TestPrepMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {simpleLinks.map((l) => (
            <Link key={l.label} href={l.href} className="rounded-full px-4 py-2 text-[15px] font-medium text-pine-700 transition-colors hover:text-emerald-600">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <EnquiryButton size="md">Get in Touch</EnquiryButton>
        </div>

        <button className="grid h-10 w-10 place-items-center rounded-full text-pine-800 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-emerald-100 bg-bone lg:hidden">
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-4 py-4">
              <Link href="/" className="rounded-xl px-3 py-3 font-semibold text-emerald-700" onClick={() => setOpen(false)}>Home</Link>

              <button className="flex items-center justify-between rounded-xl px-3 py-3 font-medium text-pine-700" onClick={() => setMobileSub((s) => (s === "study" ? null : "study"))}>
                Study Abroad
                <CaretDown size={16} weight="bold" className={`transition-transform ${mobileSub === "study" ? "rotate-180" : ""}`} />
              </button>
              {mobileSub === "study" && (
                <div className="ml-3 flex flex-col gap-0.5">
                  {countries.map((c) => (
                    <Link key={c.code} href="#destinations" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-pine-700" onClick={() => setOpen(false)}>
                      <NavFlag code={c.code} className="h-[15px] w-[22px]" />
                      Study in {c.name}
                    </Link>
                  ))}
                </div>
              )}

              <button className="flex items-center justify-between rounded-xl px-3 py-3 font-medium text-pine-700" onClick={() => setMobileSub((s) => (s === "test" ? null : "test"))}>
                Test Prep
                <CaretDown size={16} weight="bold" className={`transition-transform ${mobileSub === "test" ? "rotate-180" : ""}`} />
              </button>
              {mobileSub === "test" && (
                <div className="ml-3 flex flex-col gap-0.5">
                  {testPrep.map(({ label, Icon, href }) => (
                    <Link key={label} href={href} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-pine-700" onClick={() => setOpen(false)}>
                      <Icon size={16} weight="fill" className="text-emerald-600" />
                      {label}
                    </Link>
                  ))}
                </div>
              )}

              {simpleLinks.map((l) => (
                <Link key={l.label} href={l.href} className="rounded-xl px-3 py-3 font-medium text-pine-700" onClick={() => setOpen(false)}>{l.label}</Link>
              ))}

              <EnquiryButton size="lg" className="mt-2 w-full" onClick={() => setOpen(false)}>Get in Touch</EnquiryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
