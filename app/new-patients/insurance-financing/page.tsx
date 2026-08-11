import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Insurance & Financing | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Learn about our dental insurance claim handling, transparent fee estimates, payment options, and CareCredit financing in Bethesda, MD.",
};

export default function InsuranceFinancingPage() {
  return (
    <>
      <SubpageHero
        category="New Patients"
        breadcrumbText="Insurance & Financing"
        title="Insurance &amp; Payment Options"
        description="Transparent financial guidance, electronic insurance claim submission, and flexible financing solutions for your care."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Transparent Financial Policies
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                No financial surprises—just clear, honest treatment guidance.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                We believe exceptional dental care should be accessible and straightforward. Before any procedure begins, our office manager, James David, will provide a detailed estimate of treatment costs and review your insurance benefits with you.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-ink-950">Electronic Claim Filing</strong>
                    <p className="text-xs text-ink-600">We electronically submit insurance claims on your behalf to ensure rapid reimbursement from your PPO provider.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-ink-950">Multiple Payment Methods Accepted</strong>
                    <p className="text-xs text-ink-600">We accept major credit cards (Visa, MasterCard, American Express, Discover), debit, cash, and personal checks.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-50/60 border border-line flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-ink-950">CareCredit&reg; Financing Options</strong>
                    <p className="text-xs text-ink-600">Flexible monthly financing plans with low or zero-interest options for qualifying procedures.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-brand-900 text-white rounded-3xl p-8 border border-brand-700 shadow-floating space-y-6">
              <h3 className="text-xl font-bold text-white">Have Insurance Questions?</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Call our office at <strong>(301) 812-4946</strong> and our insurance coordinator will happily verify your coverage and explain your out-of-pocket estimates.
              </p>
              <div className="pt-4 border-t border-brand-700">
                <a
                  href="tel:3018124946"
                  className="w-full py-3 rounded-xl bg-white text-brand-900 font-bold text-xs hover:bg-brand-50 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Speak to Financial Coordinator</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
