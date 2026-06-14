"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useIsClient } from "@/lib/useIsClient";
import { useContent } from "@/lib/i18n";

export default function WhatIDoOperatingPanel() {
  const { whatIDo, whatIDoHeading, whatIDoCards } = useContent();
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  const reveal = (delay = 0) =>
    animate
      ? ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, ease: "easeOut", delay },
        } as const)
      : ({} as const);

  return (
    <section
      id="capabilities"
      aria-label="What he builds"
      className="px-6 lg:px-24 py-24 border-t border-[#DDD4C5]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-14">

        {/* Header */}
        <div className="flex flex-col gap-5 max-w-3xl">
          <motion.p
            {...reveal(0)}
            className="text-xs text-[#2F7D5C] tracking-[0.22em] uppercase font-medium"
          >
            {whatIDo.label}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#172033] tracking-tight leading-tight"
          >
            {whatIDoHeading}
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="text-base sm:text-lg text-[#5F6B7A] leading-relaxed"
          >
            {whatIDo.intro.map((seg, i) =>
              seg.accent ? (
                <span key={i} className="text-[#172033] font-medium">
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </motion.p>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whatIDoCards.map((card, i) => (
            <motion.div
              key={card.id}
              {...reveal(0.08 + i * 0.07)}
              className="flex flex-col gap-5 p-6 rounded-2xl border border-[#DDD4C5] bg-white hover:border-[#C8BFB0] hover:bg-[#F7F3EA] transition-colors duration-300"
            >
              {/* Monogram badge */}
              <div className="w-10 h-10 rounded-xl border border-[#2F7D5C]/25 bg-[#2F7D5C]/[0.07] flex items-center justify-center flex-none">
                <span className="text-[10px] font-bold text-[#2F7D5C] tracking-widest">
                  {card.monogram}
                </span>
              </div>

              {/* Title and description */}
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-sm font-semibold text-[#172033] leading-snug">
                  {card.title}
                </p>
                <p className="text-[13px] text-[#5F6B7A] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10.5px] text-[#7C8794] bg-[#F7F3EA] border border-[#DDD4C5] rounded-full px-2.5 py-1 leading-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
