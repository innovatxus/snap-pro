/** Shown whenever a Firebase web config value is missing — keeps the app
 * usable (no crash, no raw SDK error) before real credentials are added. */
export const AUTH_NOT_CONFIGURED_MESSAGE =
  "Sign-in isn't set up yet. Add your Firebase credentials to enable accounts.";

const FRIENDLY_MESSAGES: Record<string, string> = {
  "auth/email-already-in-use": "That email is already registered. Try signing in instead.",
  "auth/invalid-email": "That email address doesn't look right.",
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/invalid-login-credentials": "Incorrect email or password.",
  "auth/wrong-password": "Incorrect email or password.",
  "auth/user-not-found": "Incorrect email or password.",
  "auth/weak-password": "Choose a password with at least 6 characters.",
  "auth/too-many-requests": "Too many attempts. Wait a moment and try again.",
  "auth/network-request-failed": "Network error. Check your connection and try again.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/requires-recent-login": "Please sign in again to continue.",
  "auth/popup-closed-by-user": "Sign-in was cancelled.",
};

function hasErrorCode(error: unknown): error is { code: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code: unknown }).code === "string"
  );
}

/** Turns a Firebase `auth/*` error code into a human-readable message. Falls
 * back to the error's own message, then a generic string, for anything
 * unmapped. */
export function getAuthErrorMessage(error: unknown): string {
  if (hasErrorCode(error)) {
    const mapped = FRIENDLY_MESSAGES[error.code];
    if (mapped) return mapped;
  }
  if (error instanceof Error && error.message) return error.message;
  return "Something went wrong. Please try again.";
}
