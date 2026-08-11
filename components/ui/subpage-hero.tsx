"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubpageHeroProps {
  category: string;
  title: string;
  description: string;
  breadcrumbText?: string;
}

export function SubpageHero({
  category,
  title,
  description,
  breadcrumbText,
}: SubpageHeroProps) {
  return (
    <section className="bg-gradient-to-b from-brand-900 via-brand-900 to-brand-700 text-white py-12 lg:py-16 border-b border-brand-500/30">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-brand-100/80 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-60" />
          <span className="text-brand-100">{category}</span>
          {breadcrumbText && (
            <>
              <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              <span className="text-white font-semibold">{breadcrumbText}</span>
            </>
          )}
        </nav>

        {/* Header Text */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-700/80 text-brand-100 text-xs font-semibold border border-brand-500/40">
            {category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
