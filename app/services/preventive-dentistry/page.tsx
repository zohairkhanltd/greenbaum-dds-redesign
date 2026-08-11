import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Preventive & Family Dentistry Bethesda MD | Cleanings & Exams",
  description:
    "Comprehensive preventive dentistry in Bethesda, MD. Professional cleanings, digital exams, oral cancer screenings, fluoride & sealant care.",
};

export default function PreventiveDentistryPage() {
  return (
    <>
      <SubpageHero
        category="Dental Services"
        breadcrumbText="Preventive Dentistry"
        title="Preventive & Family Dentistry in Bethesda, MD"
        description="Protect your oral health, prevent tooth decay, and catch dental issues early with gentle hygiene cleanings and comprehensive exams."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Foundation for Healthy Smiles
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Gentle cleanings, thorough screenings &amp; long-term prevention.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                Routine preventive care is the single most effective way to preserve your natural teeth and avoid costly restorative treatments down the road. Our experienced hygienists and doctors provide meticulous cleanings, gentle gum evaluations, digital X-rays, and comprehensive oral cancer screenings.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Professional Dental Cleanings (Prophylaxis)</strong>
                    <span className="text-xs text-ink-600">Removes stubborn tartar, plaque buildup, and surface stains to keep gums healthy.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Comprehensive Examinations &amp; Low-Radiation X-Rays</strong>
                    <span className="text-xs text-ink-600">Detects hidden cavities, bone loss, and structural changes before symptoms arise.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Oral Cancer &amp; Periodontal Screenings</strong>
                    <span className="text-xs text-ink-600">Early detection evaluation of soft tissues, tongue, and gum pocket depths.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating aspect-[4/3] relative">
                <AppImage
                  src={media.clinical.checkup.src}
                  alt={media.clinical.checkup.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Due for your routine cleaning and exam?</h3>
              <p className="text-sm text-white/80">Schedule your appointment with Dr. Greenbaum or Dr. Luong today.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Preventive Exam</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
