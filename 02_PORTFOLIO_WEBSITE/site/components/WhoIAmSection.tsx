"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Building2,
  Clock3,
  MapPinned,
  Network,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useIsClient } from "@/lib/useIsClient";
import { useContent } from "@/lib/i18n";

function parseMetric(value: string) {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, decimals: 0, suffix: value };

  const [, prefix, number, suffix] = match;
  const decimals = number.includes(".") ? number.split(".")[1].length : 0;
  return { prefix, target: parseFloat(number), decimals, suffix };
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

    const format = (number: number) =>
      `${parsed.prefix}${number.toFixed(parsed.decimals)}${parsed.suffix}`;

    let frame = 0;
    const duration = 1200;
    const start = performance.now();
    setDisplay(format(0));

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(format(parsed.target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isClient, prefersReduced, play, value, parsed]);

  return <>{display}</>;
}

const METRIC_ICONS: LucideIcon[] = [Clock3, MapPinned, Building2, Network, TrendingUp];

export default function WhoIAmSection() {
  const { whoIAm } = useContent();
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  const resultsRef = useRef<HTMLDivElement>(null);
  const resultsInView = useInView(resultsRef, { once: true, margin: "-80px" });

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
      id="about"
      aria-label="Who I am"
      className="border-t border-[#DED5C7] bg-[#F7F3EA] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-12 lg:gap-14">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <motion.p
              {...reveal(0)}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F7D5C]"
            >
              {whoIAm.label}
            </motion.p>

            <motion.h2
              {...reveal(0.06)}
              className="font-display arabic-profile-heading text-[4.4rem] leading-[0.86] tracking-[0.005em] text-[#172033] sm:text-[5.35rem] lg:text-[6rem]"
            >
              {whoIAm.headingLines.map((line, index) => (
                <span
                  key={line}
                  className={index === whoIAm.accentLineIndex ? "block text-[#2F7D5C]" : "block"}
                >
                  {line}
                </span>
              ))}
            </motion.h2>
          </div>

          <div className="flex max-w-[650px] flex-col gap-5 lg:pt-7">
            {whoIAm.introParagraphs.map((segments, paragraphIndex) => (
              <motion.p
                key={paragraphIndex}
                {...reveal(0.12 + paragraphIndex * 0.07)}
                className="text-[15px] leading-7 text-[#5F6B7A] sm:text-base sm:leading-8"
              >
                {segments.map((segment, segmentIndex) =>
                  segment.accent ? (
                    <span key={segmentIndex} className="font-semibold text-[#172033]">
                      {segment.text}
                    </span>
                  ) : (
                    <span key={segmentIndex}>{segment.text}</span>
                  ),
                )}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <motion.p
            {...reveal(0.05)}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C8794]"
          >
            {whoIAm.resultsLabel}
          </motion.p>

          <div ref={resultsRef} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {whoIAm.resultCards.map((card, index) => {
              const Icon = METRIC_ICONS[index % METRIC_ICONS.length];
              return (
                <motion.article
                  key={card.label}
                  {...reveal(0.1 + index * 0.055)}
                  whileHover={animate ? { y: -3 } : undefined}
                  className={[
                    "group relative overflow-hidden rounded-2xl border border-[#DED5C7] bg-white px-5 py-5 shadow-[0_12px_28px_-24px_rgba(23,32,51,0.38)] transition-[transform,border-color,box-shadow] duration-300",
                    "hover:border-[#2F7D5C]/35 hover:shadow-[0_16px_34px_-22px_rgba(47,125,92,0.3)]",
                    "lg:col-span-2",
                    index === 3 ? "lg:col-start-2" : "",
                  ].join(" ")}
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#2F7D5C]/[0.045] to-transparent"
                  />
                  <div className="relative flex items-start justify-between gap-5">
                    <div className="flex min-w-0 flex-col gap-2.5">
                      <span className="font-display text-4xl leading-none tracking-[0.01em] text-[#172033] tabular-nums sm:text-[2.7rem]">
                        <MetricValue value={card.value} play={resultsInView} />
                      </span>
                      <p className="max-w-[180px] text-[12px] leading-5 text-[#5F6B7A]">
                        {card.label}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-[#2F7D5C]/20 bg-[#EFF7F2] text-[#2F7D5C] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={17} strokeWidth={1.8} aria-hidden />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
