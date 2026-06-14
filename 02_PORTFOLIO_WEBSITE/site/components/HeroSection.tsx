"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";

/* Pills repositioned to clear the face (upper-center area) */
const PILLS = [
  { label: "Manufacturing",         pos: "top-[5%]  left-[-2%]",   float: "hero-float-a", dot: "#2F7D5C" },
  { label: "Food Production",       pos: "top-[12%] right-[-4%]",  float: "hero-float-b", dot: "#B88746" },
  { label: "Private Label",         pos: "top-[38%] right-[-6%]",  float: "hero-float-c", dot: "#2F7D5C" },
  { label: "Import & Distribution", pos: "top-[56%] left-[-6%]",   float: "hero-float-a", dot: "#1F5F46" },
  { label: "Regional Growth",       pos: "top-[72%] right-[-2%]",  float: "hero-float-b", dot: "#B88746" },
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

  /* ── One-step scroll: wheel down on hero → jump to #about ─────── */
  const sectionRef = useRef<HTMLElement>(null);
  const inViewRef = useRef(false);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const io = new IntersectionObserver(
      ([entry]) => { inViewRef.current = entry.isIntersecting; },
      { threshold: 0.4 },
    );
    io.observe(section);

    const onWheel = (e: WheelEvent) => {
      if (!inViewRef.current || cooldownRef.current || e.deltaY <= 0) return;
      const about = document.getElementById("about");
      if (!about) return;
      e.preventDefault();
      cooldownRef.current = true;
      about.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { cooldownRef.current = false; }, 1200);
    };

    /* non-passive so preventDefault works */
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      io.disconnect();
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

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
      ref={sectionRef}
      id="home"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden px-6 sm:px-8 lg:px-16"
    >
      {/* Soft blue-ivory gradient field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(65% 60% at 75% 35%, rgba(191,227,244,0.55), transparent 65%), radial-gradient(55% 50% at 18% 75%, rgba(47,125,92,0.06), transparent 60%), radial-gradient(40% 45% at 90% 85%, rgba(184,135,70,0.05), transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[46fr_54fr] gap-10 lg:gap-4 items-end">

        {/* ── Left — content ──────────────────────────────────────────────── */}
        <div className="flex flex-col items-start gap-6 text-left order-last lg:order-none pb-12 lg:pb-16">

          <motion.span
            {...reveal(0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-[#2F7D5C]/30 bg-[#2F7D5C]/[0.07] px-3 py-1 text-[11px] sm:text-xs font-medium text-[#2F7D5C] tracking-wide"
          >
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
            {hero.statusChip}
          </motion.span>

          <motion.h1
            {...reveal(0.18)}
            className="font-display text-[#172033] text-5xl sm:text-6xl xl:text-7xl leading-[0.93] tracking-[0.01em]"
          >
            <span className="block">Build operating</span>
            <span className="block">companies</span>
            <span className="block text-[#2F7D5C]">across markets.</span>
          </motion.h1>

          <motion.p
            {...reveal(0.26)}
            className="text-sm sm:text-[15px] text-[#5F6B7A] leading-relaxed max-w-lg"
          >
            {hero.valueStatement}
          </motion.p>

          <motion.div
            {...reveal(0.34)}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
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

          {/* Stats row */}
          <motion.div
            {...reveal(0.42)}
            className="flex items-center gap-5 sm:gap-8 pt-4 mt-1 border-t border-[#DDD4C5]/70 w-full sm:w-auto"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className={`flex flex-col gap-0.5 ${i > 0 ? "pl-5 sm:pl-8 border-l border-[#DDD4C5]/70" : ""}`}>
                <span className="font-display text-3xl sm:text-4xl text-[#172033] leading-none">{s.value}</span>
                <span className="text-[10px] sm:text-xs text-[#7C8794] tracking-wide uppercase">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...reveal(0.5)}
            className="inline-flex items-center gap-2 mt-1 text-xs text-[#5F6B7A]"
          >
            <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
            {hero.location}
          </motion.div>
        </div>

        {/* ── Right — portrait stage, grounded at the bottom ──────────────── */}
        <div className="relative flex items-end justify-center order-first lg:order-none h-[55vw] sm:h-[60vw] lg:h-[calc(100vh-4rem)] max-h-[700px] lg:max-h-none">
          {/* Portrait wrapper — full height of the stage */}
          <div className="relative w-full h-full max-w-[420px] sm:max-w-[520px] lg:max-w-none">

            {/* Soft glow behind the person */}
            <div
              aria-hidden
              className="absolute inset-[6%] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, rgba(191,227,244,0.60) 0%, rgba(231,244,238,0.40) 50%, transparent 72%)",
              }}
            />

            {/* Portrait — anchored to bottom, fills upward */}
            <motion.div {...popIn(0.16)} className="relative z-[1] w-full h-full">
              <Image
                src="/images/abdulrahman-zaid-hero.png"
                alt="Abdulrahman Zaid"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 680px"
                className="object-contain object-bottom drop-shadow-[0_32px_56px_rgba(23,32,51,0.20)]"
              />
            </motion.div>

            {/* Floating pill labels — clear of the face (upper third) */}
            {PILLS.map((pill, i) => (
              <motion.div
                key={pill.label}
                {...popIn(0.3 + i * 0.08)}
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
      </div>

      {/* ── Scroll-down indicator — bottom center ───────────────────────── */}
      <motion.div
        {...reveal(0.7)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          aria-label="Scroll to profile"
          className="flex flex-col items-center gap-1.5 text-[#7C8794] hover:text-[#2F7D5C] transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.18em] font-medium">Scroll</span>
          {/* Animated chevron bob */}
          <span aria-hidden className="scroll-bob flex items-center justify-center w-7 h-7 rounded-full border border-[#DDD4C5] bg-white/70 group-hover:border-[#2F7D5C]/40 transition-colors shadow-sm text-xs leading-none">
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}
