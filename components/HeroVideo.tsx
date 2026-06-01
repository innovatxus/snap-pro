"use client";

import { useRef, useEffect, useState } from "react";

interface HeroVideoProps {
  src: string;
}

/**
 * Full-screen background video with:
 * - autoplay / loop / muted / playsInline
 * - graceful autoplay-blocked fallback
 * - prefers-reduced-motion support (pauses + hides video)
 * - smooth opacity fade-in on first load
 * - subtle CSS zoom animation (handled via .hero-video class in globals.css)
 */
export default function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced-motion on mount (SSR-safe)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const video = videoRef.current;
    if (!video) return;

    // Pause immediately for reduced-motion users
    if (mq.matches) {
      video.pause();
      return;
    }

    // Attempt autoplay — browsers may block without user gesture
    const tryPlay = () =>
      video.play().catch(() => {
        /* Autoplay blocked: static poster / first frame shown — graceful */
      });

    // Fire immediately if metadata already decoded
    if (video.readyState >= 1) {
      tryPlay();
    }

    const onCanPlay = () => {
      tryPlay();
    };
    video.addEventListener("canplay", onCanPlay, { once: true });

    // Reveal video once first frame is ready to avoid flash
    const onLoadedData = () => setIsVisible(true);
    video.addEventListener("loadeddata", onLoadedData, { once: true });
    // Fallback: reveal after a small timeout even if event misfires
    const fallbackTimer = setTimeout(() => setIsVisible(true), 800);

    // Respond to reduced-motion changes at runtime
    const handleMQChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        video.pause();
      } else {
        tryPlay();
      }
    };
    mq.addEventListener("change", handleMQChange);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onLoadedData);
      mq.removeEventListener("change", handleMQChange);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Permanent dark fallback — visible immediately, fades behind the video */}
      <div className="absolute inset-0 hero-fallback-bg z-0" />

      {/* Video — hidden for reduced-motion users */}
      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hero-video absolute inset-0 w-full h-full object-cover object-center z-[1]"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.6s ease",
          }}
          /* Poster is the fallback visual before the video decodes */
          poster="/assets/video/5-poster.jpg"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
