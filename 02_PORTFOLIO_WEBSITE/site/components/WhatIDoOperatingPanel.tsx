"use client";

import {
  Boxes,
  Factory,
  Network,
  Ship,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsClient } from "@/lib/useIsClient";
import { useContent } from "@/lib/i18n";

const CARD_ICONS: LucideIcon[] = [Factory, Boxes, Ship, Network];

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
      className="border-t border-[#DED5C7] bg-[#FBF8F2] px-6 pb-12 pt-20 sm:pt-24 lg:px-10 lg:pt-28"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 lg:gap-12">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">
          <motion.p
            {...reveal(0)}
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F7D5C]"
          >
            {whatIDo.label}
          </motion.p>

          <motion.h2
            {...reveal(0.06)}
            className="text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#172033] sm:text-4xl lg:text-[2.65rem]"
          >
            {whatIDoHeading}
          </motion.h2>

          <motion.p
            {...reveal(0.12)}
            className="max-w-[720px] text-[15px] leading-7 text-[#5F6B7A] sm:text-base"
          >
            {whatIDo.intro.map((segment, index) =>
              segment.accent ? (
                <span key={index} className="font-semibold text-[#172033]">
                  {segment.text}
                </span>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDoCards.map((card, index) => {
            const Icon = CARD_ICONS[index % CARD_ICONS.length];
            return (
              <motion.article
                key={card.id}
                {...reveal(0.08 + index * 0.07)}
                whileHover={animate ? { y: -4 } : undefined}
                className="group relative flex min-h-[255px] flex-col overflow-hidden rounded-2xl border border-[#DED5C7] bg-white p-5 shadow-[0_14px_30px_-26px_rgba(23,32,51,0.44)] transition-[transform,border-color,box-shadow] duration-300 hover:border-[#2F7D5C]/35 hover:shadow-[0_18px_36px_-24px_rgba(47,125,92,0.3)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#2F7D5C]/[0.05] to-transparent"
                />

                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2F7D5C]/20 bg-[#EFF7F2] text-[#2F7D5C] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={18} strokeWidth={1.8} aria-hidden />
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.14em] text-[#2F7D5C]/65">
                      {card.monogram}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-2.5">
                    <h3 className="text-[15px] font-semibold leading-snug text-[#172033]">
                      {card.title}
                    </h3>
                    <p className="text-[12.5px] leading-6 text-[#5F6B7A]">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 border-t border-[#E7E0D5] pt-4">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#DED5C7] bg-[#FAF7F1] px-2.5 py-1 text-[10px] leading-none text-[#6E786F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
