import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, HandHeart } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Who We Are" — a short, warm brief that sits right after the hero. Keeps it
 * conversational and student-first; deeper story lives on /about.
 */
const pillars = [
  { Icon: Compass, title: "Guidance, not guesswork", desc: "Expert counsellors who've helped 5,000+ students find their path abroad." },
  { Icon: ShieldCheck, title: "Honest & transparent", desc: "Clear advice on courses, costs and visas — no jargon, no surprises." },
  { Icon: HandHeart, title: "With you all the way", desc: "From your first question to your first day on campus, we're by your side." },
];

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Who we are
            </span>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-pine-900 sm:text-4xl md:text-[3rem]">
              Your study abroad partners, since 2009
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pine-700/85">
              Karl Konsult International is a team of overseas education consultants in
              Jaipur who genuinely care about where you end up. We&apos;ve guided
              thousands of students to top universities across the UK, Canada, Australia,
              Europe and beyond — and we treat your dream like it&apos;s our own.
            </p>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-all hover:-translate-y-0.5 hover:border-emerald-600"
            >
              Learn more about us
              <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal direction="left">
            <div className="grid gap-4 sm:grid-cols-1">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-emerald-100 bg-bone p-6 transition-colors hover:border-emerald-200"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-600 text-white">
                    <p.Icon size={24} weight="fill" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-pine-900">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-pine-700/75">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
