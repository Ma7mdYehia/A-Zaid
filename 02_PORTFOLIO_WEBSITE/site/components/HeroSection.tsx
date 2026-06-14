"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

const PILLS = [
  { label: "Manufacturing",         pos: "top-[8%]  right-[-6%]", float: "hero-float-a", dot: "#2F7D5C" },
  { label: "Food Production",       pos: "top-[28%] right-[-10%]", float: "hero-float-b", dot: "#B88746" },
  { label: "Private Label",         pos: "top-[50%] right-[-4%]",  float: "hero-float-c", dot: "#2F7D5C" },
  { label: "Import & Distribution", pos: "top-[68%] right-[-8%]",  float: "hero-float-a", dot: "#1F5F46" },
  { label: "Regional Growth",       pos: "bottom-[6%] right-[-2%]", float: "hero-float-b", dot: "#B88746" },
] as const;

const STATS = [
  { value: "20+", label: "Years experience" },
  { value: "3",   label: "Core markets" },
  { value: "10+", label: "Ventures & roles" },
] as const;

export default function HeroSection() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  const reveal = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: "easeOut", delay },
        }
      : {};

  const popIn = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, scale: 0.92, y: 10 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const, delay },
        }
      : {};

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden px-4 sm:px-6 lg:px-12 py-12 lg:py-0"
    >
      {/* Soft blue-ivory gradient field behind the card */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(70% 65% at 72% 38%, rgba(191,227,244,0.55), transparent 65%), radial-gradient(55% 50% at 20% 70%, rgba(47,125,92,0.06), transparent 60%), radial-gradient(40% 45% at 88% 80%, rgba(184,135,70,0.05), transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto">
        {/* ── Main white card ──────────────────────────────────────────────── */}
        <motion.div
          {...(animate
            ? { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: "easeOut", delay: 0.05 } }
            : {})}
          className="w-full rounded-3xl bg-white border border-[#DDD4C5] shadow-[0_32px_80px_-24px_rgba(23,32,51,0.12)] overflow-visible"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] min-h-[560px] lg:min-h-[600px]">

            {/* ── Left — content ─────────────────────────────────────────── */}
            <div className="flex flex-col justify-center gap-6 px-8 sm:px-10 lg:px-14 py-12 lg:py-16">

              {/* Status chip */}
              <motion.span
                {...reveal(0.15)}
                className="inline-flex self-start items-center gap-2 rounded-full border border-[#2F7D5C]/30 bg-[#2F7D5C]/[0.07] px-3 py-1 text-[11px] sm:text-xs font-medium text-[#2F7D5C] tracking-wide"
              >
                <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
                {hero.statusChip}
              </motion.span>

              {/* Headline */}
              <motion.h1
                {...reveal(0.22)}
                className="font-display text-[#172033] text-5xl sm:text-6xl xl:text-7xl leading-[0.93] tracking-[0.01em]"
              >
                <span className="block">Build operating</span>
                <span className="block">companies</span>
                <span className="block text-[#2F7D5C]">across markets.</span>
              </motion.h1>

              {/* Value statement */}
              <motion.p
                {...reveal(0.3)}
                className="text-sm sm:text-[15px] text-[#5F6B7A] leading-relaxed max-w-lg"
              >
                {hero.valueStatement}
              </motion.p>

              {/* CTAs */}
              <motion.div
                {...reveal(0.38)}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:w-auto"
              >
                <a
                  href={hero.ctas.primary.href}
                  className="soft-light-sweep inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold bg-[#2F7D5C] text-white hover:bg-[#1F5F46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D5C] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {hero.ctas.primary.label}
                </a>
                <a
                  href={hero.ctas.secondary.href}
                  className="soft-light-sweep inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold border border-[#DDD4C5] bg-[#F7F3EA] text-[#172033] hover:border-[#2F7D5C]/40 hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7D5C]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {hero.ctas.secondary.label}
                </a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                {...reveal(0.46)}
                className="flex items-center gap-5 sm:gap-8 pt-2 border-t border-[#EBEBEB]"
              >
                {STATS.map((s, i) => (
                  <div key={s.label} className={`flex flex-col gap-0.5 ${i > 0 ? "pl-5 sm:pl-8 border-l border-[#EBEBEB]" : ""}`}>
                    <span className="font-display text-3xl sm:text-4xl text-[#172033] leading-none">{s.value}</span>
                    <span className="text-[10px] sm:text-xs text-[#7C8794] tracking-wide uppercase">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right — portrait + floating pills ──────────────────────── */}
            <div className="relative flex items-end justify-center order-first lg:order-none overflow-visible">
              {/* Portrait area */}
              <motion.div
                {...popIn(0.18)}
                className="relative w-full h-full min-h-[320px] lg:min-h-0"
              >
                {/* Portrait placeholder */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-tr-3xl lg:rounded-tl-none rounded-tl-3xl lg:rounded-br-3xl"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(191,227,244,0.55) 0%, rgba(231,244,238,0.60) 45%, rgba(247,243,234,0.80) 100%)",
                  }}
                />
                {/* Inner decorative rings */}
                <div
                  aria-hidden
                  className="absolute inset-[12%] rounded-full border border-[#DDD4C5]/60"
                />
                <div
                  aria-hidden
                  className="absolute inset-[26%] rounded-full border border-[#2F7D5C]/10"
                />
                {/* AZ monogram placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 select-none pointer-events-none">
                  <span className="font-display text-[80px] sm:text-[100px] lg:text-[120px] text-[#2F7D5C]/20 leading-none tracking-wider">
                    AZ
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#2F7D5C]/30">
                    Portrait
                  </span>
                </div>
                {/* TODO: Replace with real portrait */}
                {/* <Image src="/portrait.jpg" alt="Abdulrahman Zaid" fill className="object-cover object-top rounded-tr-3xl lg:rounded-tl-none rounded-tl-3xl lg:rounded-br-3xl" priority /> */}
              </motion.div>

              {/* Floating pill labels */}
              {PILLS.map((pill, i) => (
                <motion.div
                  key={pill.label}
                  {...popIn(0.34 + i * 0.08)}
                  className={`absolute ${pill.pos} ${pill.float} z-10`}
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center gap-2 rounded-full bg-white border border-[#DDD4C5] px-3.5 py-1.5 shadow-[0_8px_24px_-8px_rgba(23,32,51,0.18)] whitespace-nowrap">
                    <span
                      aria-hidden
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: pill.dot }}
                    />
                    <span className="text-[11px] sm:text-xs font-semibold text-[#172033]">
                      {pill.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Location line below card */}
        <motion.div
          {...reveal(0.54)}
          className="inline-flex items-center gap-2 mt-5 ml-2 text-xs text-[#5F6B7A]"
        >
          <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
          {hero.location}
        </motion.div>
      </div>
    </section>
  );
}
