import { Reveal } from "@/components/ui/Reveal";

/**
 * Partner universities as a logo wall. Real university wordmarks are not
 * available as open SVGs, so each is a generated monogram mark (initials in a
 * ring) rendered in the page's single accent. Logo-only: no category labels.
 */
const partners = [
  { initials: "UW", name: "University of Waterloo" },
  { initials: "TCD", name: "Trinity College Dublin" },
  { initials: "UCB", name: "University College Birmingham" },
  { initials: "TUM", name: "Technical University of Munich" },
  { initials: "ARU", name: "Anglia Ruskin University" },
  { initials: "UNSW", name: "University of New South Wales" },
];

function Mark({ initials, name }: { initials: string; name: string }) {
  return (
    <div
      className="flex items-center justify-center gap-3 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
      title={name}
    >
      <svg width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
        <circle cx="23" cy="23" r="21" fill="none" stroke="#c8102e" strokeWidth="2" />
        <circle cx="23" cy="23" r="21" fill="none" stroke="#f2b322" strokeWidth="2" strokeDasharray="3 96" />
        <text
          x="23"
          y="24"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-display), sans-serif"
          fontSize={initials.length > 3 ? "11" : "13"}
          fontWeight="700"
          fill="#a50d26"
        >
          {initials}
        </text>
      </svg>
      <span className="hidden font-display text-sm font-semibold text-pine-800 sm:block">
        {name}
      </span>
    </div>
  );
}

export function Universities() {
  return (
    <section id="universities" className="border-y border-emerald-100 bg-bone py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
            Our Top Universities
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <Mark key={p.initials} {...p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
