import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { socialMeta, type SocialKey } from "@/components/ui/SocialIcons";

// Replace href + handle with your real profiles before launch.
const socials: { key: SocialKey; handle: string; href: string }[] = [
  { key: "instagram", handle: "@karlkonsult", href: "#" },
  { key: "facebook", handle: "/karlkonsult", href: "#" },
  { key: "linkedin", handle: "Karl Konsult Intl.", href: "#" },
  { key: "youtube", handle: "Karl Konsult", href: "#" },
  { key: "whatsapp", handle: "+91 97723 00000", href: "#" },
  { key: "x", handle: "@karlkonsult", href: "#" },
];

export function SocialLinks() {
  return (
    <section id="social" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-pine-900 md:text-[3rem]">
            Follow our students&apos; journeys
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
            Intake alerts, visa updates and real student wins — shared where you already scroll.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {socials.map(({ key, handle, href }) => {
              const { label, Icon, brand } = socialMeta[key];
              return (
                <Link
                  key={key}
                  href={href}
                  aria-label={label}
                  className="group flex flex-col items-center gap-3 rounded-3xl border border-emerald-100 bg-bone p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_40px_-24px_rgba(21,35,63,0.35)]"
                >
                  <span
                    className="grid h-14 w-14 place-items-center rounded-full text-white transition-transform group-hover:scale-110"
                    style={{ backgroundColor: brand }}
                  >
                    <Icon size={26} />
                  </span>
                  <span className="text-sm font-bold text-pine-900">{label}</span>
                  <span className="text-xs font-medium text-pine-700/65">{handle}</span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
