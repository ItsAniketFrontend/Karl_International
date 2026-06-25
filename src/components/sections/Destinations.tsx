import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryTrigger } from "@/components/ui/EnquiryButton";
import { destinations } from "@/lib/data";

/**
 * Study destinations as an editorial bento: one large signature tile (the most
 * popular destination) plus a refined grid of the rest. Real country photos +
 * a headline fact per country, so structure encodes meaning, not decoration.
 */

const featured = destinations[0]; // Australia
const rest = destinations.slice(1);

function Flag({ code, className = "" }: { code: string; className?: string }) {
  if (code === "eu") {
    return (
      <span
        className={`grid place-items-center rounded-[3px] bg-[#003399] text-[8px] font-bold text-[#FFCC00] ring-1 ring-black/10 ${className}`}
        aria-hidden
      >
        ★
      </span>
    );
  }
  return (
    <Image
      src={`https://flagcdn.com/h40/${code}.png`}
      alt=""
      width={30}
      height={20}
      className={`rounded-[3px] object-cover ring-1 ring-black/10 ${className}`}
    />
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-bone py-14 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-40 -z-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Study destinations
            </span>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-pine-900 sm:mt-5 sm:text-4xl md:text-[3.4rem]">
              Where do you{" "}
              <span className="text-emerald-600">want to study?</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-pine-700/75">
              From the UK and Canada to Australia, Germany and the rest of Europe — we
              help you pick the destination that fits your budget, course and dream
              career, then guide you all the way there.
            </p>
          </div>
          <EnquiryTrigger className="hidden items-center gap-2 rounded-full bg-pine-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-pine-800 sm:inline-flex">
            Not sure which? Ask us
            <ArrowUpRight size={16} weight="bold" />
          </EnquiryTrigger>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {/* signature tile */}
          <Reveal className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <EnquiryTrigger
              ariaLabel={`Enquire about studying in ${featured.name}`}
              className="group relative flex h-full min-h-[320px] w-full flex-col overflow-hidden rounded-[1.75rem] text-left shadow-[0_30px_70px_-34px_rgba(21,35,63,0.6)] sm:min-h-[420px] sm:rounded-[2rem]"
            >
              <Image
                src={featured.img}
                alt={`Study in ${featured.name}`}
                width={800}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-900 via-pine-900/30 to-transparent" />
              <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-emerald-700 backdrop-blur">
                Most popular
              </span>
              <div className="relative mt-auto p-7 text-white">
                <div className="flex items-center gap-3">
                  <Flag code={featured.code} className="h-7 w-10" />
                  <h3 className="font-display text-3xl font-bold">Study in {featured.name}</h3>
                </div>
                <p className="mt-2 text-white/85">{featured.fact}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
                  Talk to a counsellor
                  <ArrowUpRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </EnquiryTrigger>
          </Reveal>

          {/* the rest, refined grid */}
          {rest.map((c, i) => (
            <Reveal key={c.code} delay={(i % 2) * 0.05}>
              <EnquiryTrigger
                ariaLabel={`Enquire about studying in ${c.name}`}
                className="group flex h-full w-full items-center gap-3 overflow-hidden rounded-[1.5rem] bg-white p-2.5 pr-4 text-left ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-26px_rgba(21,35,63,0.5)] sm:gap-4 sm:p-3 sm:pr-5"
              >
                <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-28 sm:rounded-2xl">
                  <Image
                    src={c.img}
                    alt={`Study in ${c.name}`}
                    width={240}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <Flag code={c.code} className="h-3.5 w-5" />
                    <h3 className="truncate text-base font-bold text-pine-900 sm:text-lg">{c.name}</h3>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-pine-700/70 sm:mt-1 sm:text-sm">{c.fact}</p>
                </div>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white sm:h-9 sm:w-9">
                  <ArrowUpRight size={15} weight="bold" />
                </span>
              </EnquiryTrigger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
