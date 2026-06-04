import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

// ─── Brand badges (40×40, official brand colors) ─────────────────────────────

function BadgeFacebook() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#1877F2" />
      <path
        d="M23 10H21C18.2 10 17 11.8 17 14.5V17H14.5V21H17V31H22V21H24.8L25.5 17H22V15C22 13.9 22.5 13 23.8 13H25.5V10H23Z"
        fill="white"
      />
    </svg>
  );
}

function BadgeInstagram() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id="ig-badge" cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#ig-badge)" />
      <rect
        x="11"
        y="11"
        width="18"
        height="18"
        rx="4.5"
        stroke="white"
        strokeWidth="1.7"
        fill="none"
      />
      <circle cx="20" cy="20" r="4.5" stroke="white" strokeWidth="1.7" fill="none" />
      <circle cx="26.5" cy="13.5" r="1.5" fill="white" />
    </svg>
  );
}

function BadgeTikTok() {
  const note =
    "M28.5 10C28.5 13.5 30.5 15 33.5 15V19C31 19 29 18.2 27.3 17L27.2 25.2C27.2 29.3 23.8 32.7 19.7 32.7C15.6 32.7 12.2 29.3 12.2 25.2C12.2 21.1 15.6 17.7 19.7 17.7V21.7C17.8 21.7 16.2 23.3 16.2 25.2C16.2 27.1 17.8 28.7 19.7 28.7C21.6 28.7 23.2 27.1 23.2 25.2L23.2 7H27.2C27.2 8.5 27.7 9.6 28.5 10Z";
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#010101" />
      <path d={note} fill="#69C9D0" transform="translate(-0.5 0)" />
      <path d={note} fill="white" />
      <path d={note} fill="#FF0050" opacity="0.4" transform="translate(0.5 0)" />
    </svg>
  );
}

function BadgeYouTube() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#FF0000" />
      <rect x="8" y="13" width="24" height="14" rx="4" fill="white" />
      <path d="M17 16.5L25 20L17 23.5V16.5Z" fill="#FF0000" />
    </svg>
  );
}

function BadgeLinkedIn() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0A66C2" />
      <circle cx="12.5" cy="12.5" r="2.1" fill="white" />
      <rect x="10.5" y="16" width="4" height="13" rx="1" fill="white" />
      <rect x="17" y="16" width="4" height="13" rx="1" fill="white" />
      <rect x="25" y="20" width="4" height="9" rx="1" fill="white" />
      <path
        d="M21 19C22 17 23 16 24.5 16C27 16 29 17.5 29 20"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BadgeX() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#0F0F0F" />
      <path
        d="M8 9L18.2 22L8 31H11.2L19.7 24L27.5 31H32L21.3 17.5L31 9H27.8L19.8 15.5L12.5 9H8Z"
        fill="white"
      />
    </svg>
  );
}

function BadgePinterest() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#E60023" />
      <path
        d="M20 5C13.4 5 8 10.4 8 17C8 22.1 11.1 26.4 15.5 28.2C15.4 27.4 15.4 26.1 15.7 25.1L17.4 18.3C17.4 18.3 16.9 17.3 16.9 15.9C16.9 13.8 18.1 12.2 19.7 12.2C21.1 12.2 21.8 13.2 21.8 14.4C21.8 15.8 20.9 17.8 20.4 19.7C20 21.3 21.1 22.6 22.6 22.6C25.3 22.6 26.9 19.5 26.9 15.8C26.9 12.6 24.7 10.3 20.2 10.3C15.2 10.3 12.3 14 12.3 17.4C12.3 18.8 12.8 19.9 13.5 20.7C13.8 21 13.8 21.1 13.7 21.4L13.3 22.7C13.2 23.1 12.9 23.2 12.5 23C10.5 22.2 9.2 19.8 9.2 17.3C9.2 13.2 12.7 7.7 20.3 7.7C26.3 7.7 29.6 12.3 29.6 17.1C29.6 22.8 26.3 27.2 21.6 27.2C20 27.2 18.5 26.3 18 25.3L16.9 29.7C16.5 31 15.7 32.7 15.1 33.7C16.7 34.1 18.3 34.3 20 34.3C26.6 34.3 32 28.9 32 22.3V17C32 10.4 26.6 5 20 5Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

function BadgeSnapchat() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#FFFC00" />
      <path
        d="M20 7C15.3 7 12 10.5 12 15.5V22.5C10.5 23 9 23.6 9 24.5C9 25.2 9.8 25.7 11.5 26.3C11.9 26.8 11.9 27.6 13.3 27.8L15.5 26L18.5 28L20 27.4L21.5 28L24.5 26L26.7 27.8C28.1 27.6 28.1 26.8 28.5 26.3C30.2 25.7 31 25.2 31 24.5C31 23.6 29.5 23 28 22.5V15.5C28 10.5 24.7 7 20 7Z"
        fill="black"
      />
    </svg>
  );
}

function BadgeThreads() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#101010" />
      <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="2" fill="none" />
      <path
        d="M25 17.5C24 13.5 21 12 18 13C15 14 13.5 17.5 14 20.5C14.5 23.5 17 26 20 26C22.5 26 24.5 24 25 22C25.5 20 25 18.5 25 18.5L25 13.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ─── Platform data ────────────────────────────────────────────────────────────

type SizePreset = { name: string; dim: string };

type Platform = {
  id: string;
  name: string;
  color: string;
  colorBg: string;
  colorBorder: string;
  badge: ReactNode;
  sizes: SizePreset[];
};

const PLATFORMS: Platform[] = [
  {
    id: "facebook",
    name: "Facebook",
    color: "#4e8ef7",
    colorBg: "rgba(24,119,242,0.1)",
    colorBorder: "rgba(24,119,242,0.28)",
    badge: <BadgeFacebook />,
    sizes: [
      { name: "Profile Photo", dim: "180 × 180" },
      { name: "Cover Photo", dim: "851 × 315" },
      { name: "Post Image", dim: "1200 × 630" },
      { name: "Story", dim: "1080 × 1920" },
      { name: "Event Cover", dim: "1920 × 1005" },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    color: "#fd5949",
    colorBg: "rgba(253,89,73,0.1)",
    colorBorder: "rgba(253,89,73,0.28)",
    badge: <BadgeInstagram />,
    sizes: [
      { name: "Square Post", dim: "1080 × 1080" },
      { name: "Portrait Post", dim: "1080 × 1350" },
      { name: "Story / Reel", dim: "1080 × 1920" },
      { name: "Landscape Post", dim: "1080 × 566" },
      { name: "Profile Photo", dim: "320 × 320" },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    color: "#69C9D0",
    colorBg: "rgba(105,201,208,0.1)",
    colorBorder: "rgba(105,201,208,0.28)",
    badge: <BadgeTikTok />,
    sizes: [
      { name: "Video", dim: "1080 × 1920" },
      { name: "Feed Square", dim: "1080 × 1080" },
      { name: "Profile Photo", dim: "200 × 200" },
      { name: "Thumbnail Cover", dim: "1080 × 608" },
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    color: "#ff5555",
    colorBg: "rgba(255,0,0,0.1)",
    colorBorder: "rgba(255,0,0,0.28)",
    badge: <BadgeYouTube />,
    sizes: [
      { name: "Thumbnail", dim: "1280 × 720" },
      { name: "Channel Art", dim: "2560 × 1440" },
      { name: "Profile Photo", dim: "800 × 800" },
      { name: "End Screen", dim: "1920 × 1080" },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    color: "#4da6ff",
    colorBg: "rgba(10,102,194,0.1)",
    colorBorder: "rgba(10,102,194,0.28)",
    badge: <BadgeLinkedIn />,
    sizes: [
      { name: "Profile Photo", dim: "400 × 400" },
      { name: "Cover Photo", dim: "1584 × 396" },
      { name: "Post Image", dim: "1200 × 627" },
      { name: "Company Logo", dim: "300 × 300" },
    ],
  },
  {
    id: "x-twitter",
    name: "X / Twitter",
    color: "rgba(255,255,255,0.6)",
    colorBg: "rgba(255,255,255,0.05)",
    colorBorder: "rgba(255,255,255,0.14)",
    badge: <BadgeX />,
    sizes: [
      { name: "Profile Photo", dim: "400 × 400" },
      { name: "Header Image", dim: "1500 × 500" },
      { name: "Post Image", dim: "1200 × 675" },
    ],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    color: "#ff5566",
    colorBg: "rgba(230,0,35,0.1)",
    colorBorder: "rgba(230,0,35,0.28)",
    badge: <BadgePinterest />,
    sizes: [
      { name: "Standard Pin", dim: "1000 × 1500" },
      { name: "Square Pin", dim: "1000 × 1000" },
      { name: "Story Pin", dim: "1080 × 1920" },
    ],
  },
  {
    id: "snapchat",
    name: "Snapchat",
    color: "#ccca00",
    colorBg: "rgba(255,252,0,0.07)",
    colorBorder: "rgba(255,252,0,0.2)",
    badge: <BadgeSnapchat />,
    sizes: [
      { name: "Snap Ad", dim: "1080 × 1920" },
      { name: "Discover Tile", dim: "360 × 600" },
    ],
  },
  {
    id: "threads",
    name: "Threads",
    color: "rgba(255,255,255,0.6)",
    colorBg: "rgba(255,255,255,0.05)",
    colorBorder: "rgba(255,255,255,0.14)",
    badge: <BadgeThreads />,
    sizes: [
      { name: "Square Post", dim: "1080 × 1080" },
      { name: "Landscape Post", dim: "1080 × 566" },
    ],
  },
];

const TOTAL_SIZES = PLATFORMS.reduce((acc, p) => acc + p.sizes.length, 0);

// ─── Platform card ────────────────────────────────────────────────────────────

function PlatformCard({ platform: p }: { platform: Platform }) {
  return (
    <div
      className="stagger-item card-hover flex flex-col"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-xl)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between gap-3"
        style={{ padding: "20px 20px 16px" }}
      >
        <div className="flex items-center gap-3">
          {p.badge}
          <h3
            className="font-fraunces"
            style={{ fontSize: 20, fontWeight: 400, color: "var(--ink)", lineHeight: 1.1 }}
          >
            {p.name}
          </h3>
        </div>
        <span
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "3px 9px",
            borderRadius: 999,
            background: p.colorBg,
            border: `1px solid ${p.colorBorder}`,
            color: p.color,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {p.sizes.length} sizes
        </span>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "var(--line)", margin: "0 20px" }} />

      {/* Size rows */}
      <div style={{ padding: "4px 20px 20px" }}>
        {p.sizes.map((s, i) => (
          <div
            key={s.name}
            className="flex items-center justify-between"
            style={{
              padding: "9px 0",
              borderBottom:
                i < p.sizes.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: "var(--ink)",
                fontFamily: "var(--font-geist-sans), sans-serif",
              }}
            >
              {s.name}
            </span>
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 11,
                color: "var(--mute)",
                letterSpacing: "0.04em",
              }}
            >
              {s.dim}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function SocialSizes() {
  return (
    <section id="formats" className="relative z-10 mt-40">
      <div className="max-w-370 mx-auto px-12 max-[720px]:px-4">
        {/* Section header */}
        <ScrollReveal variant="blur">
          <div
            style={{
              borderBottom: "1px solid var(--line)",
              paddingBottom: 28,
              marginBottom: 56,
            }}
          >
            <div
              className="flex items-center justify-between gap-6 flex-wrap"
              style={{ marginBottom: 24 }}
            >
              <div className="section-num">Formats</div>
              <div
                style={{
                  display: "flex",
                  gap: 28,
                  flexWrap: "wrap",
                }}
              >
                {[
                  [`${PLATFORMS.length}`, "Platforms"],
                  [`${TOTAL_SIZES}`, "Size presets"],
                  ["1-tap", "Export"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    style={{ display: "flex", alignItems: "baseline", gap: 6 }}
                  >
                    <span
                      className="font-fraunces"
                      style={{
                        fontSize: 28,
                        fontWeight: 300,
                        color: "var(--ink)",
                        lineHeight: 1,
                      }}
                    >
                      {num}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--mute)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <h2
              className="font-fraunces"
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              One source,
              <br />
              <em className="silver">every feed.</em>
            </h2>
            <p
              style={{
                marginTop: 16,
                maxWidth: 580,
                color: "var(--mute)",
                fontSize: 16,
                lineHeight: 1.55,
              }}
            >
              Platform-perfect sizes grouped, named, one tap to export.
            </p>
          </div>
        </ScrollReveal>

        {/* Platform cards grid */}
        <ScrollReveal
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PLATFORMS.map((p) => (
            <PlatformCard key={p.id} platform={p} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
