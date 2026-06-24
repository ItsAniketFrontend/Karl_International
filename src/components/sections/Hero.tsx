"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, GlobeHemisphereEast } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;

const rail = [
  { value: "5,000+", label: "students placed" },
  { value: "98%", label: "visa success" },
  { value: "16", label: "years guiding" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gold-300/25 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.div
            {...rise(0)}
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700"
          >
            <GlobeHemisphereEast size={18} weight="duotone" />
            Overseas education, since 2009
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 pb-1 font-display text-[2.7rem] font-semibold leading-[1.08] tracking-tight text-pine-900 sm:text-6xl lg:text-[4.75rem]"
          >
            Study abroad,
            <br />
            <span className="italic font-medium text-emerald-600">guided</span> the whole way.
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-[46ch] text-lg leading-relaxed text-pine-700/80"
          >
            From the first shortlist to the visa stamp, Karl Konsult places students at
            universities they are proud of, with advice that puts the outcome first.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#counselling" size="lg">
              Book free counselling
              <ArrowRight size={18} weight="bold" />
            </Button>
            <a
              href="tel:+919772300000"
              className="text-[15px] font-semibold text-pine-800 underline-offset-4 hover:underline"
            >
              or call +91 97723 00000
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_50px_90px_-40px_rgba(28,13,17,0.55)]">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
              alt="Graduates throwing caps in the air on a university campus"
              width={1200}
              height={1400}
              priority
              className="h-[440px] w-full object-cover sm:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-900/45 via-transparent to-transparent" />
          </div>

          {/* vertical stat rail, replaces the single floating chip */}
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 divide-x divide-emerald-100 rounded-2xl border border-emerald-100 bg-white px-2 shadow-[0_24px_50px_-24px_rgba(28,13,17,0.45)] sm:left-auto sm:right-6 sm:translate-x-0">
            {rail.map((s) => (
              <div key={s.label} className="px-5 py-4 text-center">
                <p className="font-display text-2xl font-semibold leading-none text-emerald-700">
                  {s.value}
                </p>
                <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-pine-700/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
