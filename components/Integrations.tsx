import ScrollReveal from "./ScrollReveal";

const INTEGRATIONS = [
  // Live
  {
    id: "shopify",
    name: "Shopify",
    type: "E-commerce",
    status: "live",
    color: "#95BF47",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#95BF47' />
        <path
          d='M19 8.5C18.9 8.5 17.5 8.4 17.5 8.4C17.5 8.4 16.4 7.3 16.3 7.2C16.2 7.1 16 7.1 15.9 7.2L15 7.5C14.7 6.7 14.2 6 13.3 6C13.3 6 13 6.2 12.8 6.4C12.6 6.2 12.3 6.1 12 6.2C10.3 6.7 9.5 8.7 9.2 9.7L7.8 10.1C7.3 10.2 7.3 10.3 7.2 10.7L6 19.5L15.8 21L20 19.5C20 19.5 19.1 8.6 19 8.5ZM13.4 7.8L12.1 8.2C12.3 7.6 12.8 7.1 13.2 7C13.3 7.3 13.4 7.5 13.4 7.8Z'
          fill='white'
          opacity='0.9'
        />
      </svg>
    ),
  },
  {
    id: "amazon",
    name: "Amazon",
    type: "Marketplace",
    status: "live",
    color: "#FF9900",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#232F3E' />
        <text
          x='4'
          y='19'
          fontSize='11'
          fontWeight='700'
          fill='#FF9900'
          fontFamily='Arial'
        >
          amzn
        </text>
      </svg>
    ),
  },
  {
    id: "etsy",
    name: "Etsy",
    type: "Marketplace",
    status: "live",
    color: "#F05923",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#F05923' />
        <text
          x='5'
          y='20'
          fontSize='14'
          fontWeight='800'
          fill='white'
          fontFamily='Georgia, serif'
        >
          E
        </text>
      </svg>
    ),
  },
  {
    id: "meta",
    name: "Meta Shops",
    type: "Social Commerce",
    status: "live",
    color: "#1877F2",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#1877F2' />
        <path
          d='M14 7C10.1 7 7 10.1 7 14C7 17.5 9.5 20.4 12.8 20.9V15.9H11.1V14H12.8V12.6C12.8 10.9 13.8 9.9 15.3 9.9C16 9.9 16.8 10 16.8 10V11.7H15.9C15 11.7 14.7 12.3 14.7 12.9V14H16.7L16.4 15.9H14.7V20.9C18 20.4 21 17.5 21 14C21 10.1 17.9 7 14 7Z'
          fill='white'
        />
      </svg>
    ),
  },
  // Soon
  {
    id: "tiktok",
    name: "TikTok Shop",
    type: "Social Commerce",
    status: "soon",
    color: "#010101",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#1A1A1A' />
        <text
          x='6'
          y='20'
          fontSize='13'
          fontWeight='800'
          fill='white'
          fontFamily='Arial'
        >
          T
        </text>
        <circle cx='19' cy='10' r='3' fill='#FF0050' opacity='0.7' />
      </svg>
    ),
  },
  {
    id: "woo",
    name: "WooCommerce",
    type: "E-commerce",
    status: "soon",
    color: "#7F54B3",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#1A1A1A' />
        <text
          x='5'
          y='20'
          fontSize='11'
          fontWeight='700'
          fill='#7F54B3'
          fontFamily='Arial'
        >
          Woo
        </text>
      </svg>
    ),
  },
  {
    id: "dropbox",
    name: "Dropbox",
    type: "Storage",
    status: "soon",
    color: "#0061FF",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#1A1A1A' />
        <path
          d='M8 9L12 12L8 15L4 12L8 9ZM16 9L20 12L16 15L12 12L16 9ZM8 17L12 14L16 17L12 20L8 17ZM20 15L16 18L12 15L16 12L20 15Z'
          fill='#0061FF'
          opacity='0.8'
          transform='translate(2, 0) scale(0.9)'
        />
      </svg>
    ),
  },
  {
    id: "api",
    name: "REST API",
    type: "Developer",
    status: "soon",
    badge: "Studio plan",
    color: "#38BDF8",
    icon: (
      <svg viewBox='0 0 28 28' fill='none' className='w-7 h-7'>
        <rect width='28' height='28' rx='6' fill='#1A1A1A' />
        <path
          d='M8 11L5 14L8 17M20 11L23 14L20 17M15 8L13 20'
          stroke='#38BDF8'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
];

export default function Integrations() {
  const live = INTEGRATIONS.filter((i) => i.status === "live");
  const soon = INTEGRATIONS.filter((i) => i.status === "soon");
  const all = [...live, ...soon];

  return (
    <section id='integrations' className='relative z-10 mt-40'>
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
            {/* Coming Soon Silver Chrome Label */}
            <div
              style={{
                display: "inline-block",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                padding: "4px 16px",
                borderRadius: 999,
                background:
                  "linear-gradient(90deg, #e0e0e0 0%, #bfc1c6 50%, #f5f5f5 100%)",
                color: "#7d7d7d",
                boxShadow: "0 1px 6px 0 rgba(180,180,180,0.10)",
                marginBottom: 18,
              }}
            >
              Coming Soon
            </div>
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(40px, 5vw, 76px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
              }}
            >
              Plugged into <em className='silver'>your stack.</em>
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
              Snap Pro connects directly to your selling channels. Finish a
              batch and push straight to your listings.
            </p>
          </div>
        </div>

        {/* 2×4 grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {all.map((integ, i) => (
            <ScrollReveal
              key={integ.id}
              delay={Math.min(i % 4, 4) as 0 | 1 | 2 | 3 | 4}
            >
              <div
                className='card-hover flex flex-col gap-4 p-5'
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r-lg)",
                }}
              >
                {/* Logo */}
                <div className='flex items-center justify-between'>
                  {integ.icon}
                  {/* Status badge */}
                  <span
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      borderRadius: 999,
                      ...(integ.status === "live"
                        ? {
                            background: "rgba(56,189,248,0.1)",
                            border: "1px solid rgba(56,189,248,0.3)",
                            color: "var(--blue)",
                          }
                        : {
                            background: "var(--surface-3)",
                            border: "1px solid var(--line-2)",
                            color: "var(--mute)",
                          }),
                    }}
                  >
                    {integ.status === "live" ? "Live" : "Soon"}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <p
                    className='font-fraunces'
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "var(--ink)",
                      marginBottom: 2,
                    }}
                  >
                    {integ.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--mute)",
                    }}
                  >
                    {integ.type}
                    {integ.badge && (
                      <span style={{ color: "var(--blue)", marginLeft: 6 }}>
                        · {integ.badge}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
