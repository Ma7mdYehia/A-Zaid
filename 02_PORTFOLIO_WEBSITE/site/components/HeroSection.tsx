"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

/* Business pillars rendered as floating 3D modules around the AZ core.
   Visual labels only — no business claims. */
const PILLARS = [
  { label: "Manufacturing",   pos: "top-[2%] left-[6%]",      float: "hero-float-a", tilt: "rotate-[-7deg]", dot: "#2F7D5C" },
  { label: "Food Production", pos: "top-[10%] right-[2%]",    float: "hero-float-b", tilt: "rotate-[6deg]",  dot: "#B88746" },
  { label: "Import",          pos: "top-[46%] left-[-2%]",    float: "hero-float-c", tilt: "rotate-[-5deg]", dot: "#1F5F46" },
  { label: "Distribution",    pos: "bottom-[10%] right-[3%]", float: "hero-float-a", tilt: "rotate-[5deg]",  dot: "#2F7D5C" },
  { label: "Regional Growth", pos: "bottom-[1%] left-[10%]",  float: "hero-float-b", tilt: "rotate-[-4deg]", dot: "#B88746" },
] as const;

export default function HeroSection() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  const reveal = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, ease: "easeOut", delay },
        }
      : {};

  const popIn = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 14, scale: 0.94 },
          animate: { opacity: 1, y: 0, scale: 1 },
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay },
        }
      : {};

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-6 lg:px-24 py-16 lg:py-0 flex items-center"
    >
      {/* Soft ambient wash — warm ivory, deep green, muted gold */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 30%, rgba(47,125,92,0.08), transparent 60%), radial-gradient(45% 45% at 90% 80%, rgba(184,135,70,0.06), transparent 65%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-10 items-center">

        {/* ── Left — content ─────────────────────────────────────────────── */}
        <div className="flex flex-col items-start gap-6 text-left">
          <motion.span
            {...reveal(0.04)}
            className="inline-flex items-center gap-2 rounded-full border border-[#2F7D5C]/30 bg-[#2F7D5C]/[0.07] px-3 py-1 text-[11px] sm:text-xs font-medium text-[#2F7D5C] tracking-wide"
          >
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
            {hero.statusChip}
          </motion.span>

          <motion.h1
            {...reveal(0.08)}
            className="font-display text-[#172033] leading-[0.92] tracking-[0.01em] text-6xl sm:text-7xl xl:text-8xl"
          >
            <span className="block">Abdulrahman</span>
            <span className="block text-[#2F7D5C]">Zaid</span>
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

          <motion.div
            {...reveal(0.4)}
            className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#5F6B7A] mt-1"
          >
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
            {hero.location}
          </motion.div>
        </div>

        {/* ── Right — 3D operating-system visual ─────────────────────────── */}
        <div className="relative flex items-center justify-center order-first lg:order-none">
          <div className="relative w-full max-w-[360px] sm:max-w-[440px] aspect-square [perspective:1500px]">

            {/* Soft orbit rings */}
            <div
              aria-hidden
              className="absolute inset-[8%] rounded-full border border-[#DDD4C5]/70 hero-spin-slow"
            />
            <div
              aria-hidden
              className="absolute inset-[20%] rounded-full border border-[#2F7D5C]/15"
            />

            {/* 3D stage */}
            <div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateX(8deg)_rotateY(-16deg)]">

              {/* Central AZ tower — stacked depth layers + face */}
              <motion.div
                {...popIn(0.18)}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hero-float-c"
              >
                <div className="relative [transform-style:preserve-3d]">
                  {/* depth shadow layers */}
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-3xl bg-[#1F5F46]/25 translate-x-3 translate-y-4 blur-[2px]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-3xl bg-[#2F7D5C]/15 translate-x-1.5 translate-y-2"
                  />
                  {/* face */}
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white border border-[#DDD4C5] shadow-[0_24px_60px_-20px_rgba(31,95,70,0.45)] flex flex-col items-center justify-center gap-2">
                    {/* gold corner accent */}
                    <span
                      aria-hidden
                      className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#B88746]"
                    />
                    <span className="font-display text-6xl sm:text-7xl text-[#2F7D5C] leading-none tracking-wide">
                      AZ
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.28em] text-[#7C8794]">
                      Operating
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Floating business-pillar modules */}
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  {...popIn(0.3 + i * 0.09)}
                  className={`absolute ${pillar.pos} ${pillar.float}`}
                >
                  <div
                    className={`${pillar.tilt} flex items-center gap-2 rounded-xl bg-white border border-[#DDD4C5] px-3 py-2 shadow-[0_12px_28px_-12px_rgba(23,32,51,0.28)]`}
                  >
                    <span
                      aria-hidden
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: pillar.dot }}
                    />
                    <span className="text-[11px] sm:text-xs font-semibold text-[#172033] whitespace-nowrap">
                      {pillar.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
