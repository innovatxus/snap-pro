"use client";

import { useId, useState } from "react";
import { resetPassword, signIn, signUp } from "@/lib/auth/service";

type Mode = "login" | "signup" | "reset";
type Status = "idle" | "submitting" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "var(--r-md)",
  background: "var(--surface-2)",
  border: "1px solid var(--line)",
  color: "var(--ink)",
  fontSize: 13.5,
  fontFamily: "var(--font-geist-sans), sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  color: "var(--mute)",
  marginBottom: 6,
  fontFamily: "var(--font-geist-mono), monospace",
  letterSpacing: "0.06em",
};

function Field({
  id,
  label,
  type,
  value,
  onChange,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
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
      {message}
    </p>
  );
}

function SubmitButton({ submitting, label }: { submitting: boolean; label: string }) {
  return (
    <button
      type='submit'
      disabled={submitting}
      className='btn-lift'
      style={{
        padding: "12px 0",
        borderRadius: 999,
        background: "var(--blue-grad)",
        color: "white",
        fontWeight: 600,
        fontSize: 14,
        border: "none",
        cursor: submitting ? "not-allowed" : "pointer",
        opacity: submitting ? 0.7 : 1,
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.22), 0 0 28px rgba(56,189,248,0.35), 0 4px 16px rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      {submitting ? (
        <>
          <span
            aria-hidden='true'
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              border: "2px solid rgba(255,255,255,0.35)",
              borderTopColor: "white",
              animation: "spin 0.7s linear infinite",
            }}
          />
          Please wait…
        </>
      ) : (
        label
      )}
    </button>
  );
}

function ModeLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type='button'
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        color: "var(--blue)",
        fontSize: 12.5,
        cursor: "pointer",
        textDecoration: "underline",
        textUnderlineOffset: 2,
      }}
    >
      {children}
    </button>
  );
}

export default function AuthPanelContent({ onClose }: { onClose: () => void }) {
  const [mode, setMode] = useState<Mode>("login");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);
  const [verifySent, setVerifySent] = useState(false);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();

  const switchMode = (next: Mode) => {
    setMode(next);
    setStatus("idle");
    setError(null);
    setResetSent(false);
    setVerifySent(false);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);

    try {
      if (mode === "login") {
        await signIn(email, password);
        onClose();
      } else if (mode === "signup") {
        await signUp({ email, password, displayName: displayName.trim() });
        setVerifySent(true);
        setStatus("idle");
      } else {
        await resetPassword(email);
        setResetSent(true);
        setStatus("idle");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (mode === "signup" && verifySent) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "28px 8px",
        }}
      >
        <div
          aria-hidden='true'
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "rgba(56,189,248,0.12)",
            border: "1px solid rgba(56,189,248,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 16,
            boxShadow: "0 0 32px -8px rgba(56,189,248,0.5)",
          }}
        >
          <svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
            <path
              d='M5 11.5L9 15.5L17 6.5'
              stroke='#38bdf8'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <p className='font-fraunces' style={{ fontSize: 18, color: "var(--ink)", marginBottom: 6 }}>
          Account created.
        </p>
        <p style={{ fontSize: 13, color: "var(--mute)", lineHeight: 1.55, marginBottom: 20 }}>
          We sent a verification link to {email}. You&apos;re signed in already — verify whenever
          you get a chance.
        </p>
        <button
          type='button'
          onClick={onClose}
          className='btn-lift'
          style={{
            padding: "10px 20px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.85)",
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Done
        </button>
      </div>
    );
  }

  if (mode === "reset" && resetSent) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "28px 8px",
        }}
      >
        <p className='font-fraunces' style={{ fontSize: 18, color: "var(--ink)", marginBottom: 6 }}>
          Check your email.
        </p>
        <p style={{ fontSize: 13, color: "var(--mute)", lineHeight: 1.55, marginBottom: 20 }}>
          If an account exists for {email}, a reset link is on its way.
        </p>
        <ModeLink onClick={() => switchMode("login")}>Back to sign in</ModeLink>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {mode === "signup" && (
        <Field
          id={nameId}
          label='Name'
          type='text'
          value={displayName}
          onChange={setDisplayName}
          autoComplete='name'
          placeholder='Jane Doe'
        />
      )}

      <Field
        id={emailId}
        label='Email'
        type='email'
        value={email}
        onChange={setEmail}
        autoComplete='email'
        placeholder='you@example.com'
      />

      {mode !== "reset" && (
        <Field
          id={passwordId}
          label='Password'
          type='password'
          value={password}
          onChange={setPassword}
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          placeholder={mode === "signup" ? "At least 6 characters" : "••••••••"}
        />
      )}

      {error && <ErrorBanner message={error} />}

      <SubmitButton
        submitting={status === "submitting"}
        label={mode === "login" ? "Sign in" : mode === "signup" ? "Create account" : "Send reset link"}
      />

      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        {mode === "login" && (
          <>
            <span style={{ fontSize: 12.5, color: "var(--mute)" }}>
              No account? <ModeLink onClick={() => switchMode("signup")}>Create one</ModeLink>
            </span>
            <ModeLink onClick={() => switchMode("reset")}>Forgot password?</ModeLink>
          </>
        )}
        {mode === "signup" && (
          <span style={{ fontSize: 12.5, color: "var(--mute)" }}>
            Already have an account? <ModeLink onClick={() => switchMode("login")}>Sign in</ModeLink>
          </span>
        )}
        {mode === "reset" && (
          <span style={{ fontSize: 12.5, color: "var(--mute)" }}>
            <ModeLink onClick={() => switchMode("login")}>Back to sign in</ModeLink>
          </span>
        )}
      </div>
    </form>
  );
}
