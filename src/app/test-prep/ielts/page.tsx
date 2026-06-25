import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Headphones,
  BookOpen,
  PencilLine,
  Microphone,
  Sparkle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Target,
  ChartLineUp,
  ClipboardText,
  Exam,
  Star,
  Lightning,
  Laptop,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";
import { BandPlanner } from "./BandPlanner";

export const metadata: Metadata = {
  title: "IELTS Coaching | Karl Konsult International",
  description:
    "Band-targeted IELTS coaching with small batches, weekly mock tests and per-module feedback for Academic and General Training.",
};

const facts = [
  { v: "2h 45m", l: "Total duration" },
  { v: "0 – 9", l: "Band scale" },
  { v: "5–7 days", l: "Results (computer)" },
  { v: "2 years", l: "Score validity" },
];

const modules = [
  { Icon: Headphones, title: "Listening", desc: "Accent training and note-taking drills across all four sections.", time: "30 min", color: "from-emerald-500 to-emerald-400" },
  { Icon: BookOpen, title: "Reading", desc: "Skimming, scanning and timing strategy for every question type.", time: "60 min", color: "from-gold-500 to-gold-400" },
  { Icon: PencilLine, title: "Writing", desc: "Task 1 and Task 2 frameworks with line-by-line examiner feedback.", time: "60 min", color: "from-coral-500 to-coral-400" },
  { Icon: Microphone, title: "Speaking", desc: "One-on-one mock interviews scored on the real examiner rubric.", time: "11–14 min", color: "from-emerald-600 to-emerald-500" },
];

const steps = [
  { Icon: ClipboardText, title: "Diagnostic mock", desc: "A full timed test on day one so we see your real starting bands — no guesswork." },
  { Icon: Target, title: "Backwards plan", desc: "We set your target band and build study weeks around the modules dragging you down." },
  { Icon: Exam, title: "Weekly mocks", desc: "A full-length test every week with tracked scores, so progress is visible band by band." },
  { Icon: ChartLineUp, title: "Test-ready", desc: "We book your slot only when your mocks consistently clear your target. Then you sit it once." },
];

const faqs = [
  { q: "Academic or General Training?", a: "Academic is for university study; General Training is for work and migration. We confirm exactly which one your goal needs in the first session." },
  { q: "How long is the coaching?", a: "Our standard track is 8 weeks, with extension available. Intensive options exist if your test date is close." },
  { q: "How many students per batch?", a: "A maximum of 8, so the trainer can give every student individual feedback on writing and speaking." },
  { q: "Do you provide mock tests?", a: "Yes — a full-length mock every week with a tracked score history so you can see your progress band by band." },
];

export default function IELTSPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[20%] w-24 text-white animate-floaty" />
            <Cloud className="right-[14%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="dot-grid absolute bottom-10 left-[5%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  IELTS · Academic & General
                </span>
                <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-pine-900 sm:text-5xl lg:text-[4rem]">
                  Your band isn&apos;t luck.{" "}
                  <span className="relative inline-block text-emerald-600">
                    It&apos;s a plan.
                    <svg aria-hidden viewBox="0 0 240 16" className="absolute -bottom-2 left-0 w-full text-gold-400" preserveAspectRatio="none">
                      <path d="M3 11c56-9 164-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-pine-700">
                  We coach each module to its own target band, drill it with weekly mocks,
                  and only book your test when the scores are already there.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <EnquiryButton size="lg">
                    Book a free demo class
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                  <div className="flex items-center gap-2 text-sm font-semibold text-pine-700/70">
                    <span className="flex">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={16} weight="fill" className="text-gold-400" />
                      ))}
                    </span>
                    +1.5 avg band lift
                  </div>
                </div>
              </Reveal>
            </div>

            {/* hero illustration + floating band card */}
            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=75"
                alt="Student preparing for the IELTS exam with headphones and books"
                width={900}
                height={900}
                priority
                className="relative aspect-square w-full animate-floaty-slow overflow-hidden rounded-[2.5rem] object-cover ring-4 ring-white drop-shadow-[0_30px_55px_rgba(21,35,63,0.28)]"
              />
              <div className="absolute -bottom-2 -left-2 w-[190px] rounded-[1.5rem] bg-white/95 p-5 ring-1 ring-emerald-100 shadow-[0_30px_60px_-30px_rgba(21,35,63,0.5)] backdrop-blur sm:-left-6 sm:w-[220px]">
                <p className="text-xs font-semibold uppercase tracking-wide text-pine-700/55">Latest batch</p>
                <div className="mt-1 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-bold text-emerald-600">7.5</span>
                  <span className="mb-1.5 text-sm font-semibold text-pine-700/70">avg overall</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-pine-700/60">
                  18 of 22 students cleared their target band on the first attempt.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* QUICK FACTS */}
        <section className="border-y border-emerald-100 bg-white py-8">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {facts.map((f, i) => (
              <Reveal key={f.l} delay={i * 0.05} className="text-center">
                <p className="font-display text-3xl font-bold text-emerald-600 sm:text-4xl">{f.v}</p>
                <p className="mt-1 text-sm font-medium text-pine-700/65">{f.l}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SIGNATURE: BAND PLANNER */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <BandPlanner />
            </Reveal>
          </div>
        </section>

        {/* 4 MODULES — gradient accent tiles */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                The four modules
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Four scores. Four separate plans.
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {modules.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.07}>
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] bg-white p-7 ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${m.color} text-white shadow-sm`}>
                      <m.Icon size={28} weight="fill" />
                    </span>
                    <div className="mt-5 flex items-center justify-between">
                      <h3 className="font-display text-xl font-bold text-pine-900">{m.title}</h3>
                      <span className="rounded-full bg-bone px-2.5 py-1 text-xs font-semibold text-pine-700/60">{m.time}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNATURE: PROCESS TIMELINE */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-14 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                How coaching works
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Diagnostic to test day, in four moves
              </h2>
            </Reveal>

            <div className="relative">
              {/* connecting line (desktop) */}
              <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-emerald-100 lg:block" />
              <div className="grid gap-8 lg:grid-cols-4">
                {steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 0.1}>
                    <div className="relative">
                      <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 text-white shadow-[0_14px_30px_-12px_rgba(21,118,214,0.7)]">
                        <s.Icon size={26} weight="fill" />
                      </span>
                      <span className="mt-5 block font-display text-sm font-bold uppercase tracking-wide text-emerald-600">
                        Step {i + 1}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-pine-900">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OTHER ENGLISH TESTS — Duolingo & PTE */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-12 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                More English tests
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                IELTS isn&apos;t your only option
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                Some students do better — or apply faster — with the Duolingo English Test
                or PTE Academic. We&apos;ll help you pick the one your universities accept.
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Duolingo */}
              <Reveal>
                <div className="flex h-full flex-col rounded-[1.75rem] border border-emerald-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <Lightning size={28} weight="fill" />
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                      ~1 hour test
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-pine-900">Duolingo English Test</h3>
                  <p className="mt-2 leading-relaxed text-pine-700/75">
                    Take it from home, get results in about 2 days, and pay far less than a
                    traditional exam. Accepted by a fast-growing list of universities.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {["At-home, on-demand testing", "Results in ~48 hours", "Budget-friendly fee", "Score-boosting practice with us"].map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-pine-800">
                        <CheckCircle size={18} weight="fill" className="shrink-0 text-emerald-600" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <EnquiryButton size="md">Ask about Duolingo prep</EnquiryButton>
                  </div>
                </div>
              </Reveal>

              {/* PTE */}
              <Reveal delay={0.08}>
                <div className="flex h-full flex-col rounded-[1.75rem] border border-coral-300/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(245,106,77,0.4)]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coral-400/15 text-coral-500">
                      <Laptop size={28} weight="fill" />
                    </span>
                    <span className="rounded-full bg-coral-400/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-coral-500">
                      AI-scored
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-pine-900">PTE Academic</h3>
                  <p className="mt-2 leading-relaxed text-pine-700/75">
                    Computer-based and template-friendly, with scores in around 48 hours.
                    Ideal if you prefer strategy over a human examiner.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {["Fully computer-based", "Results in ~48 hours", "Accepted for UK / Australia visas", "Unlimited mock tests with us"].map((t) => (
                      <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-pine-800">
                        <CheckCircle size={18} weight="fill" className="shrink-0 text-coral-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/test-prep/pte"
                      className="group inline-flex items-center gap-2 rounded-full bg-coral-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-coral-400"
                    >
                      Explore PTE coaching
                      <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                IELTS, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={faqs} accent="text-emerald-600" />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-emerald-600/30 blur-2xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["8-week track", "Free demo class", "Money-back band guarantee"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-gold-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Start with a free IELTS demo class
                </h2>
                <div className="relative">
                  <EnquiryButton variant="ghost" size="lg">Book my demo</EnquiryButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}
