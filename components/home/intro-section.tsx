"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function IntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-floating border border-line">
              <div className="aspect-[4/5] relative w-full">
                <AppImage
                  src={media.clinical.exam.src}
                  alt="Dr. Greenbaum examining patient in Bethesda clinic"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Callout box */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-brand-900 text-white rounded-xl p-5 shadow-card max-w-xs border border-brand-700/50">
              <span className="text-2xl font-bold block text-brand-100">25+ Years</span>
              <span className="text-xs text-white/80">
                Serving individuals and families in Bethesda, MD with dedicated relationship-based dentistry.
              </span>
            </div>
          </div>

          {/* Right Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              About Our Bethesda Practice
            </span>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink-950 tracking-tight leading-tight">
              Comprehensive care, thoughtfully personal.
            </h2>

            {/* Approved Language Highlight */}
            <blockquote className="p-4 rounded-xl bg-brand-50 border-l-4 border-brand-700 text-brand-900 font-medium text-base sm:text-lg leading-relaxed">
              &ldquo;At Bethesda Center for Family and Cosmetic Dentistry, we combine advanced dental technology with a patient-first approach.&rdquo;
            </blockquote>

            <p className="text-base text-ink-600 leading-relaxed">
              We believe dentistry is built on lasting patient relationships, unhurried appointments, and clear communication. Whether you are bringing your family in for routine cleanings, seeking smile restoration, or searching for obstructive sleep apnea relief, our practice provides evidence-based care tailored specifically to your goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-ink-950">
                <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Unhurried, attentive consultations</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-ink-950">
                <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Advanced diagnostic technology</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-ink-950">
                <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>ABDSM Diplomate sleep expertise</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-ink-950">
                <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Welcoming, local Bethesda practice</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>About Our Practice</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/technology"
                className="px-6 py-3 rounded-xl border border-line text-ink-950 font-semibold text-sm hover:bg-brand-50 transition-colors"
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
