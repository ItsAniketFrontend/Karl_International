import Image from "next/image";
import {
  Compass,
  Exam,
  Bank,
  AirplaneTilt,
  FirstAidKit,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Bento grid, 5 cells for 5 services. Background diversity is deliberate:
 * one image cell, one emerald-fill cell, three light cells. No empty cells.
 */
export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-pine-900 md:text-[3.25rem]">
            Everything between the dream and the departure gate
          </h2>
          <p className="mt-5 max-w-xl text-lg text-pine-700/75">
            Five things we handle so you can focus on the offer letter.
          </p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 md:grid-cols-3">
          {/* Large feature cell with image */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <article className="group relative h-full overflow-hidden rounded-2xl border border-emerald-100">
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop"
                alt="Counsellor mapping a personalised study plan"
                width={1000}
                height={800}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-900/90 via-pine-900/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-400 text-pine-900">
                  <Compass size={24} weight="fill" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  Personalised course mapping
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                  A shortlist built around your scores, budget and the career you
                  actually want, with backup and ambitious picks ranked clearly.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Crimson fill cell */}
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col rounded-2xl bg-emerald-600 p-7 text-white">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15">
                <Exam size={24} weight="fill" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">IELTS &amp; PTE coaching</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Small-batch prep with mock tests and band-targeted feedback.
              </p>
            </article>
          </Reveal>

          {/* Light cell */}
          <Reveal delay={0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-400/20 text-gold-500">
                <Bank size={24} weight="fill" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-pine-900">Loans &amp; funding</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-700/75">
                Education-loan paperwork, scholarships and proof-of-funds help.
              </p>
            </article>
          </Reveal>

          {/* Two light cells across the bottom of the wide column row */}
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                <AirplaneTilt size={24} weight="fill" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-pine-900">Visa filing</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-700/75">
                SOP drafting, document checks and interview prep, start to stamp.
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-bone p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                <FirstAidKit size={24} weight="fill" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-pine-900">MBBS abroad</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-700/75">
                Vetted medical universities with NMC-recognised pathways.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
