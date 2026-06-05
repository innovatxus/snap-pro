"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
  { label: "Services", key: null, href: "/#services" },
  { label: "Niches", key: null, href: "/#niches" },
  { label: "Tools", key: "tools", href: "/#ai-features" },
  { label: "Templates", key: null, href: "/templates" },
  { label: "Educationals", key: null, href: "/learn" },
  { label: "Pricing", key: null, href: "/#pricing" },
  { label: "About", key: null, href: "/about" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [dropPos, setDropPos] = useState({ top: 0, left: 0 });
  const [tokenHover, setTokenHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* cleanup on unmount */
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  /* lock body scroll + esc-to-close while mobile menu is open */
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileToolsOpen(false);
  };

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
            <Link
              href='/'
              aria-label='Snap Pro — home'
              style={{ display: "inline-flex", textDecoration: "none" }}
            >
              <Logo />
            </Link>
          </div>

          {/* ── Center: Nav links ── */}
          <div className='hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2'>
            {NAV_LINKS.map(({ label, key, href }, i) => (
              <div
                key={label}
                style={{ position: "relative" }}
                onMouseEnter={key ? (e) => handleNavEnter(key, e) : undefined}
                onMouseLeave={key ? scheduleClose : undefined}
              >
                <Link
                  href={href ?? `/#${label.toLowerCase()}`}
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
                </Link>
              </div>
            ))}
          </div>

          {/* ── Right: Token chip + CTA ── */}
          <div className='flex items-center gap-3'>
            {/* Mobile hamburger */}
            <button
              type='button'
              className='lg:hidden inline-flex items-center justify-center'
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls='mobile-nav-panel'
              onClick={() => setMobileOpen((v) => !v)}
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "var(--surface-2)",
                border: "1px solid var(--line-2)",
                color: "var(--ink)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                aria-hidden='true'
              >
                {mobileOpen ? (
                  <path
                    d='M4 4l10 10M14 4L4 14'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                ) : (
                  <path
                    d='M3 5h12M3 9h12M3 13h12'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                )}
              </svg>
            </button>

            {/* Token chip */}
            <button
              className='hidden sm:inline-flex items-center'
              onMouseEnter={() => setTokenHover(true)}
              onMouseLeave={() => setTokenHover(false)}
              style={{
                gap: 8,
                background:
                  "linear-gradient(135deg, rgba(20,22,28,0.9), rgba(10,12,16,0.9))",
                border: `1px solid ${tokenHover ? "rgba(56,189,248,0.45)" : "var(--line-2, rgba(255,255,255,0.08))"}`,
                padding: "7px 12px 7px 9px",
                borderRadius: 999,
                boxShadow: tokenHover
                  ? "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 14px rgba(0,0,0,0.3), 0 0 18px rgba(56,189,248,0.18)"
                  : "inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 14px rgba(0,0,0,0.3)",
                transform: tokenHover ? "translateY(-1px)" : "translateY(0)",
                transition:
                  "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
            >
              {/* Silver coin icon */}
              <span
                className='flex items-center justify-center flex-shrink-0'
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #d8dce3 14%, #4e535c 32%, #b5bac2 48%, #2e323a 60%, #c8cdd4 76%, #ffffff 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.6), 0 0 10px rgba(232,234,237,0.25)",
                  fontSize: 9,
                  fontWeight: 800,
                  color: "#000",
                  lineHeight: 1,
                }}
              >
                ★
              </span>
              {/* Number */}
              <span
                style={{
                  color: "var(--blue)",
                  fontWeight: 700,
                  fontSize: 13,
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  lineHeight: 1,
                }}
              >
                25
              </span>
              {/* Label */}
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                  lineHeight: 1,
                }}
              >
                tokens
              </span>
              {/* Plus circle */}
              <span
                className='flex items-center justify-center flex-shrink-0'
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  background: "var(--blue, #38bdf8)",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: 11,
                  lineHeight: 1,
                  boxShadow: "0 0 10px var(--blue-glow, rgba(56,189,248,0.5))",
                }}
              >
                +
              </span>
            </button>

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

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <button
            type='button'
            aria-label='Close menu'
            onClick={closeMobile}
            className='lg:hidden'
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              border: "none",
              cursor: "default",
            }}
          />
          {/* Panel */}
          <div
            id='mobile-nav-panel'
            role='dialog'
            aria-modal='true'
            aria-label='Site navigation'
            className='lg:hidden'
            style={{
              position: "fixed",
              top: 12,
              left: 12,
              right: 12,
              maxHeight: "calc(100dvh - 24px)",
              overflowY: "auto",
              zIndex: 60,
              background: "rgba(10,10,10,0.96)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid var(--line)",
              borderRadius: 20,
              boxShadow:
                "0 24px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.04) inset",
              padding: "14px 14px 18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 6px 12px",
                borderBottom: "1px solid var(--line)",
                marginBottom: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--mute-2)",
                }}
              >
                Menu
              </span>
              <button
                type='button'
                aria-label='Close menu'
                onClick={closeMobile}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "var(--surface-2)",
                  border: "1px solid var(--line-2)",
                  color: "var(--ink)",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                  <path
                    d='M3 3l8 8M11 3l-8 8'
                    stroke='currentColor'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                  />
                </svg>
              </button>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_LINKS.map(({ label, key, href }) => {
                const isTools = key === "tools";
                if (isTools) {
                  return (
                    <div
                      key={label}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <button
                        type='button'
                        onClick={() => setMobileToolsOpen((v) => !v)}
                        aria-expanded={mobileToolsOpen}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 12px",
                          borderRadius: 12,
                          background: mobileToolsOpen
                            ? "var(--surface-2)"
                            : "transparent",
                          border: "1px solid",
                          borderColor: mobileToolsOpen
                            ? "var(--line)"
                            : "transparent",
                          color: "var(--ink)",
                          fontFamily: "var(--font-geist-mono), monospace",
                          fontSize: 12,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          {label}
                          <span
                            style={{
                              fontSize: 8,
                              fontFamily: "var(--font-geist-mono), monospace",
                              letterSpacing: "0.14em",
                              color: "#38BDF8",
                              background: "rgba(56,189,248,0.1)",
                              border: "1px solid rgba(56,189,248,0.25)",
                              borderRadius: 4,
                              padding: "2px 5px",
                              lineHeight: 1.4,
                            }}
                          >
                            17
                          </span>
                        </span>
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                          style={{
                            transition: "transform 0.2s ease",
                            transform: mobileToolsOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            opacity: 0.6,
                          }}
                        >
                          <path
                            d='M3 4.5L6 7.5L9 4.5'
                            stroke='currentColor'
                            strokeWidth='1.4'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </button>

                      {mobileToolsOpen && (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 8,
                            padding: "8px 4px 12px",
                          }}
                        >
                          {CATEGORIES.map((cat) => (
                            <Link
                              key={cat.key}
                              href={href}
                              onClick={closeMobile}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 4,
                                padding: "12px 14px",
                                background: "var(--surface-2)",
                                border: "1px solid var(--line)",
                                borderRadius: 12,
                                textDecoration: "none",
                                color: "var(--ink)",
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: 16,
                                    color: CAT_ACCENT[cat.key],
                                  }}
                                >
                                  {cat.icon}
                                </span>
                                <span
                                  style={{
                                    fontFamily:
                                      "var(--font-geist-mono), monospace",
                                    fontSize: 9,
                                    letterSpacing: "0.1em",
                                    color: CAT_ACCENT[cat.key],
                                    opacity: 0.7,
                                  }}
                                >
                                  {cat.count} tools
                                </span>
                              </span>
                              <span
                                style={{
                                  fontFamily:
                                    "var(--font-geist-sans), sans-serif",
                                  fontSize: 13,
                                  fontWeight: 600,
                                  letterSpacing: "-0.01em",
                                }}
                              >
                                {cat.key}
                              </span>
                              <span
                                style={{
                                  fontFamily:
                                    "var(--font-geist-sans), sans-serif",
                                  fontSize: 11,
                                  color: "var(--mute)",
                                  lineHeight: 1.4,
                                }}
                              >
                                {cat.desc}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href={href}
                            onClick={closeMobile}
                            style={{
                              gridColumn: "1 / -1",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 6,
                              padding: "10px 14px",
                              borderRadius: 999,
                              background: "var(--blue-grad)",
                              color: "#fff",
                              textDecoration: "none",
                              fontFamily: "var(--font-geist-mono), monospace",
                              fontSize: 10,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              fontWeight: 600,
                              boxShadow:
                                "inset 0 0 0 1px rgba(255,255,255,0.18), 0 0 18px rgba(56,189,248,0.25)",
                            }}
                          >
                            Browse all 17 tools
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMobile}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 12px",
                      borderRadius: 12,
                      color: "var(--ink)",
                      textDecoration: "none",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "1px solid transparent",
                    }}
                  >
                    <span>{label}</span>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      aria-hidden='true'
                      style={{ opacity: 0.5 }}
                    >
                      <path
                        d='M4 3l4 3-4 3'
                        stroke='currentColor'
                        strokeWidth='1.4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Link>
                );
              })}
            </nav>

            <div
              style={{
                marginTop: 14,
                paddingTop: 14,
                borderTop: "1px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 12px 7px 9px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, rgba(20,22,28,0.9), rgba(10,12,16,0.9))",
                  border: "1px solid var(--line-2)",
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #d8dce3 14%, #4e535c 32%, #b5bac2 48%, #2e323a 60%, #c8cdd4 76%, #ffffff 100%)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 8,
                    fontWeight: 800,
                    color: "#000",
                  }}
                >
                  ★
                </span>
                <span
                  style={{
                    color: "var(--blue)",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                >
                  25
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--mute)",
                  }}
                >
                  tokens
                </span>
              </span>
              <button
                type='button'
                onClick={closeMobile}
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
        </>
      )}
    </>
  );
}
