"use client";

import { contactIcons, contactAnchorProps } from "@/lib/contactIcons";
import { useLanguage } from "@/lib/i18n";

export default function SiteFooter() {
  const { content, locale } = useLanguage();
  const { siteFooter, contactLinks } = content;
  const realLinks = contactLinks.filter((link) => !link.isPlaceholder);

  return (
    <footer
      role="contentinfo"
      className="border-t border-[#DED5C7] bg-[#F4F0E7] px-6 py-8 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <p className="order-2 text-center text-[10.5px] leading-5 text-[#7C8794] sm:order-1 sm:text-start">
          {siteFooter.copyright}
        </p>

        <div className="order-1 flex items-center gap-2 sm:order-2">
          <nav
            aria-label={locale === "ar" ? "روابط التواصل" : "Footer links"}
            className="flex items-center gap-1.5"
          >
            {realLinks.map((link) => {
              const Icon = contactIcons[link.icon];
              return (
                <a
                  key={`${link.type}-${link.label}`}
                  {...contactAnchorProps(link)}
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D8CEBE] bg-white text-[#7C8794] shadow-[0_8px_18px_-16px_rgba(23,32,51,0.45)] transition-colors hover:border-[#2F7D5C]/35 hover:bg-[#FBF8F2] hover:text-[#2F7D5C]"
                >
                  <Icon size={15} strokeWidth={1.9} aria-hidden />
                </a>
              );
            })}
          </nav>

          <a
            href="#home"
            aria-label={locale === "ar" ? "العودة إلى الأعلى" : "Back to top"}
            className="ms-1 flex h-10 w-10 items-center justify-center rounded-xl border border-[#2F7D5C]/35 bg-[#EFF7F2] text-[#2F7D5C] shadow-[0_8px_20px_-16px_rgba(47,125,92,0.55)] transition-colors hover:bg-[#2F7D5C] hover:text-white"
          >
            <span aria-hidden className="text-base leading-none">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
