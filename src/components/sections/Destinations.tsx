import Image from "next/image";

/**
 * Featured study destinations as a continuous marquee.
 * Marquee is motivated: it shows breadth (8 countries) without forcing a static
 * grid, and is the page's ONLY marquee. Pauses for reduced-motion via CSS.
 */
const countries = [
  { name: "Canada", seed: "toronto-skyline-canada", code: "ca" },
  { name: "United Kingdom", seed: "london-bridge-uk", code: "gb" },
  { name: "Australia", seed: "sydney-opera-australia", code: "au" },
  { name: "Germany", seed: "berlin-architecture-germany", code: "de" },
  { name: "Ireland", seed: "dublin-streets-ireland", code: "ie" },
  { name: "United States", seed: "newyork-campus-usa", code: "us" },
  { name: "New Zealand", seed: "auckland-newzealand", code: "nz" },
  { name: "France", seed: "paris-sorbonne-france", code: "fr" },
];

function Card({ name, seed }: { name: string; seed: string }) {
  return (
    <div className="group relative w-[260px] shrink-0 overflow-hidden rounded-2xl border border-emerald-100/70 bg-white">
      <Image
        src={`https://picsum.photos/seed/${seed}/520/360`}
        alt={`Study in ${name}`}
        width={520}
        height={360}
        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-900/85 to-transparent p-4">
        <p className="font-display text-lg font-bold text-white">{name}</p>
        <p className="text-xs font-medium text-gold-300">Top universities and intakes</p>
      </div>
    </div>
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-pine-900 md:text-[3.25rem]">
            Eight countries. One trusted team.
          </h2>
          <p className="mt-4 text-lg text-pine-700/75">
            We map the right destination to your budget, course and career goals, not
            the other way around.
          </p>
        </div>
      </div>

      <div className="marquee-mask relative mt-12 flex w-full overflow-hidden">
        <div className="animate-marquee flex gap-5 pr-5">
          {[...countries, ...countries].map((c, i) => (
            <Card key={`${c.code}-${i}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
