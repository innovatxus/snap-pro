"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { DIR, LOCALE_STORAGE_KEY, type Locale } from "@/lib/legal/i18n";

const EVENT_NAME = "snap-locale-change";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Lazy initial value: read from localStorage during the first client render.
  // SSR returns "en"; the inline pre-paint script in app/layout.tsx already set
  // <html dir="rtl"> so RTL pages render correctly before this hydrates.
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    try {
      const v = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      return v === "ar" ? "ar" : "en";
    } catch {
      return "en";
    }
  });

  // Subscribe to cross-component locale changes broadcast from setLocale.
  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<Locale>).detail;
      if (detail === "ar" || detail === "en") {
        setLocaleState(detail);
      }
    };
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, l);
    } catch {
      /* storage may be unavailable */
    }
    document.documentElement.setAttribute("lang", l);
    document.documentElement.setAttribute("dir", DIR[l]);
    setLocaleState(l);
    window.dispatchEvent(new CustomEvent<Locale>(EVENT_NAME, { detail: l }));
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
