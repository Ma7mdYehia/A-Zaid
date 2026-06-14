"use client";

import { motion } from "framer-motion";
import { contactCTA, contactLinks, type ContactLink } from "@/content/homepage";
import { contactIcons, contactAnchorProps } from "@/lib/contactIcons";
import { useReveal } from "@/lib/motion";
import { useMouseGlow } from "@/lib/useMouseGlow";

export default function ContactCTA() {
  const reveal = useReveal();
  const glowRef = useMouseGlow<HTMLElement>();

  const primaryReal = contactLinks.filter((l) => l.isPrimary && !l.isPlaceholder);
  const primaryPlaceholder = contactLinks.filter((l) => l.isPrimary && l.isPlaceholder);

  const primaryClass = (link: ContactLink) => {
    if (link.type === "email")
      return "bg-[#3DBA8C] text-[#0B1220] hover:bg-[#35a87d] focus-visible:ring-2 focus-visible:ring-[#3DBA8C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]";
    return "glass glass-hover text-[#E8EDF2]";
  };

  return (
    <section ref={glowRef} id="contact" aria-label="Contact" className="px-6 lg:px-24 py-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div data-glow {...reveal(0)} className="mouse-glow-panel relative glass rounded-3xl border border-[#3DBA8C]/20 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#3DBA8C]/[0.06] to-transparent" />
          <div className="relative flex flex-col items-center text-center gap-6 px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
            <motion.p {...reveal(0.05)} className="text-xs text-[#3DBA8C] tracking-widest uppercase font-medium">
              {contactCTA.eyebrow}
            </motion.p>
            <motion.h2 {...reveal(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#E8EDF2] leading-[1.05] tracking-tight">
              {contactCTA.headline}
            </motion.h2>
            <motion.p {...reveal(0.16)} className="max-w-xl text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              {contactCTA.body}
            </motion.p>

            <motion.div {...reveal(0.22)} className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
              {/* Real primary links — Email and WhatsApp */}
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

              {/* Placeholder primaries — LinkedIn shown as muted coming-soon button */}
              {primaryPlaceholder.map((link) => {
                const Icon = contactIcons[link.icon];
                return (
                  <span
                    key={link.label}
                    aria-disabled="true"
                    aria-label={`${link.label} — coming soon`}
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.08] bg-white/[0.03] text-[#94A3B8]/50"
                  >
                    <Icon size={16} strokeWidth={2} aria-hidden />
                    {link.label}
                  </span>
                );
              })}
            </motion.div>

            <motion.div {...reveal(0.28)} className="inline-flex items-center gap-2 mt-3">
              <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[#3DBA8C]" />
              <p className="text-xs sm:text-[13px] text-[#94A3B8]/70">{contactCTA.location}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
