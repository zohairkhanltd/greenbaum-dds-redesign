"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Award, Moon, Sparkles } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-900 via-brand-900 to-[#080E1C] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle Glowing Background Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="max-w-site mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Eyebrow Gold Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Bethesda's Premier Dental &amp; Sleep Studio</span>
            </div>

            {/* H1 Luxury Serif Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white tracking-tight leading-[1.12]">
              Elevating the art of healthy smiles—
              <span className="block italic gold-gradient-text font-serif-luxury font-semibold pt-1">
                and restful sleep.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Personalized family, cosmetic, restorative, implant, laser, and dental sleep care in Bethesda, MD. Experience compassionate expertise backed by 25+ years of clinical excellence.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-xl gold-shimmer-btn font-medium text-base shadow-hover flex items-center justify-center gap-2.5 group"
              >
                <span className="gold-gradient-text font-semibold">Reserve Your Visit</span>
                <ArrowRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:3018124946"
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-base transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>(301) 812-4946</span>
              </a>
            </div>

            {/* Verified Proof Strip */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-xs text-white/80 font-medium leading-tight">
                  25+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-xs text-white/80 font-medium leading-tight">
                  Advanced Laser &amp; Implants
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <Moon className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-xs text-white/80 font-medium leading-tight">
                  ABDSM Sleep Diplomate
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-xs text-white/80 font-medium leading-tight">
                  Bespoke Treatment Plans
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Elegant Metallic Gold Frame Halo */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-gold-500/40 via-gold-400/20 to-transparent rounded-3xl blur-sm pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 bg-brand-900">
              {/* Doctor Consultation authentic photographic frame */}
              <div className="relative aspect-[4/3] w-full">
                <AppImage
                  src={media.customHero.src}
                  alt={media.customHero.alt}
                  fill
                  isLocal
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent" />

                {/* Floating Doctor Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel-dark border border-gold-500/30 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400 relative shrink-0 shadow-lg">
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
                    <span className="text-sm font-semibold text-white block">
                      Bernard L. Greenbaum, DDS &amp; Team
                    </span>
                    <span className="text-xs text-gold-400/90 block font-light">
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
