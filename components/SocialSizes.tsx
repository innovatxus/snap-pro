import ScrollReveal from "./ScrollReveal";

// ─── Brand icons (royalty-free simplified marks, official brand colors) ───────

function IconInstagram({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <defs>
        <radialGradient id="ig-rg" cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="32" height="32" rx="8.5" fill="url(#ig-rg)" />
      {/* Outer frame */}
      <rect
        x="7"
        y="7"
        width="18"
        height="18"
        rx="5"
        stroke="white"
        strokeWidth="1.8"
        fill="none"
      />
      {/* Lens */}
      <circle cx="16" cy="16" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
      {/* Flash dot */}
      <circle cx="22" cy="10" r="1.3" fill="white" />
    </svg>
  );
}

function IconAmazon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#ffffff" />
      {/* Amazon smile arrow — the key brand mark */}
      <path
        d="M8 21.5 Q16 25.5 24 21.5"
        stroke="#FF9900"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head pointing right */}
      <path
        d="M21.5 19.5 L24 21.5 L21.5 23.5"
        stroke="#FF9900"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* "a" — simplified letterform */}
      <path
        d="M11 17 L11 12 Q11 8.5 15.5 8.5 Q20 8.5 20 12 L20 17"
        stroke="#232F3E"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M11 14.5 Q15.5 12 20 14.5"
        stroke="#232F3E"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function IconTikTok({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#010101" />
      {/* Shadow layers first (cyan offset) */}
      <path
        d="M21.5 6.5 C21.5 10 23.5 11.5 26.5 11.5 L26.5 15.5 C24 15.5 21.8 14.7 20.1 13.3 L20 21.5 C20 25.6 16.6 29 12.5 29 C8.4 29 5 25.6 5 21.5 C5 17.4 8.4 14 12.5 14 L12.5 18 C10.6 18 9 19.6 9 21.5 C9 23.4 10.6 25 12.5 25 C14.4 25 16 23.4 16 21.5 L16 3 L20 3 C20 4.9 20.6 6.2 21.5 6.5 Z"
        fill="#69C9D0"
        opacity="0.9"
        transform="translate(-0.5, 0)"
      />
      {/* Main white note */}
      <path
        d="M21.5 6.5 C21.5 10 23.5 11.5 26.5 11.5 L26.5 15.5 C24 15.5 21.8 14.7 20.1 13.3 L20 21.5 C20 25.6 16.6 29 12.5 29 C8.4 29 5 25.6 5 21.5 C5 17.4 8.4 14 12.5 14 L12.5 18 C10.6 18 9 19.6 9 21.5 C9 23.4 10.6 25 12.5 25 C14.4 25 16 23.4 16 21.5 L16 3 L20 3 C20 4.9 20.6 6.2 21.5 6.5 Z"
        fill="white"
      />
      {/* Red shadow layer */}
      <path
        d="M21.5 6.5 C21.5 10 23.5 11.5 26.5 11.5 L26.5 15.5 C24 15.5 21.8 14.7 20.1 13.3 L20 21.5 C20 25.6 16.6 29 12.5 29 C8.4 29 5 25.6 5 21.5 C5 17.4 8.4 14 12.5 14 L12.5 18 C10.6 18 9 19.6 9 21.5 C9 23.4 10.6 25 12.5 25 C14.4 25 16 23.4 16 21.5 L16 3 L20 3 C20 4.9 20.6 6.2 21.5 6.5 Z"
        fill="#FF0050"
        opacity="0.35"
        transform="translate(0.5, 0)"
      />
    </svg>
  );
}

function IconFacebook({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#1877F2" />
      {/* Facebook "f" mark */}
      <path
        d="M19 6 L17 6 C14.8 6 14 7 14 9 L14 12 L12 12 L12 15 L14 15 L14 26 L18 26 L18 15 L20.5 15 L21 12 L18 12 L18 9.5 C18 8.7 18.3 8 19 8 L21 8 Z"
        fill="white"
      />
    </svg>
  );
}

function IconPinterest({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#E60023" />
      {/* Pinterest "P" with pin needle */}
      <path
        d="M16 4 C10.5 4 6 8.5 6 14 C6 18.2 8.5 21.8 12 23.3 C11.9 22.6 11.9 21.5 12.1 20.7 L13.5 14.8 C13.5 14.8 13.1 14 13.1 12.8 C13.1 11 14.1 9.7 15.4 9.7 C16.5 9.7 17 10.5 17 11.5 C17 12.6 16.3 14.3 15.9 15.8 C15.6 17.1 16.5 18.2 17.8 18.2 C20.1 18.2 21.5 15.5 21.5 12.3 C21.5 9.5 19.5 7.5 16 7.5 C12 7.5 9.5 10.4 9.5 13.5 C9.5 14.7 9.9 15.6 10.5 16.2 C10.7 16.4 10.8 16.4 10.7 16.7 L10.4 17.7 C10.3 18 10.1 18.1 9.8 17.9 C8.1 17.1 7 15.1 7 13 C7 9.1 10 4.5 16.3 4.5 C21.3 4.5 24 8.4 24 12.5 C24 17.7 21.1 22 17 22 C15.7 22 14.5 21.3 14.1 20.5 L13.2 24 C12.9 25 12.2 26.4 11.7 27.2 C13.1 27.6 14.5 28 16 28 C21.5 28 26 23.5 26 18 C26 11.4 21.5 4 16 4 Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}

function IconEbay({ width = 52, height = 24 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 52 24" fill="none">
      {/* e — red */}
      <path
        d="M4 14 C4 14 4 7 10 7 C16 7 16 12 16 12 L6 12 C6 15 8 16 10 16 C12 16 13 15 13 15 L15 17 C15 17 13 19 10 19 C5 19 4 14 4 14 Z M6 10.5 L14 10.5 C14 10.5 13 9 10 9 C7 9 6 10.5 6 10.5 Z"
        fill="#E53238"
      />
      {/* B — blue */}
      <path
        d="M18 5 L21 5 L21 10 C21 10 22 7 25 7 C28 7 29 9.5 29 12 C29 14.5 28 17 25 17 C22 17 21 15 21 15 L21 19 L18 19 Z M21 12 C21 14 22 15 24 15 C26 15 26 13.5 26 12 C26 10.5 26 9 24 9 C22 9 21 10 21 12 Z"
        fill="#0064D2"
      />
      {/* a — yellow */}
      <path
        d="M32 7 C35 7 37 8 37 11 L37 16 C37 16 37 17 38 17 L36 19 C36 19 35 19 35 18 C35 18 34 19 32 19 C30 19 29 18 29 16 C29 14 31 13 33 13 L36 13 C36 11.5 35 9 32 9 C30 9 30 10 30 10 L28 9 C28 9 29 7 32 7 Z M36 14.5 L33.5 14.5 C32.5 14.5 31.5 15 31.5 16 C31.5 17 32.5 17.5 33.5 17.5 C35 17.5 36 16 36 16 Z"
        fill="#F5AF02"
      />
      {/* y — green */}
      <path
        d="M40 7 L43 7 L46 15 L49 7 L52 7 L47 20 C46 22 44 23 42 23 L42 21 C43 21 44 20 45 19 L40 7 Z"
        fill="#86B817"
      />
    </svg>
  );
}

// ─── Format data ──────────────────────────────────────────────────────────────

const FORMATS = [
  {
    id: 1,
    name: "Instagram Square",
    dim: "1080 × 1080",
    ratio: "1:1",
    aspectRatio: "1/1",
    platform: "Instagram",
    cardBg: "linear-gradient(135deg, #fdf497 0%, #fd5949 35%, #d6249f 65%, #285AEB 100%)",
    isLight: false,
    maxW: 200,
    icon: <IconInstagram size={36} />,
    productBorderColor: "rgba(255,255,255,0.45)",
    productBg: "rgba(255,255,255,0.12)",
  },
  {
    id: 2,
    name: "Amazon Main",
    dim: "2000 × 2000",
    ratio: "1:1",
    aspectRatio: "1/1",
    platform: "Amazon",
    cardBg: "#ffffff",
    isLight: true,
    maxW: 200,
    icon: <IconAmazon size={36} />,
    productBorderColor: "rgba(0,0,0,0.12)",
    productBg: "rgba(255,153,0,0.06)",
  },
  {
    id: 3,
    name: "TikTok / Reels",
    dim: "1080 × 1920",
    ratio: "9:16",
    aspectRatio: "9/16",
    platform: "TikTok",
    cardBg: "#010101",
    isLight: false,
    maxW: 126,
    icon: <IconTikTok size={32} />,
    productBorderColor: "rgba(255,255,255,0.2)",
    productBg: "rgba(255,255,255,0.06)",
  },
  {
    id: 4,
    name: "Facebook Ad",
    dim: "1200 × 628",
    ratio: "1.91:1",
    aspectRatio: "191/100",
    platform: "Facebook",
    cardBg: "#1877F2",
    isLight: false,
    maxW: 290,
    icon: <IconFacebook size={36} />,
    productBorderColor: "rgba(255,255,255,0.35)",
    productBg: "rgba(255,255,255,0.14)",
  },
  {
    id: 5,
    name: "Pinterest",
    dim: "1000 × 1500",
    ratio: "2:3",
    aspectRatio: "2/3",
    platform: "Pinterest",
    cardBg: "#E60023",
    isLight: false,
    maxW: 158,
    icon: <IconPinterest size={36} />,
    productBorderColor: "rgba(255,255,255,0.35)",
    productBg: "rgba(255,255,255,0.12)",
  },
  {
    id: 6,
    name: "eBay Listing",
    dim: "1600 × 1600",
    ratio: "1:1",
    aspectRatio: "1/1",
    platform: "eBay",
    cardBg: "#f5f5f5",
    isLight: true,
    maxW: 200,
    icon: <IconEbay width={52} height={24} />,
    productBorderColor: "rgba(0,0,0,0.1)",
    productBg: "rgba(0,0,0,0.04)",
  },
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function FormatCard({ fmt }: { fmt: (typeof FORMATS)[0] }) {
  const labelColor = fmt.isLight ? "rgba(0,0,0,0.38)" : "rgba(255,255,255,0.55)";
  const labelBg = fmt.isLight ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.32)";

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Format preview card */}
      <div
        className="card-hover relative overflow-hidden flex flex-col"
        style={{
          background: fmt.cardBg,
          border: `1px solid ${fmt.isLight ? "var(--line-2)" : "transparent"}`,
          borderRadius: "var(--r-lg)",
          aspectRatio: fmt.aspectRatio,
          width: "100%",
          maxWidth: fmt.maxW,
          boxShadow: fmt.isLight
            ? "0 8px 28px rgba(0,0,0,0.22)"
            : "0 8px 28px rgba(0,0,0,0.5)",
        }}
      >
        {/* Brand icon — top-left */}
        <div className="absolute top-3 left-3 z-10">{fmt.icon}</div>

        {/* Ratio badge — top-right */}
        <div
          className="absolute top-3 right-3 z-10"
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 8,
            letterSpacing: "0.07em",
            color: labelColor,
            background: labelBg,
            backdropFilter: "blur(6px)",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          {fmt.ratio}
        </div>

        {/* Product placeholder — centered */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ paddingTop: "30%" }}
        >
          <div
            style={{
              width: "48%",
              height: "48%",
              background: fmt.productBg,
              borderRadius: 6,
              border: `1.5px dashed ${fmt.productBorderColor}`,
            }}
          />
        </div>

        {/* Dim label — bottom */}
        <div
          className="absolute bottom-2 left-0 right-0 flex justify-center"
          style={{ zIndex: 10 }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 7,
              letterSpacing: "0.06em",
              color: labelColor,
              background: labelBg,
              backdropFilter: "blur(6px)",
              padding: "2px 7px",
              borderRadius: 4,
            }}
          >
            {fmt.dim}
          </span>
        </div>
      </div>

      {/* Platform name below card */}
      <div className="text-center">
        <p
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: 14,
            fontWeight: 400,
            color: "var(--ink)",
            marginBottom: 2,
          }}
        >
          {fmt.name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 9,
            letterSpacing: "0.1em",
            color: "var(--mute)",
            textTransform: "uppercase",
          }}
        >
          {fmt.platform}
        </p>
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
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: 28,
            marginBottom: 56,
          }}
        >
          <div>
            <h2
              className="font-fraunces"
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Every <em className="silver">platform.</em> Every format.
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
              One product image, six platform-perfect exports. Pixel-precise
              sizing for every marketplace and social channel.
            </p>
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 11,
              color: "var(--mute)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            6 formats · instant export
          </div>
        </div>

        {/* Format grid — aligned to bottom so tall cards anchor down */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-end justify-items-center">
          {FORMATS.map((fmt, i) => (
            <ScrollReveal key={fmt.id} delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}>
              <FormatCard fmt={fmt} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
