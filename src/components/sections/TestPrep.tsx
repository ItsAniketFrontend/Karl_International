import { ArrowUpRight, Translate } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryTrigger } from "@/components/ui/EnquiryButton";
import { languageCourses } from "@/lib/data";

/**
 * Language Coaching — a deep-ink block within the light page. Covers IELTS/PTE/
 * Duolingo plus foreign languages (German, French, Italian, Japanese, Chinese,
 * Korean). Cards with an href link to the relevant test-prep page; the rest open
 * the enquiry popup.
 */

export function LanguageCoaching() {
  return (
    <section id="language-coaching" className="relative overflow-hidden bg-pine-900 py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-emerald-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="dot-grid absolute right-10 bottom-10 h-32 w-48 opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-gold-300">
            <Translate size={15} weight="fill" />
            Language coaching
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-[3.25rem]">
            Score the band your offer needs
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Whether it&apos;s IELTS, PTE or a foreign language like German, French or
            Japanese, our trainers know exactly what universities and embassies expect —
            and coach you straight to it.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {languageCourses.map((t, i) => {
            const inner = (
              <>
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
                  <h3 className="mt-5 text-xl font-bold">{t.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{t.blurb}</p>
                </div>
              </>
            );
            const cls =
              "group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-left transition-colors hover:border-gold-400/50 hover:bg-white/[0.07]";
            return (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                {t.href ? (
                  <Link href={t.href} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <EnquiryTrigger
                    ariaLabel={`Enquire about ${t.name} coaching`}
                    className={`w-full ${cls}`}
                  >
                    {inner}
                  </EnquiryTrigger>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
