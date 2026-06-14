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
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center px-6 lg:px-24 py-20"
    >
      <InteractiveHeroOrb />
      <div aria-hidden className="hero-light-field" />

      <motion.p
        {...reveal(0.5)}
        aria-hidden
        className="hidden lg:block absolute left-[5%] xl:left-[7%] top-[18%] font-hand text-[#2F7D5C]/75 text-2xl xl:text-3xl leading-tight max-w-[210px] select-none z-10"
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
          className="inline-flex items-center gap-2 rounded-full border border-[#2F7D5C]/30 bg-[#2F7D5C]/[0.07] px-3 py-1 text-[11px] sm:text-xs font-medium text-[#2F7D5C] tracking-wide"
        >
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
          {hero.statusChip}
        </motion.span>

        <motion.h1
          {...reveal(0.08)}
          aria-label={hero.name}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 font-display text-[#172033] leading-[0.92] tracking-[0.01em] text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
        >
          <span aria-hidden>Abdulrahman</span>
          <span aria-hidden className="inline-flex items-center gap-x-5">
            <span className="relative inline-flex shrink-0 h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-full bg-white ring-1 ring-[#2F7D5C]/35 shadow-[0_0_28px_rgba(47,125,92,0.20)] items-center justify-center text-[#2F7D5C] text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">
              AZ
            </span>
            <span>Zaid</span>
          </span>
        </motion.h1>

        <motion.p
          {...reveal(0.18)}
          className="text-sm sm:text-base lg:text-lg font-medium text-[#2F7D5C] tracking-wide max-w-xl"
        >
          {hero.title}
        </motion.p>

        <motion.p
          {...reveal(0.24)}
          className="text-base sm:text-lg text-[#5F6B7A] leading-relaxed max-w-2xl"
        >
          {hero.valueStatement}
        </motion.p>

        <motion.div
          {...reveal(0.32)}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-1"
        >
          <a
            href={hero.ctas.primary.href}
            className="soft-light-sweep inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-[#2F7D5C] text-white hover:bg-[#1F5F46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D5C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EA]"
          >
            {hero.ctas.primary.label}
          </a>
          <a
            href={hero.ctas.secondary.href}
            className="soft-light-sweep inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold border border-[#DDD4C5] bg-white text-[#172033] hover:border-[#2F7D5C]/40 hover:bg-[#F7F3EA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D5C]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EA]"
          >
            {hero.ctas.secondary.label}
          </a>
        </motion.div>

        <motion.p
          {...reveal(0.4)}
          aria-hidden
          className="lg:hidden font-hand text-[#2F7D5C]/75 text-2xl leading-tight mt-1 select-none"
        >
          I build operating companies, not just job titles.
        </motion.p>
      </div>

      <div className="absolute bottom-20 sm:bottom-24 inset-x-0 z-10 flex justify-center">
        <motion.a
          {...reveal(0.42)}
          href="#about"
          aria-label="Scroll to next section"
          className="w-10 h-10 rounded-full border border-[#2F7D5C]/35 bg-[#2F7D5C]/[0.06] flex items-center justify-center text-[#2F7D5C] hover:bg-[#2F7D5C]/[0.12] hover:border-[#2F7D5C]/55 transition-colors focus-visible:ring-2 focus-visible:ring-[#2F7D5C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EA]"
        >
          <ChevronDown size={18} strokeWidth={2} className="scroll-bob" aria-hidden />
        </motion.a>
      </div>

      <div className="absolute bottom-7 sm:bottom-9 inset-x-0 z-10 flex justify-center px-6">
        <motion.div
          {...reveal(0.5)}
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#5F6B7A]/80"
        >
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
          {hero.location}
        </motion.div>
      </div>
    </section>
  );
}
