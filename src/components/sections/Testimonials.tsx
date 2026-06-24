import Image from "next/image";
import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

const reviews = [
  {
    quote:
      "They reworked my SOP twice and flagged a funding gap I had missed. The Canada visa came through in three weeks.",
    name: "Ananya Rathore",
    role: "MS Data Science, University of Waterloo",
    seed: "ananya-portrait-student",
  },
  {
    quote:
      "I walked in with a 5.5 and left with a 7. The PTE batch was small enough that the trainer knew my weak spots.",
    name: "Devansh Mehta",
    role: "PTE Academic, now at TU Munich",
    seed: "devansh-portrait-student",
  },
  {
    quote:
      "Honest advice from day one. They talked me out of an expensive course and into a better-ranked one in Ireland.",
    name: "Simran Kaur",
    role: "MSc Marketing, Trinity College Dublin",
    seed: "simran-portrait-student",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-pine-900 md:text-[3.25rem]">
            Offers that changed the course of a life
          </h2>
          <p className="mt-5 max-w-xl text-lg text-pine-700/75">
            A few of the students now studying where they always hoped to.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-bone p-7">
                <Quotes size={32} weight="fill" className="text-gold-400" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} weight="fill" className="text-gold-500" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-pine-800">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-emerald-100 pt-5">
                  <Image
                    src={`https://picsum.photos/seed/${r.seed}/120/120`}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-pine-900">{r.name}</p>
                    <p className="text-xs text-pine-700/70">{r.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
