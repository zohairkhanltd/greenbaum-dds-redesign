import type { Metadata } from "next";
import Link from "next/link";
import { UserCheck, FileText, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "New Patients | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Welcome to Bethesda Center for Family & Cosmetic Dentistry! Learn what to expect during your first visit, access patient registration forms, and review insurance policies.",
};

export default function NewPatientsPage() {
  return (
    <>
      <SubpageHero
        category="New Patients"
        title="Welcome to Our Bethesda Practice"
        description="Everything you need for a comfortable, effortless initial dental consultation."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/new-patients/registration"
              className="bg-brand-50/60 rounded-3xl p-8 border border-line shadow-card hover:border-brand-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink-950 group-hover:text-brand-700 transition-colors">
                  Patient Registration Forms
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Save time in the waiting room by completing your medical history and registration forms online before your appointment.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-brand-700">
                <span>Access Registration</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/new-patients/insurance-financing"
              className="bg-brand-50/60 rounded-3xl p-8 border border-line shadow-card hover:border-brand-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink-950 group-hover:text-brand-700 transition-colors">
                  Insurance &amp; Payment Options
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  We process insurance claims on your behalf, explain pre-treatment estimates clearly, and support flexible financing solutions.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-brand-700">
                <span>View Financial Info</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/new-patients/reviews"
              className="bg-brand-50/60 rounded-3xl p-8 border border-line shadow-card hover:border-brand-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink-950 group-hover:text-brand-700 transition-colors">
                  Patient Reviews &amp; Stories
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Read genuine Google reviews from Bethesda patients who rely on Dr. Greenbaum and Dr. Luong for personalized oral healthcare.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-brand-700">
                <span>Read Verified Reviews</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-line shadow-card space-y-6">
            <h2 className="text-2xl font-bold text-ink-950">Step-by-Step: Your First Visit Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center">1</span>
                <h3 className="font-bold text-base text-ink-950">Appointment Booking</h3>
                <p className="text-xs text-ink-600">Select a convenient date and time online or by calling (301) 812-4946.</p>
              </div>
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center">2</span>
                <h3 className="font-bold text-base text-ink-950">Online Forms</h3>
                <p className="text-xs text-ink-600">Complete your health history registration in advance from your phone or desktop.</p>
              </div>
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center">3</span>
                <h3 className="font-bold text-base text-ink-950">Comprehensive Exam</h3>
                <p className="text-xs text-ink-600">Enjoy gentle digital imaging, oral cancer screening, and thorough teeth evaluation.</p>
              </div>
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-brand-700 text-white font-bold text-sm flex items-center justify-center">4</span>
                <h3 className="font-bold text-base text-ink-950">Unhurried Discussion</h3>
                <p className="text-xs text-ink-600">Review findings with your doctor, ask questions, and co-create your custom care plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
