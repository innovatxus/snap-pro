"use client";

import { useLocale } from "./LocaleProvider";
import { LANG_LABEL, UI, type Locale } from "@/lib/legal/i18n";

interface Props {
  variant?: "footer" | "inline";
}

function ButtonInner({
  target,
  children,
  variant,
  locale,
  setLocale,
}: {
  target: Locale;
  children: React.ReactNode;
  variant: "footer" | "inline";
  locale: Locale;
  setLocale: (l: Locale) => void;
}) {
  const active = locale === target;
  return (
    <button
      type='button'
      onClick={() => setLocale(target)}
      aria-pressed={active}
      aria-label={UI.switcher.aria[locale]}
      style={{
        padding: variant === "footer" ? "5px 10px" : "4px 10px",
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: 10,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: active ? "var(--ink)" : "var(--mute)",
        background: active ? "var(--surface-2)" : "transparent",
        border: `1px solid ${active ? "var(--line)" : "transparent"}`,
        borderRadius: 6,
        cursor: "pointer",
        transition:
          "color 0.15s ease, background 0.15s ease, border-color 0.15s ease",
      }}
    >
      {children}
    </button>
  );
}

/**
 * Compact EN / AR pill toggle. Stored in localStorage and broadcast via
 * `snap-locale-change`. Updates `<html lang>` and `<html dir>` on click so the
 * entire page mirrors immediately.
 */
export default function LocaleSwitcher({ variant = "inline" }: Props) {
  const { locale, setLocale } = useLocale();
  const isAr = locale === "ar";

  return (
    <div
      role='group'
      aria-label={UI.switcher.aria[locale]}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        borderRadius: 8,
        border: "1px solid var(--line)",
        background: "var(--surface)",
      }}
      dir='ltr'
      title={isAr ? LANG_LABEL.ar : LANG_LABEL.en}
    >
      <ButtonInner
        target='en'
        variant={variant}
        locale={locale}
        setLocale={setLocale}
      >
        EN
      </ButtonInner>
      <ButtonInner
        target='ar'
        variant={variant}
        locale={locale}
        setLocale={setLocale}
      >
        AR
      </ButtonInner>
    </div>
  );
}
