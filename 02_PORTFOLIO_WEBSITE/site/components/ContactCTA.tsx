"use client";

import { motion } from "framer-motion";
import { type ContactLink } from "@/content/homepage";
import { contactIcons, contactAnchorProps } from "@/lib/contactIcons";
import { useReveal } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";

export default function ContactCTA() {
  const { content, locale } = useLanguage();
  const { contactCTA, contactLinks, ui } = content;
  const reveal = useReveal();

  const primaryReal = contactLinks.filter((link) => link.isPrimary && !link.isPlaceholder);
  const primaryPlaceholder = contactLinks.filter((link) => link.isPrimary && link.isPlaceholder);

  const primaryClass = (link: ContactLink) => {
    if (link.type === "email") {
      return "bg-[#2F7D5C] text-white shadow-[0_14px_30px_-18px_rgba(47,125,92,0.7)] hover:bg-[#1F5F46] focus-visible:ring-2 focus-visible:ring-[#2F7D5C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EA]";
    }

    return "border border-[#D8CEBE] bg-white text-[#172033] shadow-[0_12px_26px_-22px_rgba(23,32,51,0.45)] hover:border-[#2F7D5C]/35 hover:bg-[#FBF8F2]";
  };

  return (
    <section
      id="contact"
      aria-label={locale === "ar" ? "التواصل" : "Contact"}
      className="border-t border-[#DED5C7] bg-[#FBF8F2] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <motion.div
          {...reveal(0)}
          className="relative overflow-hidden rounded-[2rem] border border-[#D5CAB9] bg-[#F7F3EA] shadow-[0_24px_60px_-44px_rgba(23,32,51,0.52)]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-65"
            style={{
              backgroundImage:
                "linear-gradient(rgba(23,32,51,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(23,32,51,0.035) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(circle at 50% 50%, black, transparent 82%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[18%] top-[-120px] h-[280px] rounded-full bg-[#2F7D5C]/[0.07] blur-3xl"
          />

          <div className="relative flex flex-col items-center gap-5 px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <motion.p
              {...reveal(0.05)}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F7D5C]"
            >
              {contactCTA.eyebrow}
            </motion.p>

            <motion.h2
              {...reveal(0.1)}
              className="max-w-[780px] text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-[#172033] sm:text-5xl lg:text-[3.7rem]"
            >
              {contactCTA.headline}
            </motion.h2>

            <motion.p
              {...reveal(0.16)}
              className="max-w-[680px] text-[15px] leading-7 text-[#5F6B7A] sm:text-base"
            >
              {contactCTA.body}
            </motion.p>

            <motion.div
              {...reveal(0.22)}
              className="mt-2 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
            >
              {primaryReal.map((link) => {
                const Icon = contactIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    {...contactAnchorProps(link)}
                    className={[
                      "soft-light-sweep inline-flex min-w-[150px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-0.5",
                      primaryClass(link),
                    ].join(" ")}
                  >
                    <Icon size={16} strokeWidth={2} aria-hidden />
                    {link.label}
                  </a>
                );
              })}

              {primaryPlaceholder.map((link) => {
                const Icon = contactIcons[link.icon];
                return (
                  <span
                    key={link.label}
                    aria-disabled="true"
                    aria-label={`${link.label} — ${ui.comingSoon}`}
                    className="inline-flex min-w-[150px] cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-[#D8CEBE] bg-[#F2ECE2] px-6 py-3 text-sm font-semibold text-[#7C8794]/60"
                  >
                    <Icon size={16} strokeWidth={2} aria-hidden />
                    {link.label}
                  </span>
                );
              })}
            </motion.div>

            <motion.div
              {...reveal(0.28)}
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#D8CEBE] bg-white/70 px-3 py-1.5 backdrop-blur-sm"
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#2F7D5C]" />
              <p className="text-[11px] text-[#7C8794] sm:text-xs">{contactCTA.location}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
