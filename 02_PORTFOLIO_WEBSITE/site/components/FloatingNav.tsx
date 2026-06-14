"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home",         label: "Home",             href: "#home" },
  { id: "about",        label: "Profile",           href: "#about" },
  { id: "capabilities", label: "What he builds",    href: "#capabilities" },
  { id: "tools",        label: "Operating stack",   href: "#tools" },
  { id: "work",         label: "Business portfolio",href: "#work" },
  { id: "experience",   label: "Journey",           href: "#experience" },
  { id: "how",          label: "How he operates",   href: "#how" },
  { id: "contact",      label: "Contact",           href: "#contact" },
];

export default function FloatingNav() {
  const [active, setActive]       = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  /* Shadow / border intensifies slightly on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the active section via IntersectionObserver */
  useEffect(() => {
    const sections = navItems
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Fixed header ─────────────────────────────────────────────────── */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#F7F3EA]/96 backdrop-blur-md border-b border-[#DDD4C5] shadow-[0_1px_12px_rgba(23,32,51,0.08)]"
            : "bg-[#F7F3EA]/85 backdrop-blur-sm border-b border-[#DDD4C5]/70",
        ].join(" ")}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* Name / logo */}
          <a
            href="#home"
            onClick={() => setActive("home")}
            className="text-[15px] font-semibold text-[#172033] tracking-tight hover:text-[#2F7D5C] transition-colors duration-200"
          >
            Abdulrahman Zaid
          </a>

          {/* Desktop links */}
          <nav aria-label="Site navigation" className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive  = active === item.id;
              const isContact = item.id === "contact";
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setActive(item.id)}
                  className={[
                    "px-3 py-2 rounded-lg text-[13px] font-medium transition-colors duration-200",
                    isContact
                      ? "ml-2 px-4 border border-[#2F7D5C] text-[#2F7D5C] hover:bg-[#2F7D5C] hover:text-white"
                      : isActive
                        ? "text-[#2F7D5C] bg-[#2F7D5C]/[0.08]"
                        : "text-[#5F6B7A] hover:text-[#172033] hover:bg-[#172033]/[0.04]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 rounded-lg text-[#5F6B7A] hover:text-[#172033] hover:bg-[#172033]/[0.05] transition-colors"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.9} /> : <Menu size={20} strokeWidth={1.9} />}
          </button>
        </div>
      </header>

      {/* ── Mobile dropdown ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            aria-label="Mobile navigation"
            className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-[#F7F3EA]/98 backdrop-blur-md border-b border-[#DDD4C5] px-5 py-2 flex flex-col shadow-[0_4px_16px_rgba(23,32,51,0.08)]"
          >
            {navItems.map((item) => {
              const isContact = item.id === "contact";
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => { setActive(item.id); setMobileOpen(false); }}
                  className={[
                    "px-3 py-3 rounded-lg text-sm transition-colors",
                    isContact
                      ? "mt-1 mb-1 font-semibold text-[#2F7D5C]"
                      : active === item.id
                        ? "font-medium text-[#2F7D5C] bg-[#2F7D5C]/[0.07]"
                        : "text-[#5F6B7A] hover:text-[#172033]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
