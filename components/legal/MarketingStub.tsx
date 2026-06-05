"use client";

import Link from "next/link";
import { useLocale } from "@/components/legal/LocaleProvider";
import type { BiText } from "@/lib/legal/types";
import { UI } from "@/lib/legal/i18n";

interface CTA {
  href: string;
  label: BiText;
}

interface Props {
  eyebrow?: BiText;
  title: BiText;
  lede?: BiText;
  body?: BiText;
  ctas?: CTA[];
  draft?: boolean;
}

/**
 * Lightweight marketing/support page shell. Used for standalone routes (e.g.
 * `/contact`, `/help`, `/changelog`) that don't need the full `LegalArticle`
 * structure but still must render bilingually and respect the active locale.
 */
export default function MarketingStub({
  eyebrow,
  title,
  lede,
  body,
  ctas,
  draft,
}: Props) {
  const { locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <section
      lang={locale}
      dir={dir}
      style={{
        maxWidth: 720,
        margin: "140px auto 96px",
        padding: "0 32px",
        fontFamily: "var(--font-geist-sans), sans-serif",
        color: "var(--ink)",
      }}
    >
      {eyebrow && (
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--blue)",
            marginBottom: 18,
          }}
        >
          {eyebrow[locale]}
        </div>
      )}

      <h1
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "clamp(38px, 5vw, 60px)",
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          margin: "0 0 24px",
        }}
      >
        {title[locale]}
      </h1>

      {lede && (
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: "var(--silver-2)",
            marginBottom: 28,
          }}
        >
          {lede[locale]}
        </p>
      )}

      {body && (
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.75,
            color: "var(--mute)",
            marginBottom: 32,
          }}
        >
          {body[locale]}
        </p>
      )}

      {draft && (
        <div
          style={{
            margin: "24px 0",
            padding: "14px 18px",
            border: "1px solid rgba(255,200,87,0.35)",
            background: "rgba(255,200,87,0.08)",
            borderRadius: 12,
            color: "var(--silver-2)",
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#FFC857" }}>
            {UI.draftBanner.title[locale]}
          </strong>
          {" — "}
          {UI.draftBanner.body[locale]}
        </div>
      )}

      {ctas && ctas.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 28,
          }}
        >
          {ctas.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              style={{
                padding: "11px 22px",
                borderRadius: 999,
                background: i === 0 ? "var(--silver-grad)" : "transparent",
                color: i === 0 ? "#000" : "var(--ink)",
                border: i === 0 ? "none" : "1px solid var(--line-2)",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              {c.label[locale]}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
