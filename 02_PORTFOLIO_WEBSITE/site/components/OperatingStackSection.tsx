"use client";

import {
  Activity,
  BadgeCheck,
  Calculator,
  Factory,
  Globe2,
  Handshake,
  Ship,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ToolStackCategory } from "@/content/homepage";
import { useReveal } from "@/lib/motion";
import { useIsClient } from "@/lib/useIsClient";
import { useContent } from "@/lib/i18n";

interface StackTool {
  name: string;
  categoryLabel: string;
}

function flattenTools(
  categories: ToolStackCategory[],
  shortLabels: Record<string, string>,
): StackTool[] {
  const seen = new Set<string>();
  const tools: StackTool[] = [];

  for (const category of categories) {
    const categoryLabel = shortLabels[category.id] ?? category.title;
    for (const name of category.tools) {
      if (seen.has(name)) continue;
      seen.add(name);
      tools.push({ name, categoryLabel });
    }
  }

  return tools;
}

const TOOL_ICONS: LucideIcon[] = [
  Factory,
  BadgeCheck,
  Activity,
  Calculator,
  Globe2,
  Ship,
  Handshake,
];

export default function OperatingStackSection() {
  const { operatingStackCategories, operatingStackStrip, stackCategoryShortLabels } = useContent();
  const tools = flattenTools(operatingStackCategories, stackCategoryShortLabels).slice(0, 7);
  const reveal = useReveal();
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  return (
    <section
      id="tools"
      aria-label="Operating stack"
      className="bg-[#FBF8F2] px-6 pb-20 pt-4 sm:pb-24 lg:px-10 lg:pb-28"
    >
      <motion.div
        {...reveal(0)}
        className="relative mx-auto max-w-[1180px] overflow-hidden rounded-3xl border border-[#D9CEBE] bg-[#F7F3EA] shadow-[0_18px_46px_-36px_rgba(23,32,51,0.48)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent"
        />

        <div className="relative flex flex-col gap-3 border-b border-[#DED5C7] px-6 py-7 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex max-w-[520px] flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F7D5C]">
              {operatingStackStrip.eyebrow}
            </span>
            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#172033] sm:text-[2rem]">
              {operatingStackStrip.title}
            </h2>
          </div>
          <p className="max-w-[520px] text-[13px] leading-6 text-[#5F6B7A] lg:text-end">
            {operatingStackStrip.line}
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-3 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-8 lg:p-8">
          {tools.map((tool, index) => {
            const Icon = TOOL_ICONS[index % TOOL_ICONS.length];
            const centeredLastRow =
              index === 4
                ? "lg:col-start-2"
                : index === 5
                  ? "lg:col-start-4"
                  : index === 6
                    ? "lg:col-start-6"
                    : "";

            return (
              <motion.article
                key={tool.name}
                {...reveal(0.05 + index * 0.05)}
                whileHover={animate ? { y: -3 } : undefined}
                className={`group flex min-h-[116px] flex-col justify-between rounded-2xl border border-[#D8CEBE] bg-white p-4 shadow-[0_12px_28px_-24px_rgba(23,32,51,0.38)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#2F7D5C]/40 hover:shadow-[0_15px_30px_-22px_rgba(47,125,92,0.28)] lg:col-span-2 ${centeredLastRow}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#2F7D5C]/20 bg-[#EFF7F2] text-[#2F7D5C] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={16} strokeWidth={1.8} aria-hidden />
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8A938D]">
                    {tool.categoryLabel}
                  </span>
                </div>
                <h3 className="mt-4 text-[12.5px] font-semibold leading-5 text-[#172033]">
                  {tool.name}
                </h3>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
