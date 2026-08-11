"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Moon } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function FeaturedExpertise() {
  return (
    <section className="py-16 lg:py-24 bg-brand-50/50">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Specialized Clinical Focus
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink-950 mt-1 tracking-tight">
            Advanced dental care under one roof.
          </h2>
          <p className="text-base text-ink-600 mt-3">
            From subtle smile enhancements to comprehensive full-mouth restorations and specialized dental sleep medicine.
          </p>
        </div>

        {/* Panel 1: Cosmetic & Restorative Dentistry */}
        <div className="bg-white rounded-3xl overflow-hidden border border-line shadow-card grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Cosmetic &amp; Restorative Dentistry</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-ink-950">
              Artfully designed porcelain veneers, crowns &amp; smile makeovers.
            </h3>
            <p className="text-sm lg:text-base text-ink-600 leading-relaxed">
              We focus on natural, durable aesthetic outcomes. Whether repairing worn teeth, placing custom porcelain crowns, or correcting misalignment with Invisalign, every detail is tailored to your unique facial features and functional bite.
            </p>
            <div className="pt-2">
              <Link
                href="/services/cosmetic-dentistry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-500 text-white text-sm font-semibold transition-colors"
              >
                <span>Explore Cosmetic Dentistry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 lg:h-full relative min-h-[320px]">
            <AppImage
              src={media.lifestyle.beamingWoman.src}
              alt={media.lifestyle.beamingWoman.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Panel 2: Dental Implants & Advanced Laser Care */}
        <div className="bg-white rounded-3xl overflow-hidden border border-line shadow-card grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-72 lg:h-full relative min-h-[320px] order-2 lg:order-1">
            <AppImage
              src={media.clinical.microscope.src}
              alt={media.clinical.microscope.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold">
              <Zap className="w-4 h-4" />
              <span>Implants &amp; Laser Dentistry</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-ink-950">
              Less-invasive laser treatments &amp; permanent dental implant solutions.
            </h3>
            <p className="text-sm lg:text-base text-ink-600 leading-relaxed">
              Using modern dental laser technology and 3D precision diagnostics, we deliver comfortable periodontal care and long-lasting implant tooth replacements that function just like natural teeth.
            </p>
            <div className="pt-2">
              <Link
                href="/services/dental-implants"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-500 text-white text-sm font-semibold transition-colors"
              >
                <span>Explore Dental Implants</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Panel 3: Sleep Apnea & TMJ Therapy (Reversed Deep Navy Layout) */}
        <div className="bg-brand-900 text-white rounded-3xl overflow-hidden border border-brand-700/60 shadow-floating grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-700 text-brand-100 text-xs font-semibold border border-brand-500/40">
              <Moon className="w-4 h-4" />
              <span>Dental Sleep Medicine &amp; TMJ Therapy</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Quiet snoring, sleep deeper &amp; relieve persistent jaw pain.
            </h3>
            <p className="text-sm lg:text-base text-white/80 leading-relaxed">
              Dr. Greenbaum is a Diplomate of the American Board of Dental Sleep Medicine, offering non-invasive, custom oral-appliance therapies (including SomnoDent&reg; and TAP&reg;) as comfortable CPAP alternatives for obstructive sleep apnea.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/services/sleep-apnea-snoring"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-900 hover:bg-brand-50 text-sm font-bold transition-colors"
              >
                <span>Sleep Apnea Care</span>
                <ArrowRight className="w-4 h-4 text-brand-700" />
              </Link>
              <Link
                href="/services/tmj-therapy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <span>TMJ Jaw Therapy</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 lg:h-full relative min-h-[320px]">
            <AppImage
              src={media.lifestyle.manWhiteSweatshirt.src}
              alt={media.lifestyle.manWhiteSweatshirt.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
