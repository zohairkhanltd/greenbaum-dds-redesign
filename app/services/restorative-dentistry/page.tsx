import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Restorative Dentistry Bethesda MD | Crowns, Bridges & Fillings",
  description:
    "Restore damaged, decayed, or broken teeth with custom porcelain crowns, fixed dental bridges, composite fillings, and full mouth restoration in Bethesda, MD.",
};

export default function RestorativeDentistryPage() {
  return (
    <>
      <SubpageHero
        category="Dental Services"
        breadcrumbText="Restorative Dentistry"
        title="Restorative Dentistry in Bethesda, MD"
        description="Rebuild damaged teeth, restore proper chewing function, and maintain natural aesthetic beauty with durable ceramic restorations."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Functional &amp; Aesthetic Repair
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Durable restorations tailored to your natural bite.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                Damaged, cracked, or severely decayed teeth can compromise your ability to chew and speak comfortably. Our restorative treatments utilize advanced dental ceramics and composite materials that match your natural tooth shade while providing exceptional structural durability.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Porcelain Crowns &amp; Onlays</strong>
                    <span className="text-xs text-ink-600">Full-coverage tooth caps that protect weakened tooth structure and restore natural contour.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Fixed Dental Bridges</strong>
                    <span className="text-xs text-ink-600">Fills single or multiple missing tooth gaps anchored securely to adjacent natural teeth.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Tooth-Colored Composite Fillings</strong>
                    <span className="text-xs text-ink-600">Metal-free, tooth-shaded resin restorations for cavity repair and minor tooth fractures.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating aspect-[4/3] relative">
                <AppImage
                  src={media.clinical.seniorCare.src}
                  alt={media.clinical.seniorCare.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need a damaged tooth repaired?</h3>
              <p className="text-sm text-white/80">Schedule a restorative evaluation with our experienced Bethesda team.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Restorative Visit</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
