"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function IntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/25 bg-white">
              <div className="aspect-[4/5] relative w-full">
                <AppImage
                  src={media.office.consultation.src}
                  alt="Digital smile design consultation room in Bethesda clinic"
                  fill
                  isLocal
                  className="object-cover"
                />
              </div>
            </div>

            {/* Callout box */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-brand-900 text-white rounded-2xl p-6 shadow-2xl max-w-xs border border-gold-500/30">
              <span className="text-3xl font-serif-luxury gold-gradient-text block font-medium">25+ Years</span>
              <span className="text-xs text-white/80 font-light leading-relaxed pt-1 block">
                Dedicated relationship-based family and cosmetic dentistry in Bethesda, MD.
              </span>
            </div>
          </div>

          {/* Right Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>About Our Bethesda Practice</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-ink-950 tracking-tight leading-[1.18]">
              Comprehensive dental care, <br className="hidden sm:block" />
              <span className="italic gold-gradient-text">thoughtfully personalized.</span>
            </h2>

            {/* Approved Language Highlight */}
            <blockquote className="p-5 rounded-2xl bg-white border-l-4 border-gold-500 text-ink-950 font-serif-luxury italic text-lg sm:text-xl leading-relaxed shadow-sm border border-gold-500/10">
              &ldquo;At Bethesda Center for Family and Cosmetic Dentistry, we combine advanced dental technology with a patient-first approach.&rdquo;
            </blockquote>

            <p className="text-base text-ink-600 font-light leading-relaxed">
              We believe dentistry is built on lasting patient relationships, unhurried appointments, and clear communication. Whether you are bringing your family in for routine cleanings, seeking smile restoration, or searching for obstructive sleep apnea relief, our practice provides evidence-based care tailored specifically to your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 text-sm font-medium text-ink-950">
                <div className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 border border-gold-500/30">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Unhurried, attentive consultations</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-ink-950">
                <div className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 border border-gold-500/30">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Advanced diagnostic technology</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-ink-950">
                <div className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 border border-gold-500/30">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>ABDSM Diplomate sleep expertise</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-ink-950">
                <div className="w-6 h-6 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 border border-gold-500/30">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Welcoming, local Bethesda practice</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-xl gold-shimmer-btn font-medium text-sm shadow-card flex items-center gap-2 group"
              >
                <span className="gold-gradient-text font-semibold">About Our Practice</span>
                <ArrowRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about/technology"
                className="px-6 py-3.5 rounded-xl border border-gold-500/30 bg-white hover:bg-gold-500/5 text-ink-950 font-medium text-sm transition-colors"
              >
                Explore Office Technology
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
