"use client";

import { useMemo } from "react";
import { useLearningProgress } from "../hooks/useLearningProgress";
import type { Tutorial } from "../types";
import { Icon } from "./Icon";
import { TutorialCard } from "./TutorialCard";

interface ProgressTrackerProps {
  tutorials: Tutorial[];
}

export function ProgressTracker({ tutorials }: ProgressTrackerProps) {
  const { progress } = useLearningProgress();

  const lastTutorial = useMemo(() => {
    if (!progress.lastTutorialId) return undefined;
    return tutorials.find((t) => t.id === progress.lastTutorialId);
  }, [progress.lastTutorialId, tutorials]);

  const savedTutorials = useMemo(
    () => tutorials.filter((t) => progress.savedTutorialIds.includes(t.id)),
    [progress.savedTutorialIds, tutorials],
  );

  const completedCount = progress.completedTutorialIds.length;
  const startedCount = progress.startedTutorialIds.length;
  const totalCount = tutorials.length;
  const completionPercent = totalCount
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  // useSyncExternalStore in the underlying hook keeps the server snapshot
  // coherent with the first client render, so no extra hydration gate is
  // needed — initial values are simply zero, then update post-hydration.
  const tiles = [
    { icon: "check" as const, label: "Completed", value: completedCount },
    {
      icon: "play" as const,
      label: "In progress",
      value: Math.max(0, startedCount - completedCount),
    },
    {
      icon: "clock" as const,
      label: "Minutes watched",
      value: progress.totalMinutesWatched,
    },
    { icon: "flame" as const, label: "Day streak", value: progress.streakDays },
    {
      icon: "trophy" as const,
      label: "Completion",
      value: `${completionPercent}%`,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {/* Stat tiles */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
        {tiles.map((tile) => (
          <div
            key={tile.label}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              padding: "16px 18px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              aria-hidden='true'
              style={{
                width: 30,
                height: 30,
                borderRadius: "var(--r-sm)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--line)",
                color: "var(--blue)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name={tile.icon} size={14} />
            </span>
            <span
              className='font-fraunces'
              style={{
                fontSize: 28,
                fontWeight: 300,
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              {tile.value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--mute)",
              }}
            >
              {tile.label}
            </span>
          </div>
        ))}
      </div>

      {/* Continue learning */}
      <div id='continue-learning'>
        <h3
          className='font-fraunces'
          style={{
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--ink)",
            marginBottom: 14,
            letterSpacing: "-0.01em",
          }}
        >
          Continue learning
        </h3>
        {lastTutorial ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            <TutorialCard
              tutorial={lastTutorial}
              progressRatio={progress.ratioByTutorial[lastTutorial.id] ?? 0}
              emphasis='featured'
            />
          </div>
        ) : (
          <EmptyState
            title='No active session yet'
            body="Pick any tutorial to start. We'll keep your spot here so you can resume in a tap."
          />
        )}
      </div>

      {/* Saved */}
      <div>
        <h3
          className='font-fraunces'
          style={{
            fontSize: 22,
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--ink)",
            marginBottom: 14,
            letterSpacing: "-0.01em",
          }}
        >
          Saved for later
        </h3>
        {savedTutorials.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 12,
            }}
          >
            {savedTutorials.map((t) => (
              <TutorialCard key={t.id} tutorial={t} />
            ))}
          </div>
        ) : (
          <EmptyState
            title='Build a watch list'
            body='Bookmark tutorials with the save icon to come back to them later.'
          />
        )}
      </div>
    </div>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px dashed var(--line)",
        borderRadius: "var(--r-lg)",
        padding: "22px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <span
        className='font-fraunces'
        style={{
          fontSize: 18,
          fontWeight: 400,
          color: "var(--ink)",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </span>
      <span
        style={{
          fontSize: 13,
          color: "var(--mute)",
          lineHeight: 1.55,
          maxWidth: 480,
        }}
      >
        {body}
      </span>
    </div>
  );
}
