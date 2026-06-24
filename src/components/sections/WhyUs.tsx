import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "5,000+", label: "Students placed" },
  { value: "16 yrs", label: "Of guidance" },
  { value: "250+", label: "Partner universities" },
  { value: "98%", label: "Visa success" },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[28px] border border-emerald-100">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1100&auto=format&fit=crop"
              alt="A Karl Konsult counsellor reviewing university options with a student"
              width={1100}
              height={1000}
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-gold-400 px-5 py-4 shadow-lg sm:block">
            <p className="font-display text-2xl font-extrabold leading-none text-pine-900">No. 1</p>
            <p className="mt-1 text-xs font-semibold text-pine-800">Rated counselling, Rajasthan</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-pine-900 md:text-[2.85rem]">
              Guidance built on outcomes, not commissions
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pine-700/80">
              We are counsellors first. Every shortlist is built around your scores,
              budget and ambitions, then backed by a team that has handled thousands
              of applications and visas. You always know the real next step.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-emerald-100 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-extrabold text-emerald-600 md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-pine-700/70">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
