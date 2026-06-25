"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Star,
  CheckCircle,
  GraduationCap,
  Sparkle,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { EnquiryButton } from "@/components/ui/EnquiryButton";
import { Cloud } from "@/components/ui/Decor";

const ease = [0.16, 1, 0.3, 1] as const;

const rail = [
  { value: "5,000+", label: "students placed" },
  { value: "98%", label: "visa success" },
  { value: "16", label: "years guiding" },
];

const flagStrip = ["au", "gb", "us", "de", "fr", "nz"];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-100 via-emerald-50 to-bone">
      {/* sky decor */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Cloud className="left-[6%] top-[16%] w-28 text-white animate-floaty" />
        <Cloud className="right-[10%] top-[10%] w-20 text-white/90 animate-floaty-slow" />
        <Cloud className="left-[42%] top-[6%] w-16 text-white/80 animate-floaty" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-gold-300/40 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-coral-300/30 blur-3xl" />
        <div className="dot-grid absolute bottom-10 right-[6%] h-28 w-44 opacity-50" />
      </div>

      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8 lg:pb-28 lg:pt-16">
        {/* LEFT */}
        <div>
          <motion.div
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm ring-1 ring-emerald-100"
          >
            <Sparkle size={15} weight="fill" className="text-gold-500" />
            Trusted study abroad consultants in Jaipur, since 2009
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 font-display text-[2.15rem] font-bold leading-[1.06] tracking-tight text-pine-900 sm:text-5xl lg:text-[3.9rem]"
          >
            Study abroad with{" "}
            <span className="relative inline-block text-emerald-600">
              confidence
              <svg
                aria-hidden
                viewBox="0 0 200 16"
                className="absolute -bottom-2 left-0 w-full text-gold-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 11c46-9 130-11 194-5"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
            <br />
            From university selection to visa approval.
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-[48ch] text-lg leading-relaxed text-pine-700"
          >
            Dreaming of studying in the UK, Canada, Australia or Europe? We&apos;re with
            you at every step — choosing the right course, prepping for IELTS or PTE,
            applying for scholarships and getting your student visa approved.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <EnquiryButton size="lg">
              Book free counselling
              <ArrowRight size={18} weight="bold" />
            </EnquiryButton>
            <EnquiryButton variant="ghost" size="lg">
              Check eligibility
            </EnquiryButton>
            <Button href="#destinations" variant="outline" size="lg">
              Explore destinations
            </Button>
          </motion.div>

          {/* trusted-by flag strip + rating */}
          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {flagStrip.map((code) => (
                  <span
                    key={code}
                    className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-white ring-2 ring-bone"
                  >
                    <Image
                      src={`https://flagcdn.com/h40/${code}.png`}
                      alt=""
                      width={24}
                      height={16}
                      className="h-4 w-6 rounded-[2px] object-cover"
                    />
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-pine-700">9 study destinations</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={17} weight="fill" className="text-gold-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-pine-700">
                4.9/5 · 1,200+ reviews
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          {/* playful blobs */}
          <div className="absolute -right-6 -top-6 -z-0 h-44 w-44 blob bg-gold-300/60 blur-2xl" />
          <div className="absolute -bottom-10 -left-8 -z-0 h-48 w-48 blob bg-coral-300/50 blur-2xl" />

          {/* real student photo */}
          <div className="relative animate-floaty-slow overflow-hidden rounded-[2.5rem] ring-4 ring-white shadow-[0_40px_80px_-32px_rgba(21,35,63,0.45)]">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=75"
              alt="Happy international student celebrating their university admission and study abroad visa"
              width={1200}
              height={1100}
              priority
              className="aspect-[12/11] h-auto w-full object-cover"
            />
          </div>

          {/* floating "visa approved" chip, top-left */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease }}
            className="absolute -left-3 top-10 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(21,35,63,0.45)] sm:-left-6"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle size={20} weight="fill" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-pine-900">Visa approved</p>
              <p className="text-xs text-pine-700/60">in 3 weeks</p>
            </div>
          </motion.div>

          {/* floating "admit" chip, top-right */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease }}
            className="absolute -right-2 top-1/3 hidden items-center gap-2.5 rounded-2xl bg-pine-900 px-4 py-3 text-white shadow-[0_18px_40px_-18px_rgba(21,35,63,0.55)] sm:flex"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-400 text-pine-900">
              <GraduationCap size={20} weight="fill" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold">Offer letter</p>
              <p className="text-xs text-white/60">University of Waterloo</p>
            </div>
          </motion.div>

          {/* stat pills */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 divide-x divide-emerald-100 rounded-3xl border border-emerald-100 bg-white px-0.5 shadow-[0_24px_50px_-20px_rgba(21,35,63,0.4)]"
          >
            {rail.map((s) => (
              <div key={s.label} className="px-3.5 py-3.5 text-center sm:px-5 sm:py-4">
                <p className="font-display text-2xl font-bold leading-none text-emerald-600">
                  {s.value}
                </p>
                <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-pine-700/60 sm:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
