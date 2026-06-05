"use client";

import Link from "next/link";
import { useLocale } from "./LocaleProvider";
import DraftBanner from "./DraftBanner";
import type { LegalPage } from "@/lib/legal/types";
import { UI } from "@/lib/legal/i18n";

interface Props {
  page: LegalPage;
}

/**
 * Generic legal/policy/trust page shell. Reads the active locale from
 * `LocaleProvider` and renders the matching strings. Sets `dir` on the article
 * so RTL layout works without affecting the surrounding chrome.
 */
export default function LegalArticle({ page }: Props) {
  const { locale } = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <article
      lang={locale}
      dir={dir}
      style={{
        maxWidth: 760,
        margin: "120px auto 96px",
        padding: "0 32px",
        fontFamily: "var(--font-geist-sans), sans-serif",
        color: "var(--ink)",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--blue)",
          marginBottom: 16,
        }}
      >
        {page.tree === "legal"
          ? locale === "ar"
            ? "قانوني"
            : "Legal"
          : page.tree === "policies"
            ? locale === "ar"
              ? "السياسات"
              : "Policies"
            : page.tree === "trust"
              ? locale === "ar"
                ? "الثقة"
                : "Trust"
              : ""}
      </div>

      {/* H1 */}
      <h1
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 300,
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
          margin: "0 0 24px",
        }}
      >
        {page.h1[locale]}
      </h1>

      {/* Updated meta */}
      {page.updated && (
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--mute)",
            marginBottom: 32,
          }}
        >
          {UI.lastReviewed[locale]} · {page.updated}
        </div>
      )}

      {/* Draft banner */}
      {page.status === "draft" && <DraftBanner />}

      {/* Lede / summary */}
      {page.summary && (
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--silver-2)",
            marginBottom: 40,
            paddingBottom: 32,
            borderBottom: "1px solid var(--line)",
          }}
        >
          {page.summary[locale]}
        </p>
      )}

      {/* Mini ToC */}
      {page.sections.length > 3 && (
        <nav
          aria-label={UI.contents[locale]}
          style={{
            margin: "0 0 48px",
            padding: "16px 20px",
            border: "1px solid var(--line)",
            borderRadius: 12,
            background: "var(--surface)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--mute)",
              marginBottom: 10,
            }}
          >
            {UI.contents[locale]}
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "6px 18px",
              fontSize: 13,
            }}
          >
            {page.sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  style={{ color: "var(--mute)", textDecoration: "none" }}
                >
                  <span style={{ color: "var(--blue)", marginRight: 6 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.heading[locale]}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Sections */}
      {page.sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{ marginBottom: 48, scrollMarginTop: 96 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.005em",
              margin: "0 0 18px",
              display: "flex",
              alignItems: "baseline",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 11,
                color: "var(--blue)",
                fontWeight: 500,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {s.heading[locale]}
          </h2>

          {s.lede && (
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "var(--silver-2)",
                marginBottom: 16,
              }}
            >
              {s.lede[locale]}
            </p>
          )}

          {s.paragraphs?.[locale]?.map((p, pi) => (
            <p
              key={pi}
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                color: "var(--mute)",
                marginBottom: 14,
              }}
            >
              {p}
            </p>
          ))}

          {s.bullets && s.bullets[locale].length > 0 && (
            <ul
              style={{
                margin: "8px 0 16px",
                paddingInlineStart: 22,
                color: "var(--mute)",
                fontSize: 15,
                lineHeight: 1.75,
              }}
            >
              {s.bullets[locale].map((b, bi) => (
                <li key={bi} style={{ marginBottom: 6 }}>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {s.defs && s.defs.length > 0 && (
            <dl style={{ margin: "12px 0 18px" }}>
              {s.defs.map((d, di) => (
                <div key={di} style={{ marginBottom: 14 }}>
                  <dt
                    style={{
                      fontWeight: 600,
                      color: "var(--ink)",
                      marginBottom: 4,
                    }}
                  >
                    {d.term[locale]}
                  </dt>
                  <dd
                    style={{
                      margin: 0,
                      color: "var(--mute)",
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    {d.meaning[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          {s.table && (
            <div
              style={{
                overflowX: "auto",
                margin: "12px 0 18px",
                border: "1px solid var(--line)",
                borderRadius: 10,
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 13,
                }}
              >
                <thead>
                  <tr style={{ background: "var(--surface)" }}>
                    {s.table.head[locale].map((h, hi) => (
                      <th
                        key={hi}
                        style={{
                          textAlign: locale === "ar" ? "right" : "left",
                          padding: "10px 14px",
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--mute)",
                          borderBottom: "1px solid var(--line)",
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row[locale].map((cell, ci) => (
                        <td
                          key={ci}
                          style={{
                            padding: "10px 14px",
                            color: "var(--silver-2)",
                            borderTop: "1px solid var(--line)",
                            verticalAlign: "top",
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}

      {/* CTA */}
      {page.cta && (
        <div
          style={{
            margin: "56px 0 48px",
            padding: 24,
            border: "1px solid var(--line)",
            borderRadius: 14,
            background: "var(--surface)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <Link
            href={page.cta.href}
            style={{
              alignSelf: locale === "ar" ? "flex-end" : "flex-start",
              padding: "10px 20px",
              borderRadius: 999,
              background: "var(--silver-grad)",
              color: "#000",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            {page.cta.label[locale]}
          </Link>
          {page.cta.note && (
            <p
              style={{
                margin: 0,
                color: "var(--mute)",
                fontSize: 12,
              }}
            >
              {page.cta.note[locale]}
            </p>
          )}
        </div>
      )}

      {/* Related */}
      {page.related && page.related.length > 0 && (
        <nav
          aria-label={UI.related[locale]}
          style={{
            marginTop: 56,
            paddingTop: 28,
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--mute)",
              marginBottom: 14,
            }}
          >
            {UI.related[locale]}
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {page.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  style={{
                    fontSize: 13,
                    color: "var(--silver-2)",
                    textDecoration: "underline",
                    textUnderlineOffset: 4,
                    textDecorationColor: "var(--line-2)",
                  }}
                >
                  {r.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </article>
  );
}
