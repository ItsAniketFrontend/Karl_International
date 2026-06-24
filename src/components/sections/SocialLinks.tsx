import Link from "next/link";
import {
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  YoutubeLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

const socials = [
  { Icon: InstagramLogo, label: "Instagram", handle: "@karlkonsult", href: "#" },
  { Icon: LinkedinLogo, label: "LinkedIn", handle: "Karl Konsult Intl.", href: "#" },
  { Icon: FacebookLogo, label: "Facebook", handle: "/karlkonsult", href: "#" },
  { Icon: YoutubeLogo, label: "YouTube", handle: "Karl Konsult", href: "#" },
  { Icon: WhatsappLogo, label: "WhatsApp", handle: "+91 97723 00000", href: "#" },
  { Icon: XLogo, label: "X", handle: "@karlkonsult", href: "#" },
];

export function SocialLinks() {
  return (
    <section id="social" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-[1.12] tracking-tight text-pine-900 md:text-[3rem]">
            Follow the journey on social
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pine-700/75">
            Intake alerts, visa updates and student wins, shared where you already scroll.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {socials.map(({ Icon, label, handle, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-bone p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_40px_-24px_rgba(122,34,51,0.4)]"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Icon size={26} weight="fill" />
                </span>
                <span className="font-display text-sm font-bold text-pine-900">
                  {label}
                </span>
                <span className="text-xs font-medium text-pine-700/65">{handle}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
