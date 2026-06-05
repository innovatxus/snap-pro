// Re-export the OpenGraph image for the Twitter card so X/Twitter,
// LinkedIn (which falls back to twitter:image), and other crawlers all
// pick up the same branded artwork. `runtime` must be declared inline
// (Next disallows re-exporting route segment config).
export const runtime = "nodejs";

export { default, alt, size, contentType } from "./opengraph-image";
