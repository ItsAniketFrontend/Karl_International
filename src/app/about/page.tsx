import type { Metadata } from "next";
import Image from "next/image";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  HandHeart,
  Compass,
  Quotes,
  LinkedinLogo,
  Sparkle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "About Us | Karl Konsult International",
  description:
    "Meet Karl Konsult International, overseas education consultants guiding students to the right university since 2009 with honest, outcome-first advice.",
};

const stats = [
  { value: "5,000+", label: "Students placed" },
  { value: "16 yrs", label: "Of guidance" },
  { value: "250+", label: "Partner universities" },
  { value: "98%", label: "Visa success" },
];

const timeline = [
  { year: "2009", title: "The first office", desc: "Started in Jaipur with one counsellor and one promise: honest advice." },
  { year: "2014", title: "1,000 students", desc: "Crossed our first thousand placements across the UK and Australia." },
  { year: "2019", title: "Eight countries", desc: "Expanded to Canada, Germany, Ireland, the US and more." },
  { year: "2026", title: "5,000+ and counting", desc: "A trusted team with a 98% visa success rate." },
];

const values = [
  {
    Icon: ShieldCheck,
    title: "Honesty first",
    desc: "We recommend what fits you, not what pays us the most. Always.",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    Icon: HandHeart,
    title: "Student at the centre",
    desc: "Every shortlist starts from your scores, budget and ambitions.",
    tint: "bg-coral-400/15 text-coral-500",
  },
  {
    Icon: Compass,
    title: "End to end",
    desc: "From the first call to the visa stamp, one team stays with you.",
    tint: "bg-gold-400/20 text-gold-500",
  },
];

const team = [
  { name: "Rajeev Karl", role: "Founder & Lead Counsellor", img: "https://picsum.photos/seed/karl-team-rajeev/500/500" },
  { name: "Meher Sodhi", role: "Visa & Documentation Head", img: "https://picsum.photos/seed/karl-team-meher/500/500" },
  { name: "Aman Verma", role: "Test Prep Lead", img: "https://picsum.photos/seed/karl-team-aman/500/500" },
  { name: "Priya Nair", role: "University Relations", img: "https://picsum.photos/seed/karl-team-priya/500/500" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ===== HERO ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[6%] top-[18%] w-24 text-white animate-floaty" />
            <Cloud className="right-[12%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-gold-300/40 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-coral-300/30 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  About Karl Konsult
                </span>
                <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-pine-900 sm:text-5xl lg:text-[4.25rem]">
                  Your education
                  <br />
                  buddy,{" "}
                  <span className="relative inline-block text-emerald-600">
                    since 2009
                    <svg
                      aria-hidden
                      viewBox="0 0 220 16"
                      className="absolute -bottom-2 left-0 w-full text-gold-400"
                      preserveAspectRatio="none"
                    >
                      <path d="M3 11c52-9 150-11 214-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-pine-700">
                  We are counsellors first, agents second. Here is the team and the
                  honest thinking behind every offer letter we help win.
                </p>
                <div className="mt-8">
                  <EnquiryButton size="lg">
                    Talk to a counsellor
                    <ArrowRight size={18} weight="bold" />
                  </EnquiryButton>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left" className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 -z-0 h-48 w-48 blob bg-coral-300/50 blur-2xl" />
              <div className="relative animate-floaty-slow overflow-hidden rounded-[2.5rem] ring-4 ring-white shadow-[0_40px_80px_-32px_rgba(21,35,63,0.45)]">
                <Image
                  src="/who_we_are.png"
                  alt="The Karl Konsult counselling team helping a student"
                  width={1100}
                  height={900}
                  priority
                  className="h-auto w-full"
                />
              </div>
              {/* floating chip */}
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-[0_20px_45px_-18px_rgba(21,35,63,0.45)]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-400 text-pine-900">
                  <Heart size={20} weight="fill" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-lg font-bold text-pine-900">4.9/5</p>
                  <p className="text-xs text-pine-700/60">loved by students</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== STATS BAND ===== */}
        <section className="bg-pine-900 py-12 sm:py-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="text-center">
                <p className="font-display text-4xl font-bold text-gold-300 sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-white/65">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== STORY + QUOTE ===== */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                  Our story
                </span>
                <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                  Built by people who have{" "}
                  <span className="text-emerald-600">been the nervous applicant</span>
                </h2>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-pine-700/85">
                  <p>
                    Karl Konsult started in 2009 with one belief: studying abroad should
                    not depend on who you know or how much jargon you can decode. It should
                    depend on a clear plan and honest advice.
                  </p>
                  <p>
                    We turn down commissions when a course is not right, because the offer
                    letter that matters is the one you are actually proud of.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal direction="left">
              <figure className="relative rounded-[2rem] bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white shadow-[0_30px_70px_-40px_rgba(21,118,214,0.6)] sm:p-10">
                <Quotes size={44} weight="fill" className="text-gold-300" />
                <blockquote className="mt-4 font-display text-2xl font-bold leading-snug sm:text-[1.7rem]">
                  We do not count applications. We count students who are happy where they
                  landed.
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 font-display font-bold">
                    RK
                  </span>
                  <div>
                    <p className="font-semibold">Rajeev Karl</p>
                    <p className="text-sm text-white/65">Founder</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ===== JOURNEY TIMELINE ===== */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                Our journey
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Sixteen years, one direction
              </h2>
            </Reveal>

            <div className="relative mt-14">
              <div className="absolute left-[27px] top-0 h-full w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-200 to-transparent md:left-0 md:top-[27px] md:h-0.5 md:w-full md:bg-gradient-to-r md:from-transparent md:via-emerald-200 md:to-transparent" />
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-5">
                {timeline.map((t, i) => (
                  <Reveal key={t.year} delay={i * 0.08}>
                    <div className="group relative flex items-start gap-5 md:flex-col md:items-center md:text-center">
                      <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white font-display text-sm font-bold text-emerald-600 shadow-[0_12px_28px_-14px_rgba(21,35,63,0.5)] ring-1 ring-emerald-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-emerald-600 group-hover:text-white">
                        {t.year}
                      </div>
                      <div className="md:mt-5">
                        <h3 className="font-display text-lg font-bold text-pine-900">{t.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-pine-700/75 md:mx-auto md:max-w-[20ch]">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== MISSION + VISION + VALUES ===== */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="h-full rounded-[2rem] bg-pine-900 p-8 text-white shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-10">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400 text-pine-900">
                    <Target size={28} weight="fill" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">Our mission</h3>
                  <p className="mt-3 leading-relaxed text-white/75">
                    To make studying abroad clear, fair and achievable for every serious
                    student, with guidance that puts the outcome first.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="h-full rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-[0_24px_50px_-34px_rgba(21,35,63,0.5)] sm:p-10">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Eye size={28} weight="fill" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-pine-900">Our vision</h3>
                  <p className="mt-3 leading-relaxed text-pine-700/80">
                    To be the most trusted name in overseas education from India, known not
                    for the most applications, but for the happiest students.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-16 text-center">
              <h2 className="font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Three things we never compromise
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-[1.75rem] border border-emerald-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(21,35,63,0.5)]">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${v.tint}`}>
                      <v.Icon size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-pine-900">{v.title}</h3>
                    <p className="mt-2 leading-relaxed text-pine-700/75">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TEAM ===== */}
        <section className="bg-bone py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                The people
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Counsellors who pick up the phone
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.06}>
                  <div className="group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white text-center shadow-[0_18px_40px_-30px_rgba(21,35,63,0.5)] transition-all duration-300 hover:-translate-y-1.5">
                    <div className="relative overflow-hidden bg-emerald-50">
                      <Image
                        src={m.img}
                        alt={m.name}
                        width={500}
                        height={500}
                        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
                      />
                      <span className="absolute bottom-3 right-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-white text-emerald-600 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <LinkedinLogo size={18} weight="fill" />
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-pine-900">{m.name}</h3>
                      <p className="mt-1 text-sm text-emerald-600">{m.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="pb-16 sm:pb-20 lg:pb-28">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-600 to-emerald-700 p-10 text-center shadow-[0_30px_70px_-40px_rgba(21,118,214,0.6)] sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
                <h2 className="relative max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
                  Ready to plan your study-abroad journey?
                </h2>
                <p className="relative max-w-md text-white/80">
                  Book a free, no-pressure counselling session. We will map the next step
                  with you.
                </p>
                <div className="relative">
                  <EnquiryButton variant="ghost" size="lg">
                    Book free counselling
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
