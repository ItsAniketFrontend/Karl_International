import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

const featured = {
  title: "Canada SDS 2026: what actually changed for Indian students",
  excerpt:
    "New proof-of-funds thresholds, GIC updates and the documents that now make or break a study permit.",
  date: "12 June 2026",
  read: "6 min read",
  seed: "blog-canada-sds-feature",
};

const posts = [
  {
    title: "September vs January intake: which one fits your timeline",
    date: "4 June 2026",
    read: "4 min read",
    seed: "blog-intake-timeline",
  },
  {
    title: "Writing an SOP that visa officers actually believe",
    date: "27 May 2026",
    read: "5 min read",
    seed: "blog-sop-writing",
  },
  {
    title: "Germany's blocked account, explained simply",
    date: "19 May 2026",
    read: "3 min read",
    seed: "blog-germany-blocked-account",
  },
];

export function Insights() {
  return (
    <section id="insights" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-pine-900 md:text-[3.25rem]">
              Read before you apply
            </h2>
            <p className="mt-4 text-lg text-pine-700/75">
              Plain-language guides on intakes, visas and funding, updated as rules change.
            </p>
          </div>
          <Link
            href="#insights"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-600"
          >
            View all guides <ArrowRight size={16} weight="bold" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Link href="#insights" className="group block h-full overflow-hidden rounded-2xl border border-emerald-100 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/${featured.seed}/1000/600`}
                  alt={featured.title}
                  width={1000}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold text-emerald-600">
                  {featured.date} · {featured.read}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-pine-900 group-hover:text-emerald-700">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-pine-700/75">
                  {featured.excerpt}
                </p>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-5">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="h-full">
                <Link
                  href="#insights"
                  className="group flex items-center gap-5 rounded-2xl border border-emerald-100 bg-white p-4 transition-colors hover:border-emerald-200 sm:p-5"
                >
                  <Image
                    src={`https://picsum.photos/seed/${p.seed}/300/300`}
                    alt={p.title}
                    width={300}
                    height={300}
                    className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
                  />
                  <div>
                    <p className="text-xs font-semibold text-emerald-600">
                      {p.date} · {p.read}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-pine-900 group-hover:text-emerald-700">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
