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
      className="px-6 lg:px-24 py-24 border-t border-[#DDD4C5]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.p
            {...reveal(0)}
            className="text-xs text-[#2F7D5C] tracking-[0.22em] uppercase font-medium"
          >
            {howIWork.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#172033] leading-tight tracking-tight"
          >
            {howIWork.heading}
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="text-base sm:text-lg text-[#5F6B7A] leading-relaxed"
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
              className="flex flex-col gap-4 p-6 rounded-2xl border border-[#DDD4C5] bg-white hover:border-[#C8BFB0] hover:bg-[#F7F3EA] transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex-none font-semibold text-xs text-[#2F7D5C] bg-[#2F7D5C]/[0.08] border border-[#2F7D5C]/20 rounded-lg w-8 h-8 flex items-center justify-center tabular-nums tracking-wide"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-semibold text-[#172033] leading-snug">
                  {step.title}
                </h3>
              </div>
              <p className="text-[13px] text-[#5F6B7A] leading-relaxed">
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
          <p className="text-[10.5px] text-[#7C8794] uppercase tracking-[0.18em] font-medium">
            Principles
          </p>
          <div className="flex flex-wrap gap-2">
            {howIWork.badges.map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-medium text-[#5F6B7A] bg-white border border-[#DDD4C5] rounded-full px-3 py-1.5"
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
