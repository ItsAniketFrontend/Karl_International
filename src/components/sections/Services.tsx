import {
  ChatCircleDots,
  Compass,
  Exam,
  FileText,
  Trophy,
  Bank,
  AirplaneTilt,
  Suitcase,
  FirstAidKit,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryButton } from "@/components/ui/EnquiryButton";

/**
 * "Our Services" ordered to mirror the real student journey, from the first free
 * counselling call all the way to landing abroad. Numbered cards make the order
 * explicit without forcing a 9-wide horizontal stepper.
 */
const steps = [
  {
    n: "01",
    Icon: ChatCircleDots,
    title: "Free Counselling",
    desc: "A friendly, no-pressure session to understand your goals, budget and the right path for you.",
  },
  {
    n: "02",
    Icon: Compass,
    title: "Course & University Selection",
    desc: "A personalised shortlist of courses and universities matched to your profile and career plans.",
  },
  {
    n: "03",
    Icon: Exam,
    title: "Test Preparation",
    desc: "IELTS, PTE, Duolingo and foreign-language coaching with mock tests and targeted feedback.",
  },
  {
    n: "04",
    Icon: FileText,
    title: "Application Process",
    desc: "SOPs, LORs and application forms handled end-to-end so nothing slips through the cracks.",
  },
  {
    n: "05",
    Icon: Trophy,
    title: "Scholarship Assistance",
    desc: "We help you find and apply for scholarships and tuition waivers you actually qualify for.",
  },
  {
    n: "06",
    Icon: Bank,
    title: "Education Loan Support",
    desc: "Guidance on education loans, proof of funds and the paperwork lenders and visas expect.",
  },
  {
    n: "07",
    Icon: AirplaneTilt,
    title: "Visa Filing",
    desc: "Document checks, file preparation and interview practice for a confident, complete visa application.",
  },
  {
    n: "08",
    Icon: Suitcase,
    title: "Pre-Departure Guidance",
    desc: "Flights, forex, accommodation, packing and what to expect — so you land ready, not anxious.",
  },
  {
    n: "09",
    Icon: FirstAidKit,
    title: "MBBS Abroad",
    desc: "Dedicated support for medical aspirants at NMC-screened universities overseas.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-bone to-emerald-50/50 py-14 sm:py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-32 top-32 -z-0 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
            Our services
          </span>
          <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-pine-900 sm:text-4xl md:text-[3.4rem]">
            Everything you need, in{" "}
            <span className="text-emerald-600">one place</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-pine-700/75">
            From your first counselling call to your first day on campus, our study
            abroad consultants handle every step of the journey with you.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] bg-white p-6 ring-1 ring-emerald-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(21,35,63,0.5)]">
                <span className="pointer-events-none absolute right-5 top-3 font-display text-5xl font-extrabold text-emerald-50 transition-colors group-hover:text-emerald-100">
                  {s.n}
                </span>
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <s.Icon size={28} weight="fill" />
                </span>
                <h3 className="relative mt-5 font-display text-xl font-bold text-pine-900">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-pine-700/75">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* closing CTA band */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] bg-pine-900 p-7 text-center shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:flex-row sm:p-8 sm:text-left">
            <div>
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Not sure where to start?
              </h3>
              <p className="mt-1.5 text-white/65">
                Book a free counselling session and we&apos;ll map out your whole plan together.
              </p>
            </div>
            <EnquiryButton variant="ghost" size="lg" className="shrink-0">
              Book free counselling
            </EnquiryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
