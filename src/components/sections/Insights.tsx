import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  CalendarCheck,
  PencilLine,
  Bank,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Guides & insights as an editorial magazine layout: one bold featured guide,
 * then a clean categorised list. Topic + read-time encode real meaning. Themed
 * icon/gradient art per guide keeps it cohesive with the brand (no stock noise).
 */
const featured = {
  category: "Visas",
  title: "Canada SDS 2026: what actually changed for Indian students",
  excerpt:
    "New proof-of-funds thresholds, GIC updates and the documents that now make or break a study permit.",
  date: "12 June 2026",
  read: "6 min read",
  Icon: FileText,
};

const posts = [
  {
    category: "Planning",
    title: "September vs January intake: which one fits your timeline",
    date: "4 June 2026",
    read: "4 min read",
    Icon: CalendarCheck,
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    category: "Applications",
    title: "Writing an SOP that visa officers actually believe",
    date: "27 May 2026",
    read: "5 min read",
    Icon: PencilLine,
    tint: "bg-coral-400/15 text-coral-500",
  },
  {
    category: "Funding",
    title: "Germany's blocked account, explained simply",
    date: "19 May 2026",
    read: "3 min read",
    Icon: Bank,
    tint: "bg-gold-400/20 text-gold-500",
  },
];

export function Insights() {
  return (
    <section id="blogs" className="relative overflow-hidden bg-bone py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-24 -z-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Blogs &amp; guides
            </span>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-pine-900 sm:text-4xl md:text-[3.4rem]">
              Read before you{" "}
              <span className="text-emerald-600">apply</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-pine-700/75">
              Plain-language guides on study abroad intakes, student visas, scholarships
              and funding — updated the moment the rules change.
            </p>
          </div>
          <Link
            href="#blogs"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-all hover:-translate-y-0.5 hover:border-emerald-600"
          >
            View all guides
            <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* featured guide */}
          <Reveal direction="right">
            <Link
              href="#insights"
              className="group flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-pine-900 p-8 text-white shadow-[0_30px_70px_-34px_rgba(21,35,63,0.6)] sm:p-10"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-400 text-pine-900">
                    <featured.Icon size={24} weight="fill" />
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-300">
                    {featured.category}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-snug sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-white/70">
                  {featured.excerpt}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-white/55">
                  {featured.date} · {featured.read}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-gold-400 group-hover:text-pine-900">
                  <ArrowUpRight size={18} weight="bold" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* categorised list */}
          <div className="flex flex-col gap-4">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="h-full">
                <Link
                  href="#insights"
                  className="group flex h-full items-center gap-5 rounded-[1.5rem] border border-emerald-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_40px_-26px_rgba(21,35,63,0.5)]"
                >
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${p.tint} transition-transform duration-300 group-hover:-translate-y-0.5`}>
                    <p.Icon size={26} weight="fill" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold leading-snug text-pine-900 group-hover:text-emerald-700">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-pine-700/60">
                      {p.date} · {p.read}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    weight="bold"
                    className="shrink-0 text-emerald-200 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-600"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
