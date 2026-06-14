"use client";

import { motion } from "framer-motion";
import { contactCTA, contactLinks, type ContactLink } from "@/content/homepage";
import { contactIcons, contactAnchorProps } from "@/lib/contactIcons";
import { useReveal } from "@/lib/motion";
import { useMouseGlow } from "@/lib/useMouseGlow";

export default function ContactCTA() {
  const reveal = useReveal();
  const glowRef = useMouseGlow<HTMLElement>();

  const primaryReal        = contactLinks.filter((l) => l.isPrimary && !l.isPlaceholder);
  const primaryPlaceholder = contactLinks.filter((l) => l.isPrimary && l.isPlaceholder);

  const primaryClass = (link: ContactLink) => {
    if (link.type === "email")
      return "bg-[#2F7D5C] text-white hover:bg-[#1F5F46] focus-visible:ring-2 focus-visible:ring-[#2F7D5C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3EA]";
    return "glass glass-hover text-[#172033]";
  };

  return (
    <section ref={glowRef} id="contact" aria-label="Contact" className="px-6 lg:px-24 py-24 border-t border-[#DDD4C5]">
      <div className="max-w-6xl mx-auto">
        <motion.div data-glow {...reveal(0)} className="mouse-glow-panel relative glass rounded-3xl border border-[#2F7D5C]/20 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#2F7D5C]/[0.05] to-transparent" />
          <div className="relative flex flex-col items-center text-center gap-6 px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
            <motion.p {...reveal(0.05)} className="text-xs text-[#2F7D5C] tracking-widest uppercase font-medium">
              {contactCTA.eyebrow}
            </motion.p>
            <motion.h2 {...reveal(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#172033] leading-[1.05] tracking-tight">
              {contactCTA.headline}
            </motion.h2>
            <motion.p {...reveal(0.16)} className="max-w-xl text-base sm:text-lg text-[#5F6B7A] leading-relaxed">
              {contactCTA.body}
            </motion.p>

            <motion.div {...reveal(0.22)} className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
              {/* Real primary links */}
              {primaryReal.map((link) => {
                const Icon = contactIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    {...contactAnchorProps(link)}
                    className={[
                      "soft-light-sweep inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors",
                      primaryClass(link),
                    ].join(" ")}
                  >
                    <Icon size={16} strokeWidth={2} aria-hidden />
                    {link.label}
                  </a>
                );
              })}

              {/* Placeholder primaries — LinkedIn shown as disabled */}
              {primaryPlaceholder.map((link) => {
                const Icon = contactIcons[link.icon];
                return (
                  <span
                    key={link.label}
                    aria-disabled="true"
                    aria-label={`${link.label} — coming soon`}
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[#DDD4C5] bg-[#F7F3EA] text-[#7C8794]/60"
                  >
                    <Icon size={16} strokeWidth={2} aria-hidden />
                    {link.label}
                  </span>
                );
              })}
            </motion.div>

            <motion.div {...reveal(0.28)} className="inline-flex items-center gap-2 mt-3">
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#2F7D5C]" />
              <p className="text-xs sm:text-[13px] text-[#7C8794]">{contactCTA.location}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
