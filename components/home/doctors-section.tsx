"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Moon, Sparkles } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function DoctorsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Meet Our Doctors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-ink-950 tracking-tight">
            Experienced clinical leadership <span className="italic gold-gradient-text">in Bethesda.</span>
          </h2>
          <p className="text-base text-ink-600 font-light">
            Dedicated clinicians committed to gentle, evidence-based dentistry and continuing clinical education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Dr. Greenbaum Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gold-500/25 shadow-card hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-36 h-48 rounded-2xl overflow-hidden border-2 border-gold-500 shrink-0 shadow-lg group-hover:scale-[1.02] transition-transform">
                  <AppImage
                    src={media.doctors.drGreenbaum.src}
                    alt={media.doctors.drGreenbaum.alt}
                    fill
                    isLocal
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-600 text-[11px] font-medium uppercase tracking-wider">
                    25+ Years Bethesda Practice
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-ink-950">
                    Bernard L. Greenbaum, DDS
                  </h3>
                  <p className="text-xs font-semibold text-gold-600">
                    Diplomate, American Board of Dental Sleep Medicine
                  </p>
                  <p className="text-xs text-ink-600 font-light">
                    Georgetown University School of Dentistry &middot; AGD Fellow
                  </p>
                </div>
              </div>

              <p className="text-sm text-ink-600 font-light leading-relaxed">
                With more than 25 years serving Bethesda, Dr. Greenbaum combines comprehensive general and cosmetic dentistry with specialized dental sleep medicine, helping patients breathe easier, sleep deeper, and protect their long-term oral health.
              </p>

              <div className="space-y-2.5 text-xs text-ink-950 pt-4 border-t border-gold-500/15">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-light">Georgetown DDS &amp; LVI Advanced Dental Studies</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Moon className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-light">Diplomate, ABDSM (SomnoDent&reg; &amp; TAP&reg; Oral Appliance Specialist)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-light">Fellow, Academy of General Dentistry (FAGD)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gold-500/15">
              <Link
                href="/about/dr-greenbaum"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors group/link"
              >
                <span>Read Biography &amp; Clinical Credentials</span>
                <ArrowRight className="w-4 h-4 text-gold-500 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Dr. Luong Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gold-500/25 shadow-card hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-36 h-48 rounded-2xl overflow-hidden border-2 border-gold-500 shrink-0 shadow-lg group-hover:scale-[1.02] transition-transform">
                  <AppImage
                    src={media.doctors.drLuong.src}
                    alt={media.doctors.drLuong.alt}
                    fill
                    isLocal
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-600 text-[11px] font-medium uppercase tracking-wider">
                    Invisalign&reg; Certified Provider
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-luxury font-medium text-ink-950">
                    Nhu Thuy H. Luong, DDS
                  </h3>
                  <p className="text-xs font-semibold text-gold-600">
                    Omicron Kappa Upsilon National Dental Honor Society
                  </p>
                  <p className="text-xs text-ink-600 font-light">
                    Howard University College of Dentistry &middot; LECOM AEGD Residency
                  </p>
                </div>
              </div>

              <p className="text-sm text-ink-600 font-light leading-relaxed">
                Dr. Luong completed her DDS at Howard University with OKU honors and advanced residency training at LECOM. She delivers attentive, compassionate preventive, cosmetic, and clear aligner therapy.
              </p>

              <div className="space-y-2.5 text-xs text-ink-950 pt-4 border-t border-gold-500/15">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-light">Howard University DDS &amp; LECOM AEGD Residency</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-light">BS UCF, MS Barry University &amp; OKU Honor Society</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="font-light">Invisalign&reg; Certified Provider</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gold-500/15">
              <Link
                href="/about/dr-luong"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors group/link"
              >
                <span>Read Biography &amp; Clinical Credentials</span>
                <ArrowRight className="w-4 h-4 text-gold-500 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
