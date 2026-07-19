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

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label={locale === "ar" ? "المقدمة" : "Introduction"}
      className="relative min-h-[720px] overflow-hidden bg-[#102D3A] pt-24 sm:min-h-[760px] lg:min-h-[calc(100vh-8px)]"
    >
      <MediaPlaceholder
        label={locale === "ar" ? "صورة الهيرو — مؤقتة" : "Hero image — placeholder"}
        tone="dark"
        labelPosition="bottom-right"
        className="absolute inset-0 !border-0"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,29,40,0.97) 0%, rgba(8,29,40,0.91) 35%, rgba(8,29,40,0.48) 67%, rgba(8,29,40,0.08) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,20,29,0.26) 0%, transparent 32%, transparent 70%, rgba(5,20,29,0.64) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(720px-6rem)] w-full max-w-[1180px] items-end px-6 pb-16 sm:min-h-[calc(760px-6rem)] sm:px-8 sm:pb-20 lg:min-h-[calc(100vh-6.5rem)] lg:px-10 lg:pb-16">
        <div className="flex w-full max-w-[620px] flex-col items-start gap-5 text-start lg:max-w-[650px]">
          <motion.div {...reveal(0.08)} className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-white/[0.82] backdrop-blur-md">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#64C896]" />
              {hero.statusChip}
            </span>
            <span className="hidden text-[11px] font-medium text-white/[0.48] sm:inline">
              {hero.title}
            </span>
          </motion.div>

          <motion.h1
            {...reveal(0.15)}
            className="font-display arabic-hero-heading text-[4.05rem] leading-[0.88] tracking-[0.005em] text-white sm:text-[5.3rem] lg:text-[6.45rem]"
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
            className="max-w-[560px] text-sm leading-7 text-white/[0.72] sm:text-[15px]"
          >
            {hero.valueStatement}
          </motion.p>

          <motion.div
            {...reveal(0.31)}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <a
              href={hero.ctas.primary.href}
              className="soft-light-sweep inline-flex items-center justify-center rounded-lg bg-[#2F8A63] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-14px_rgba(47,138,99,0.7)] transition-colors hover:bg-[#267553] focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="soft-light-sweep inline-flex items-center justify-center rounded-lg border border-white/[0.22] bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.14] focus-visible:ring-2 focus-visible:ring-white/70"
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
                  index > 0 ? "border-s border-white/[0.14] ps-5 sm:ps-7" : "pe-5 sm:pe-7",
                ].join(" ")}
              >
                <span className="font-display text-3xl leading-none text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="text-[9px] font-medium uppercase leading-tight tracking-[0.08em] text-white/[0.48] sm:text-[10px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            {...reveal(0.47)}
            className="inline-flex items-center gap-2 text-[11px] text-white/[0.56]"
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
        className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/[0.48] transition-colors hover:text-white/80 lg:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">{ui.scroll}</span>
        <span className="scroll-bob flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.07] text-xs backdrop-blur-md">
          ↓
        </span>
      </motion.a>
    </section>
  );
}
