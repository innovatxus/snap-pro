export type FeedbackType = "suggestion" | "bug" | "other";

export interface FeedbackSubmission {
  type: FeedbackType;
  message: string;
  email?: string;
  /** Present when the submitter attached a screenshot. */
  image?: {
    filename: string;
    contentType: string;
    /** Raw bytes — caller decides how/where to persist them. */
    buffer: Buffer;
  };
}

/**
 * Single seam between the feedback API route and wherever submissions
 * actually end up. Swap this implementation for a real database/email/
 * storage call later — the route handler and form never need to change.
 */
export async function submitFeedback(
  submission: FeedbackSubmission,
): Promise<{ id: string }> {
  const id = crypto.randomUUID();
  console.log("[feedback] new submission", {
    id,
    type: submission.type,
    message: submission.message,
    email: submission.email ?? null,
    image: submission.image
      ? {
          filename: submission.image.filename,
          contentType: submission.image.contentType,
          bytes: submission.image.buffer.length,
        }
      : null,
  });
  return { id };
}
