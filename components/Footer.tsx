"use client";

import Logo from "./Logo";

const YEAR = new Date().getFullYear();

/* ─────────────────────────────────────────────────────────
   NAV COLUMNS
   Inspired by Higgsfield's multi-column footer structure,
   adapted to Snap Pro's e-commerce AI studio mission.
───────────────────────────────────────────────────────── */
const COLUMNS: {
  heading: string;
  links: { label: string; badge?: string }[];
}[] = [
  {
    heading: "Services",
    links: [
      { label: "All 17 Services" },
      { label: "Background Removal" },
      { label: "AI Scene Staging" },
      { label: "Ghost Mannequin" },
      { label: "Color Grading" },
      { label: "Social Resize" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Pricing" },
      { label: "Enterprise" },
      { label: "Team Plans" },
      { label: "Integrations" },
      { label: "API", badge: "Soon" },
      { label: "Changelog", badge: "New" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation" },
      { label: "Video Tutorials" },
      { label: "Blog" },
      { label: "Templates" },
      { label: "Community" },
      { label: "Prompt Guide" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us" },
      { label: "Careers", badge: "Hiring" },
      { label: "Press Kit" },
      { label: "Trust & Security" },
      { label: "Contact" },
      { label: "Legal" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   SOCIAL ICONS
   Brand colors on dark surface — platforms chosen for
   e-commerce sellers (visual-first communities only).
   Excluded: Snapchat, Reddit, GitHub (off-brand).
───────────────────────────────────────────────────────── */
function SocialIcons() {
  const socials: {
    label: string;
    href: string;
    color: string;
    icon: React.ReactNode;
  }[] = [
    {
      label: "Instagram",
      href: "#",
      color: "#E1306C",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='2'
            y='2'
            width='12'
            height='12'
            rx='3.5'
            stroke='#E1306C'
            strokeWidth='1.35'
          />
          <circle cx='8' cy='8' r='2.8' stroke='#E1306C' strokeWidth='1.35' />
          <circle cx='11.6' cy='4.4' r='0.9' fill='#E1306C' />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "#",
      color: "#FFFFFF",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M10.5 2c.1 1.4.8 2.4 2.5 2.6v2c-1.1 0-2-.3-2.7-.9V10a4 4 0 11-4-4v2a2 2 0 102 2V2h2.2z'
            fill='white'
          />
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      href: "#",
      color: "#FFFFFF",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M2.5 2.5h3.3l2.1 2.8 2.5-2.8H13L9.4 7.2l4 6.3H10l-2.4-3.3-2.8 3.3H2L5.9 8.5 2.5 2.5z'
            fill='white'
          />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      color: "#FF0000",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='1'
            y='4'
            width='14'
            height='9'
            rx='2.5'
            stroke='#FF0000'
            strokeWidth='1.35'
          />
          <path d='M6.5 6.5l4 2-4 2v-4z' fill='#FF0000' />
        </svg>
      ),
    },
    {
      label: "Pinterest",
      href: "#",
      color: "#E60023",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <circle cx='8' cy='8' r='6' stroke='#E60023' strokeWidth='1.35' />
          <path
            d='M8 4.5C6.3 4.5 5 5.7 5 7.3c0 1 .5 1.9 1.4 2.2 0 .2-.1.5-.2.9s-.4 1.2-.4 1.2.7-.3 1.4-1.5h.3c1.7 0 3-1.2 3-2.8C10.5 5.7 9.4 4.5 8 4.5z'
            stroke='#E60023'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7.6 9.4L7 12'
            stroke='#E60023'
            strokeWidth='1.2'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      color: "#0077B5",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <rect
            x='2'
            y='2'
            width='12'
            height='12'
            rx='2.5'
            stroke='#0077B5'
            strokeWidth='1.35'
          />
          <circle cx='5.5' cy='6' r='0.9' fill='#0077B5' />
          <path
            d='M5.5 8v3.5M8.5 8v3.5M8.5 9.5c0-1 .7-1.5 1.5-1.5s1.5.5 1.5 1.5v2'
            stroke='#0077B5'
            strokeWidth='1.3'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      color: "#1877F3",
      icon: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M13 2H3a1 1 0 00-1 1v10a1 1 0 001 1h5.5V9.5H7V7.8h1.5V6.5c0-1.5.9-2.3 2.2-2.3.6 0 1.3.1 1.3.1v1.5h-.7c-.7 0-.9.4-.9.9v1.1H12l-.3 1.7H10.4V14H13a1 1 0 001-1V3a1 1 0 00-1-1z'
            fill='#1877F3'
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--surface-2)",
            border: "1px solid var(--line-2)",
            textDecoration: "none",
            transition: "border-color 0.2s ease, background 0.2s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = `${s.color}40`;
            el.style.background = "var(--surface-3)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.borderColor = "var(--line-2)";
            el.style.background = "var(--surface-2)";
          }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   APP STORE BADGES
───────────────────────────────────────────────────────── */
function StoreBadges() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {/* App Store */}
      <a
        href='#'
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderRadius: 10,
          background: "var(--surface-2)",
          border: "1px solid var(--line-2)",
          textDecoration: "none",
          transition: "border-color 0.2s ease",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor =
            "rgba(56,189,248,0.3)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = "var(--line-2)")
        }
      >
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M11.4 8.6C11.4 6.8 12.9 5.9 13 5.8c-.8-1.2-2.1-1.4-2.6-1.4-1.1-.1-2.2.6-2.7.6-.5 0-1.4-.6-2.3-.6C4.1 4.4 2.9 5.1 2.2 6.2.9 8.3 1.9 11.4 3.2 13.2c.7.9 1.4 2 2.4 1.9 1-.1 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-.9 2.4-1.9c.7-.9 1-1.8 1-1.9 0 0-2.2-.9-2.6-3.7z'
            fill='var(--silver-3)'
          />
          <path
            d='M9.6 3.1c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.1-.5.6-.9 1.4-.8 2.3.9.1 1.8-.4 2.3-1z'
            fill='var(--silver-3)'
          />
        </svg>
        <div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 7,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--mute)",
            }}
          >
            Download on the
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            App Store
          </div>
        </div>
      </a>

      {/* Google Play */}
      <a
        href='#'
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderRadius: 10,
          background: "var(--surface-2)",
          border: "1px solid var(--line-2)",
          textDecoration: "none",
          transition: "border-color 0.2s ease",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor =
            "rgba(56,189,248,0.3)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = "var(--line-2)")
        }
      >
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path d='M2 1.5L9.5 8 2 14.5V1.5z' fill='#38BDF8' opacity='0.7' />
          <path d='M2 1.5l8.5 3.5-3 3L2 1.5z' fill='#A8AEB8' opacity='0.8' />
          <path
            d='M13.5 6.5c.7.4 1 1 1 1.5s-.3 1.1-1 1.5L11 11l-3-3 3-3 2.5 1.5z'
            fill='#FFC857'
            opacity='0.8'
          />
          <path d='M2 14.5l7.5-6.5-3-3L2 14.5z' fill='#C8B6FF' opacity='0.7' />
        </svg>
        <div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 7,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--mute)",
            }}
          >
            Get it on
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            Google Play
          </div>
        </div>
      </a>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   LINK COLUMN
───────────────────────────────────────────────────────── */
function LinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; badge?: string }[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
        }}
      >
        <span
          style={{
            display: "block",
            width: 16,
            height: 1,
            background: "linear-gradient(90deg, #38BDF8, transparent)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#38BDF8",
            whiteSpace: "nowrap",
          }}
        >
          {heading}
        </span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map(({ label, badge }) => (
          <a
            key={label}
            href='#'
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: 13,
              color: "var(--mute)",
              letterSpacing: "-0.01em",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--ink)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--mute)")
            }
          >
            {label}
            {badge && (
              <span
                style={{
                  fontSize: 8,
                  fontFamily: "var(--font-geist-mono), monospace",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color:
                    badge === "New"
                      ? "#38BDF8"
                      : badge === "Hiring"
                        ? "#FFC857"
                        : "var(--mute)",
                  background:
                    badge === "New"
                      ? "rgba(56,189,248,0.1)"
                      : badge === "Hiring"
                        ? "rgba(255,200,87,0.1)"
                        : "var(--surface-2)",
                  border: `1px solid ${
                    badge === "New"
                      ? "rgba(56,189,248,0.25)"
                      : badge === "Hiring"
                        ? "rgba(255,200,87,0.25)"
                        : "var(--line)"
                  }`,
                  borderRadius: 4,
                  padding: "2px 5px",
                  lineHeight: 1.4,
                }}
              >
                {badge}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   FOOTER ROOT
───────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className='relative z-10 mt-50 overflow-hidden'>
      {/* Top ambient blue glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 200,
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ borderTop: "1px solid var(--line)" }} />

      {/* ── Main grid ── */}
      <div
        className='max-w-370 mx-auto max-[720px]:px-4'
        style={{ padding: "72px 48px 64px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className='max-[1024px]:grid-cols-2 max-[1024px]:gap-10 max-[720px]:grid-cols-1'
        >
          {/* ── Brand column ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 24,
            }}
          >
            <Logo size={56} fontSize={28} borderRadius={15} />

            <p
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: 13,
                color: "var(--mute)",
                lineHeight: 1.65,
                letterSpacing: "-0.005em",
                maxWidth: 280,
              }}
            >
              Professional AI photo editing for e-commerce sellers. 17 services,
              25 free credits monthly. No designer needed.
            </p>

            <SocialIcons />
            <StoreBadges />
          </div>

          {/* ── Link columns ── */}
          {COLUMNS.map((col) => (
            <LinkColumn
              key={col.heading}
              heading={col.heading}
              links={col.links}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        <div
          className='max-w-370 mx-auto max-[720px]:px-4 max-[720px]:flex-col max-[720px]:gap-4'
          style={{
            padding: "20px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {/* Copyright */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className='blue-pulse' />
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--mute)",
              }}
            >
              © {YEAR} Snap Pro, Inc. — All rights reserved
            </span>
          </div>

          {/* Status */}
          <div />

          {/* Legal */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (label) => (
                <a
                  key={label}
                  href='#'
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--mute-2)",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--mute)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--mute-2)")
                  }
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
