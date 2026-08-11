"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Moon } from "lucide-react";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export function DoctorsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Meet Our Doctors
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink-950 mt-1 tracking-tight">
            Experienced clinical leadership in Bethesda.
          </h2>
          <p className="text-base text-ink-600 mt-2">
            Dedicated clinicians committed to gentle, evidence-based dentistry and continuing education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dr. Greenbaum Card */}
          <div className="bg-brand-50/60 rounded-3xl p-8 border border-line shadow-card hover:border-brand-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-36 h-44 rounded-2xl overflow-hidden border-2 border-brand-700 shrink-0 shadow-md">
                  <AppImage
                    src={media.doctors.drGreenbaum.src}
                    alt={media.doctors.drGreenbaum.alt}
                    fill
                    isLocal
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-700 text-white text-[11px] font-semibold">
                    25+ Years Bethesda Practice
                  </span>
                  <h3 className="text-2xl font-bold text-ink-950">
                    Bernard L. Greenbaum, DDS
                  </h3>
                  <p className="text-xs font-semibold text-brand-700">
                    Diplomate, American Board of Dental Sleep Medicine
                  </p>
                  <p className="text-xs text-ink-600">
                    Georgetown University School of Dentistry &middot; AGD Fellow
                  </p>
                </div>
              </div>

              <p className="text-sm text-ink-600 leading-relaxed">
                With more than 25 years serving Bethesda, Dr. Greenbaum combines comprehensive general and cosmetic dentistry with specialized dental sleep medicine, helping patients breathe easier, sleep deeper, and protect their oral health.
              </p>

              <div className="space-y-2 text-xs text-ink-950 pt-2 border-t border-line/60">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>Georgetown DDS &amp; LVI Advanced Dental Studies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Moon className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>Diplomate, ABDSM (SomnoDent&reg; &amp; TAP&reg; Oral Appliance Specialist)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>Fellow, Academy of General Dentistry (FAGD)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-line/60">
              <Link
                href="/about/dr-greenbaum"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-500 transition-colors"
              >
                <span>Read Full Biography &amp; Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Dr. Luong Card */}
          <div className="bg-brand-50/60 rounded-3xl p-8 border border-line shadow-card hover:border-brand-500/40 transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-36 h-44 rounded-2xl overflow-hidden border-2 border-brand-700 shrink-0 shadow-md">
                  <AppImage
                    src={media.doctors.drLuong.src}
                    alt={media.doctors.drLuong.alt}
                    fill
                    isLocal
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-brand-700 text-white text-[11px] font-semibold">
                    Invisalign&reg; Certified Provider
                  </span>
                  <h3 className="text-2xl font-bold text-ink-950">
                    Nhu Thuy H. Luong, DDS
                  </h3>
                  <p className="text-xs font-semibold text-brand-700">
                    Omicron Kappa Upsilon National Dental Honor Society
                  </p>
                  <p className="text-xs text-ink-600">
                    Howard University College of Dentistry &middot; LECOM AEGD Residency
                  </p>
                </div>
              </div>

              <p className="text-sm text-ink-600 leading-relaxed">
                Dr. Luong completed her DDS at Howard University with OKU honors and advanced residency training at LECOM. She delivers attentive, compassionate preventive, cosmetic, and clear aligner therapy.
              </p>

              <div className="space-y-2 text-xs text-ink-950 pt-2 border-t border-line/60">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>Howard University DDS &amp; LECOM AEGD Residency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>BS UCF, MS Barry University &amp; OKU Honor Society</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-700 shrink-0" />
                  <span>Invisalign&reg; Certified Provider</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-line/60">
              <Link
                href="/about/dr-luong"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-500 transition-colors"
              >
                <span>Read Full Biography &amp; Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
