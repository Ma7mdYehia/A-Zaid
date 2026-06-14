"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type SiteContent } from "@/content/homepage";
import { ar } from "@/content/homepage.ar";

export type Locale = "en" | "ar";
export type Dir = "ltr" | "rtl";

const BUNDLES: Record<Locale, SiteContent> = { en, ar };
const STORAGE_KEY = "az-locale";

interface LanguageContextValue {
  locale: Locale;
  dir: Dir;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  /* Restore persisted choice on mount */
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ar") setLocaleState(stored);
    } catch {
      /* ignore storage access errors */
    }
  }, []);

  const dir: Dir = locale === "ar" ? "rtl" : "ltr";

  /* Keep <html lang/dir> in sync with the active locale */
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dir;
  }, [locale, dir]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage access errors */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, dir, setLocale, toggle, content: BUNDLES[locale] }),
    [locale, dir, setLocale, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Convenience hook returning the active locale's content bundle. */
export function useContent(): SiteContent {
  return useLanguage().content;
}
