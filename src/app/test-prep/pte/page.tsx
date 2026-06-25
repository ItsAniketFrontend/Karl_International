import type { Metadata } from "next";
import Image from "next/image";
import {
  Sparkle,
  ArrowRight,
  CheckCircle,
  Lightning,
  Robot,
  Monitor,
  Microphone,
  PencilLine,
  BookOpen,
  Headphones,
  ClockCountdown,
  Waveform,
  Gauge,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: "PTE Academic Coaching | Karl Konsult International",
  description:
    "PTE Academic coaching built around the AI scoring engine — templates, mic technique and unlimited mock tests. Computer-based, results in 48 hours.",
};

const perks = [
  { Icon: Robot, title: "Trained for the AI", desc: "No human examiner, no bias. We teach you exactly what the algorithm rewards." },
  { Icon: Lightning, title: "Results in 48 hrs", desc: "Your scorecard lands in about two days — not the two weeks IELTS takes." },
  { Icon: Monitor, title: "Real test interface", desc: "We drill on the exact screen, timers and mic flow you'll face on test day." },
];

const skills = [
  { Icon: Microphone, title: "Speaking", types: "Read aloud · Repeat sentence · Describe image · Retell lecture", count: 5 },
  { Icon: PencilLine, title: "Writing", types: "Summarise written text · Essay with scoring templates", count: 2 },
  { Icon: BookOpen, title: "Reading", types: "Fill in the blanks · Reorder paragraphs · Multiple choice", count: 5 },
  { Icon: Headphones, title: "Listening", types: "Summarise spoken text · Highlight · Write from dictation", count: 8 },
];

const faqs = [
  { q: "Is PTE easier than IELTS?", a: "Not easier — different. PTE is computer-scored and template-friendly, which suits students who prefer strategy over a human examiner. We help you choose the right one." },
  { q: "How fast are PTE results?", a: "Typically within 48 hours, sometimes faster, versus 5–7 days for IELTS. Great when your application deadline is tight." },
  { q: "Who accepts PTE?", a: "3,300+ institutions and the governments of the UK, Australia and New Zealand, among others. We confirm acceptance for your specific universities." },
  { q: "Do you give unlimited mocks?", a: "Yes. Our PTE track includes unlimited AI-style mock tests so test day feels routine." },
];

export default function PTEPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-coral-300/30 via-coral-300/10 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[8%] top-[18%] w-20 text-white animate-floaty" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-coral-400/30 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />
            <div className="dot-grid absolute bottom-10 right-[6%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-coral-500 shadow-sm ring-1 ring-coral-300/40">
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  PTE Academic
                </span>
                <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-pine-900 sm:text-5xl lg:text-[4rem]">
                  An AI scores it.{" "}
                  <span className="relative inline-block text-coral-500">
                    We&apos;ll train it.
                    <svg aria-hidden viewBox="0 0 240 16" className="absolute -bottom-2 left-0 w-full text-gold-400" preserveAspectRatio="none">
                      <path d="M3 11c56-9 164-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-pine-700">
                  PTE is graded by a machine, so it rewards strategy over guesswork. We
                  teach the templates, timing and mic technique the algorithm scores
                  highest — backed by unlimited mocks.
                </p>
                <div className="mt-8">
                  <EnquiryButton size="lg" className="!bg-coral-500 hover:!bg-coral-400">
                    Book a free demo class
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                </div>
              </Reveal>
            </div>

            {/* hero illustration + floating result-speed card */}
            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -left-6 -top-6 -z-0 h-44 w-44 blob bg-coral-300/60 blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=75"
                alt="Student taking the computer-based PTE Academic test"
                width={900}
                height={900}
                priority
                className="relative aspect-square w-full animate-floaty-slow overflow-hidden rounded-[2.5rem] object-cover ring-4 ring-white drop-shadow-[0_30px_55px_rgba(21,35,63,0.28)]"
              />
              <div className="absolute -bottom-2 -right-2 rounded-[1.5rem] bg-pine-900 p-5 text-white shadow-[0_30px_60px_-30px_rgba(21,35,63,0.6)] ring-4 ring-white sm:-right-4">
                <div className="flex items-center gap-1.5 text-coral-300">
                  <ClockCountdown size={18} weight="fill" />
                  <span className="text-[11px] font-semibold uppercase tracking-wide">Result time</span>
                </div>
                <div className="mt-1 flex items-end gap-1.5">
                  <span className="font-display text-4xl font-bold text-white">48</span>
                  <span className="mb-1.5 text-sm font-semibold text-white/60">hours</span>
                </div>
                <p className="mt-1 text-xs text-white/55">Scores in 2 days, not weeks</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PERKS */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
                Why students pick PTE
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Faster, fairer, fully digital
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {perks.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.75rem] border border-coral-300/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(245,106,77,0.4)]">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-coral-400/15 text-coral-500">
                      <p.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-pine-700/75">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SIGNATURE: HOW THE AI GRADES YOU */}
        <section className="relative overflow-hidden bg-pine-900 py-16 sm:py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-coral-500/25 blur-3xl" />
            <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-coral-300">
                <Robot size={15} weight="fill" />
                Inside the scoring engine
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
                Exactly how the machine grades you
              </h2>
              <p className="mt-4 text-lg text-white/65">
                Once you see what the algorithm measures, you stop guessing — and start scoring it.
              </p>
            </Reveal>

            <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_0.9fr]">
              {/* INPUT */}
              <Reveal>
                <div className="h-full rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral-500/20 text-coral-300">
                    <Waveform size={24} weight="fill" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/45">You produce</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">Speech &amp; text</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    You speak into the mic and type your answers against a strict clock.
                  </p>
                </div>
              </Reveal>

              {/* arrow */}
              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight size={28} weight="bold" className="text-white/30" />
              </div>

              {/* ENGINE */}
              <Reveal delay={0.1}>
                <div className="h-full rounded-[1.75rem] bg-gradient-to-br from-coral-500 to-coral-400 p-7 shadow-[0_30px_60px_-30px_rgba(245,106,77,0.7)]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 text-white">
                    <Robot size={24} weight="fill" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/70">The engine checks</p>
                  <ul className="mt-3 space-y-2">
                    {["Content & relevance", "Fluency & rhythm", "Pronunciation", "Grammar & range"].map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white">
                        <CheckCircle size={16} weight="fill" className="text-white/80" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* arrow */}
              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight size={28} weight="bold" className="text-white/30" />
              </div>

              {/* OUTPUT */}
              <Reveal delay={0.2}>
                <div className="flex h-full flex-col justify-center rounded-[1.75rem] bg-white p-7 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Gauge size={24} weight="fill" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-pine-700/50">Your score</p>
                  <p className="font-display text-6xl font-bold text-coral-500">79+</p>
                  <p className="mt-1 text-sm font-semibold text-pine-700/70">in ~48 hours</p>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <p className="mt-8 text-center text-sm text-white/50">
                Because one spoken task can feed several scores, a single template can lift
                two skills at once. That&apos;s the leverage we coach.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SKILLS — numbered rows with question-type counts */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Four skills, twenty question types
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                We drill each one to muscle memory, so test day feels like another mock.
              </p>
            </Reveal>
            <div className="mt-12 divide-y divide-coral-300/25">
              {skills.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="group flex items-center gap-5 py-6 sm:gap-6">
                    <span className="font-display text-2xl font-bold tabular-nums text-coral-300 transition-colors group-hover:text-coral-500">
                      0{i + 1}
                    </span>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-coral-400/15 text-coral-500">
                      <s.Icon size={24} weight="fill" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl font-bold text-pine-900">{s.title}</h3>
                        <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-coral-500 ring-1 ring-coral-300/30">
                          {s.count} types
                        </span>
                      </div>
                      <p className="mt-1 text-pine-700/75">{s.types}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-10 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                PTE, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={faqs} accent="text-coral-500" />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-coral-500 to-coral-400 p-10 text-center shadow-[0_30px_70px_-40px_rgba(245,106,77,0.6)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["6-week track", "Unlimited mock tests", "Proven templates"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/90">
                      <CheckCircle size={18} weight="fill" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Score 79+ with a free PTE demo
                </h2>
                <div className="relative">
                  <EnquiryButton size="lg" className="!bg-white !text-coral-500 hover:!bg-white/90">
                    Book my demo
                  </EnquiryButton>
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
