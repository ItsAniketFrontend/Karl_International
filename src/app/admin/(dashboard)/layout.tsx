import type { ReactNode } from "react";
import Link from "next/link";
import {
  SquaresFour,
  Newspaper,
  Megaphone,
  GlobeHemisphereWest,
  CalendarBlank,
  GearSix,
  Envelope,
  SignOut,
  GraduationCap,
} from "@phosphor-icons/react/dist/ssr";
import { logoutAction } from "../actions/auth";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: SquaresFour },
  { href: "/admin/blog", label: "Blog Posts", icon: Newspaper },
  { href: "/admin/news", label: "News & Updates", icon: Megaphone },
  { href: "/admin/countries", label: "Country Pages", icon: GlobeHemisphereWest },
  { href: "/admin/intakes", label: "Intake Pages", icon: CalendarBlank },
  { href: "/admin/settings", label: "Site Settings", icon: GearSix },
  { href: "/admin/leads", label: "Enquiry Leads", icon: Envelope },
];

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Karl Konsult Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bone-deep text-pine-900">
      <div className="flex min-h-screen">
        <aside className="flex w-64 shrink-0 flex-col border-r border-pine-900/10 bg-pine-900 text-white">
          <div className="flex items-center gap-2.5 px-6 py-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600">
              <GraduationCap size={20} weight="fill" />
            </div>
            <div>
              <p className="text-sm font-bold leading-tight">Karl Konsult</p>
              <p className="text-xs text-white/60 leading-tight">Admin panel</p>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon size={19} />
                {label}
              </Link>
            ))}
          </nav>

          <form action={logoutAction} className="border-t border-white/10 px-3 py-4">
            <button
              type="submit"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <SignOut size={19} />
              Log out
            </button>
          </form>
        </aside>

        <main className="flex-1 overflow-x-hidden">
          <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 sm:py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
