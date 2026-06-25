import Image from "next/image";
import { Star, Quotes } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Two flavours of social proof: study-abroad placements and language-coaching
 * results. Same card, different data + heading, rendered as separate sections so
 * each sits in its own place in the page flow.
 *
 * Portraits use Unsplash faces as placeholders — swap for real student photos
 * (with consent) before launch. See REPLACE-BEFORE-LAUNCH.md.
 */

export type Review = {
  quote: string;
  name: string;
  role: string;
  img: string;
};

const portrait = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=160&h=160&q=70`;

const studyReviews: Review[] = [
  {
    quote:
      "They reworked my SOP twice and spotted a funding gap I'd completely missed. My Canada student visa came through in three weeks — I still can't believe how smooth they made it.",
    name: "Ananya Rathore",
    role: "MS Data Science · University of Waterloo, Canada",
    img: portrait("1494790108377-be9c29b29330"),
  },
  {
    quote:
      "I had no idea where to even begin. My counsellor explained every option in plain Hindi and English, and never pushed me toward anything. I'm now studying exactly where I dreamed of.",
    name: "Rahul Verma",
    role: "MSc Engineering · University of Manchester, UK",
    img: portrait("1500648767791-00dcc994a43e"),
  },
  {
    quote:
      "Honest advice from day one. They actually talked me out of an over-priced course and into a better-ranked one in Ireland. That's when I knew I could trust them.",
    name: "Simran Kaur",
    role: "MSc Marketing · Trinity College Dublin, Ireland",
    img: portrait("1438761681033-6461ffad8d80"),
  },
];

const languageReviews: Review[] = [
  {
    quote:
      "I walked into IELTS coaching with a 5.5 and walked out with a 7. The batch was small enough that the trainer knew exactly what I kept getting wrong.",
    name: "Devansh Mehta",
    role: "IELTS 7.0 · now at TU Munich, Germany",
    img: "/student-1.png",
  },
  {
    quote:
      "Reached B1 German faster than I expected. The Goethe-style classes made my blocked-account and visa process so much easier.",
    name: "Neha Sharma",
    role: "German A1–B1 · studying in Germany",
    img: portrait("1534528741775-53994a69daeb"),
  },
  {
    quote:
      "Cleared PTE with a 79+ on my second attempt. The mock tests felt exactly like the real thing, so test day wasn't scary at all.",
    name: "Karan Singh",
    role: "PTE 79+ · admission to Australia",
    img: portrait("1507003211169-0a1dd7228f2d"),
  },
];

function TestimonialsBlock({
  id,
  tag,
  heading,
  sub,
  reviews,
  tinted = false,
}: {
  id: string;
  tag: string;
  heading: string;
  sub: string;
  reviews: Review[];
  tinted?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-14 sm:py-16 lg:py-24 ${tinted ? "bg-bone" : "bg-white"}`}
    >
      <div className="pointer-events-none absolute -left-20 top-1/2 -z-0 h-72 w-72 rounded-full bg-gold-300/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            {tag}
          </span>
          <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.07] tracking-tight text-pine-900 sm:text-4xl md:text-[3rem]">
            {heading}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-pine-700/80">{sub}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_16px_38px_-28px_rgba(21,35,63,0.5)] transition-all duration-300 hover:-translate-y-1">
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
                    src={r.img}
                    alt={r.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-pine-900">{r.name}</p>
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

export function Testimonials() {
  return (
    <TestimonialsBlock
      id="testimonials"
      tag="Study abroad success stories"
      heading="Students who got there — with us"
      sub="Real admissions and visa approvals from students who started exactly where you are now."
      reviews={studyReviews}
    />
  );
}

export function LanguageTestimonials() {
  return (
    <TestimonialsBlock
      id="coaching-testimonials"
      tag="Language coaching results"
      heading="From first class to target score"
      sub="IELTS, PTE and foreign-language students who hit the score their offer needed."
      reviews={languageReviews}
      tinted
    />
  );
}
