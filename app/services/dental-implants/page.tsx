import type { Metadata } from "next";
import Link from "next/link";
import { Anchor, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Dental Implants Bethesda MD | Permanent Tooth Replacement",
  description:
    "Permanent single and multi-tooth dental implants in Bethesda, MD. Restore chewing strength, jawbone health, and confident smile aesthetics.",
};

export default function DentalImplantsPage() {
  return (
    <>
      <SubpageHero
        category="Dental Services"
        breadcrumbText="Dental Implants"
        title="Dental Implants in Bethesda, MD"
        description="The gold standard for permanent tooth replacement. Look, feel, and function just like your natural teeth."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Permanent Tooth Replacement
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Regain full chewing power and jawbone integrity.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                Unlike removable dentures or traditional bridges, dental implants replace both the root and crown of a missing tooth. A biocompatible titanium post integrates directly with your jawbone, offering unparalleled stability, stopping bone loss, and supporting a custom porcelain crown.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Single-Tooth Implants</strong>
                    <span className="text-xs text-ink-600">Replaces an individual missing tooth without altering adjacent healthy teeth.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Implant-Supported Bridges &amp; Dentures</strong>
                    <span className="text-xs text-ink-600">Anchors multi-tooth bridges or full arch appliances securely to eliminate slipping or sore spots.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">3D Precision Diagnostic Planning</strong>
                    <span className="text-xs text-ink-600">Utilizes low-radiation digital imaging for accurate placement and optimal bone density analysis.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating aspect-[4/3] relative">
                <AppImage
                  src={media.lifestyle.handsomeMan.src}
                  alt={media.lifestyle.handsomeMan.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Considering dental implants in Bethesda?</h3>
              <p className="text-sm text-white/80">Schedule your comprehensive implant consultation today.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Implant Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
