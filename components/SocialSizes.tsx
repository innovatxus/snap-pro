import ScrollReveal from "./ScrollReveal";

const FORMATS = [
  {
    id: 1,
    name: "Instagram Square",
    dim: "1080 × 1080",
    ratio: "1:1",
    aspectRatio: "1/1",
    platform: "Instagram",
    bg: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
    productBg: "rgba(255,255,255,0.15)",
    maxW: 220,
  },
  {
    id: 2,
    name: "Amazon Main",
    dim: "2000 × 2000",
    ratio: "1:1",
    aspectRatio: "1/1",
    platform: "Amazon",
    bg: "#ffffff",
    productBg: "rgba(30,30,30,0.12)",
    maxW: 220,
    isWhite: true,
  },
  {
    id: 3,
    name: "TikTok / Reels",
    dim: "1080 × 1920",
    ratio: "9:16",
    aspectRatio: "9/16",
    platform: "TikTok",
    bg: "linear-gradient(160deg, #010101 0%, #1a1a1a 100%)",
    productBg: "rgba(255,255,255,0.1)",
    maxW: 130,
  },
  {
    id: 4,
    name: "Facebook Ad",
    dim: "1200 × 628",
    ratio: "1.91:1",
    aspectRatio: "191/100",
    platform: "Facebook",
    bg: "linear-gradient(135deg, #1877F2, #0c5fd6)",
    productBg: "rgba(255,255,255,0.2)",
    maxW: 300,
  },
  {
    id: 5,
    name: "Pinterest",
    dim: "1000 × 1500",
    ratio: "2:3",
    aspectRatio: "2/3",
    platform: "Pinterest",
    bg: "linear-gradient(160deg, #e60023 0%, #b60020 100%)",
    productBg: "rgba(255,255,255,0.2)",
    maxW: 160,
  },
  {
    id: 6,
    name: "eBay Listing",
    dim: "1600 × 1600",
    ratio: "1:1",
    aspectRatio: "1/1",
    platform: "eBay",
    bg: "linear-gradient(135deg, #f5f5f5 0%, #ebebeb 100%)",
    productBg: "rgba(30,30,30,0.1)",
    maxW: 220,
    isWhite: true,
  },
];

function FormatCard({ fmt }: { fmt: (typeof FORMATS)[0] }) {
  return (
    <div className='flex flex-col items-center gap-3' style={{}}>
      {/* Format preview */}
      <div
        className='card-hover relative overflow-hidden flex items-center justify-center'
        style={{
          background: fmt.bg,
          border: `1px solid ${fmt.isWhite ? "var(--line-2)" : "var(--line)"}`,
          borderRadius: "var(--r-lg)",
          aspectRatio: fmt.aspectRatio,
          width: "100%",
          maxWidth: fmt.maxW,
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Product illustration */}
        <div
          style={{
            width: "40%",
            height: "50%",
            background: fmt.productBg,
            borderRadius: 8,
            border: fmt.isWhite
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(255,255,255,0.15)",
          }}
        />

        {/* Dimension label */}
        <div
          className='absolute top-2 right-2'
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 8,
            letterSpacing: "0.06em",
            color: fmt.isWhite ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.45)",
            background: fmt.isWhite ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.35)",
            padding: "2px 5px",
            borderRadius: 4,
          }}
        >
          {fmt.ratio}
        </div>
      </div>

      {/* Labels */}
      <div className='text-center'>
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
          {fmt.dim}
        </p>
      </div>
    </div>
  );
}

export default function SocialSizes() {
  return (
    <section id='formats' className='relative z-10 mt-40'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Section header */}
        <div
          className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'
          style={{
            borderBottom: "1px solid var(--line)",
            paddingBottom: 28,
            marginBottom: 56,
          }}
        >
          <div>
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Every <em className='silver'>platform.</em> Every format.
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

        {/* Format grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-end justify-items-center'>
          {FORMATS.map((fmt, i) => (
            <ScrollReveal
              key={fmt.id}
              delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
            >
              <FormatCard fmt={fmt} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
