"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/AuthProvider";
import { resendVerificationEmail, signOutUser } from "@/lib/auth/service";

export default function AccountPanelContent({ onClose }: { onClose: () => void }) {
  const { profile } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [signingOut, setSigningOut] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSignOut = async () => {
    setSigningOut(true);
    setError(null);
    try {
      await signOutUser();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSigningOut(false);
    }
  };

  const onResendVerification = async () => {
    setVerifyStatus("sending");
    setError(null);
    try {
      await resendVerificationEmail();
      setVerifyStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setVerifyStatus("idle");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 14px",
          borderRadius: "var(--r-md)",
          background: "var(--surface-2)",
          border: "1px solid var(--line)",
        }}
      >
        <div
          aria-hidden='true'
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--blue-grad)",
            color: "white",
            fontWeight: 700,
            fontSize: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {(profile?.displayName ?? profile?.email ?? "?").charAt(0).toUpperCase()}
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              fontSize: 13.5,
              fontWeight: 500,
              color: "var(--ink)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {profile?.displayName ?? "ShotStudio user"}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--mute)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {profile?.email}
          </div>
        </div>
      </div>

      {profile && !profile.emailVerified && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            fontSize: 12.5,
            color: "var(--mute)",
            padding: "8px 12px",
            borderRadius: "var(--r-md)",
            background: "rgba(255,200,87,0.08)",
            border: "1px solid rgba(255,200,87,0.25)",
          }}
        >
          <span>Email not verified.</span>
          {verifyStatus === "sent" ? (
            <span style={{ color: "var(--blue)" }}>Sent — check your inbox.</span>
          ) : (
            <button
              type='button'
              onClick={onResendVerification}
              disabled={verifyStatus === "sending"}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "var(--blue)",
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: 2,
                fontSize: 12.5,
              }}
            >
              {verifyStatus === "sending" ? "Sending…" : "Resend link"}
            </button>
          )}
        </div>
      )}

      {error && (
        <p
          role='alert'
          style={{
            fontSize: 12.5,
            color: "#f87171",
            background: "rgba(248,113,113,0.08)",
            border: "1px solid rgba(248,113,113,0.25)",
            borderRadius: "var(--r-md)",
            padding: "8px 12px",
            margin: 0,
          }}
        >
          {error}
        </p>
      )}

      <button
        type='button'
        onClick={onSignOut}
        disabled={signingOut}
        className='btn-lift'
        style={{
          padding: "11px 0",
          borderRadius: 999,
          background: "var(--surface-2)",
          border: "1px solid var(--line-2)",
          color: "var(--ink)",
          fontWeight: 600,
          fontSize: 13.5,
          cursor: signingOut ? "not-allowed" : "pointer",
          opacity: signingOut ? 0.7 : 1,
        }}
      >
        {signingOut ? "Signing out…" : "Sign out"}
      </button>
    </div>
  );
}
