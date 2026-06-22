"use client";

import { useCallback, useId, useRef, useState } from "react";

type FeedbackType = "suggestion" | "bug" | "other";
type Status = "idle" | "submitting" | "success" | "error";

const TYPE_OPTIONS: { value: FeedbackType; label: string }[] = [
  { value: "suggestion", label: "Suggestion" },
  { value: "bug", label: "Bug" },
  { value: "other", label: "Other" },
];

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];

export default function FeedbackPanelContent() {
  const [type, setType] = useState<FeedbackType>("suggestion");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messageId = useId();
  const emailId = useId();

  const setImageFile = useCallback((file: File | null) => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    if (!file) {
      setImage(null);
      setPreviewUrl(null);
      return;
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Image must be PNG, JPG, or WebP.");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setError("Image must be under 5 MB.");
      return;
    }
    setError(null);
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  }, [previewUrl]);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer.files?.[0];
      if (file) setImageFile(file);
    },
    [setImageFile],
  );

  const isValid = message.trim().length > 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || status === "submitting") return;
    setStatus("submitting");
    setError(null);

    const form = new FormData();
    form.set("type", type);
    form.set("message", message.trim());
    if (email.trim()) form.set("email", email.trim());
    if (image) form.set("image", image);

    try {
      const res = await fetch("/api/feedback", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  const resetForSubmitAnother = () => {
    setType("suggestion");
    setMessage("");
    setEmail("");
    setImageFile(null);
    setStatus("idle");
    setError(null);
  };

  if (status === "success") {
    return (
      <div
        className='widget-stagger-item'
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
        <p
          className='font-fraunces'
          style={{ fontSize: 18, color: "var(--ink)", marginBottom: 6 }}
        >
          Thanks for the feedback.
        </p>
        <p
          style={{
            fontSize: 13,
            color: "var(--mute)",
            lineHeight: 1.55,
            marginBottom: 20,
          }}
        >
          We read every submission — it genuinely shapes what we build next.
        </p>
        <button
          type='button'
          onClick={resetForSubmitAnother}
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
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Type selector */}
      <div role='radiogroup' aria-label='Feedback type' style={{ display: "flex", gap: 8 }}>
        {TYPE_OPTIONS.map((opt) => {
          const active = type === opt.value;
          return (
            <button
              key={opt.value}
              type='button'
              role='radio'
              aria-checked={active}
              onClick={() => setType(opt.value)}
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: "var(--r-md)",
                border: `1px solid ${active ? "rgba(56,189,248,0.4)" : "var(--line)"}`,
                background: active ? "rgba(56,189,248,0.1)" : "var(--surface-2)",
                color: active ? "var(--blue)" : "var(--mute)",
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
                transition: "border-color 200ms ease, background 200ms ease, color 200ms ease",
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor={messageId}
          style={{
            display: "block",
            fontSize: 12,
            color: "var(--mute)",
            marginBottom: 6,
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.06em",
          }}
        >
          What&apos;s on your mind? <span style={{ color: "var(--blue)" }}>*</span>
        </label>
        <textarea
          id={messageId}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='A bug you hit, a feature you wish existed, anything.'
          rows={4}
          style={{
            width: "100%",
            resize: "vertical",
            padding: "10px 12px",
            borderRadius: "var(--r-md)",
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            color: "var(--ink)",
            fontSize: 13.5,
            lineHeight: 1.5,
            fontFamily: "var(--font-geist-sans), sans-serif",
          }}
        />
      </div>

      {/* Email (optional) */}
      <div>
        <label
          htmlFor={emailId}
          style={{
            display: "block",
            fontSize: 12,
            color: "var(--mute)",
            marginBottom: 6,
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.06em",
          }}
        >
          Email (optional — if you want a reply)
        </label>
        <input
          id={emailId}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='you@example.com'
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "var(--r-md)",
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            color: "var(--ink)",
            fontSize: 13.5,
            fontFamily: "var(--font-geist-sans), sans-serif",
          }}
        />
      </div>

      {/* Image dropzone */}
      <div>
        <span
          style={{
            display: "block",
            fontSize: 12,
            color: "var(--mute)",
            marginBottom: 6,
            fontFamily: "var(--font-geist-mono), monospace",
            letterSpacing: "0.06em",
          }}
        >
          Screenshot (optional)
        </span>
        {previewUrl ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: 10,
              borderRadius: "var(--r-md)",
              background: "var(--surface-2)",
              border: "1px solid var(--line)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt='Attached screenshot preview'
              style={{
                width: 44,
                height: 44,
                borderRadius: "var(--r-sm)",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                flex: 1,
                fontSize: 12.5,
                color: "var(--ink)",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {image?.name}
            </span>
            <button
              type='button'
              aria-label='Remove screenshot'
              onClick={() => setImageFile(null)}
              style={{
                width: 26,
                height: 26,
                borderRadius: "var(--r-sm)",
                border: "1px solid var(--line)",
                background: "var(--surface-3)",
                color: "var(--mute)",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width='12' height='12' viewBox='0 0 12 12' fill='none' aria-hidden='true'>
                <path d='M2 2L10 10M10 2L2 10' stroke='currentColor' strokeWidth='1.4' strokeLinecap='round' />
              </svg>
            </button>
          </div>
        ) : (
          <div
            role='button'
            tabIndex={0}
            onClick={() => fileInputRef.current?.click()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                fileInputRef.current?.click();
              }
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={onDrop}
            style={{
              padding: "18px 12px",
              borderRadius: "var(--r-md)",
              border: `1px dashed ${isDragOver ? "var(--blue)" : "var(--line-2)"}`,
              background: isDragOver ? "rgba(56,189,248,0.06)" : "var(--surface-2)",
              color: "var(--mute)",
              textAlign: "center",
              cursor: "pointer",
              transition: "border-color 200ms ease, background 200ms ease",
            }}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              style={{ margin: "0 auto 8px" }}
              aria-hidden='true'
            >
              <path
                d='M10 13V3M10 3L6.5 6.5M10 3l3.5 3.5'
                stroke='currentColor'
                strokeWidth='1.4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M3 14v1.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V14'
                stroke='currentColor'
                strokeWidth='1.4'
                strokeLinecap='round'
              />
            </svg>
            <span style={{ fontSize: 12.5 }}>
              Drag a screenshot here, or click to browse
            </span>
            <input
              ref={fileInputRef}
              type='file'
              accept='image/png,image/jpeg,image/webp'
              onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
              style={{ display: "none" }}
            />
          </div>
        )}
      </div>

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
          }}
        >
          {error}
        </p>
      )}

      <button
        type='submit'
        disabled={!isValid || status === "submitting"}
        className='btn-lift'
        style={{
          padding: "12px 0",
          borderRadius: 999,
          background: "var(--blue-grad)",
          color: "white",
          fontWeight: 600,
          fontSize: 14,
          border: "none",
          cursor: !isValid || status === "submitting" ? "not-allowed" : "pointer",
          opacity: !isValid ? 0.5 : 1,
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.22), 0 0 28px rgba(56,189,248,0.35), 0 4px 16px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {status === "submitting" ? (
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
            Sending…
          </>
        ) : (
          "Send feedback"
        )}
      </button>
    </form>
  );
}
