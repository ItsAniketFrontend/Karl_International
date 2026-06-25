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
    <section id="why-us" className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal direction="right" className="relative order-2 lg:order-1">
          {/* playful decor behind the image */}
          <div className="absolute -left-8 -top-8 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 -z-0 h-44 w-44 blob bg-emerald-200/60 blur-2xl" />
          <div className="dot-grid absolute -bottom-3 left-6 -z-0 h-24 w-32 opacity-60" />

          <div className="relative overflow-hidden rounded-[36px] ring-4 ring-white shadow-[0_30px_60px_-28px_rgba(21,35,63,0.4)]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=75"
              alt="A Karl Konsult counsellor guiding a student through university and visa options"
              width={1100}
              height={1000}
              className="h-[460px] w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-gold-400 px-5 py-4 shadow-[0_16px_30px_-12px_rgba(255,198,46,0.7)] sm:block">
            <p className="text-2xl font-extrabold leading-none text-pine-900">98%</p>
            <p className="mt-1 text-xs font-semibold text-pine-800">Student visa success rate</p>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Why Karl Konsult International?
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-pine-900 md:text-[2.95rem]">
              Honest guidance that puts your success first
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pine-700/85">
              Choosing where to study is one of the biggest decisions you&apos;ll ever
              make — and you shouldn&apos;t make it alone. Our counsellors build every
              plan around <strong>your</strong> scores, budget and goals, explain each
              step in plain language, and stay with you from your first question to your
              first day on campus. Transparent advice, real support, no surprises.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-emerald-100 bg-bone p-5 transition-colors hover:border-emerald-200"
                >
                  <p className="font-display text-3xl font-extrabold text-emerald-600 md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-pine-700/75">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
