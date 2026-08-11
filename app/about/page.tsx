import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Heart, ShieldCheck } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "About Our Practice | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Learn about our patient-first philosophy, 25+ years of Bethesda history, advanced dental technology, and experienced clinical team.",
};

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        category="Our Practice"
        title="Patient-First Dentistry in Bethesda, MD"
        description="Combining advanced technology with unhurried, personalized dental care for individuals and families."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          {/* Main Story Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Our Foundation &amp; Values
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Built on trust, education &amp; clinical excellence.
              </h2>
              
              <blockquote className="p-4 rounded-xl bg-brand-50 border-l-4 border-brand-700 text-brand-900 font-medium text-lg leading-relaxed">
                &ldquo;At Bethesda Center for Family and Cosmetic Dentistry, we combine advanced dental technology with a patient-first approach.&rdquo;
              </blockquote>

              <p className="text-base text-ink-600 leading-relaxed">
                For over 25 years, Dr. Bernard L. Greenbaum and our dedicated Bethesda team have provided comprehensive family, cosmetic, restorative, implant, and dental sleep care. We believe exceptional oral health begins with listening carefully, educating our patients, and delivering evidence-based treatment in a comfortable, welcoming environment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <Heart className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-ink-950">Patient-Centered Care</h3>
                    <p className="text-xs text-ink-600">Unhurried visits focused on your comfort and long-term health goals.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-sm text-ink-950">Advanced Education</h3>
                    <p className="text-xs text-ink-600">Continuous training in laser dentistry, implants, and sleep medicine.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating relative aspect-[4/3]">
                <AppImage
                  src={media.clinical.exam.src}
                  alt="Bethesda Center clinical team in office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick Doctor Preview Section */}
          <div className="bg-brand-50/60 rounded-3xl p-8 lg:p-12 border border-line space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-ink-950">
                Meet Our Clinical Leadership
              </h2>
              <p className="text-sm text-ink-600">
                Experienced dentists committed to your smile and overall health.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-24 rounded-xl overflow-hidden relative border border-brand-700 shrink-0">
                    <AppImage
                      src={media.doctors.drGreenbaum.src}
                      alt="Dr. Bernard Greenbaum"
                      fill
                      isLocal
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-ink-950">Bernard L. Greenbaum, DDS</h3>
                    <p className="text-xs font-semibold text-brand-700">Diplomate, ABDSM &middot; FAGD</p>
                    <p className="text-xs text-ink-600">25+ Years Bethesda Practice</p>
                  </div>
                </div>
                <Link
                  href="/about/dr-greenbaum"
                  className="text-xs font-bold text-brand-700 hover:text-brand-500 flex items-center gap-1 mt-2"
                >
                  View Dr. Greenbaum's Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-24 rounded-xl overflow-hidden relative border border-brand-700 shrink-0">
                    <AppImage
                      src={media.doctors.drLuong.src}
                      alt="Dr. Nhu Thuy Luong"
                      fill
                      isLocal
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-ink-950">Nhu Thuy H. Luong, DDS</h3>
                    <p className="text-xs font-semibold text-brand-700">OKU Honor Society &middot; AEGD</p>
                    <p className="text-xs text-ink-600">Invisalign® Certified Provider</p>
                  </div>
                </div>
                <Link
                  href="/about/dr-luong"
                  className="text-xs font-bold text-brand-700 hover:text-brand-500 flex items-center gap-1 mt-2"
                >
                  View Dr. Luong's Profile <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
