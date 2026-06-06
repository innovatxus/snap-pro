/**
 * Consent state — analytics and marketing only. Essential cookies/storage are
 * always on (required for the site to function).
 *
 * Persisted in `localStorage` so a user only sees the banner once per browser.
 * Surface a small `useConsent` hook + a DOM custom event so any client
 * component (e.g. the Footer link) can re-open the banner without prop drilling.
 */

"use client";

import { useSyncExternalStore } from "react";

export const CONSENT_STORAGE_KEY = "snap-consent-v1";
export const CONSENT_OPEN_EVENT = "snap:open-consent";
export const CONSENT_CHANGE_EVENT = "snap:consent-change";

export interface ConsentState {
  analytics: boolean;
  marketing: boolean;
  /** Unix epoch ms — when the user last made a choice. */
  ts: number;
}

const DEFAULT_REJECTED: Omit<ConsentState, "ts"> = {
  analytics: false,
  marketing: false,
};

const DEFAULT_ACCEPTED: Omit<ConsentState, "ts"> = {
  analytics: true,
  marketing: true,
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.marketing !== "boolean" ||
      typeof parsed.ts !== "number"
    ) {
      return null;
    }
    return {
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      ts: parsed.ts,
    };
  } catch {
    return null;
  }
}

export function writeConsent(next: Omit<ConsentState, "ts">): ConsentState {
  const value: ConsentState = { ...next, ts: Date.now() };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
      window.dispatchEvent(
        new CustomEvent<ConsentState>(CONSENT_CHANGE_EVENT, { detail: value }),
      );
    } catch {
      // Storage might be unavailable (private mode, quota); fail soft.
    }
  }
  return value;
}

export function acceptAll(): ConsentState {
  return writeConsent(DEFAULT_ACCEPTED);
}

export function rejectNonEssential(): ConsentState {
  return writeConsent(DEFAULT_REJECTED);
}

/**
 * Read the current consent state and subscribe to changes. Returns `null`
 * before the user has made a choice so callers can gate analytics scripts.
 */
export function useConsent(): ConsentState | null {
  return useSyncExternalStore(
    subscribeToConsent,
    getClientSnapshot,
    getServerSnapshot,
  );
}

/**
 * Cached client snapshot — required so `useSyncExternalStore` sees a stable
 * reference between renders. We refresh it whenever a change event fires.
 */
let cachedSnapshot: ConsentState | null | undefined;

function getClientSnapshot(): ConsentState | null {
  if (cachedSnapshot === undefined) {
    cachedSnapshot = readConsent();
  }
  return cachedSnapshot;
}

function subscribeToConsent(callback: () => void) {
  if (typeof window === "undefined") return () => undefined;
  const handler = () => {
    cachedSnapshot = readConsent();
    callback();
  };
  window.addEventListener(CONSENT_CHANGE_EVENT, handler);
  return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handler);
}

function getServerSnapshot(): ConsentState | null {
  return null;
}

/**
 * Dispatch the open-banner event from anywhere in the app. The banner mounts
 * once at the layout level and listens for this event.
 */
export function openConsentBanner(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
