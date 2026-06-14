"use client";

import { motion } from "framer-motion";
import { howIWork } from "@/content/homepage";
import { useReveal } from "@/lib/motion";

export default function HowIWorkSection() {
  const reveal = useReveal();
  const subheading = howIWork.body[0];

  return (
    <section
      id="how"
      aria-label="How he operates"
      className="px-6 lg:px-24 py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.p
            {...reveal(0)}
            className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium"
          >
            {howIWork.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight"
          >
            {howIWork.heading}
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="text-base sm:text-lg text-[#94A3B8] leading-relaxed"
          >
            {subheading}
          </motion.p>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {howIWork.model.map((step, i) => (
            <motion.div
              key={step.id}
              {...reveal(0.1 + i * 0.07)}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.035] transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex-none font-semibold text-xs text-[#3DBA8C] bg-[#3DBA8C]/[0.10] border border-[#3DBA8C]/25 rounded-lg w-8 h-8 flex items-center justify-center tabular-nums tracking-wide"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-[#E8EDF2] leading-snug">
                  {step.title}
                </h3>
              </div>
              <p className="text-[13px] text-[#94A3B8] leading-relaxed">
                {step.phrase}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <motion.div
          {...reveal(0.38)}
          className="flex flex-col gap-3"
        >
          <p className="text-[10.5px] text-[#94A3B8]/50 uppercase tracking-[0.18em] font-medium">
            Principles
          </p>
          <div className="flex flex-wrap gap-2">
            {howIWork.badges.map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-medium text-[#94A3B8]/80 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
