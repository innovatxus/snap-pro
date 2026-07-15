"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface LazyVideoProps {
  src: string;
  poster?: string;
  /** sizes attribute forwarded to the poster <Image> — set this to match the card's display width */
  posterSizes?: string;
  /** Set true for cards that are above the fold so the poster loads eagerly */
  posterPriority?: boolean;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
  /** Extra styles merged onto the <video> element itself (e.g. a zoom transform). */
  videoStyle?: React.CSSProperties;
}

/**
 * LazyVideo component with image fallback
 *
 * - Shows image (poster) immediately as fallback
 * - Lazy loads the video when it enters viewport
 * - Smooth transition from image to video
 * - Respects prefers-reduced-motion
 */
export default function LazyVideo({
  src,
  poster,
  posterSizes = "100vw",
  posterPriority = false,
  alt,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
  videoStyle,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsManualPlay, setNeedsManualPlay] = useState(false);
  const [sourcesFailed, setSourcesFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );
  const webmSrc = src.replace(/\.mp4$/i, ".webm");

  // Track prefers-reduced-motion changes at runtime
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Stay subscribed for the component's lifetime (not just until first
  // load) so playback can pause again once the card scrolls out of view.
  // Once it's been out of view for a grace period, unmount the <video>
  // entirely (not just pause it) — a long page can have dozens of these
  // cards, and a paused-but-still-mounted <video> keeps its decoder/GPU
  // buffer allocated. On a real mobile device that adds up across a full
  // scroll and can crash the renderer (seen as a black screen), even though
  // desktop/emulated testing has enough memory headroom to never show it.
  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;
    let unloadTimer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          if (unloadTimer) {
            clearTimeout(unloadTimer);
            unloadTimer = null;
          }
          setHasLoaded(true);
        } else {
          unloadTimer = setTimeout(() => {
            setHasLoaded(false);
            setIsPlaying(false);
            setNeedsManualPlay(false);
            setSourcesFailed(false);
          }, 1000);
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(containerRef.current);
    return () => {
      if (unloadTimer) clearTimeout(unloadTimer);
      observer.disconnect();
    };
  }, [reducedMotion]);

  // Play while in view, pause while scrolled away.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasLoaded || reducedMotion || !autoPlay) return;

    if (!isInView) {
      video.pause();
      return;
    }

    const playVideo = () => {
      video.play().catch(() => {
        // Autoplay blocked — surface a manual play affordance instead of
        // leaving the card permanently stuck on the poster with no escape.
        setNeedsManualPlay(true);
      });
    };

    if (video.readyState >= 1) {
      playVideo();
    }

    video.addEventListener("canplay", playVideo, { once: true });
    return () => video.removeEventListener("canplay", playVideo);
  }, [hasLoaded, isInView, reducedMotion, autoPlay]);

  // If playback hasn't actually started a few seconds after the video
  // became loadable and in-view, offer a manual play affordance — covers
  // autoplay blocks that resolve neither play() nor canplay in time.
  useEffect(() => {
    if (!hasLoaded || !isInView || reducedMotion || isPlaying) return;
    const timer = setTimeout(() => setNeedsManualPlay(true), 4000);
    return () => clearTimeout(timer);
  }, [hasLoaded, isInView, reducedMotion, isPlaying]);

  // Track playing state for opacity transition
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const handlePlay = () => {
      setIsPlaying(true);
      setNeedsManualPlay(false);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);
    const handleError = () => setSourcesFailed(true);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
    };
  }, [hasLoaded]);

  const handleManualPlay = () => {
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div
      ref={containerRef}
      className={`w-full h-full overflow-hidden ${className}`}
    >
      {/* Image fallback — always present, visible until video plays */}
      {poster && (
        <Image
          src={poster}
          alt={alt}
          fill
          sizes={posterSizes}
          className='absolute inset-0 w-full h-full object-cover'
          style={{
            opacity: isPlaying ? 0 : 1,
            transition: "opacity 0.3s ease-out",
          }}
          priority={posterPriority}
        />
      )}

      {/* Video — lazy loaded only when visible. WebM/VP9 source comes first:
          on browsers/devices where the H.264 hardware decoder misbehaves for
          a given encode, VP9 typically takes an entirely separate (often
          software) decode path, so listing it first gives playback a second,
          independent way to succeed before falling back to the MP4. */}
      {hasLoaded && !reducedMotion && !sourcesFailed && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload={preload}
          disablePictureInPicture
          disableRemotePlayback
          className='absolute inset-0 w-full h-full object-cover'
          style={{
            ...videoStyle,
            opacity: isPlaying ? 1 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <source src={webmSrc} type='video/webm' />
          <source src={src} type='video/mp4' />
        </video>
      )}

      {/* Manual play affordance — surfaces only if autoplay genuinely
          never resolves; a direct click is a user gesture that always
          overrides any autoplay policy. */}
      {needsManualPlay && !isPlaying && !sourcesFailed && (
        <button
          type='button'
          aria-label={`Play ${alt}`}
          onClick={handleManualPlay}
          className='absolute inset-0 flex items-center justify-center'
          style={{ zIndex: 2, background: "rgba(0,0,0,0.18)", border: "none", cursor: "pointer" }}
        >
          <span
            aria-hidden='true'
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(10,10,10,0.72)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <path d='M4 2.5L13 8L4 13.5V2.5Z' fill='white' />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
