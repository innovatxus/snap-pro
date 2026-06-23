import ScrollReveal from "./ScrollReveal";

const CATEGORIES = [
  {
    id: "cinema-studio",
    name: "Cinema Studio",
    description: "Cinematic AI generation with precise camera control",
    accentColor: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    accentBorder: "rgba(56,189,248,0.3)",
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        style={{ color: "#38bdf8" }}
      >
        <rect
          x='1.5'
          y='6.5'
          width='17'
          height='11'
          rx='2'
          stroke='currentColor'
          strokeWidth='1.4'
        />
        <path
          d='M1.5 6.5L4.5 2.5h11l3 4'
          stroke='currentColor'
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7 4.5L9.5 2.5M12 4.5L14.5 2.5'
          stroke='currentColor'
          strokeWidth='1.4'
          strokeLinecap='round'
        />
        <circle cx='10' cy='12' r='2' stroke='currentColor' strokeWidth='1.2' />
      </svg>
    ),
    features: [
      "Visual Effects",
      "Higgsfield Soul",
      "Kling 2.1 Master",
      "Camera Controls",
      "Viral",
      "Action movements",
      "Commercial",
    ],
  },
  {
    id: "minimax",
    name: "MiniMax Hailuo 02",
    description: "State-of-the-art video and image generation models",
    accentColor: "#c8b6ff",
    accentBg: "rgba(200,182,255,0.08)",
    accentBorder: "rgba(200,182,255,0.28)",
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        style={{ color: "#c8b6ff" }}
      >
        <path
          d='M10 2L11.6 8.4L18 10L11.6 11.6L10 18L8.4 11.6L2 10L8.4 8.4L10 2Z'
          stroke='currentColor'
          strokeWidth='1.3'
          strokeLinejoin='round'
        />
        <circle cx='16.5' cy='4' r='1' fill='currentColor' opacity='0.55' />
        <circle cx='4' cy='16.5' r='0.75' fill='currentColor' opacity='0.4' />
      </svg>
    ),
    features: [
      "Seedance Pro",
      "Community",
      "Wan 2.2 Image",
      "Seedream 4.0",
      "Nano Banana",
      "Flux Kontext",
      "GPT Image",
      "Topaz",
      "Google Veo3",
      "Kling 2.5 Turbo",
      "Kling Avatars 2.0",
      "Claude MCP",
      "Wan 2.5",
      "Sora 2",
      "Sora 2 Presets",
      "Banana Placement",
      "Product Placement",
      "Edit Image",
      "Multi Reference",
      "Upscale",
    ],
  },
  {
    id: "assists",
    name: "Assists",
    description: "Platform-native formats for every social channel",
    accentColor: "#ffc857",
    accentBg: "rgba(255,200,87,0.08)",
    accentBorder: "rgba(255,200,87,0.25)",
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        style={{ color: "#ffc857" }}
      >
        <line
          x1='3'
          y1='17'
          x2='12.5'
          y2='7.5'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
        <circle cx='13.5' cy='6.5' r='1.5' fill='currentColor' opacity='0.8' />
        <path
          d='M17 2L17.4 3.6L19 4L17.4 4.4L17 6L16.6 4.4L15 4L16.6 3.6L17 2Z'
          fill='currentColor'
          opacity='0.7'
        />
        <path
          d='M7 1.5L7.25 2.5L8 2.75L7.25 3L7 4L6.75 3L6 2.75L6.75 2.5L7 1.5Z'
          fill='currentColor'
          opacity='0.5'
        />
      </svg>
    ),
    features: [
      "YouTube",
      "TikTok",
      "Instagram Reels",
      "YouTube Shorts",
      "Nano Banana Pro",
      "Kling o1",
      "Mixed Media Community",
      "Soul Presets",
      "Visual Effects Collection",
    ],
  },
];

const ALL_FEATURES = CATEGORIES.flatMap((c) => c.features.map((f) => f));

export default function AIFeaturesSection() {
  return (
    <section id='ai-features' className='relative z-10 mt-40'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Section header */}
        <ScrollReveal variant='blur'>
          <div
            style={{
              borderBottom: "1px solid var(--line)",
              paddingBottom: 28,
              marginBottom: 56,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <div className='section-num' style={{ marginBottom: 0 }}>
                AI Features
              </div>
              <span
                aria-label='Coming soon'
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  background:
                    "color-mix(in oklab, var(--blue) 12%, transparent)",
                  border:
                    "1px solid color-mix(in oklab, var(--blue) 35%, transparent)",
                  borderRadius: "var(--r-pill)",
                  padding: "7px 14px",
                  lineHeight: 1,
                }}
              >
                <span
                  className='blue-pulse'
                  style={{ width: 8, height: 8, borderRadius: 999 }}
                />
                Coming soon
              </span>
            </div>
            <h2
              className='font-fraunces'
              style={{
                marginTop: 18,
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Explore more
              <br />
              <em className='silver'>AI features.</em>
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
              Powered by the world&apos;s most advanced generation models —
              create video, edit images, and automate content at scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Dual marquee strips */}
        <div className='marquee mb-3' aria-hidden='true'>
          <div
            className='marquee-track items-center py-1'
            style={{ gap: 12, animationDuration: "42s" }}
          >
            {[...ALL_FEATURES, ...ALL_FEATURES].map((label, idx) => (
              <div
                key={idx}
                className='chip'
                style={{
                  fontSize: 10,
                  padding: "5px 13px",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className='marquee mb-14' aria-hidden='true'>
          <div
            className='marquee-track items-center py-1'
            style={{
              gap: 12,
              animationDirection: "reverse",
              animationDuration: "52s",
            }}
          >
            {[...ALL_FEATURES, ...ALL_FEATURES].map((label, idx) => (
              <div
                key={idx}
                className='chip'
                style={{
                  fontSize: 10,
                  padding: "5px 13px",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Category cards */}
        <ScrollReveal stagger className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className='stagger-item card-hover sheen flex flex-col gap-5 p-6'
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-xl)",
              }}
            >
              {/* Icon + badge row */}
              <div className='flex items-center justify-between gap-3'>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--r-md)",
                    background: cat.accentBg,
                    border: `1px solid ${cat.accentBorder}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {cat.icon}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 9,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "3px 9px",
                    borderRadius: 999,
                    background: cat.accentBg,
                    border: `1px solid ${cat.accentBorder}`,
                    color: cat.accentColor,
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat.features.length} features
                </span>
              </div>

              {/* Name + description */}
              <div>
                <h3
                  className='font-fraunces'
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "var(--ink)",
                    marginBottom: 6,
                  }}
                >
                  {cat.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--mute)",
                    lineHeight: 1.5,
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  {cat.description}
                </p>
              </div>

              {/* Divider */}
              <div
                style={{ height: 1, background: "var(--line)", flexShrink: 0 }}
              />

              {/* Feature chips */}
              <div className='flex flex-wrap gap-2'>
                {cat.features.map((feature, idx) =>
                  idx === 0 ? (
                    <span
                      key={feature}
                      className='chip'
                      style={{
                        background: cat.accentBg,
                        borderColor: cat.accentBorder,
                        color: cat.accentColor,
                        fontSize: 9,
                        gap: 5,
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: cat.accentColor,
                          boxShadow: `0 0 6px ${cat.accentColor}bb`,
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                      {feature}
                    </span>
                  ) : (
                    <span
                      key={feature}
                      className='chip'
                      style={{ fontSize: 9 }}
                    >
                      {feature}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
