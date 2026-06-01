import ScrollReveal from "./ScrollReveal";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/mo",
    tagline: "Try before you commit.",
    features: [
      "25 credits / month",
      "5 services unlocked",
      "Single photo only",
      "Community support",
    ],
    cta: "Get started free",
    ctaStyle: "silver",
    featured: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    period: "/mo",
    tagline: "For serious sellers.",
    badge: "MOST POPULAR",
    features: [
      "500 credits / month · rollover",
      "All 17 services",
      "Batch up to 50 photos",
      "All 9 industry presets",
      "Shopify + Amazon sync",
      "Priority queue",
    ],
    cta: "Start Pro — $19/mo",
    ctaStyle: "blue",
    featured: true,
  },
  {
    id: "studio",
    name: "Studio",
    price: "$49",
    period: "/mo",
    tagline: "For teams & agencies.",
    features: [
      "Unlimited credits",
      "Unlimited batch",
      "5 team seats",
      "All integrations + API",
      "Custom presets + brand kit",
      "Dedicated Slack support",
    ],
    cta: "Start Studio — $49/mo",
    ctaStyle: "silver",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id='pricing' className='relative z-10 mt-40'>
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
              <em className='silver'>Simple</em> pricing. No surprises.
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
              Start free and scale as you grow. Credits roll over month to month
              on Pro.
            </p>
          </div>
        </div>

        {/* Pricing cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {PLANS.map((plan, i) => (
            <ScrollReveal key={plan.id} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className='card-hover relative flex flex-col overflow-hidden'
                style={{
                  background: plan.featured
                    ? "rgba(14,18,28,0.95)"
                    : "var(--surface)",
                  border: plan.featured
                    ? "1px solid rgba(56,189,248,0.45)"
                    : "1px solid var(--line)",
                  borderRadius: "var(--r-xl)",
                  boxShadow: plan.featured ? "var(--shadow-blue)" : "none",
                  padding: "32px 28px",
                }}
              >
                {/* Most popular badge */}
                {plan.badge && (
                  <div
                    className='absolute top-5 right-5'
                    style={{
                      background: "rgba(56,189,248,0.12)",
                      border: "1px solid rgba(56,189,248,0.35)",
                      borderRadius: 999,
                      padding: "3px 10px",
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--blue)",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: plan.featured ? "var(--blue)" : "var(--mute)",
                    marginBottom: 12,
                    fontWeight: 600,
                  }}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className='flex items-end gap-1 mb-2'>
                  <span
                    className='font-fraunces'
                    style={{
                      fontSize: 52,
                      fontWeight: 300,
                      lineHeight: 1,
                      color: "var(--ink)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--mute)",
                      marginBottom: 8,
                      fontFamily: "var(--font-geist-sans)",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 13,
                    color: "var(--mute)",
                    marginBottom: 28,
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "var(--line)",
                    marginBottom: 24,
                  }}
                />

                {/* Features */}
                <ul className='flex flex-col gap-3 flex-1 mb-8'>
                  {plan.features.map((feat) => (
                    <li key={feat} className='flex items-start gap-3'>
                      <div
                        className='shrink-0 flex items-center justify-center mt-0.5'
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: plan.featured
                            ? "rgba(56,189,248,0.15)"
                            : "rgba(255,255,255,0.06)",
                          border: plan.featured
                            ? "1px solid rgba(56,189,248,0.3)"
                            : "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        <svg width='7' height='5' viewBox='0 0 7 5' fill='none'>
                          <path
                            d='M1 2.5L2.8 4.3L6 1'
                            stroke={plan.featured ? "#38BDF8" : "#7A7A7A"}
                            strokeWidth='1.2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <span
                        style={{
                          fontSize: 14,
                          color: "var(--ink)",
                          fontFamily: "var(--font-geist-sans)",
                          lineHeight: 1.4,
                        }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  style={{
                    width: "100%",
                    padding: "13px 20px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontWeight: 600,
                    fontSize: 14,
                    ...(plan.ctaStyle === "blue"
                      ? {
                          background: "var(--blue-grad)",
                          color: "white",
                          boxShadow:
                            "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
                        }
                      : {
                          background: "var(--silver-grad)",
                          color: "#000",
                          boxShadow: "var(--shadow-silver)",
                        }),
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
