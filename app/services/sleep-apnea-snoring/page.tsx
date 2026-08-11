import type { Metadata } from "next";
import Link from "next/link";
import { Moon, CheckCircle2, Award, ArrowRight, ShieldCheck } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Sleep Apnea & Snoring Treatment Bethesda MD | ABDSM Diplomate",
  description:
    "Custom oral appliance therapy (SomnoDent, TAP) for sleep apnea and snoring relief in Bethesda, MD. Dr. Bernard L. Greenbaum, DDS is a Diplomate of the ABDSM.",
};

export default function SleepApneaPage() {
  return (
    <>
      <SubpageHero
        category="Specialty Services"
        breadcrumbText="Sleep Apnea & Snoring"
        title="Sleep Apnea &amp; Snoring Treatment in Bethesda, MD"
        description="Discover comfortable, non-invasive oral appliance alternatives to CPAP machines designed by an ABDSM Diplomate dental sleep specialist."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                ABDSM Diplomate Dental Sleep Medicine
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Breathe easier, sleep deeper &amp; wake up refreshed.
              </h2>

              <div className="bg-brand-900 text-white rounded-2xl p-6 border border-brand-700 space-y-2">
                <div className="flex items-center gap-2 font-bold text-base text-brand-100">
                  <Award className="w-5 h-5 text-brand-500" />
                  <span>Dr. Bernard L. Greenbaum, DDS — Diplomate, ABDSM</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  As a certified Diplomate of the American Board of Dental Sleep Medicine, Dr. Greenbaum possesses qualified expertise in evaluating airway obstruction and providing custom-fitted oral appliance therapy.
                </p>
              </div>

              <p className="text-base text-ink-600 leading-relaxed">
                Obstructive sleep apnea (OSA) occurs when muscles in the throat relax during sleep, allowing soft tissues to collapse and block the upper airway. This causes frequent breathing pauses, loud snoring, morning headaches, daytime exhaustion, and elevated cardiovascular risks.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Custom SomnoDent&reg; &amp; TAP&reg; Appliances</strong>
                    <span className="text-xs text-ink-600">Quiet, small, and comfortable mouthguards that gently hold your jaw forward during sleep to maintain an open airway.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Ideal CPAP Alternative</strong>
                    <span className="text-xs text-ink-600">Perfect for patients who find CPAP masks noisy, claustrophobic, uncomfortable, or difficult for travel.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-ink-950">Coordinated Care with Sleep Physicians</strong>
                    <span className="text-xs text-ink-600">We work closely with local Bethesda physicians and sleep study diagnostic partners for comprehensive care.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating aspect-[4/3] relative">
                <AppImage
                  src={media.lifestyle.manWhiteSweatshirt.src}
                  alt={media.lifestyle.manWhiteSweatshirt.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to improve your sleep quality?</h3>
              <p className="text-sm text-white/80">Schedule your sleep apnea consultation with Dr. Greenbaum, DDS.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Sleep Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
