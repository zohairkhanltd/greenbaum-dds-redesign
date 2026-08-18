"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck, Award, Moon, Sparkles, Star } from "lucide-react";
import { AppVideo } from "@/components/ui/app-video";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-900 text-white">
      {/* Full-width ImageKit Dental Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AppVideo
          src={media.videos.doctorLoop.src}
          poster={media.videos.doctorLoop.poster}
          title={media.videos.doctorLoop.title}
          className="w-full h-full object-cover scale-105 filter brightness-[0.82] contrast-[1.08]"
        />
        {/* Dark Blue Translucent Gradient Overlay for Maximum Contrast & Headline Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-dark/85 to-brand-900/75 backdrop-brightness-[0.88]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-brand-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(#91b5c9_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="max-w-site mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light text-xs font-extrabold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold" />
              <span>Bethesda's Premier Dental &amp; Sleep Studio</span>
            </div>

            {/* H1 Significantly Increased Font Size with Balanced Line Breaks & Zero Mobile Overflow */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5.25rem] font-black text-white tracking-tight leading-[1.04] max-w-full break-words">
              Elevating the art of healthy smiles—
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-white to-accent-gold font-black pt-1 sm:pt-2">
                and restful sleep.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Personalized family, cosmetic, restorative, implant, laser, and dental sleep care in Bethesda, MD. Experience compassionate expertise backed by 25+ years of clinical excellence.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/book"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 p-1.5 pl-6 bg-brand-primary hover:bg-white text-white hover:text-brand-dark font-extrabold text-base rounded-full shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span>Reserve Your Visit</span>
                <span className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-brand-dark text-white group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                </span>
              </Link>

              <a
                href="tel:3018124946"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-base transition-all flex items-center justify-center gap-2.5 shadow-md"
              >
                <Phone className="w-4 h-4 text-brand-light" />
                <span>(301) 812-4946</span>
              </a>
            </div>

            {/* Verified Proof Strip */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-accent-gold" />
                </div>
                <span className="text-xs text-white/90 font-semibold leading-tight">
                  25+ Years Experience
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-accent-gold" />
                </div>
                <span className="text-xs text-white/90 font-semibold leading-tight">
                  Advanced Laser &amp; Implants
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                  <Moon className="w-4 h-4 text-accent-gold" />
                </div>
                <span className="text-xs text-white/90 font-semibold leading-tight">
                  ABDSM Sleep Diplomate
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                </div>
                <span className="text-xs text-white/90 font-semibold leading-tight">
                  Bespoke Care Plans
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Column (5 cols) - Prominent Hero Portrait with Ambient Glass Pedestal */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0 min-h-[500px] sm:min-h-[600px] lg:min-h-[680px] xl:min-h-[740px] -mt-2 lg:-mt-6">
            {/* Ambient Glass Glow Backplate - Larger & Grand */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[540px] sm:h-[540px] lg:w-[620px] lg:h-[620px] xl:w-[680px] xl:h-[680px] rounded-full bg-brand-primary/30 backdrop-blur-2xl border border-white/20 shadow-2xl pointer-events-none -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] xl:w-[600px] xl:h-[600px] rounded-full bg-accent-teal/25 blur-3xl pointer-events-none -z-10" />

            {/* Prominent Transparent Beaming Smile Cutout */}
            <div className="relative w-full max-w-[440px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] h-[440px] sm:h-[560px] lg:h-[640px] xl:h-[720px] flex items-center justify-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)]">
              <AppImage
                src={media.heroImg.src}
                alt={media.heroImg.alt}
                fill
                isLocal
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
                className="object-contain object-center scale-[1.08] transition-transform duration-500 hover:scale-[1.10]"
              />
            </div>

            {/* Floating Glassmorphism Patient Smile & Trust Badge */}
            <div className="absolute -bottom-4 left-0 sm:left-2 right-0 sm:right-2 p-4 sm:p-4.5 rounded-2xl bg-brand-dark/90 backdrop-blur-xl border border-white/25 shadow-2xl flex items-center justify-between gap-3 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-gold/20 border border-accent-gold flex items-center justify-center text-accent-gold shrink-0 font-extrabold text-xs shadow-inner">
                  <Sparkles className="w-4 h-4 text-accent-gold" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-extrabold text-white block leading-snug">
                    Natural Smile Makeovers
                  </span>
                  <span className="text-[11px] text-brand-light font-medium block">
                    Bethesda Family &amp; Cosmetic Dentistry
                  </span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent-gold text-xs font-bold shrink-0">
                <Star className="w-3.5 h-3.5 fill-accent-gold" />
                <span>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
