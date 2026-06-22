import { NextRequest, NextResponse } from "next/server";
import { submitFeedback, type FeedbackType } from "@/lib/feedback";

const MAX_MESSAGE_LENGTH = 4000;
const MAX_EMAIL_LENGTH = 320;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_IMAGE_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);
const FEEDBACK_TYPES = new Set<FeedbackType>(["suggestion", "bug", "other"]);

// Minimal in-memory rate limit: 5 submissions / 10 minutes per IP.
// Resets on redeploy and doesn't share state across serverless instances —
// fine as a basic abuse guard, not a substitute for a real rate limiter
// once this sits behind a proper backend.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const type = String(form.get("type") ?? "suggestion") as FeedbackType;
  const message = String(form.get("message") ?? "").trim();
  const email = form.get("email") ? String(form.get("email")).trim() : undefined;
  const imageEntry = form.get("image");

  if (!FEEDBACK_TYPES.has(type)) {
    return NextResponse.json({ error: "Invalid feedback type." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 },
    );
  }
  if (email && (email.length > MAX_EMAIL_LENGTH || !EMAIL_RE.test(email))) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  let image: { filename: string; contentType: string; buffer: Buffer } | undefined;
  if (imageEntry instanceof File && imageEntry.size > 0) {
    if (!ALLOWED_IMAGE_TYPES.has(imageEntry.type)) {
      return NextResponse.json(
        { error: "Image must be PNG, JPG, or WebP." },
        { status: 400 },
      );
    }
    if (imageEntry.size > MAX_IMAGE_BYTES) {
      return NextResponse.json(
        { error: "Image must be under 5 MB." },
        { status: 400 },
      );
    }
    image = {
      filename: imageEntry.name.slice(0, 200),
      contentType: imageEntry.type,
      buffer: Buffer.from(await imageEntry.arrayBuffer()),
    };
  }

  const { id } = await submitFeedback({ type, message, email, image });
  return NextResponse.json({ ok: true, id });
}
