import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const columns = [
  {
    title: "Study Abroad",
    links: ["Canada", "United Kingdom", "Australia", "Germany", "Ireland", "United States"],
  },
  {
    title: "Services",
    links: ["Course mapping", "IELTS & PTE", "Education loans", "Visa filing", "MBBS abroad"],
  },
  {
    title: "Company",
    links: ["Why Us", "Insights", "Testimonials", "Careers", "Contact"],
  },
];

const socials = [
  { Icon: InstagramLogo, label: "Instagram" },
  { Icon: LinkedinLogo, label: "LinkedIn" },
  { Icon: FacebookLogo, label: "Facebook" },
  { Icon: WhatsappLogo, label: "WhatsApp" },
  { Icon: YoutubeLogo, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-pine-900 text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="inline-flex rounded-xl bg-white px-3 py-2">
              <Image src="/logo.png" alt="Karl Konsult International" width={150} height={64} className="h-12 w-auto" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Overseas education consultants helping students reach the right university,
              with honest guidance from shortlist to visa.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-emerald-600"
                >
                  <Icon size={19} weight="fill" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-gold-300">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-white/65 transition-colors hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin size={20} weight="fill" className="mt-0.5 shrink-0 text-gold-300" />
            <p className="text-sm text-white/70">
              3rd Floor, Crystal Mall, C-Scheme, Jaipur, Rajasthan 302001
            </p>
          </div>
          <a href="tel:+919772300000" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
            <Phone size={20} weight="fill" className="shrink-0 text-gold-300" />
            +91 97723 00000
          </a>
          <a href="mailto:hello@karlkonsult.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
            <EnvelopeSimple size={20} weight="fill" className="shrink-0 text-gold-300" />
            hello@karlkonsult.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Karl Konsult International. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
