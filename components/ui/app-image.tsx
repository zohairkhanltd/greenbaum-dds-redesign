"use client";

import React from "react";
import NextImage from "next/image";
import { Image as IKImage } from "@imagekit/next";

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  isLocal?: boolean;
  quality?: number;
}

export function AppImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  isLocal = false,
  quality = 85,
}: AppImageProps) {
  // Local asset or relative path starting with /brand or /images
  if (isLocal || src.startsWith("/brand") || src.startsWith("/images")) {
    if (fill) {
      return (
        <NextImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={className}
          priority={priority}
          quality={quality}
        />
      );
    }
    return (
      <NextImage
        src={src}
        alt={alt}
        width={width || 600}
        height={height || 400}
        sizes={sizes}
        className={className}
        priority={priority}
        quality={quality}
      />
    );
  }

  // Remote ImageKit asset
  if (fill) {
    return (
      <div className={`relative w-full h-full ${className || ""}`}>
        <IKImage
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          transformation={[{ quality, format: "auto" }]}
        />
      </div>
    );
  }

  return (
    <IKImage
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      sizes={sizes}
      className={className}
      priority={priority}
      transformation={[{ width: width || 800, quality, format: "auto" }]}
    />
  );
}
