"use client";

import type { ReactNode } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import AuthPanelContent from "@/components/auth/AuthPanelContent";

/**
 * Gates its children behind sign-in. Used directly in the page tree (not a
 * modal) so the editor route never flashes its real content to a signed-out
 * visitor — the same `AuthPanelContent` form used in the Navbar's panel is
 * rendered inline as the page's content while signed out.
 */
export default function RequireAuth({ children }: { children: ReactNode }) {
  const { status, isConfigured } = useAuth();

  if (status === "loading") {
    return (
      <div
        style={{
          minHeight: 240,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          aria-hidden='true'
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "2px solid var(--line-2)",
            borderTopColor: "var(--blue)",
            animation: "spin 0.7s linear infinite",
          }}
        />
      </div>
    );
  }

  // Without Firebase credentials there is no auth to gate behind — fail open
  // rather than permanently locking the editor before setup is done. See
  // FIREBASE_SETUP.md for turning real gating on.
  if (status === "signed-in" || !isConfigured) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "0 auto",
        padding: "32px 28px",
        borderRadius: "var(--r-xl)",
        background: "var(--surface)",
        border: "1px solid var(--line)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <h2
        className='font-fraunces'
        style={{ fontSize: 24, fontWeight: 400, color: "var(--ink)", marginBottom: 8 }}
      >
        Sign in to keep going
      </h2>
      <p style={{ fontSize: 13.5, color: "var(--mute)", lineHeight: 1.55, marginBottom: 24 }}>
        Create a free account or sign in to use the editor and keep your credits.
      </p>
      <AuthPanelContent onClose={() => {}} />
    </div>
  );
}
