"use client";

import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";

/* ─────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */

type Service = {
  name: string;
  desc: string;
  cat: "Cut" | "Stage" | "Enhance" | "Format";
  badge?: string;
};

const SERVICES: Service[] = [
  {
    name: "Background Removal",
    desc: "Isolate any product instantly",
    cat: "Cut",
    badge: "AI",
  },
  { name: "Ghost Mannequin", desc: "Invisible mannequin effect", cat: "Cut" },
  {
    name: "Object Removal",
    desc: "Erase distractions cleanly",
    cat: "Cut",
    badge: "NEW",
  },
  {
    name: "AI Scene Staging",
    desc: "Drop into 200+ curated environments",
    cat: "Stage",
    badge: "HOT",
  },
  {
    name: "Flat Lay Studio",
    desc: "Overhead product photography",
    cat: "Stage",
  },
  {
    name: "Lifestyle Composite",
    desc: "Place product in lifestyle shots",
    cat: "Stage",
  },
  {
    name: "Color Grading",
    desc: "Professional color correction",
    cat: "Enhance",
  },
  {
    name: "4× Upscaling",
    desc: "AI-powered resolution boost",
    cat: "Enhance",
    badge: "NEW",
  },
  {
    name: "Shadow Generator",
    desc: "Add realistic drop shadows",
    cat: "Enhance",
  },
  {
    name: "Social Resize",
    desc: "9 platform exports in one click",
    cat: "Format",
  },
];

const CAT_ACCENT: Record<Service["cat"], string> = {
  Cut: "#38BDF8",
  Stage: "#A8AEB8",
  Enhance: "#FFC857",
  Format: "#C8B6FF",
};

const CATEGORIES: {
  key: Service["cat"];
  desc: string;
  count: number;
  icon: string;
}[] = [
  { key: "Cut", desc: "Remove & isolate", count: 5, icon: "✂" },
  { key: "Stage", desc: "Scene & studio", count: 6, icon: "◻" },
  { key: "Enhance", desc: "Polish & refine", count: 4, icon: "✦" },
  { key: "Format", desc: "Resize & export", count: 4, icon: "⊞" },
];

/* ─────────────────────────────────────────────────────────
   SMALL HELPERS
───────────────────────────────────────────────────────── */

/** Tiny badge pill — AI / NEW / HOT */
function Badge({ label }: { label: string }) {
  const accent =
    label === "AI" ? "#38BDF8" : label === "HOT" ? "#FFC857" : "#C8B6FF";
  return (
    <span
      style={{
        fontSize: 8,
        fontFamily: "var(--font-geist-mono), monospace",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: accent,
        background: `${accent}15`,
        border: `1px solid ${accent}35`,
        borderRadius: 4,
        padding: "2px 5px",
        flexShrink: 0,
        lineHeight: 1.4,
      }}
    >
      {label}
    </span>
  );
}

/** 34×34 dark icon box with a line-art SVG inside */
function IconBox({ type }: { type: Service["cat"] | "logo" }) {
  const accent =
    type === "logo" ? "#38BDF8" : CAT_ACCENT[type as Service["cat"]];
  return (
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: 9,
        background: "var(--surface-3)",
        border: "1px solid var(--line-2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {type === "Cut" && (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <circle cx='4' cy='4' r='2' stroke={accent} strokeWidth='1.3' />
          <circle cx='4' cy='12' r='2' stroke={accent} strokeWidth='1.3' />
          <path
            d='M6 4.5L13 11.5M6 11.5L13 4.5'
            stroke={accent}
            strokeWidth='1.3'
            strokeLinecap='round'
          />
        </svg>
      )}
      {type === "Stage" && (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='1'
            y='2'
            width='14'
            height='12'
            rx='2'
            stroke={accent}
            strokeWidth='1.3'
          />
          <path
            d='M1 9l4-3 3 3 3-4 4 4'
            stroke={accent}
            strokeWidth='1.3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
      {type === "Enhance" && (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M8 1v3M8 12v3M1 8h3M12 8h3'
            stroke={accent}
            strokeWidth='1.3'
            strokeLinecap='round'
          />
          <circle cx='8' cy='8' r='3' stroke={accent} strokeWidth='1.3' />
        </svg>
      )}
      {type === "Format" && (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='1'
            y='1'
            width='6'
            height='6'
            rx='1.5'
            stroke={accent}
            strokeWidth='1.3'
          />
          <rect
            x='9'
            y='1'
            width='6'
            height='6'
            rx='1.5'
            stroke={accent}
            strokeWidth='1.3'
          />
          <rect
            x='1'
            y='9'
            width='6'
            height='6'
            rx='1.5'
            stroke={accent}
            strokeWidth='1.3'
          />
          <rect
            x='9'
            y='9'
            width='6'
            height='6'
            rx='1.5'
            stroke={accent}
            strokeWidth='1.3'
          />
        </svg>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   DROPDOWN PANEL
───────────────────────────────────────────────────────── */

interface DropdownProps {
  pos: { top: number; left: number };
  onEnter: () => void;
  onLeave: () => void;
}

function ToolsDropdown({ pos, onEnter, onLeave }: DropdownProps) {
  return (
    <div
      className='nav-dropdown'
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "fixed",
        top: pos.top,
        left: pos.left,
        width: 760,
        zIndex: 9999,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid var(--line)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow:
          "0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04) inset",
        display: "flex",
      }}
    >
      {/* ── Left panel: service list ── */}
      <div
        style={{
          flex: "0 0 340px",
          padding: "20px 0",
          borderRight: "1px solid var(--line)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Column header */}
        <div
          style={{
            padding: "0 20px 10px",
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mute-2)",
          }}
        >
          Services
        </div>

        {/* Service rows */}
        {SERVICES.map((svc) => (
          <button
            key={svc.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 20px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.15s ease",
              width: "100%",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.04)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "transparent")
            }
          >
            <IconBox type={svc.cat} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--ink)",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {svc.name}
                </span>
                {svc.badge && <Badge label={svc.badge} />}
              </div>
              <span
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: 11,
                  color: "var(--mute)",
                  letterSpacing: "-0.005em",
                }}
              >
                {svc.desc}
              </span>
            </div>
            {/* Category tag */}
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 8,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: CAT_ACCENT[svc.cat],
                opacity: 0.7,
                flexShrink: 0,
              }}
            >
              {svc.cat}
            </span>
          </button>
        ))}

        {/* View all footer */}
        <div
          style={{
            marginTop: "auto",
            padding: "14px 20px 4px",
            borderTop: "1px solid var(--line)",
          }}
        >
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#38BDF8",
              padding: 0,
            }}
          >
            Browse all 17 tools
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
              <path
                d='M2.5 6h7M7 3.5L9.5 6 7 8.5'
                stroke='#38BDF8'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Right panel: categories ── */}
      <div
        style={{
          flex: 1,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Column header */}
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--mute-2)",
          }}
        >
          Categories
        </div>

        {/* 2×2 category cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            flex: 1,
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 6,
                padding: "14px 16px",
                background: "var(--surface-2)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                cursor: "pointer",
                textAlign: "left",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${CAT_ACCENT[cat.key as Service["cat"]]}35`;
                el.style.background = "var(--surface-3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--line)";
                el.style.background = "var(--surface-2)";
              }}
            >
              {/* Icon + count row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    lineHeight: 1,
                    color: CAT_ACCENT[cat.key as Service["cat"]],
                  }}
                >
                  {cat.icon}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    color: CAT_ACCENT[cat.key as Service["cat"]],
                    opacity: 0.65,
                  }}
                >
                  {cat.count} tools
                </span>
              </div>

              {/* Label */}
              <span
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--ink)",
                  letterSpacing: "-0.02em",
                }}
              >
                {cat.key}
              </span>

              {/* Desc */}
              <span
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: 11,
                  color: "var(--mute)",
                  lineHeight: 1.4,
                }}
              >
                {cat.desc}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            padding: "14px 16px",
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                marginBottom: 2,
              }}
            >
              Start with 25 free credits
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 14px",
              background: "var(--blue-grad)",
              borderRadius: 999,
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 20px rgba(56,189,248,0.3)",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "#fff",
                whiteSpace: "nowrap",
              }}
            >
              Try free
            </span>
            <svg width='11' height='11' viewBox='0 0 11 11' fill='none'>
              <path
                d='M2 5.5h7M7 3l2 2.5L7 8'
                stroke='white'
                strokeWidth='1.3'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Services", key: null },
  { label: "Niches", key: null },
  { label: "Tools", key: "tools" },
  { label: "Templates", key: null },
  { label: "Educationals", key: null },
  { label: "Pricing", key: null },
  { label: "About", key: null },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [dropPos, setDropPos] = useState({ top: 0, left: 0 });
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* cleanup on unmount */
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const handleNavEnter = (key: string, e: React.MouseEvent) => {
    cancelClose();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const W = 760;
    const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
    const left = Math.min(Math.max(12, rect.left - 80), vw - W - 12);
    setDropPos({ top: rect.bottom + 10, left });
    setOpenMenu(key);
  };

  return (
    <>
      <nav className='mb-15 flex items-center justify-between relative z-10'>
        <div className='flex w-full items-center justify-between px-5.5 py-3.5'>
          {/* ── Left: Logo ── */}
          <div className='flex items-center'>
            <Logo />
          </div>

          {/* ── Center: Nav links ── */}
          <div className='hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2'>
            {NAV_LINKS.map(({ label, key }, i) => (
              <div
                key={label}
                style={{ position: "relative" }}
                onMouseEnter={key ? (e) => handleNavEnter(key, e) : undefined}
                onMouseLeave={key ? scheduleClose : undefined}
              >
                <a
                  href={`#${label.toLowerCase()}`}
                  className='transition-colors duration-200'
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color:
                      i === 0
                        ? "var(--blue)"
                        : openMenu === key
                          ? "var(--ink)"
                          : "var(--mute)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--ink)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      openMenu === key
                        ? "var(--ink)"
                        : i === 0
                          ? "var(--blue)"
                          : "var(--mute)")
                  }
                >
                  {label}
                  {/* Chevron for dropdown items */}
                  {key && (
                    <svg
                      width='10'
                      height='10'
                      viewBox='0 0 10 10'
                      fill='none'
                      style={{
                        transition: "transform 0.2s ease",
                        transform:
                          openMenu === key ? "rotate(180deg)" : "rotate(0deg)",
                        opacity: 0.5,
                      }}
                    >
                      <path
                        d='M2 3.5L5 6.5L8 3.5'
                        stroke='currentColor'
                        strokeWidth='1.3'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  )}
                </a>
              </div>
            ))}
          </div>

          {/* ── Right: Token chip + CTA ── */}
          <div className='flex items-center gap-3'>
            {/* Token chip */}
            <div className='hidden sm:flex items-center gap-2 px-3 py-1.75'>
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
                <path
                  d='M6 1L11 6L6 11L1 6L6 1Z'
                  fill='url(#silver-diamond)'
                  stroke='rgba(255,255,255,0.2)'
                  strokeWidth='0.5'
                />
                <defs>
                  <linearGradient
                    id='silver-diamond'
                    x1='1'
                    y1='1'
                    x2='11'
                    y2='11'
                  >
                    <stop stopColor='#FFFFFF' />
                    <stop offset='0.5' stopColor='#A8AEB8' />
                    <stop offset='1' stopColor='#5A6069' />
                  </linearGradient>
                </defs>
              </svg>
              <span
                className='text-silver-grad font-bold'
                style={{ fontSize: 13 }}
              >
                25
              </span>
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                }}
              >
                TOKENS
              </span>
              <button
                className='flex items-center justify-center'
                style={{
                  width: 18,
                  height: 18,
                  background: "var(--blue-grad)",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                +
              </button>
            </div>

            {/* CTA */}
            <button
              style={{
                padding: "9px 16px",
                borderRadius: 999,
                background: "var(--blue-grad)",
                color: "white",
                fontSize: 12,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
                fontFamily: "var(--font-geist-sans), sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Get the app
            </button>
          </div>
        </div>
      </nav>

      {/* ── Dropdown — rendered fixed to bypass Hero overflow:hidden ── */}
      {openMenu === "tools" && (
        <ToolsDropdown
          pos={dropPos}
          onEnter={cancelClose}
          onLeave={() => setOpenMenu(null)}
        />
      )}
    </>
  );
}
