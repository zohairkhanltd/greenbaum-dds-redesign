import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Patient Registration & Forms | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Complete your new patient registration forms online before your appointment at Bethesda Center for Family & Cosmetic Dentistry.",
};

export default function RegistrationPage() {
  return (
    <>
      <SubpageHero
        category="New Patients"
        breadcrumbText="Registration & Forms"
        title="Patient Registration &amp; Digital Forms"
        description="Streamline your check-in process by reviewing and submitting your patient forms before arriving at our Bethesda office."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
          <div className="bg-brand-50/60 rounded-3xl p-8 lg:p-12 border border-line space-y-6">
            <h2 className="text-2xl font-bold text-ink-950">Preparing for Your Appointment</h2>
            <p className="text-sm text-ink-600 leading-relaxed max-w-3xl">
              To assist our team in providing personalized, safe care, please complete your health history form prior to your visit. If you have recent dental X-rays from a prior dentist, you can request to have them transferred directly to our practice at <strong>info@greenbaumdds.com</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink-950">New Patient Medical &amp; Dental History</h3>
                  <p className="text-xs text-ink-600 mt-1">Includes general medical history, current medications, dental insurance details, and primary health goals.</p>
                </div>
                <button
                  type="button"
                  className="w-full py-3 rounded-xl bg-brand-700 hover:bg-brand-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Patient Registration PDF</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-ink-950">Sleep Apnea Screening Questionnaire</h3>
                  <p className="text-xs text-ink-600 mt-1">For patients consulting with Dr. Greenbaum regarding snoring, CPAP alternatives, or sleep disruption.</p>
                </div>
                <button
                  type="button"
                  className="w-full py-3 rounded-xl border border-brand-700 text-brand-700 hover:bg-brand-50 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Sleep Questionnaire PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
