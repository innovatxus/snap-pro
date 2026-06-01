/**
 * Shared logo mark — used in Navbar and Footer.
 * Renders the snap-pro-logo.svg mark + the two-tone "SNAP PRO" wordmark.
 *
 * Props
 *   size        — logo image px (default 64)
 *   fontSize    — wordmark font-size px (default 32)
 *   borderRadius — logo image border-radius px (default 18)
 */
export interface LogoProps {
  size?: number;
  fontSize?: number;
  borderRadius?: number;
}

export default function Logo({
  size = 64,
  fontSize = 32,
  borderRadius = 18,
}: LogoProps) {
  return (
    <div className="flex items-center gap-[10px]">
      {/* Mark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/snap-pro-logo.svg"
        alt="Snap Pro logo"
        width={size}
        height={size}
        style={{
          width: size,
          height: size,
          borderRadius,
          flexShrink: 0,
          display: "block",
        }}
      />

      {/* Wordmark */}
      <span
        style={{
          fontFamily: "var(--font-geist-sans), sans-serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: "0.02em",
          display: "flex",
          alignItems: "center",
          lineHeight: 1,
        }}
      >
        {/* SNAP — blue gradient */}
        <span
          style={{
            background:
              "linear-gradient(135deg, #7DD3FC 0%, #38BDF8 35%, #0EA5E9 70%, #0369A1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          SNAP
        </span>
        {/* PRO — silver chrome gradient */}
        <span
          style={{
            background:
              "linear-gradient(135deg, #FFFFFF 0%, #D8DCE3 14%, #4E535C 32%, #B5BAC2 48%, #2E323A 60%, #C8CDD4 76%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            marginLeft: 4,
          }}
        >
          PRO
        </span>
      </span>
    </div>
  );
}
