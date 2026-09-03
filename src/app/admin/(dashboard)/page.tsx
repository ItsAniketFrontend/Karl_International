import Link from "next/link";
import {
  Newspaper,
  Megaphone,
  GlobeHemisphereWest,
  CalendarBlank,
  GearSix,
  Envelope,
} from "@phosphor-icons/react/dist/ssr";

const cards = [
  { href: "/admin/blog", label: "Blog Posts", desc: "Write and manage articles", icon: Newspaper },
  { href: "/admin/news", label: "News & Updates", desc: "Announcements and alerts", icon: Megaphone },
  { href: "/admin/countries", label: "Country Pages", desc: "Per-country content overrides", icon: GlobeHemisphereWest },
  { href: "/admin/intakes", label: "Intake Pages", desc: "Full intake landing pages", icon: CalendarBlank },
  { href: "/admin/settings", label: "Site Settings", desc: "Contact info & social links", icon: GearSix },
  { href: "/admin/leads", label: "Enquiry Leads", desc: "View form submissions", icon: Envelope },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-pine-900">Dashboard</h1>
      <p className="mt-1 text-sm text-pine-700/65">
        Manage the content shown on the public Karl Konsult website.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ href, label, desc, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-3 rounded-2xl border border-pine-700/15 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
              <Icon size={22} weight="bold" />
            </div>
            <div>
              <p className="font-bold text-pine-900">{label}</p>
              <p className="text-sm text-pine-700/60">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
