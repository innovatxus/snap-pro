"use client";

import Link from "next/link";
import { useLocale } from "./LocaleProvider";
import { UI } from "@/lib/legal/i18n";

const LINKS = {
  egypt: [
    { href: "/legal/egypt-pdpl", labelKey: "egypt-pdpl" as const },
    { href: "/legal/business-info", labelKey: "business-info" as const },
  ],
  iraq: [{ href: "/legal/iraq-consumer", labelKey: "iraq-consumer" as const }],
  global: [
    {
      href: "/legal/international-transfers",
      labelKey: "intl-transfers" as const,
    },
    { href: "/legal/government-requests", labelKey: "gov-requests" as const },
  ],
};

const LABELS = {
  "egypt-pdpl": { en: "PDPL Notice", ar: "إشعار قانون حماية البيانات" },
  "business-info": { en: "CR & VAT", ar: "السجل التجاري والضريبة" },
  "iraq-consumer": { en: "Consumer Rights", ar: "حقوق المستهلك" },
  "intl-transfers": { en: "International Transfers", ar: "النقل الدولي" },
  "gov-requests": { en: "Government Requests", ar: "طلبات الحكومات" },
} as const;

type LabelKey = keyof typeof LABELS;
type Locale = "en" | "ar";

function Row({
  flagEmoji,
  label,
  items,
  locale,
}: {
  flagEmoji: string;
  label: string;
  items: { href: string; labelKey: LabelKey }[];
  locale: Locale;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      <span
        aria-hidden
        style={{
          fontSize: 14,
          opacity: 0.85,
        }}
      >
        {flagEmoji}
      </span>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 9,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--mute)",
          minWidth: 56,
        }}
      >
        {label}
      </span>
      <span
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
        }}
      >
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            style={{
              fontSize: 12,
              color: "var(--silver-2)",
              textDecoration: "none",
              borderBottom: "1px dotted var(--line-2)",
              paddingBottom: 1,
            }}
          >
            {LABELS[it.labelKey][locale]}
          </Link>
        ))}
      </span>
    </div>
  );
}

export default function RegionalStrip() {
  const { locale } = useLocale();

  return (
    <div
      aria-label={UI.footer.regional.title[locale]}
      style={{
        borderTop: "1px solid var(--line)",
        background: "var(--surface)",
      }}
    >
      <div
        className='max-w-370 mx-auto max-[720px]:px-4'
        style={{
          padding: "20px 48px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px 36px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Row
          flagEmoji='🇪🇬'
          label={locale === "ar" ? "مصر" : "Egypt"}
          items={LINKS.egypt}
          locale={locale}
        />
        <Row
          flagEmoji='🇮🇶'
          label={locale === "ar" ? "العراق" : "Iraq"}
          items={LINKS.iraq}
          locale={locale}
        />
        <Row
          flagEmoji='🌐'
          label={locale === "ar" ? "عالمياً" : "Global"}
          items={LINKS.global}
          locale={locale}
        />
      </div>
    </div>
  );
}
