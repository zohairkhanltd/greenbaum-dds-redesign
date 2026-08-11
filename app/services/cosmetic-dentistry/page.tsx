import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Award } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry & Veneers Bethesda MD | Smile Makeovers",
  description:
    "Transform your smile with porcelain veneers, professional teeth whitening, cosmetic bonding, and Invisalign clear aligners in Bethesda, MD.",
};

export default function CosmeticDentistryPage() {
  return (
    <>
      <SubpageHero
        category="Dental Services"
        breadcrumbText="Cosmetic Dentistry"
        title="Cosmetic Dentistry &amp; Veneers in Bethesda, MD"
        description="Crafting natural, radiant smiles through custom porcelain veneers, professional whitening, aesthetic bonding, and clear aligners."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Aesthetic Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Enhance your smile with natural aesthetic harmony.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                A beautiful smile boosts confidence in every interaction. We design cosmetic treatments around your natural facial features, skin tone, and personal aesthetic preferences to ensure your results look authentic and vibrant.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-ink-950">Porcelain Veneers &amp; Lumineers</strong>
                    <p className="text-xs text-ink-600">Ultra-thin porcelain shells designed to correct discoloration, gaps, chips, or mild misalignment seamlessly.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <Award className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-ink-950">Invisalign&reg; Clear Aligners</strong>
                    <p className="text-xs text-ink-600">Dr. Luong is a certified Invisalign provider, helping adults and teens straighten teeth discreetly without metal braces.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-ink-950">Professional Teeth Whitening &amp; Bonding</strong>
                    <p className="text-xs text-ink-600">In-office and professional take-home whitening treatments to remove years of stubborn coffee, tea, and aging stains.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating aspect-[4/3] relative">
                <AppImage
                  src={media.lifestyle.beamingWoman.src}
                  alt={media.lifestyle.beamingWoman.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to explore a smile makeover?</h3>
              <p className="text-sm text-white/80">Schedule your cosmetic consultation with Dr. Greenbaum or Dr. Luong.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Cosmetic Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
