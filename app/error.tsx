"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Root error boundary. Rendered when an unhandled error occurs anywhere in the
 * app router tree. Keeps the surface intentionally minimal so we can recover
 * even when the global layout chrome can't be trusted.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.error("[snap-pro] route error:", error);
    }
  }, [error]);

  return (
    <main className='relative z-10 min-h-screen flex items-center'>
      <div className='max-w-370 mx-auto w-full px-4 sm:px-8 lg:px-12 py-24 text-center'>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#FFC857",
            marginBottom: 16,
          }}
        >
          500 · Studio glitch
        </div>
        <h1
          className='font-fraunces'
          style={{
            fontSize: "clamp(36px, 7vw, 68px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: 16,
          }}
        >
          Something didn’t <em className='silver'>render right.</em>
        </h1>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--mute)",
            maxWidth: 560,
            margin: "0 auto 8px",
          }}
        >
          We hit an unexpected error. Try again, or head home — the team has
          been notified.
        </p>
        {error.digest && (
          <p
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: 11,
              color: "var(--mute)",
              opacity: 0.7,
              marginBottom: 24,
            }}
          >
            Reference: {error.digest}
          </p>
        )}
        <div className='flex items-center justify-center gap-3 flex-wrap mt-6'>
          <button
            type='button'
            onClick={reset}
            style={{
              padding: "12px 22px",
              borderRadius: 999,
              background: "var(--blue-grad)",
              color: "white",
              fontSize: 13,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 24px var(--blue-glow)",
            }}
          >
            Try again
          </button>
          <Link
            href='/'
            style={{
              padding: "12px 22px",
              borderRadius: 999,
              background: "var(--surface-2)",
              border: "1px solid var(--line-2)",
              color: "var(--ink)",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
