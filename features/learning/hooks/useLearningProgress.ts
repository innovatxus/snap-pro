"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { LearningProgress } from "../types";

const STORAGE_KEY = "snap-pro:learning-progress:v1";
const STORAGE_EVENT = "snap-pro:learning-progress:update";

const EMPTY_PROGRESS: LearningProgress = {
  startedTutorialIds: [],
  completedTutorialIds: [],
  savedTutorialIds: [],
  ratioByTutorial: {},
  totalMinutesWatched: 0,
  streakDays: 0,
  badgeIds: [],
};

// ── External store ───────────────────────────────────────────────────────────

let cached: LearningProgress | null = null;

function read(): LearningProgress {
  if (typeof window === "undefined") return EMPTY_PROGRESS;
  if (cached) return cached;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    cached = raw
      ? { ...EMPTY_PROGRESS, ...(JSON.parse(raw) as Partial<LearningProgress>) }
      : EMPTY_PROGRESS;
  } catch {
    cached = EMPTY_PROGRESS;
  }
  return cached;
}

function write(next: LearningProgress) {
  cached = next;
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(STORAGE_EVENT));
  } catch {
    /* quota or private mode — non-fatal */
  }
}

function subscribe(listener: () => void) {
  if (typeof window === "undefined") return () => undefined;
  const onUpdate = () => {
    cached = null;
    listener();
  };
  window.addEventListener(STORAGE_EVENT, onUpdate);
  // Listen to cross-tab changes too.
  window.addEventListener("storage", onUpdate);
  return () => {
    window.removeEventListener(STORAGE_EVENT, onUpdate);
    window.removeEventListener("storage", onUpdate);
  };
}

const getServerSnapshot = () => EMPTY_PROGRESS;

/**
 * Source of truth for client-side learning progress.
 *
 * Persisted to localStorage via React 19's `useSyncExternalStore` so it stays
 * SSR-safe and avoids cascading effects. When a real auth + persistence layer
 * arrives, swap `read` / `write` to fetch calls — the hook signature stays
 * identical for consumers.
 */
export function useLearningProgress() {
  const progress = useSyncExternalStore(subscribe, read, getServerSnapshot);

  const update = useCallback((patch: Partial<LearningProgress>) => {
    write({ ...read(), ...patch });
  }, []);

  const toggleSaved = useCallback((tutorialId: string) => {
    const prev = read();
    const has = prev.savedTutorialIds.includes(tutorialId);
    write({
      ...prev,
      savedTutorialIds: has
        ? prev.savedTutorialIds.filter((id) => id !== tutorialId)
        : [...prev.savedTutorialIds, tutorialId],
    });
  }, []);

  const markStarted = useCallback((tutorialId: string) => {
    const prev = read();
    if (prev.startedTutorialIds.includes(tutorialId)) {
      write({ ...prev, lastTutorialId: tutorialId });
      return;
    }
    write({
      ...prev,
      startedTutorialIds: [...prev.startedTutorialIds, tutorialId],
      lastTutorialId: tutorialId,
    });
  }, []);

  const markCompleted = useCallback((tutorialId: string) => {
    const prev = read();
    if (prev.completedTutorialIds.includes(tutorialId)) return;
    write({
      ...prev,
      completedTutorialIds: [...prev.completedTutorialIds, tutorialId],
      ratioByTutorial: { ...prev.ratioByTutorial, [tutorialId]: 1 },
    });
  }, []);

  const setRatio = useCallback((tutorialId: string, ratio: number) => {
    const prev = read();
    const clamped = Math.max(0, Math.min(1, ratio));
    write({
      ...prev,
      ratioByTutorial: { ...prev.ratioByTutorial, [tutorialId]: clamped },
    });
  }, []);

  return {
    /** True after the first client commit — use to gate optimistic UI. */
    hydrated: typeof window !== "undefined",
    progress,
    update,
    toggleSaved,
    markStarted,
    markCompleted,
    setRatio,
  };
}
