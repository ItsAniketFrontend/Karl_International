import Image from "next/image";
import { Stethoscope, CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton, EnquiryTrigger } from "@/components/ui/EnquiryButton";
import { mbbsCountries } from "@/lib/data";

/**
 * MBBS Abroad — dedicated section for medical aspirants. Country cards (flag +
 * highlight) open the enquiry popup. Realistic placeholder copy; confirm exact
 * NMC/WHO recognition and fees with your team before launch.
 */

export function Mbbs() {
  return (
    <section id="mbbs" className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-20 -z-0 h-80 w-80 rounded-full bg-coral-300/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-coral-400/15 px-4 py-1.5 text-sm font-semibold text-coral-500">
              <Stethoscope size={15} weight="fill" />
              MBBS abroad
            </span>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-pine-900 sm:text-4xl md:text-[3rem]">
              Dreaming of becoming a{" "}
              <span className="text-coral-500">doctor?</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-pine-700/80">
              Study MBBS abroad at affordable, NMC-screened and WHO-listed medical
              universities. We guide you on eligibility, NEET requirements, admission and
              the FMGE/NExT pathway back home — so you can focus on the white coat.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "NMC-screened & WHO-listed universities",
                "English-medium teaching",
                "Transparent, all-inclusive fee guidance",
                "Support from application to departure",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-pine-800">
                  <CheckCircle size={20} weight="fill" className="shrink-0 text-coral-500" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <EnquiryButton size="lg" className="!bg-coral-500 hover:!bg-coral-400">
                Talk to an MBBS counsellor
                <ArrowRight size={18} weight="bold" />
              </EnquiryButton>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="grid grid-cols-2 gap-4">
              {mbbsCountries.map((c) => (
                <EnquiryTrigger
                  key={c.code}
                  ariaLabel={`Enquire about MBBS in ${c.name}`}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] bg-bone text-left ring-1 ring-coral-300/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(245,106,77,0.5)]"
                >
                  <div className="relative h-28 w-full overflow-hidden sm:h-32">
                    <Image
                      src={`https://flagcdn.com/h240/${c.code}.png`}
                      alt={`MBBS in ${c.name}`}
                      width={320}
                      height={160}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-coral-500 backdrop-blur">
                      {c.highlight}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-pine-900">
                      MBBS in {c.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-pine-700/75">{c.blurb}</p>
                  </div>
                </EnquiryTrigger>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
