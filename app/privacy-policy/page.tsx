import type { Metadata } from "next";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Privacy Policy for Bethesda Center for Family & Cosmetic Dentistry. Learn how we handle and protect patient information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SubpageHero
        category="Legal"
        title="Privacy Policy"
        description="Our commitment to protecting patient privacy and personal health information."
      />

      <section className="py-16 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 max-w-3xl space-y-6 text-sm text-ink-600 leading-relaxed">
          <h2 className="text-xl font-bold text-ink-950">Patient Privacy Commitment</h2>
          <p>
            At Bethesda Center for Family &amp; Cosmetic Dentistry, we respect your privacy and are committed to safeguarding all personal and health information provided to our practice in accordance with applicable federal and state privacy regulations (including HIPAA).
          </p>

          <h2 className="text-xl font-bold text-ink-950">Information Collection &amp; Use</h2>
          <p>
            Information collected through our online forms (such as appointment requests or patient registration details) is used strictly for scheduling appointments, processing insurance claims, and providing quality dental care. We do not sell, rent, or trade your personal information to third parties.
          </p>

          <h2 className="text-xl font-bold text-ink-950">Contact Information</h2>
          <p>
            If you have questions regarding our privacy practices, please contact our office manager at (301) 812-4946 or visit us at 6410 Rockledge Drive, Suite 106, Bethesda, MD 20817.
          </p>
        </div>
      </section>
    </>
  );
}
