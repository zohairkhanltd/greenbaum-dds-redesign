"use client";

import React, { useEffect, useState } from "react";

interface AppVideoProps {
  src: string;
  poster: string;
  className?: string;
  title?: string;
}

export function AppVideo({ src, poster, className = "", title = "Video background" }: AppVideoProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/karaji35oxm";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const videoUrl = src.startsWith("http") ? src : `${endpoint}${src.startsWith("/") ? "" : "/"}${src}`;
  const posterUrl = poster.startsWith("http") ? poster : `${endpoint}${poster.startsWith("/") ? "" : "/"}${poster}`;

  if (prefersReducedMotion) {
    return (
      <img
        src={posterUrl}
        alt={title}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={posterUrl}
      title={title}
      className={`w-full h-full object-cover ${className}`}
    >
      <source src={videoUrl} type="video/mp4" />
      <img src={posterUrl} alt={title} className="w-full h-full object-cover" />
    </video>
  );
}
