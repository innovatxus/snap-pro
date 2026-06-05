import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Use the Node runtime so we can read the logo file from disk at build time.
export const runtime = "nodejs";

export const alt = "Snap Pro — AI Studio for Everyone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Pull the logo into the OG card. The shipped SVG at /public/logo/
 * is actually a base64 PNG wrapped in an SVG <image>. We extract the raw
 * PNG so satori can render it cleanly at high quality.
 */
function loadLogoDataUrl(): string {
  const svgPath = join(process.cwd(), "public", "logo", "snap-pro-logo.svg");
  const svg = readFileSync(svgPath, "utf-8");
  const m = svg.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);
  if (m) return `data:image/png;base64,${m[1]}`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

export default async function OpengraphImage() {
  const logo = loadLogoDataUrl();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(120% 80% at 30% 20%, rgba(56,189,248,0.18) 0%, transparent 60%), radial-gradient(120% 80% at 80% 80%, rgba(125,211,252,0.10) 0%, transparent 60%), linear-gradient(180deg, #07090d 0%, #0b0e14 100%)",
        color: "#ffffff",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Subtle grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.5,
          display: "flex",
        }}
      />

      {/* Card content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 36,
          padding: "0 80px",
          zIndex: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt='Snap Pro logo'
          width={260}
          height={260}
          style={{
            width: 260,
            height: 260,
            borderRadius: 56,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 112,
            fontWeight: 800,
            letterSpacing: "0.02em",
            lineHeight: 1,
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, #7DD3FC 0%, #38BDF8 35%, #0EA5E9 70%, #0369A1 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            SNAP
          </span>
          <span
            style={{
              marginLeft: 12,
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #D8DCE3 18%, #8a8f97 45%, #C8CDD4 75%, #FFFFFF 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            PRO
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "#cbd2dc",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.35,
            display: "flex",
          }}
        >
          AI Studio for Everyone — 17 professional AI editing services for
          sellers.
        </div>
      </div>

      {/* Footer chip */}
      <div
        style={{
          position: "absolute",
          bottom: 44,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 18px",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 999,
          background: "rgba(255,255,255,0.04)",
          color: "#9aa3af",
          fontSize: 18,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          zIndex: 1,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#38BDF8",
            boxShadow: "0 0 14px #38BDF8",
            display: "flex",
          }}
        />
        snappro.app
      </div>
    </div>,
    { ...size },
  );
}
