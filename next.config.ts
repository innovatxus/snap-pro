import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * Production Content-Security-Policy.
 *
 * Notes:
 * - `'unsafe-inline'` is required on style-src because the codebase ships
 *   many inline `style={{ ... }}` attributes and Tailwind v4 emits inline
 *   `<style>` blocks. Hash/nonce strategy is a future hardening step.
 * - `'unsafe-inline'` is required on script-src for the small RTL bootstrap
 *   script in `app/layout.tsx`. Move to a nonce + middleware later.
 * - Image hosts must mirror `images.remotePatterns` below.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://picsum.photos",
  "font-src 'self' data:",
  "connect-src 'self'",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compiler: {
    removeConsole: { exclude: ["error"] },
  },
  images: {
    // Serve AVIF where the browser supports it, falling back to WebP, then
    // the original format — negotiated automatically per-request via the
    // Accept header. No separate asset files needed for any of this.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  // Only enforce strict headers in production. The Next.js dev server
  // injects HMR scripts that would be blocked by a strict CSP.
  async headers() {
    if (!isProd) return [];
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
