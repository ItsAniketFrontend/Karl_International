import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { socialMeta, type SocialKey } from "@/components/ui/SocialIcons";
import { destinations, languageCourses } from "@/lib/data";

const studyLinks = destinations.map((d) => ({ label: `Study in ${d.name}`, href: "#destinations" }));

const coachingLinks = [
  ...languageCourses.slice(0, 5).map((c) => ({ label: c.name, href: c.href ?? "#language-coaching" })),
  { label: "MBBS Abroad", href: "#mbbs" },
];

const exploreLinks = [
  { label: "Intakes", href: "#destinations" },
  { label: "Scholarships", href: "#services" },
  { label: "Visa Success Stories", href: "#testimonials" },
  { label: "Country Guides", href: "#blogs" },
  { label: "Blogs", href: "#blogs" },
  { label: "FAQ", href: "/contact" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why Karl Konsult", href: "#why-us" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Legal", href: "#" },
];

const footerSocials: SocialKey[] = ["instagram", "facebook", "linkedin", "youtube", "whatsapp"];

function LinkCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-gold-300">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-white/65 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-pine-900 text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt="Karl Konsult International"
              width={220}
              height={158}
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Trusted overseas education consultants helping students reach the right
              university — with honest guidance from your first question to your student
              visa approval.
            </p>
            <div className="mt-6 flex gap-2.5">
              {footerSocials.map((key) => {
                const { label, Icon } = socialMeta[key];
                return (
                  <Link
                    key={key}
                    href="#"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-emerald-600"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          <LinkCol title="Study Abroad" links={studyLinks} />
          <LinkCol title="Coaching" links={coachingLinks} />
          <LinkCol title="Explore" links={exploreLinks} />
        </div>

        {/* second link row */}
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <LinkCol title="Company" links={companyLinks} />
          <LinkCol title="Legal" links={legalLinks} />

          <div className="col-span-2 grid gap-5 sm:grid-cols-1 lg:col-span-2 lg:grid-cols-1">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gold-300">Get in touch</h3>
            <div className="space-y-3">
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
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Karl Konsult International. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
