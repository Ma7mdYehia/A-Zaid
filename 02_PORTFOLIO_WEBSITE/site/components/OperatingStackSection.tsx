"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ToolStackCategory } from "@/content/homepage";
import { useReveal, staggerContainer, staggerItem } from "@/lib/motion";
import { useMouseGlow } from "@/lib/useMouseGlow";
import { useIsClient } from "@/lib/useIsClient";
import { useContent } from "@/lib/i18n";

interface StripTool {
  name: string;
  categoryLabel: string;
  logo?: string;
}

function flattenTools(
  categories: ToolStackCategory[],
  shortLabels: Record<string, string>
): StripTool[] {
  const seen = new Set<string>();
  const out: StripTool[] = [];
  for (const category of categories) {
    const label = shortLabels[category.id] ?? category.title;
    for (const name of category.tools) {
      if (seen.has(name)) continue;
      seen.add(name);
      out.push({ name, categoryLabel: label });
    }
  }
  return out;
}

function monogram(name: string): string {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function OperatingStackSection() {
  const { operatingStackCategories, operatingStackStrip, stackCategoryShortLabels } = useContent();
  const stripTools = flattenTools(operatingStackCategories, stackCategoryShortLabels);
  const reveal = useReveal();
  const glowRef = useMouseGlow<HTMLElement>();
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  return (
    <section
      ref={glowRef}
      id="tools"
      aria-label="Operating stack"
      className="px-6 lg:px-24 pb-20 -mt-6"
    >
      <motion.div
        data-glow
        {...reveal(0)}
        className="mouse-glow-panel max-w-6xl mx-auto relative rounded-2xl border border-[#DDD4C5] bg-[#F7F3EA]/80 overflow-hidden"
      >
        {/* Header row */}
        <div className="relative px-5 sm:px-7 pt-5 pb-4 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4">
          <span className="text-[10.5px] text-[#2F7D5C] tracking-[0.22em] uppercase font-medium flex-none">
            {operatingStackStrip.eyebrow}
          </span>
          <h2 className="text-sm font-semibold text-[#172033] leading-snug flex-none">
            {operatingStackStrip.title}
          </h2>
          <p className="text-xs text-[#5F6B7A] leading-relaxed sm:truncate">
            {operatingStackStrip.line}
          </p>
        </div>

        {/* Scrolling chip track with edge fades */}
        <div className="relative border-t border-[#DDD4C5]">
          {/* Edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-gradient-to-r from-[#F7F3EA] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-gradient-to-l from-[#F7F3EA] to-transparent"
          />

          <motion.ul
            {...staggerContainer(animate, 0.015)}
            aria-label="Tools in the operating stack"
            className="no-scrollbar flex gap-2.5 overflow-x-auto px-5 sm:px-7 py-4"
          >
            {stripTools.map((tool) => (
              <motion.li
                key={tool.name}
                {...staggerItem(animate)}
                className="flex-none flex items-center gap-2.5 rounded-xl border border-[#DDD4C5] bg-white hover:border-[#2F7D5C]/35 transition-colors duration-200 pl-1.5 pr-3.5 py-1.5"
              >
                {tool.logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={tool.logo}
                    alt=""
                    aria-hidden
                    className="w-7 h-7 rounded-lg object-contain"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex-none w-7 h-7 rounded-lg bg-[#2F7D5C]/[0.07] border border-[#2F7D5C]/20 flex items-center justify-center text-[9.5px] font-semibold text-[#2F7D5C] tracking-wide select-none"
                  >
                    {monogram(tool.name)}
                  </span>
                )}
                <span className="flex flex-col leading-none gap-0.5">
                  <span className="text-[12.5px] font-medium text-[#172033] whitespace-nowrap">
                    {tool.name}
                  </span>
                  <span className="text-[9.5px] text-[#7C8794] uppercase tracking-[0.12em]">
                    {tool.categoryLabel}
                  </span>
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
}
