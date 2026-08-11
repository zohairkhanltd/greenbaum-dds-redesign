import type { Metadata } from "next";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Accessibility Statement (ADA) | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Accessibility Statement for Bethesda Center for Family & Cosmetic Dentistry. Learn about our commitment to WCAG 2.2 AA standards.",
};

export default function AccessibilityPage() {
  return (
    <>
      <SubpageHero
        category="Legal"
        title="Accessibility Statement (ADA)"
        description="Ensuring our digital experience is accessible to all patients."
      />

      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 max-w-3xl space-y-6 text-sm text-ink-600 leading-relaxed">
          <h2 className="text-xl font-bold text-ink-950">Our Accessibility Commitment</h2>
          <p>
            Bethesda Center for Family &amp; Cosmetic Dentistry is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We actively work to align our digital standards with WCAG 2.2 AA guidelines.
          </p>

          <h2 className="text-xl font-bold text-ink-950">Feedback &amp; Assistance</h2>
          <p>
            If you encounter difficulty accessing any part of our website or require assistance with scheduling, please call our office at <strong>(301) 812-4946</strong> or email us at <strong>info@greenbaumdds.com</strong>.
          </p>
        </div>
      </section>
    </>
  );
}
