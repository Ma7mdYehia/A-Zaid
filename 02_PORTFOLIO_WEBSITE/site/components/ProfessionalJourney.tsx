"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Clock, type LucideIcon } from "lucide-react";
import { journeyEyebrow, journeyHeading, journeyIntro, journeyItems, journeyNote, learningCards, type LearningCard } from "@/content/homepage";
import { useIsClient } from "@/lib/useIsClient";
import { useMouseGlow } from "@/lib/useMouseGlow";
import { detailPanelSlide } from "@/lib/motion";

const learningIcons: Record<LearningCard["icon"], LucideIcon> = {
  university: GraduationCap,
  apple: GraduationCap,
  hours: Clock,
};

function CurrentChip() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-[#E0A458]/30 bg-[#E0A458]/[0.08]" aria-label="Current role">
      <span className="w-1 h-1 rounded-full bg-[#E0A458]" />
      <span className="text-[10px] font-medium text-[#E0A458] tracking-wide uppercase">Current</span>
    </span>
  );
}

export default function ProfessionalJourney() {
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const shouldAnimate = isClient && !prefersReduced;
  const [active, setActive] = useState(0);
  const role = journeyItems[active];
  const glowRef = useMouseGlow<HTMLElement>();

  const reveal = (delay = 0) =>
    shouldAnimate
      ? ({ initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.45, ease: "easeOut", delay } } as const)
      : ({} as const);

  return (
    <section ref={glowRef} id="experience" aria-label="Professional journey" className="px-6 lg:px-24 py-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-2xl">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium">
            {journeyEyebrow}
          </motion.p>
          <motion.h2 {...reveal(0.06)} className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight">
            {journeyHeading}
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {journeyIntro}
          </motion.p>
        </div>

        {/* Main education cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {learningCards.filter((c) => c.size !== "compact").map((card, i) => {
            const Icon = learningIcons[card.icon];
            return (
              <motion.div key={card.title} {...reveal(0.1 + i * 0.06)} className="rounded-2xl border border-white/[0.08] bg-[#0F1724] hover:border-white/[0.14] transition-colors duration-200 p-5 sm:p-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="flex-none w-10 h-10 rounded-xl bg-[#3DBA8C]/[0.08] border border-[#3DBA8C]/20 flex items-center justify-center text-[#3DBA8C]">
                    <Icon size={18} strokeWidth={1.7} aria-hidden />
                  </span>
                  <div className="flex flex-col min-w-0 gap-0.5">
                    <p className="text-sm font-semibold text-[#E8EDF2] leading-snug">{card.title}</p>
                    <p className="text-[11px] text-[#3DBA8C]/80">{card.detail}</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Compact training cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {learningCards.filter((c) => c.size === "compact").map((card, i) => {
            const Icon = learningIcons[card.icon];
            return (
              <motion.div key={card.title} {...reveal(0.28 + i * 0.05)} className="rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-colors duration-200 p-4 flex items-start gap-3">
                <span className="flex-none w-8 h-8 rounded-lg bg-[#3DBA8C]/[0.06] border border-[#3DBA8C]/15 flex items-center justify-center text-[#3DBA8C]">
                  <Icon size={14} strokeWidth={1.9} aria-hidden />
                </span>
                <div className="flex flex-col min-w-0 gap-0.5">
                  <p className="text-sm font-medium text-[#E8EDF2] leading-snug">{card.title}</p>
                  <p className="text-xs text-[#94A3B8]/70 leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div data-glow {...reveal(0.16)} className="mouse-glow-panel relative rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent" />
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="relative">
                <div aria-hidden className="absolute left-[17px] top-4 bottom-4 w-px bg-gradient-to-b from-white/[0.04] via-white/[0.12] to-white/[0.04]" />
                <ul role="tablist" aria-label="Career roles" className="flex flex-col gap-1">
                  {journeyItems.map((item, i) => {
                    const isActive = active === i;
                    return (
                      <li key={item.id}>
                        <button type="button" role="tab" aria-selected={isActive} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} className={["relative w-full text-left pl-10 pr-3 py-3 rounded-xl transition-colors duration-200", isActive ? "bg-white/[0.05]" : "hover:bg-white/[0.025]"].join(" ")}>
                          <span aria-hidden className={["absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 bg-[#0F1724] flex items-center justify-center", isActive ? item.current ? "border-[#E0A458]" : "border-[#3DBA8C]" : "border-white/20"].join(" ")}>
                            {isActive && <span className={["block w-1.5 h-1.5 rounded-full", item.current ? "bg-[#E0A458]" : "bg-[#3DBA8C]"].join(" ")} />}
                          </span>
                          <div className="flex items-center justify-between gap-2">
                            <span className={["text-sm font-semibold leading-snug", isActive ? "text-[#E8EDF2]" : "text-[#94A3B8]"].join(" ")}>{item.company}</span>
                            {item.current && <CurrentChip />}
                          </div>
                          <div className="text-xs text-[#94A3B8]/80 mt-0.5">{item.role}</div>
                          <div className="text-[11px] text-[#94A3B8]/50 mt-0.5">{item.years}{item.category && <span> · {item.category}</span>}</div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-7 border-t border-white/[0.07] lg:border-t-0 lg:border-l lg:border-white/[0.08]">
              <motion.div key={role.id} {...detailPanelSlide(shouldAnimate)} className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7 flex flex-col gap-5 min-h-[300px] lg:h-full lg:min-h-[520px]">
                <span aria-hidden className="absolute top-5 right-6 font-display text-5xl text-white/[0.06] leading-none select-none">{String(active + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-1 pr-12">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[11px] text-[#94A3B8]/70 tracking-widest uppercase">{role.years}{role.market && <span> · {role.market}</span>}</span>
                    {role.current && <CurrentChip />}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#E8EDF2] leading-snug">{role.role}</h3>
                  <p className="text-sm text-[#3DBA8C] font-medium">{role.company}</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[10.5px] text-[#3DBA8C]/80 tracking-[0.18em] uppercase font-medium">Operating focus</p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{role.achievement}</p>
                </div>
                {role.bullets && role.bullets.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span aria-hidden className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#3DBA8C]/70 flex-none" />
                        <span className="text-sm text-[#E8EDF2]/90 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {role.focus && role.focus.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {role.focus.map((f) => <span key={f} className="text-[11px] text-[#94A3B8]/80 bg-white/[0.03] border border-white/[0.07] rounded-full px-2.5 py-1">{f}</span>)}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.p {...reveal(0.2)} className="text-xs text-[#94A3B8]/50 italic leading-relaxed max-w-2xl">
          {journeyNote}
        </motion.p>
      </div>
    </section>
  );
}
