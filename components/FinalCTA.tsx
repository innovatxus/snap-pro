export default function FinalCTA() {
  return (
    <section className='relative z-10 mt-50 text-center'>
      <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
        {/* Glow blob */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
          }}
        />

        <div className='relative flex flex-col items-center'>
          {/* Eyebrow */}
          <div className='flex items-center gap-3 mb-8'>
            <span className='blue-pulse' />
            <span
              style={{
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--mute)",
              }}
            >
              Available now · iOS &amp; Android
            </span>
          </div>

          {/* Headline */}
          <h2
            className='font-fraunces mx-auto'
            style={{
              fontSize: "clamp(48px, 6vw, 96px)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "var(--ink)",
              maxWidth: 800,
              marginBottom: 28,
            }}
          >
            Your studio.
            <br />
            <em className='silver'>In your pocket.</em>
          </h2>

          {/* Body */}
          <p
            style={{
              fontSize: 17,
              color: "var(--mute)",
              lineHeight: 1.55,
              maxWidth: 520,
              marginBottom: 48,
              fontFamily: "var(--font-geist-sans), sans-serif",
            }}
          >
            25 free credits every month. No credit card. No desktop.
          </p>

          {/* Store buttons */}
          <div className='flex flex-col sm:flex-row items-center gap-4 mb-8'>
            {/* App Store */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 24px",
                borderRadius: 16,
                background: "#000",
                border: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minWidth: 180,
              }}
            >
              <svg width='22' height='26' viewBox='0 0 22 26' fill='none'>
                <path
                  d='M18.2 13.8C18.2 10.8 20.6 9.5 20.7 9.4C19.3 7.3 17 7 16.3 6.9C14.3 6.7 12.4 8 11.4 8C10.4 8 8.8 7 7.1 7C4.9 7.1 2.9 8.2 1.7 10C-0.6 13.6 1.1 19 3.4 21.9C4.5 23.3 5.8 24.9 7.5 24.9C9.2 24.9 9.8 23.9 11.8 23.9C13.8 23.9 14.4 24.9 16.2 24.9C17.9 24.9 19.1 23.4 20.2 22C21.5 20.4 22 18.8 22 18.7C22 18.7 18.2 17.2 18.2 13.8Z'
                  fill='white'
                />
                <path
                  d='M14.8 4.9C15.7 3.8 16.3 2.3 16.1 0.8C14.8 0.8 13.3 1.6 12.3 2.7C11.4 3.7 10.7 5.2 10.9 6.7C12.3 6.8 13.9 5.9 14.8 4.9Z'
                  fill='white'
                />
              </svg>
              <div className='text-left'>
                <p
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Download on the
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "white",
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  App Store
                </p>
              </div>
            </button>

            {/* Google Play */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 24px",
                borderRadius: 16,
                background: "#000",
                border: "1px solid rgba(255,255,255,0.15)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                minWidth: 180,
              }}
            >
              <svg width='22' height='24' viewBox='0 0 22 24' fill='none'>
                <path
                  d='M1.5 0.5L13.5 12L1.5 23.5C0.9 23.2 0.5 22.6 0.5 22V2C0.5 1.4 0.9 0.8 1.5 0.5Z'
                  fill='#00D2FF'
                />
                <path d='M17.5 8L13.5 12L1.5 0.5L17.5 8Z' fill='#FFD900' />
                <path
                  d='M21 10.1C21.6 10.5 22 11.2 22 12C22 12.8 21.6 13.5 21 13.9L17.5 16L13.5 12L17.5 8L21 10.1Z'
                  fill='#FF3D00'
                />
                <path d='M1.5 23.5L13.5 12L17.5 16L1.5 23.5Z' fill='#00F076' />
              </svg>
              <div className='text-left'>
                <p
                  style={{
                    fontSize: 9,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Get it on
                </p>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "white",
                    fontFamily: "var(--font-geist-sans)",
                  }}
                >
                  Google Play
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
