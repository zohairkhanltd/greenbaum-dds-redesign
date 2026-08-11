import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Emergency Dentist Bethesda MD | Same-Day Urgent Dental Care",
  description:
    "Urgent dental care in Bethesda, MD. Rapid relief for severe toothaches, broken teeth, lost crowns, or dental trauma. Call (301) 812-4946 immediately.",
};

export default function EmergencyDentistryPage() {
  return (
    <>
      <SubpageHero
        category="Urgent Care"
        breadcrumbText="Emergency Dentistry"
        title="Emergency Dentistry in Bethesda, MD"
        description="Prompt, gentle relief for severe toothaches, broken teeth, knocked-out teeth, lost crowns, or acute oral pain."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          {/* Urgent Call Alert Banner */}
          <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-950">Experiencing severe pain or a broken tooth right now?</h2>
                <p className="text-xs sm:text-sm text-red-800 leading-relaxed mt-1">
                  Call our Bethesda office immediately at <strong>(301) 812-4946</strong>. We prioritize emergency calls and attempt same-day appointments whenever possible.
                </p>
              </div>
            </div>
            <a
              href="tel:3018124946"
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shrink-0 flex items-center gap-2 shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call (301) 812-4946</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-brand-50/60 rounded-2xl p-6 border border-line space-y-2">
              <h3 className="font-bold text-base text-ink-950">Severe Toothache</h3>
              <p className="text-xs text-ink-600 leading-relaxed">
                Rinse gently with warm salt water. Avoid placing aspirin directly on gums. Call us immediately for diagnosis.
              </p>
            </div>

            <div className="bg-brand-50/60 rounded-2xl p-6 border border-line space-y-2">
              <h3 className="font-bold text-base text-ink-950">Chipped or Broken Tooth</h3>
              <p className="text-xs text-ink-600 leading-relaxed">
                Save any broken tooth fragments if possible. Apply a cold compress to your cheek to reduce swelling.
              </p>
            </div>

            <div className="bg-brand-50/60 rounded-2xl p-6 border border-line space-y-2">
              <h3 className="font-bold text-base text-ink-950">Knocked-Out Tooth</h3>
              <p className="text-xs text-ink-600 leading-relaxed">
                Handle by the crown only (do not touch root). Place in milk or saline and seek emergency dental care within 60 minutes.
              </p>
            </div>

            <div className="bg-brand-50/60 rounded-2xl p-6 border border-line space-y-2">
              <h3 className="font-bold text-base text-ink-950">Lost Crown or Filling</h3>
              <p className="text-xs text-ink-600 leading-relaxed">
                Keep the area clean. Do not attempt to reattach with household glue. Contact our office for prompt recementation.
              </p>
            </div>

            <div className="bg-brand-50/60 rounded-2xl p-6 border border-line space-y-2">
              <h3 className="font-bold text-base text-ink-950">Abscess or Gum Swelling</h3>
              <p className="text-xs text-ink-600 leading-relaxed">
                Swelling or pimple-like bumps on gums indicate infection requiring immediate evaluation and antibiotic therapy.
              </p>
            </div>

            <div className="bg-brand-50/60 rounded-2xl p-6 border border-line space-y-2">
              <h3 className="font-bold text-base text-ink-950">Soft-Tissue Lacerations</h3>
              <p className="text-xs text-ink-600 leading-relaxed">
                Apply gentle pressure with clean gauze. If bleeding is uncontrolled after 15 minutes, visit an urgent care center or ER.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
