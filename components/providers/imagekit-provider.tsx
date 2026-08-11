"use client";

import React from "react";
import { ImageKitProvider } from "@imagekit/next";

export function AppImageKitProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  if (!urlEndpoint) {
    return <>{children}</>;
  }

  return (
    <ImageKitProvider urlEndpoint={urlEndpoint}>
      {children}
    </ImageKitProvider>
  );
}
