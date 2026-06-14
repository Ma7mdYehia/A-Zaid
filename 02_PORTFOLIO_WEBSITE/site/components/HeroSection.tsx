"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";
import { useMouseGlow } from "@/lib/useMouseGlow";
import InteractiveHeroOrb from "@/components/InteractiveHeroOrb";

export default function HeroSection() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;
  const glowRef = useMouseGlow<HTMLElement>();

  const reveal = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: "easeOut", delay },
        }
      : {};

  return (
    <section
      ref={glowRef}
      data-glow
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 lg:px-24 py-24"
    >
      <InteractiveHeroOrb />
      <div aria-hidden className="hero-light-field" />

      <motion.p
        {...reveal(0.5)}
        aria-hidden
        className="hidden lg:block absolute left-[5%] xl:left-[7%] top-[14%] font-hand text-[#3DBA8C]/85 text-2xl xl:text-3xl leading-tight max-w-[210px] select-none z-10"
      >
        <span className="inline-block -rotate-6">
          I build operating companies,
          <br />
          not just job titles.
        </span>
      </motion.p>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-5xl">
        <motion.span
          {...reveal(0.04)}
          className="inline-flex items-center gap-2 rounded-full border border-[#3DBA8C]/30 bg-[#3DBA8C]/[0.08] px-3 py-1 text-[11px] sm:text-xs font-medium text-[#3DBA8C] tracking-wide"
        >
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]" />
          {hero.statusChip}
        </motion.span>

        <motion.h1
          {...reveal(0.08)}
          aria-label={hero.name}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-display text-[#E8EDF2] leading-[0.92] tracking-[0.01em] text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
        >
          <span aria-hidden>Abdulrahman</span>
          <span aria-hidden className="inline-flex items-center gap-x-5">
            <span className="relative inline-flex shrink-0 h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-full bg-[#0F1724] ring-1 ring-[#3DBA8C]/40 shadow-[0_0_34px_rgba(61,186,140,0.28)] items-center justify-center text-[#3DBA8C] text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">
              AZ
            </span>
            <span>Zaid</span>
          </span>
        </motion.h1>

        <motion.p
          {...reveal(0.18)}
          className="text-sm sm:text-base lg:text-lg font-medium text-[#3DBA8C] tracking-wide max-w-xl"
        >
          {hero.title}
        </motion.p>

        <motion.p
          {...reveal(0.24)}
          className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl"
        >
          {hero.valueStatement}
        </motion.p>

        <motion.div
          {...reveal(0.32)}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-1"
        >
          <a
            href={hero.ctas.primary.href}
            className="soft-light-sweep inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-[#3DBA8C] text-[#0B1220] hover:bg-[#35a87d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DBA8C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            {hero.ctas.primary.label}
          </a>
          <a
            href={hero.ctas.secondary.href}
            className="soft-light-sweep inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.14] bg-white/[0.03] text-[#E8EDF2] hover:border-[#3DBA8C]/40 hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3DBA8C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
          >
            {hero.ctas.secondary.label}
          </a>
        </motion.div>

        <motion.p
          {...reveal(0.4)}
          aria-hidden
          className="lg:hidden font-hand text-[#3DBA8C]/85 text-2xl leading-tight mt-1 select-none"
        >
          I build operating companies, not just job titles.
        </motion.p>
      </div>

      <div className="absolute bottom-[88px] sm:bottom-24 inset-x-0 z-10 flex justify-center">
        <motion.a
          {...reveal(0.42)}
          href="#about"
          aria-label="Scroll to next section"
          className="w-10 h-10 rounded-full border border-[#3DBA8C]/40 bg-[#3DBA8C]/[0.06] flex items-center justify-center text-[#3DBA8C] hover:bg-[#3DBA8C]/[0.14] hover:border-[#3DBA8C]/60 transition-colors focus-visible:ring-2 focus-visible:ring-[#3DBA8C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]"
        >
          <ChevronDown size={18} strokeWidth={2} className="scroll-bob" aria-hidden />
        </motion.a>
      </div>

      <div className="absolute bottom-8 sm:bottom-10 inset-x-0 z-10 flex justify-center px-6">
        <motion.div
          {...reveal(0.5)}
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#94A3B8]/80"
        >
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]" />
          {hero.location}
        </motion.div>
      </div>
    </section>
  );
}
