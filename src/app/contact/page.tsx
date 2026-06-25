import type { Metadata } from "next";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  WhatsappLogo,
  Sparkle,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { StickyActions } from "@/components/ui/StickyActions";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Cloud } from "@/components/ui/Decor";

export const metadata: Metadata = {
  title: "Contact Us | Karl Konsult International",
  description:
    "Talk to Karl Konsult International. Call, WhatsApp, email or book a free counselling session for studying abroad.",
};

const channels = [
  {
    Icon: Phone,
    label: "Call us",
    value: "+91 97723 00000",
    href: "tel:+919772300000",
    tint: "bg-emerald-50 text-emerald-600",
  },
  {
    Icon: WhatsappLogo,
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/919772300000",
    tint: "bg-[#25D366]/15 text-[#1faa52]",
  },
  {
    Icon: EnvelopeSimple,
    label: "Email",
    value: "hello@karlkonsult.com",
    href: "mailto:hello@karlkonsult.com",
    tint: "bg-coral-400/15 text-coral-500",
  },
];

const promises = [
  "Reply within one working day",
  "No fee, no obligation",
  "Honest, outcome-first advice",
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ===== HERO with embedded form ===== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <Cloud className="left-[7%] top-[20%] w-24 text-white animate-floaty" />
            <Cloud className="right-[14%] top-[10%] w-16 text-white/80 animate-floaty-slow" />
            <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-gold-300/40 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-coral-300/30 blur-3xl" />
            <div className="dot-grid absolute bottom-10 left-[5%] h-24 w-40 opacity-50" />
          </div>

          <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-16">
            {/* left: pitch + channels */}
            <div className="lg:pt-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  <Sparkle size={15} weight="fill" className="text-gold-500" />
                  Contact us
                </span>
                <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-pine-900 sm:text-5xl lg:text-[4rem]">
                  Let's plan your{" "}
                  <span className="relative inline-block text-emerald-600">
                    next step
                    <svg
                      aria-hidden
                      viewBox="0 0 220 16"
                      className="absolute -bottom-2 left-0 w-full text-gold-400"
                      preserveAspectRatio="none"
                    >
                      <path d="M3 11c52-9 150-11 214-5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
                <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-pine-700">
                  Call, WhatsApp, email, or send the form. A senior counsellor gets back
                  to you within a day, no pressure.
                </p>
              </Reveal>

              {/* channel cards */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {channels.map((c, i) => (
                  <Reveal key={c.label} delay={i * 0.06}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col gap-3 rounded-2xl border border-emerald-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(21,35,63,0.5)]"
                    >
                      <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.tint} transition-transform duration-300 group-hover:-translate-y-0.5`}>
                        <c.Icon size={22} weight="fill" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-pine-700/55">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-pine-900">{c.value}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>

              {/* promises */}
              <Reveal delay={0.2}>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {promises.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-pine-700">
                      <CheckCircle size={18} weight="fill" className="text-emerald-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* right: form card */}
            <Reveal direction="left">
              <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(21,35,63,0.5)] sm:p-8">
                <h2 className="font-display text-2xl font-bold text-pine-900">
                  Send us an enquiry
                </h2>
                <p className="mt-1.5 text-pine-700/70">
                  Tell us a little about you and we will call you back.
                </p>
                <div className="mt-6">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== OFFICE + MAP ===== */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700">
                Visit us
              </span>
              <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-pine-900 sm:text-4xl">
                Come say hello in Jaipur
              </h2>
            </Reveal>

            <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_1.4fr]">
              {/* office card */}
              <Reveal>
                <div className="flex h-full flex-col justify-between rounded-[2rem] bg-pine-900 p-8 text-white shadow-[0_30px_70px_-40px_rgba(21,35,63,0.7)] sm:p-10">
                  <div>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-400 text-pine-900">
                      <MapPin size={28} weight="fill" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold">Head office</h3>
                    <p className="mt-3 leading-relaxed text-white/75">
                      3rd Floor, Crystal Mall, C-Scheme,
                      <br />
                      Jaipur, Rajasthan 302001
                    </p>
                  </div>

                  <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3">
                      <Clock size={20} weight="fill" className="shrink-0 text-gold-300" />
                      <p className="text-sm text-white/80">Mon to Sat · 10:00 AM to 7:00 PM</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={20} weight="fill" className="shrink-0 text-gold-300" />
                      <a href="tel:+919772300000" className="text-sm text-white/80 hover:text-white">
                        +91 97723 00000
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* map */}
              <Reveal direction="left">
                <div className="h-full overflow-hidden rounded-[2rem] border border-emerald-100 shadow-[0_24px_50px_-34px_rgba(21,35,63,0.4)]">
                  <iframe
                    title="Karl Konsult International office location"
                    src="https://www.google.com/maps?q=C-Scheme,Jaipur,Rajasthan&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[320px] w-full sm:h-full sm:min-h-[420px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyActions />
    </>
  );
}
