import Image from "next/image";
import {
  Sparkle,
  ArrowRight,
  CheckCircle,
  ChatsCircle,
} from "@phosphor-icons/react/dist/ssr";

type PhosphorIcon = React.ComponentType<{
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
}>;
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq, type FaqItem } from "@/components/ui/Faq";

/**
 * Shared template for the foreign-language coaching pages (French, Italian,
 * Japanese, Chinese, Korean). Each page passes its own data; the layout — hero
 * with photo + greeting flashcards, level ladder, why-learn reasons, FAQ, CTA —
 * stays consistent while the accent colour, content and photo vary per language.
 *
 * Accent is themed via Tailwind class strings passed in `accent` so we can reuse
 * the emerald/coral/gold/pine token scales without renaming anything.
 */

export type Level = { level: string; title: string; desc: string; weeks: string };
export type Reason = { Icon: PhosphorIcon; title: string; desc: string };
export type Greeting = { native: string; en: string };

export type Accent = {
  /** chip / pill background, e.g. "bg-emerald-50" */
  soft: string;
  /** text color, e.g. "text-emerald-700" */
  text: string;
  /** strong text color for headings/numbers, e.g. "text-emerald-600" */
  strong: string;
  /** solid button override classes, e.g. "!bg-emerald-600 hover:!bg-emerald-700" */
  button: string;
  /** ladder node background, e.g. "bg-emerald-600 text-white" */
  node: string;
  /** ring color for cards, e.g. "ring-emerald-100" */
  ring: string;
  /** underline swoosh color, e.g. "text-gold-400" */
  swoosh: string;
  /** soft icon tile bg+text, e.g. "bg-emerald-50 text-emerald-600" */
  tile: string;
};

export type LanguagePageData = {
  language: string; // "French"
  tagline: string; // "French · A1 to C1"
  headlineLead: string; // "Bonjour to"
  headlineAccent: string; // "your French degree"
  intro: string;
  greetings: Greeting[];
  ladderTitle: string;
  ladderSub: string;
  levels: Level[];
  whyTitle: string;
  reasons: Reason[];
  faqs: FaqItem[];
  ctaHeading: string;
  ctaPoints: string[];
  heroImg: string;
  heroAlt: string;
  accent: Accent;
};

export function LanguagePage({ data }: { data: LanguagePageData }) {
  const a = data.accent;
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className={`relative overflow-hidden bg-gradient-to-b ${a.soft}/60 via-bone to-bone`}>
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[14%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className={`absolute -right-20 top-1/4 h-80 w-80 rounded-full ${a.soft} opacity-60 blur-3xl`} />
            <div className="dot-grid absolute bottom-10 left-[5%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm ring-1 ${a.ring} ${a.text}`}>
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  {data.tagline}
                </span>
                <h1 className="mt-6 font-display text-[2.2rem] font-bold leading-[1.05] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.9rem]">
                  {data.headlineLead}{" "}
                  <span className={`relative inline-block ${a.strong}`}>
                    {data.headlineAccent}
                    <svg aria-hidden viewBox="0 0 240 16" className={`absolute -bottom-2 left-0 w-full ${a.swoosh}`} preserveAspectRatio="none">
                      <path d="M3 11c56-9 164-11 234-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-pine-700">{data.intro}</p>
                <div className="mt-8">
                  <EnquiryButton size="lg" className={a.button}>
                    Book a free trial class
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                </div>
              </Reveal>
            </div>

            {/* hero photo + greeting flashcards */}
            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className={`absolute -right-6 -top-6 -z-0 h-44 w-44 blob ${a.soft} opacity-70 blur-2xl`} />
              <div className="relative animate-floaty-slow overflow-hidden rounded-[2.5rem] ring-4 ring-white shadow-[0_40px_80px_-32px_rgba(21,35,63,0.45)]">
                <Image
                  src={data.heroImg}
                  alt={data.heroAlt}
                  width={1100}
                  height={1100}
                  priority
                  className="aspect-square h-auto w-full object-cover"
                />
              </div>
              {data.greetings[0] && (
                <div className={`absolute -left-2 top-6 rounded-2xl bg-white/95 px-4 py-3 ring-1 ${a.ring} shadow-[0_20px_45px_-25px_rgba(21,35,63,0.5)] backdrop-blur sm:-left-5`}>
                  <p className="font-display text-lg font-bold text-pine-900">{data.greetings[0].native}</p>
                  <p className="text-xs text-pine-700/60">{data.greetings[0].en}</p>
                </div>
              )}
              {data.greetings[1] && (
                <div className={`absolute -bottom-1 -right-1 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 ring-1 ${a.ring} shadow-[0_20px_45px_-25px_rgba(21,35,63,0.5)] backdrop-blur sm:-right-3`}>
                  <span className={`grid h-9 w-9 place-items-center rounded-xl ${a.tile}`}>
                    <ChatsCircle size={20} weight="fill" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-pine-900">{data.greetings[1].native}</p>
                    <p className="text-xs text-pine-700/60">{data.greetings[1].en}</p>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* LEVEL LADDER */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className={`inline-flex items-center gap-2 rounded-full ${a.soft} px-4 py-1.5 text-sm font-semibold ${a.strong}`}>
                The level ladder
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                {data.ladderTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">{data.ladderSub}</p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.levels.map((l, i) => (
                <Reveal key={l.level} delay={(i % 4) * 0.06}>
                  <div className={`group h-full rounded-[1.75rem] border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.4)] ${a.ring.replace("ring-", "border-")}`}>
                    <div className="flex items-center justify-between">
                      <span className={`grid h-14 w-14 place-items-center rounded-2xl font-display text-base font-bold ${a.node}`}>
                        {l.level}
                      </span>
                      <span className="rounded-full bg-bone px-2.5 py-1 text-xs font-semibold text-pine-700/60">{l.weeks}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{l.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{l.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY LEARN */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                {data.whyTitle}
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {data.reasons.map((r, i) => (
                <Reveal key={r.title} delay={(i % 3) * 0.08}>
                  <div className={`h-full rounded-[1.75rem] bg-white p-8 ring-1 ${a.ring}`}>
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${a.tile}`}>
                      <r.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{r.title}</h3>
                    <p className="mt-2 leading-relaxed text-pine-700/75">{r.desc}</p>
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
              <span className={`inline-flex items-center gap-2 rounded-full ${a.soft} px-4 py-1.5 text-sm font-semibold ${a.strong}`}>
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                {data.language} classes, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={data.faqs} accent={a.strong} />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className={`pointer-events-none absolute -bottom-16 left-10 h-72 w-72 rounded-full ${a.soft} opacity-30 blur-3xl`} />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {data.ctaPoints.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-gold-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  {data.ctaHeading}
                </h2>
                <div className="relative">
                  <EnquiryButton size="lg" className={a.button}>Book a free trial</EnquiryButton>
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
