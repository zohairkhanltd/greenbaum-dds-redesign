"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Moon } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function FeaturedExpertise() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Specialized Clinical Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-ink-950 tracking-tight">
            Advanced dental care <span className="italic gold-gradient-text">under one roof.</span>
          </h2>
          <p className="text-base text-ink-600 font-light">
            From subtle smile enhancements to comprehensive restorations and specialized dental sleep medicine.
          </p>
        </div>

        {/* Panel 1: Cosmetic & Restorative Dentistry */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gold-500/20 shadow-card grid grid-cols-1 lg:grid-cols-12 items-center group hover:border-gold-500/40 transition-all duration-300">
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Cosmetic &amp; Restorative Dentistry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-ink-950 leading-snug">
              Artfully designed porcelain veneers, crowns &amp; smile makeovers.
            </h3>
            <p className="text-sm lg:text-base text-ink-600 font-light leading-relaxed">
              We focus on natural, durable aesthetic outcomes. Whether repairing worn teeth, placing custom porcelain crowns, or correcting misalignment with Invisalign, every detail is tailored to your unique facial features and functional bite.
            </p>
            <div className="pt-2">
              <Link
                href="/services/cosmetic-dentistry"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl gold-shimmer-btn text-sm font-medium shadow-sm group/btn"
              >
                <span className="text-white font-bold">Explore Cosmetic Dentistry</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 lg:h-full relative min-h-[360px]">
            <AppImage
              src={media.customCosmetic.src}
              alt={media.customCosmetic.alt}
              fill
              isLocal
              className="object-cover"
            />
          </div>
        </div>

        {/* Panel 2: Dental Implants & Advanced Laser Care */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gold-500/20 shadow-card grid grid-cols-1 lg:grid-cols-12 items-center group hover:border-gold-500/40 transition-all duration-300">
          <div className="lg:col-span-6 h-72 lg:h-full relative min-h-[360px] order-2 lg:order-1">
            <AppImage
              src={media.clinical.microscope.src}
              alt={media.clinical.microscope.alt}
              fill
              isLocal
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-medium">
              <Zap className="w-3.5 h-3.5 text-gold-500" />
              <span>Implants &amp; Laser Dentistry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-ink-950 leading-snug">
              Less-invasive laser treatments &amp; permanent dental implant solutions.
            </h3>
            <p className="text-sm lg:text-base text-ink-600 font-light leading-relaxed">
              Using modern dental laser technology and high-precision diagnostics, we deliver comfortable periodontal care and long-lasting implant tooth replacements that function just like natural teeth.
            </p>
            <div className="pt-2">
              <Link
                href="/services/dental-implants"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl gold-shimmer-btn text-sm font-medium shadow-sm group/btn"
              >
                <span className="text-white font-bold">Explore Dental Implants</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Panel 3: Sleep Apnea & TMJ Therapy (Deep Obsidian Slate Layout) */}
        <div className="bg-brand-900 text-white rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 lg:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 text-gold-400 text-xs font-medium border border-gold-500/30">
              <Moon className="w-3.5 h-3.5 text-gold-400" />
              <span>Dental Sleep Medicine &amp; TMJ Therapy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-white tracking-tight leading-snug">
              Quiet snoring, sleep deeper &amp; <span className="italic gold-gradient-text">relieve jaw discomfort.</span>
            </h3>
            <p className="text-sm lg:text-base text-white/80 font-light leading-relaxed">
              Dr. Greenbaum is a Diplomate of the American Board of Dental Sleep Medicine, offering non-invasive, custom oral-appliance therapies (including SomnoDent&reg; and TAP&reg;) as comfortable CPAP alternatives for obstructive sleep apnea.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/services/sleep-apnea-snoring"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-900 hover:bg-gold-50 text-sm font-semibold transition-colors"
              >
                <span>Sleep Apnea Care</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </Link>
              <Link
                href="/services/tmj-therapy"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <span>TMJ Jaw Therapy</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 h-72 lg:h-full relative min-h-[360px]">
            <AppImage
              src={media.clinical.femaleDentistCare.src}
              alt={media.clinical.femaleDentistCare.alt}
              fill
              isLocal
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
