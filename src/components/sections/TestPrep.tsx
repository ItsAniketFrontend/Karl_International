import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Dark (ink) full-width section. Theme lock note: this is NOT an inverted theme,
 * it is one deep-ink block within a light page, with the same emerald/amber accents.
 */
const tracks = [
  {
    title: "IELTS",
    desc: "Academic and General modules with weekly band assessments and writing reviews.",
    meta: "8-week track",
  },
  {
    title: "PTE Academic",
    desc: "Computer-based scoring drills, templates and unlimited mock attempts.",
    meta: "6-week track",
  },
  {
    title: "German A1-B1",
    desc: "Goethe-aligned classes for blocked-account and university German pathways.",
    meta: "Rolling intake",
  },
];

export function TestPrep() {
  return (
    <section id="test-prep" className="bg-pine-900 py-16 text-white lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight md:text-[3.25rem]">
            Score the band your offer needs
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Language prep taught by trainers who know exactly what each university and
            embassy expects.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <Link
                href="#counselling"
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold-400/50 hover:bg-white/[0.07]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gold-300">
                      {t.meta}
                    </span>
                    <ArrowUpRight
                      size={22}
                      className="text-white/40 transition-all group-hover:text-gold-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{t.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
