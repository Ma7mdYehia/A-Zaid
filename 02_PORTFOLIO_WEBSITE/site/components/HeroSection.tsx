"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { useIsClient } from "@/lib/useIsClient";
import { useLanguage } from "@/lib/i18n";

export default function HeroSection() {
  const { content, locale } = useLanguage();
  const { hero, heroStats, heroHeadingLines, ui } = content;
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;
  const isRtl = locale === "ar";

  const sectionRef = useRef<HTMLElement>(null);
  const inViewRef = useRef(false);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.42 },
    );

    observer.observe(section);

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 1024) return;
      if (!inViewRef.current || cooldownRef.current || event.deltaY <= 0) return;

      const about = document.getElementById("about");
      if (!about) return;

      event.preventDefault();
      cooldownRef.current = true;
      about.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        cooldownRef.current = false;
      }, 1100);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      observer.disconnect();
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

  const sideGradient = isRtl
    ? "linear-gradient(to left, rgba(8,29,40,0.98) 0%, rgba(8,29,40,0.92) 36%, rgba(8,29,40,0.52) 68%, rgba(8,29,40,0.10) 100%)"
    : "linear-gradient(to right, rgba(8,29,40,0.98) 0%, rgba(8,29,40,0.92) 36%, rgba(8,29,40,0.52) 68%, rgba(8,29,40,0.10) 100%)";

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label={isRtl ? "المقدمة" : "Introduction"}
      className="relative min-h-[690px] overflow-hidden border-b border-white/[0.12] bg-[#102D3A] pt-20 sm:min-h-[750px] sm:pt-24 lg:min-h-[calc(100vh-8px)]"
    >
      <MediaPlaceholder
        label={isRtl ? "صورة الهيرو — مؤقتة" : "Hero image — placeholder"}
        tone="dark"
        labelPosition={isRtl ? "bottom-left" : "bottom-right"}
        focalSide={isRtl ? "left" : "right"}
        className="absolute inset-0 !border-0"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: sideGradient }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,20,29,0.34) 0%, rgba(5,20,29,0.04) 32%, rgba(5,20,29,0.08) 68%, rgba(5,20,29,0.72) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.16]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(690px-5rem)] w-full max-w-[1180px] items-end px-6 pb-14 sm:min-h-[calc(750px-6rem)] sm:px-8 sm:pb-18 lg:min-h-[calc(100vh-6.5rem)] lg:px-10 lg:pb-16">
        <div className="flex w-full max-w-[620px] flex-col items-start gap-5 text-start lg:max-w-[650px]">
          <motion.div {...reveal(0.08)} className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.2] bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-white/[0.84] backdrop-blur-md">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#64C896]" />
              {hero.statusChip}
            </span>
            <span className="hidden text-[11px] font-medium text-white/[0.5] sm:inline">
              {hero.title}
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.15)}
            className="font-display arabic-hero-heading text-[3.8rem] leading-[0.88] tracking-[0.005em] text-white sm:text-[5.15rem] lg:text-[6.3rem]"
          >
            {heroHeadingLines.map((line, index) => (
              <span
                key={`${line}-${index}`}
                className={index === heroHeadingLines.length - 1 ? "block text-[#66C996]" : "block"}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            {...reveal(0.23)}
            className="max-w-[560px] text-sm leading-7 text-white/[0.74] sm:text-[15px]"
          >
            {hero.valueStatement}
          </motion.p>

          <motion.div
            {...reveal(0.31)}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <a
              href={hero.ctas.primary.href}
              className="soft-light-sweep inline-flex min-h-11 items-center justify-center rounded-lg bg-[#2F8A63] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(47,138,99,0.7)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#267553] focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="soft-light-sweep inline-flex min-h-11 items-center justify-center rounded-lg border border-white/[0.22] bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-white/[0.14] focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {hero.ctas.secondary.label}
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.39)}
            className="mt-1 grid w-full max-w-[570px] grid-cols-3 border-t border-white/[0.16] pt-5"
          >
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={[
                  "flex min-w-0 flex-col gap-1",
                  index > 0 ? "border-s border-white/[0.14] ps-4 sm:ps-7" : "pe-4 sm:pe-7",
                ].join(" ")}
              >
                <span className="font-display text-3xl leading-none text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-[8.5px] font-medium uppercase leading-tight tracking-[0.08em] text-white/[0.5] sm:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...reveal(0.47)}
            className="inline-flex items-center gap-2 text-[10.5px] text-white/[0.58] sm:text-[11px]"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#66C996]" />
            {hero.location}
          </motion.div>
        </div>
      </div>

      <motion.a
        {...reveal(0.65)}
        href="#about"
        aria-label={ui.scrollToProfile}
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/[0.5] transition-colors hover:text-white/[0.82] lg:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">{ui.scroll}</span>
        <span className="scroll-bob flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.07] text-xs backdrop-blur-md">
          ↓
        </span>
      </motion.a>
    </section>
  );
}
