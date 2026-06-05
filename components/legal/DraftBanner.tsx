"use client";

import { useLocale } from "./LocaleProvider";
import { UI } from "@/lib/legal/i18n";

/**
 * Surfaced at the top of every legal/policy/trust page whose `status` is
 * `"draft"`. Communicates to users (and crawlers via `noindex` meta on the
 * page) that the page is structural, not yet counsel-reviewed.
 */
export default function DraftBanner() {
  const { locale } = useLocale();
  return (
    <div
      role='note'
      style={{
        margin: "0 0 32px",
        padding: "14px 18px",
        background: "rgba(255,200,87,0.08)",
        border: "1px solid rgba(255,200,87,0.28)",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#FFC857",
          fontWeight: 600,
        }}
      >
        {UI.draftBanner.title[locale]}
      </div>
      <p
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontSize: 13,
          lineHeight: 1.6,
          color: "var(--mute)",
          margin: 0,
        }}
      >
        {UI.draftBanner.body[locale]}
      </p>
    </div>
  );
}
