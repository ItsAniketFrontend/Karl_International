import type { Metadata } from "next";
import Image from "next/image";
import {
  Sparkle,
  ArrowRight,
  CheckCircle,
  ChatsCircle,
  Bank,
  GraduationCap,
  Briefcase,
  FlagBanner,
  Confetti,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";
import { Faq } from "@/components/ui/Faq";

export const metadata: Metadata = {
  title: "German Language Classes | Karl Konsult International",
  description:
    "Goethe-aligned German classes from A1 to C1 — a guided roadmap for university admission, blocked-account and work pathways in Germany.",
};

const roadmap = [
  { level: "A1", title: "Your first Hallo", desc: "Greetings, numbers, everyday phrases. You hold your first real German conversation.", weeks: "8 weeks", milestone: "Order a coffee, introduce yourself" },
  { level: "A2", title: "Everyday German", desc: "Routines, past tense and short texts. Small talk stops feeling scary.", weeks: "8 weeks", milestone: "Handle daily errands solo" },
  { level: "B1", title: "The visa line", desc: "The level most blocked-account and student-visa pathways ask for. A major checkpoint.", weeks: "10 weeks", milestone: "Clear most visa & admission bars", flag: true },
  { level: "B2 / C1", title: "Degree-ready fluency", desc: "Argue, summarise and study in German. Ready for German-taught degrees and skilled work.", weeks: "12 weeks", milestone: "Study or work fully in German" },
];

const why = [
  { Icon: GraduationCap, title: "University admission", desc: "Many German-taught programmes need B1–B2 proof before they'll offer a seat." },
  { Icon: Bank, title: "Blocked account & visa", desc: "Language readiness visibly strengthens your student-visa file at the consulate." },
  { Icon: Briefcase, title: "Work pathways", desc: "German unlocks part-time jobs, internships and post-study employment." },
];

const faqs = [
  { q: "Which level do I need for Germany?", a: "Most German-taught degrees and blocked-account pathways expect B1 to B2. English-taught programmes may need only A1 to A2. We map it to your exact university." },
  { q: "How long to reach B1?", a: "From zero, roughly A1 (8 wks) + A2 (8 wks) + B1 (10 wks). Intensive batches can compress this if you have a deadline." },
  { q: "Are classes Goethe-aligned?", a: "Yes. Our curriculum follows the Goethe-Institut framework so you're ready for recognised certification exams." },
  { q: "Online or in person?", a: "Both. We run live online and in-centre batches with the same trainers and material." },
];

export default function GermanPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gold-300/35 via-gold-300/10 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[14%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-gold-400/30 blur-3xl" />
            <div className="dot-grid absolute bottom-10 left-[5%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-gold-500 shadow-sm ring-1 ring-gold-300/50">
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  German · A1 to C1
                </span>
                <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-pine-900 sm:text-5xl lg:text-[4rem]">
                  From <em className="not-italic text-gold-500">Hallo</em> to{" "}
                  <span className="relative inline-block text-gold-500">
                    Germany.
                    <svg aria-hidden viewBox="0 0 200 16" className="absolute -bottom-2 left-0 w-full text-emerald-400" preserveAspectRatio="none">
                      <path d="M3 11c48-9 140-11 194-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-pine-700">
                  A guided, Goethe-aligned roadmap that takes you from your first word to
                  the B1/B2 your German university, blocked account and visa expect.
                </p>
                <div className="mt-8">
                  <EnquiryButton size="lg" className="!bg-gold-400 !text-pine-900 hover:!bg-gold-300">
                    Book a free trial class
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                </div>
              </Reveal>
            </div>

            {/* hero illustration + floating greeting flashcards */}
            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-emerald-200/60 blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=75"
                alt="Student learning German, with a view of Berlin, Germany"
                width={900}
                height={900}
                priority
                className="relative aspect-square w-full animate-floaty-slow overflow-hidden rounded-[2.5rem] object-cover ring-4 ring-white drop-shadow-[0_30px_55px_rgba(21,35,63,0.28)]"
              />
              <div className="absolute -left-2 top-6 rounded-2xl bg-white/95 px-4 py-3 ring-1 ring-gold-300/40 shadow-[0_20px_45px_-25px_rgba(21,35,63,0.5)] backdrop-blur sm:-left-5">
                <p className="font-display text-lg font-bold text-pine-900">Hallo!</p>
                <p className="text-xs text-pine-700/60">Hello!</p>
              </div>
              <div className="absolute -bottom-1 -right-1 flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-3 ring-1 ring-gold-300/40 shadow-[0_20px_45px_-25px_rgba(21,35,63,0.5)] backdrop-blur sm:-right-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-400/20 text-gold-500">
                  <ChatsCircle size={20} weight="fill" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-pine-900">Ich lerne Deutsch</p>
                  <p className="text-xs text-pine-700/60">I&apos;m learning German</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SIGNATURE: A1 → C1 ROADMAP */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/20 px-4 py-1.5 text-sm font-semibold text-gold-500">
                Your roadmap
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                One path. Four checkpoints.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-pine-700/75">
                Each level builds on the last. We tell you exactly where on this path your
                German plans actually need you to reach.
              </p>
            </Reveal>

            {/* vertical alternating roadmap */}
            <div className="relative mt-14">
              {/* spine */}
              <div className="absolute left-7 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-gold-300 via-gold-400 to-emerald-400 sm:left-1/2 sm:-translate-x-1/2" />

              <div className="space-y-10">
                {roadmap.map((r, i) => {
                  const left = i % 2 === 0;
                  return (
                    <Reveal key={r.level} delay={i * 0.05}>
                      <div className={`relative flex items-start gap-6 sm:gap-0 ${left ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                        {/* node */}
                        <div className="relative z-10 flex w-14 shrink-0 justify-center sm:absolute sm:left-1/2 sm:w-auto sm:-translate-x-1/2">
                          <span className={`grid h-14 w-14 place-items-center rounded-2xl font-display text-base font-bold shadow-[0_14px_30px_-12px_rgba(212,168,95,0.7)] ${r.flag ? "bg-emerald-500 text-white" : "bg-gold-400 text-pine-900"}`}>
                            {r.flag ? <FlagBanner size={24} weight="fill" /> : r.level}
                          </span>
                        </div>

                        {/* card */}
                        <div className={`flex-1 sm:w-[calc(50%-3rem)] sm:flex-none ${left ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"}`}>
                          <div className="rounded-[1.75rem] bg-white p-6 ring-1 ring-gold-300/40 transition-shadow hover:shadow-[0_22px_45px_-28px_rgba(212,168,95,0.5)]">
                            <div className={`flex items-center gap-2 ${left ? "sm:justify-end" : ""}`}>
                              <span className="font-display text-lg font-bold text-gold-500">{r.level}</span>
                              <span className="rounded-full bg-bone px-2.5 py-1 text-xs font-semibold text-pine-700/60">{r.weeks}</span>
                            </div>
                            <h3 className="mt-2 font-display text-xl font-bold text-pine-900">{r.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-pine-700/75">{r.desc}</p>
                            <p className={`mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ${left ? "sm:ml-auto" : ""}`}>
                              <CheckCircle size={13} weight="fill" />
                              {r.milestone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}

                {/* finish */}
                <Reveal delay={0.2}>
                  <div className="relative flex items-center gap-6 sm:justify-center sm:gap-0">
                    <div className="relative z-10 flex w-14 shrink-0 justify-center sm:absolute sm:left-1/2 sm:w-auto sm:-translate-x-1/2">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pine-900 text-gold-300 shadow-lg">
                        <Confetti size={24} weight="fill" />
                      </span>
                    </div>
                    <p className="font-display text-lg font-bold text-pine-900 sm:mt-20 sm:text-center">
                      Koffer packen — you&apos;re ready for Germany.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE GERMAN TAKES YOU */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Where German actually takes you
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
                It&apos;s not just a class — it&apos;s three doors that open at once.
              </p>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.75rem] bg-white p-8 ring-1 ring-gold-300/40">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400/20 text-gold-500">
                      <w.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{w.title}</h3>
                    <p className="mt-2 leading-relaxed text-pine-700/75">{w.desc}</p>
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
              <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/20 px-4 py-1.5 text-sm font-semibold text-gold-500">
                Questions
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                German classes, answered
              </h2>
            </Reveal>
            <Reveal>
              <Faq items={faqs} accent="text-gold-500" />
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-14 sm:pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-pine-900 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-14">
                <div className="pointer-events-none absolute -bottom-16 left-10 h-72 w-72 rounded-full bg-gold-400/25 blur-3xl" />
                <ul className="relative flex flex-wrap justify-center gap-x-6 gap-y-2">
                  {["Rolling intake", "Goethe-aligned", "Native-level trainers"].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <CheckCircle size={18} weight="fill" className="text-gold-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Say your first German sentence this week
                </h2>
                <div className="relative">
                  <EnquiryButton size="lg" className="!bg-gold-400 !text-pine-900 hover:!bg-gold-300">
                    Book a free trial
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
