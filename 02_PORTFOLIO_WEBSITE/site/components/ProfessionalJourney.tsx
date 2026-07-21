"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { LEARNING_IMAGES } from "@/lib/imageAssets";
import { useIsClient } from "@/lib/useIsClient";
import { detailPanelSlide } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";

function CurrentChip({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-[#B88746]/35 bg-[#B88746]/[0.08] px-2.5 py-1"
      aria-label={label}
    >
      <span className="h-1 w-1 rounded-full bg-[#B88746]" />
      <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#A87535]">
        {label}
      </span>
    </span>
  );
}

export default function ProfessionalJourney() {
  const { content, locale } = useLanguage();
  const {
    journeyEyebrow,
    journeyHeading,
    journeyIntro,
    journeyItems,
    journeyNote,
    learningCards,
    ui,
  } = content;
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const shouldAnimate = isClient && !prefersReduced;
  const [active, setActive] = useState(0);
  const role = journeyItems[active];

  const reveal = (delay = 0) =>
    shouldAnimate
      ? ({
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, ease: "easeOut", delay },
        } as const)
      : ({} as const);

  return (
    <section
      id="experience"
      aria-label={locale === "ar" ? "المسيرة المهنية" : "Professional journey"}
      className="border-t border-[#DED5C7] bg-[#FBF8F2] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 lg:gap-12">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <motion.p
            {...reveal(0)}
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F7D5C]"
          >
            {journeyEyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#172033] sm:text-4xl"
          >
            {journeyHeading}
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="max-w-[700px] text-[15px] leading-7 text-[#5F6B7A] sm:text-base"
          >
            {journeyIntro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {learningCards.map((card, index) => (
            <motion.article
              key={card.title}
              {...reveal(0.1 + index * 0.05)}
              className="group overflow-hidden rounded-2xl border border-[#D8CEBE] bg-white shadow-[0_14px_34px_-30px_rgba(23,32,51,0.5)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#2F7D5C]/35 hover:shadow-[0_20px_42px_-30px_rgba(47,125,92,0.28)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[#DED5C7] bg-[#EEE8DD]">
                <Image
                  src={LEARNING_IMAGES[index % LEARNING_IMAGES.length]}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex min-h-[154px] flex-col gap-3 p-5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[16px] font-semibold leading-snug text-[#172033]">
                    {card.title}
                  </h3>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2F7D5C]">
                    {card.detail}
                  </p>
                </div>
                <p className="text-[12.5px] leading-6 text-[#5F6B7A]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          {...reveal(0.16)}
          className="relative overflow-hidden rounded-3xl border border-[#D6CABA] bg-white shadow-[0_22px_50px_-38px_rgba(23,32,51,0.55)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2F7D5C]/[0.045] to-transparent"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute bottom-4 start-[17px] top-4 w-px bg-gradient-to-b from-[#DED5C7]/30 via-[#DED5C7] to-[#DED5C7]/30"
                />
                <ul role="tablist" aria-label={locale === "ar" ? "الأدوار المهنية" : "Career roles"} className="flex flex-col gap-1">
                  {journeyItems.map((item, index) => {
                    const isActive = active === index;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls="journey-detail-panel"
                          onClick={() => setActive(index)}
                          onMouseEnter={() => setActive(index)}
                          className={[
                            "relative w-full rounded-xl py-3 pe-3 ps-10 text-start transition-colors duration-200",
                            isActive
                              ? "bg-[#172033]/[0.045]"
                              : "hover:bg-[#172033]/[0.025]",
                          ].join(" ")}
                        >
                          <span
                            aria-hidden
                            className={[
                              "absolute start-3 top-1/2 flex h-3 w-3 -translate-y-1/2 items-center justify-center rounded-full border-2 bg-white",
                              isActive
                                ? item.current
                                  ? "border-[#B88746]"
                                  : "border-[#2F7D5C]"
                                : "border-[#DED5C7]",
                            ].join(" ")}
                          >
                            {isActive && (
                              <span
                                className={[
                                  "block h-1.5 w-1.5 rounded-full",
                                  item.current ? "bg-[#B88746]" : "bg-[#2F7D5C]",
                                ].join(" ")}
                              />
                            )}
                          </span>

                          <div className="flex items-start justify-between gap-3">
                            <span
                              className={[
                                "text-[13px] font-semibold leading-snug",
                                isActive ? "text-[#172033]" : "text-[#5F6B7A]",
                              ].join(" ")}
                            >
                              {item.company}
                            </span>
                            {item.current && <CurrentChip label={ui.currentChip} />}
                          </div>
                          <div className="mt-1 text-[11px] leading-5 text-[#7C8794]">
                            {item.role}
                          </div>
                          <div className="mt-0.5 text-[10px] text-[#7C8794]/75">
                            {item.years}
                            {item.category && <span> · {item.category}</span>}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="border-t border-[#DED5C7] p-5 sm:p-6 lg:border-s lg:border-t-0 lg:p-7">
              <motion.div
                id="journey-detail-panel"
                key={role.id}
                role="tabpanel"
                {...detailPanelSlide(shouldAnimate)}
                className="relative flex min-h-[360px] flex-col gap-5 rounded-2xl border border-[#DED5C7] bg-[#FAF7F1] p-6 sm:p-7 lg:min-h-[520px]"
              >
                <span
                  aria-hidden
                  className="absolute end-6 top-5 select-none font-display text-5xl leading-none text-[#172033]/[0.055]"
                >
                  {String(active + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-1 pe-12">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7C8794]">
                      {role.years}
                      {role.market && <span> · {role.market}</span>}
                    </span>
                    {role.current && <CurrentChip label={ui.currentChip} />}
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-[#172033] sm:text-xl">
                    {role.role}
                  </h3>
                  <p className="text-sm font-semibold text-[#2F7D5C]">{role.company}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#2F7D5C]/80">
                    {ui.operatingFocus}
                  </p>
                  <p className="text-[13px] leading-6 text-[#5F6B7A]">{role.achievement}</p>
                </div>

                {role.bullets && role.bullets.length > 0 && (
                  <ul className="flex flex-col gap-2.5">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span
                          aria-hidden
                          className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#2F7D5C]/60"
                        />
                        <span className="text-[12.5px] leading-6 text-[#172033]/88">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {role.focus && role.focus.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {role.focus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-[#DED5C7] bg-white px-2.5 py-1 text-[10px] text-[#6E786F]"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.p
          {...reveal(0.2)}
          className="max-w-2xl text-[11px] italic leading-5 text-[#7C8794]/75"
        >
          {journeyNote}
        </motion.p>
      </div>
    </section>
  );
}
