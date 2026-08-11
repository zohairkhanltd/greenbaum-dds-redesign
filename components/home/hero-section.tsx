"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Award, Moon } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { AppVideo } from "@/components/ui/app-video";
import { media } from "@/lib/media";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pt-8 pb-16 lg:py-20">
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-100/40 -skew-x-12 transform translate-x-32 pointer-events-none" />

      <div className="max-w-site mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-700/20 text-brand-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-700 animate-pulse" />
              <span>Modern Dentistry in Bethesda, Maryland</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-950 tracking-tight leading-[1.15]">
              Advanced care for healthier smiles—
              <span className="block text-brand-700">and better sleep.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-ink-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Comprehensive family, cosmetic, restorative, implant, laser, and dental sleep care from an experienced Bethesda team that takes time to understand you.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-bold text-base shadow-hover transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:3018124946"
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-line bg-white hover:bg-brand-50 text-ink-950 font-semibold text-base transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-700" />
                <span>(301) 812-4946</span>
              </a>
            </div>

            {/* Verified Proof Strip */}
            <div className="pt-6 border-t border-line/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-700 shrink-0" />
                <span className="text-xs font-semibold text-ink-950">
                  25+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-700 shrink-0" />
                <span className="text-xs font-semibold text-ink-950">
                  Advanced Laser & Implants
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-brand-700 shrink-0" />
                <span className="text-xs font-semibold text-ink-950">
                  ABDSM Sleep Diplomate
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0" />
                <span className="text-xs font-semibold text-ink-950">
                  Personalized Planning
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Offset Royal Blue Architectural Frame */}
            <div className="absolute -inset-4 bg-brand-700/10 rounded-3xl transform rotate-2 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-floating border-4 border-white bg-white">
              {/* Doctor Consultation authentic photographic frame */}
              <div className="relative aspect-[4/3] w-full">
                <AppImage
                  src={media.clinical.microscope.src}
                  alt={media.clinical.microscope.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
                
                {/* Floating Doctor Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-card border border-line flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-700 relative shrink-0">
                    <AppImage
                      src={media.doctors.drGreenbaum.src}
                      alt="Dr. Bernard Greenbaum"
                      width={100}
                      height={100}
                      isLocal
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-900 block">
                      Bernard L. Greenbaum, DDS &amp; Team
                    </span>
                    <span className="text-[11px] text-ink-600 block">
                      Georgetown DDS &middot; Diplomate ABDSM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
