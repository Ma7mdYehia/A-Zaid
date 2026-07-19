"use client";

import { motion } from "framer-motion";
import { Compass, Settings2, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { useReveal } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

const STEP_ICONS: LucideIcon[] = [Compass, Settings2, Users, TrendingUp];

export default function HowIWorkSection() {
  const { howIWork, ui } = useContent();
  const reveal = useReveal();
  const subheading = howIWork.body[0];

  return (
    <section
      id="how"
      aria-label="How he operates"
      className="border-t border-[#DED5C7] bg-[#F7F3EA] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 lg:gap-12">
        <div className="flex max-w-[820px] flex-col gap-3.5">
          <motion.p
            {...reveal(0)}
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F7D5C]"
          >
            {howIWork.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#172033] sm:text-4xl lg:text-[2.65rem]"
          >
            {howIWork.heading}
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="max-w-[760px] text-[15px] leading-7 text-[#5F6B7A] sm:text-base"
          >
            {subheading}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howIWork.model.map((step, index) => {
            const Icon = STEP_ICONS[index % STEP_ICONS.length];
            return (
              <motion.article
                key={step.id}
                {...reveal(0.1 + index * 0.07)}
                className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-[#D8CEBE] bg-white p-5 shadow-[0_14px_32px_-28px_rgba(23,32,51,0.48)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#2F7D5C]/35 hover:shadow-[0_20px_40px_-28px_rgba(47,125,92,0.28)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#2F7D5C]/[0.05] to-transparent"
                />

                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-[2.65rem] leading-none tracking-[0.01em] text-[#2F7D5C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2F7D5C]/20 bg-[#EFF7F2] text-[#2F7D5C] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={17} strokeWidth={1.8} aria-hidden />
                    </span>
                  </div>

                  <div className="mt-auto flex flex-col gap-2">
                    <h3 className="text-[14px] font-semibold leading-snug text-[#172033]">
                      {step.title}
                    </h3>
                    <p className="text-[12px] leading-5 text-[#5F6B7A]">
                      {step.phrase}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          {...reveal(0.38)}
          className="flex flex-col gap-3 border-t border-[#DED5C7] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#7C8794]">
            {ui.principles}
          </p>
          <div className="flex flex-wrap gap-2">
            {howIWork.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[#D8CEBE] bg-white px-3 py-1.5 text-[10px] font-medium text-[#5F6B7A] shadow-[0_8px_18px_-16px_rgba(23,32,51,0.45)]"
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
