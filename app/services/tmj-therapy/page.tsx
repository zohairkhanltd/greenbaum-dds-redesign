import type { Metadata } from "next";
import Link from "next/link";
import { Activity, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "TMJ Therapy & Jaw Pain Relief Bethesda MD | Occlusal Splints",
  description:
    "Relieve jaw pain, TMJ clicking, bruxism teeth grinding, and chronic headaches with custom night guards and occlusal bite therapy in Bethesda, MD.",
};

export default function TmjTherapyPage() {
  return (
    <>
      <SubpageHero
        category="Specialty Services"
        breadcrumbText="TMJ Therapy"
        title="TMJ &amp; Bite Therapy in Bethesda, MD"
        description="Non-surgical relief for jaw clicking, facial muscle tightness, nighttime teeth grinding, and chronic bite-related headaches."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Jaw Alignment &amp; Comfort
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Comprehensive evaluation for temporomandibular joint disorders.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                TMJ disorders can stem from bite misalignment, joint inflammation, stress, or unconscious nighttime teeth grinding (bruxism). Left untreated, TMJ strain can damage natural teeth and cause severe facial pain. We design custom occlusal splints and night guards to reduce joint pressure and protect your smile.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Custom Night Guards &amp; Occlusal Splints</strong>
                    <span className="text-xs text-ink-600">Precision-fitted guards that cushion teeth against heavy clenching forces during sleep.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Bite Analysis &amp; Adjustment</strong>
                    <span className="text-xs text-ink-600">Identifies premature tooth contact points to balance chew forces and relieve joint strain.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Chronic Headache &amp; Jaw Popping Relief</strong>
                    <span className="text-xs text-ink-600">Targeted therapeutic solutions to minimize temple tension and joint popping noises.</span>
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
              <h3 className="text-2xl font-bold mb-2">Experiencing jaw pain or frequent headaches?</h3>
              <p className="text-sm text-white/80">Schedule your TMJ consultation with our Bethesda team.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book TMJ Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
