import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, Phone, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Home-Care Instructions | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Post-treatment home care guidelines for dental extractions, crowns, fillings, dental implants, and sleep apnea appliances in Bethesda, MD.",
};

const homeCareSections = [
  {
    id: "fillings",
    title: "Post-Treatment: Tooth-Colored Fillings",
    steps: [
      "Avoid chewing hard foods or hot liquids until local anesthesia wears off completely to prevent biting your lip or tongue.",
      "Mild sensitivity to hot or cold temperatures is normal for a few days following filling placement.",
      "If your bite feels uneven or high when chewing, call our office so we can quickly smooth it down.",
    ],
  },
  {
    id: "crowns",
    title: "Post-Treatment: Porcelain Crowns & Bridges",
    steps: [
      "Avoid sticky foods (chewing gum, hard candy) while wearing a temporary crown to prevent dislodging.",
      "When flossing around temporary restorations, pull the floss out sideways rather than popping it upward.",
      "If a temporary crown dislodges, clean it and call our office promptly to have it recemented.",
    ],
  },
  {
    id: "implants",
    title: "Post-Treatment: Dental Implants & Surgery",
    steps: [
      "Apply an ice pack to your cheek in 20-minute intervals for the first 24 hours to minimize swelling.",
      "Stick to a soft-food diet (yogurt, soups, smoothies, eggs) for the first 48–72 hours.",
      "Do not spit forcefully, smoke, or drink through a straw, as suction can disturb blood clot formation.",
    ],
  },
  {
    id: "sleep-appliances",
    title: "Care Guidelines: Custom Sleep Apnea Appliances",
    steps: [
      "Rinse your oral appliance thoroughly with cool water and brush it with a soft toothbrush every morning after removal.",
      "Store your appliance dry in its protective ventilated case when not in use.",
      "Perform morning jaw stretches as instructed by Dr. Greenbaum to reset your bite position.",
    ],
  },
];

export default function HomeCarePage() {
  return (
    <>
      <SubpageHero
        category="Resources"
        breadcrumbText="Home-Care Instructions"
        title="Post-Treatment Home-Care Guidelines"
        description="Important recovery instructions to ensure smooth healing and optimal clinical results following dental treatment."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
          {/* Urgent Warning Callout */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-base text-amber-950">Experiencing severe bleeding, fever, or persistent pain?</h2>
                <p className="text-xs text-amber-800">Do not hesitate to contact our office immediately at <strong>(301) 812-4946</strong>.</p>
              </div>
            </div>
            <a
              href="tel:3018124946"
              className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs shrink-0 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>(301) 812-4946</span>
            </a>
          </div>

          <div className="space-y-8">
            {homeCareSections.map((sec) => (
              <div
                key={sec.id}
                className="bg-brand-50/60 rounded-3xl p-8 border border-line shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-700 text-white flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-ink-950">{sec.title}</h3>
                </div>

                <ul className="space-y-2 pl-4">
                  {sec.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm text-ink-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
