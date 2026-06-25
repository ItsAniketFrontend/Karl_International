import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Partner universities. Placeholder names + real campus photos (Unsplash) — swap
 * the list and photos for your actual partner institutions before launch.
 */
const partners = [
  "University of Waterloo",
  "Trinity College Dublin",
  "University of Manchester",
  "Technical University of Munich",
  "Monash University",
  "University of New South Wales",
];

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;

const gallery = [
  u("1562774053-701939374585"), // campus building
  u("1498243691581-b145c3f54a5a"), // library
  u("1627556704302-624286467c65"), // graduation
];

export function Universities() {
  return (
    <section id="universities" className="border-y border-emerald-100 bg-bone py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-6 -top-6 -z-0 h-36 w-36 blob bg-emerald-200/60 blur-2xl" />
            <div className="absolute -bottom-6 -right-4 -z-0 h-36 w-36 blob bg-gold-300/60 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-[28px] ring-4 ring-white shadow-[0_28px_55px_-28px_rgba(21,35,63,0.4)]">
                <Image
                  src={gallery[0]}
                  alt="Partner university campus abroad"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-[28px] ring-4 ring-white shadow-[0_28px_55px_-28px_rgba(21,35,63,0.4)]">
                  <Image
                    src={gallery[1]}
                    alt="University library where our students study"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[28px] ring-4 ring-white shadow-[0_28px_55px_-28px_rgba(21,35,63,0.4)]">
                  <Image
                    src={gallery[2]}
                    alt="Students graduating from a university abroad"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Top universities
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-pine-900 md:text-[3rem]">
              Get into world-ranked universities
            </h2>
            <p className="mt-5 max-w-md text-lg text-pine-700/75">
              Our students earn places at trusted, well-ranked institutions across the
              UK, Canada, Australia, Germany and beyond — and we help you build an
              application strong enough to join them.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {partners.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-medium text-pine-800"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
