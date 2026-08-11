import type { Metadata } from "next";
import Link from "next/link";
import { Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Laser & Periodontal Dentistry Bethesda MD | Soft-Tissue Laser",
  description:
    "Advanced laser periodontal treatment and gentle gum disease therapy in Bethesda, MD. Minimally invasive laser care for healthier gums.",
};

export default function LaserPeriodontalPage() {
  return (
    <>
      <SubpageHero
        category="Dental Services"
        breadcrumbText="Periodontal & Laser Dentistry"
        title="Periodontal &amp; Laser Dentistry in Bethesda, MD"
        description="Minimally invasive, soft-tissue laser gum therapies designed to treat periodontitis gently, reduce bleeding, and promote rapid healing."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Gentle Gum Care &amp; Laser Technology
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Protect your gum tissue with precision laser therapies.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                Gum health is vital to keeping your natural teeth securely in place. Soft-tissue lasers target inflamed or infected gum tissue without scalpels or sutures, sterilizing periodontitis pockets while preserving healthy tissue and speeding up recovery.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Laser Periodontal Therapy (LANAP Alternative)</strong>
                    <span className="text-xs text-ink-600">Disinfects deep gum pockets gently and eliminates harmful bacteria.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Deep Scaling &amp; Root Planing</strong>
                    <span className="text-xs text-ink-600">Removes subgingival tartar buildup to help gum tissue reattach firmly to teeth roots.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Cosmetic Gum Contouring</strong>
                    <span className="text-xs text-ink-600">Reshapes uneven or gummy smiles safely with laser precision and minimal downtime.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating aspect-[4/3] relative">
                <AppImage
                  src={media.clinical.femaleDentistCare.src}
                  alt={media.clinical.femaleDentistCare.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Concerned about bleeding or sensitive gums?</h3>
              <p className="text-sm text-white/80">Schedule a laser periodontal consultation with our Bethesda team.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Periodontal Exam</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
