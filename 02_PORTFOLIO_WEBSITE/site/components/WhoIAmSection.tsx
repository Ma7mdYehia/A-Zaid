"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { whoIAm } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";
import { useMouseGlow } from "@/lib/useMouseGlow";

/* Parse a metric like "~USD 2.5M" / "+250M" into prefix · number · suffix. */
function parseMetric(value: string) {
  const m = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!m) return { prefix: "", target: 0, decimals: 0, suffix: value };
  const [, prefix, num, suffix] = m;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, target: parseFloat(num), decimals, suffix };
}

function MetricValue({ value, play }: { value: string; play: boolean }) {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const parsed = useMemo(() => parseMetric(value), [value]);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isClient) return;
    if (prefersReduced || !play) {
      setDisplay(value);
      return;
    }
    const format = (n: number) =>
      `${parsed.prefix}${n.toFixed(parsed.decimals)}${parsed.suffix}`;

    let raf = 0;
    const duration = 1200;
    const start = performance.now();
    setDisplay(format(0));
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(format(parsed.target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isClient, prefersReduced, play, value, parsed]);

  return <>{display}</>;
}

export default function WhoIAmSection() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsInView = useInView(resultsRef, { once: true, margin: "-80px" });
  const glowRef = useMouseGlow<HTMLElement>();

  const reveal = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, ease: "easeOut", delay },
        }
      : {};

  return (
    <section
      ref={glowRef}
      id="about"
      aria-label="Who I am"
      className="px-6 lg:px-24 py-24 lg:py-28 border-t border-[#DDD4C5]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16 lg:gap-20">

        {/* Intro: editorial heading + profile copy */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — display heading */}
          <div className="flex flex-col gap-5">
            <motion.p
              {...reveal(0)}
              className="text-xs text-[#2F7D5C] tracking-[0.22em] uppercase font-medium"
            >
              {whoIAm.label}
            </motion.p>

            <motion.h2
              {...reveal(0.06)}
              className="font-display text-[#172033] leading-[0.9] tracking-[0.01em] text-6xl sm:text-7xl lg:text-[5.5rem]"
            >
              {whoIAm.headingLines.map((line, i) => (
                <span
                  key={line}
                  className={[
                    "block",
                    i === whoIAm.accentLineIndex ? "text-[#2F7D5C]" : "",
                  ].join(" ")}
                >
                  {line}
                </span>
              ))}
            </motion.h2>
          </div>

          {/* Right — profile copy */}
          <div className="flex flex-col gap-5 lg:pt-3 max-w-xl">
            {whoIAm.introParagraphs.map((segments, i) => (
              <motion.p
                key={i}
                {...reveal(0.12 + i * 0.07)}
                className="text-base sm:text-lg text-[#5F6B7A] leading-relaxed"
              >
                {segments.map((seg, j) =>
                  seg.accent ? (
                    <span key={j} className="text-[#2F7D5C] font-medium">
                      {seg.text}
                    </span>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  )
                )}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="flex flex-col gap-7">
          <motion.p
            {...reveal(0.05)}
            className="text-xs text-[#7C8794] tracking-[0.2em] uppercase font-medium"
          >
            {whoIAm.resultsLabel}
          </motion.p>

          <div ref={resultsRef} className="relative group/cards">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-0 group-hover/cards:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(55% 55% at 50% 40%, rgba(47,125,92,0.07), transparent 70%)",
              }}
            />

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {whoIAm.resultCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  data-glow
                  {...reveal(0.1 + i * 0.06)}
                  whileHover={animate ? { y: -3 } : undefined}
                  className={[
                    "mouse-glow-border rounded-2xl border border-[#DDD4C5] bg-white",
                    "hover:border-[#2F7D5C]/35 hover:shadow-[0_0_26px_-6px_rgba(47,125,92,0.20)]",
                    "transition-[border-color,box-shadow] duration-300",
                    "px-6 py-7 flex flex-col gap-3",
                    "lg:col-span-2",
                    i === 3 ? "lg:col-start-2" : "",
                  ].join(" ")}
                >
                  <span aria-hidden className="block w-6 h-px bg-[#2F7D5C]/50" />
                  <span className="font-display text-4xl sm:text-5xl text-[#172033] leading-none tracking-[0.01em] tabular-nums">
                    <MetricValue value={card.value} play={resultsInView} />
                  </span>
                  <p className="text-sm text-[#5F6B7A] leading-snug">{card.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
