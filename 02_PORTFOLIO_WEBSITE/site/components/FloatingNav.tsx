"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage, type Locale } from "@/lib/i18n";

function LanguageSwitch({
  locale,
  setLocale,
  ariaLabel,
  className = "",
}: {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  ariaLabel: string;
  className?: string;
}) {
  const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "ar", label: "AR" },
  ];

  return (
    <div
      dir="ltr"
      role="group"
      aria-label={ariaLabel}
      className={`inline-flex items-center rounded-lg border border-[#D8CEBE] bg-[#F7F3EA] p-0.5 ${className}`}
    >
      {options.map((option) => {
        const active = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={active}
            className={[
              "rounded-md px-2 py-1 text-[10px] font-bold tracking-[0.08em] transition-all duration-200",
              active
                ? "bg-[#2F7D5C] text-white shadow-sm"
                : "text-[#6C756F] hover:bg-white hover:text-[#172033]",
            ].join(" ")}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default function FloatingNav() {
  const { content, locale, setLocale } = useLanguage();
  const navItems = content.ui.nav;
  const isRtl = locale === "ar";

  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [locale]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const menuLabel = mobileOpen
    ? isRtl
      ? "إغلاق القائمة"
      : "Close menu"
    : isRtl
      ? "فتح القائمة"
      : "Open menu";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div
          className={[
            "pointer-events-auto mx-auto flex h-[54px] max-w-[1180px] items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5",
            scrolled
              ? "border-[#D4C8B7] bg-white/[0.97] shadow-[0_12px_32px_-18px_rgba(23,32,51,0.34)] backdrop-blur-xl"
              : "border-white/[0.72] bg-white/[0.93] shadow-[0_8px_24px_-18px_rgba(23,32,51,0.28)] backdrop-blur-lg",
          ].join(" ")}
        >
          <a
            href="#home"
            onClick={() => setActive("home")}
            className="flex min-w-0 items-center gap-2 text-[#172033] transition-colors hover:text-[#2F7D5C]"
          >
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-[#172033] text-[10px] font-bold tracking-wide text-white">
              AZ
            </span>
            <span className="truncate text-[12px] font-bold tracking-[-0.01em] sm:text-[13px]">
              {content.ui.name}
            </span>
          </a>

          <nav
            aria-label={isRtl ? "التنقل الرئيسي" : "Site navigation"}
            className="hidden items-center gap-0.5 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;
              const isContact = item.id === "contact";

              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActive(item.id)}
                  className={[
                    "rounded-lg px-2.5 py-1.5 text-[11px] font-semibold transition-colors duration-200 xl:px-3",
                    isContact
                      ? "ms-1 border border-[#2F7D5C]/[0.35] bg-[#2F7D5C] px-3.5 text-white hover:bg-[#1F5F46]"
                      : isActive
                        ? "bg-[#2F7D5C]/[0.08] text-[#2F7D5C]"
                        : "text-[#69736E] hover:bg-[#172033]/[0.04] hover:text-[#172033]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}

            <LanguageSwitch
              locale={locale}
              setLocale={setLocale}
              ariaLabel={content.ui.languageLabel}
              className="ms-2"
            />
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitch
              locale={locale}
              setLocale={setLocale}
              ariaLabel={content.ui.languageLabel}
            />
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={menuLabel}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D8CEBE] bg-[#F7F3EA] text-[#5F6B7A] transition-colors hover:text-[#172033]"
            >
              {mobileOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label={isRtl ? "إغلاق القائمة" : "Close navigation"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-30 bg-[#172033]/[0.18] backdrop-blur-[2px] lg:hidden"
            />

            <motion.nav
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              aria-label={isRtl ? "قائمة التنقل" : "Mobile navigation"}
              className="fixed left-3 right-3 top-[76px] z-40 flex max-h-[calc(100vh-92px)] flex-col overflow-y-auto rounded-2xl border border-[#D4C8B7] bg-white/[0.98] p-2 shadow-[0_20px_50px_-24px_rgba(23,32,51,0.38)] backdrop-blur-xl lg:hidden"
            >
              {navItems.map((item) => {
                const isContact = item.id === "contact";
                const isActive = active === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setActive(item.id);
                      setMobileOpen(false);
                    }}
                    className={[
                      "rounded-xl px-4 py-3 text-start text-sm font-medium transition-colors",
                      isContact
                        ? "mt-1 bg-[#2F7D5C] text-center font-semibold text-white"
                        : isActive
                          ? "bg-[#2F7D5C]/[0.08] text-[#2F7D5C]"
                          : "text-[#5F6B7A] hover:bg-[#172033]/[0.04] hover:text-[#172033]",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                );
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
