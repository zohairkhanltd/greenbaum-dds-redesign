import type { Metadata } from "next";
import Link from "next/link";
import { User, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Meet the Team | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Meet our caring team of dental hygienists, clinical assistants, and office staff dedicated to your comfort and health in Bethesda, MD.",
};

const teamMembers = [
  {
    name: "Toni Burnett",
    role: "Registered Dental Hygienist (RDH)",
    category: "Hygiene & Preventive Care",
    bio: "Toni provides thorough, gentle preventive cleanings, periodontal therapy, and patient oral health education, helping patients maintain healthy smiles for decades.",
  },
  {
    name: "James David",
    role: "Office Manager",
    category: "Practice Administration & Billing",
    bio: "James oversees practice operations, scheduling, insurance claim processing, and financial arrangements to ensure every patient visit is smooth and transparent.",
  },
  {
    name: "Yeymi Cruz",
    role: "Dental Assistant",
    category: "Clinical Patient Care",
    bio: "Yeymi assists Dr. Greenbaum and Dr. Luong during clinical procedures, ensuring patient comfort, sterile instrumentation, and seamless chairside support.",
  },
  {
    name: "Zoe O'Brien",
    role: "Dental Assistant",
    category: "Clinical Patient Care",
    bio: "Zoe delivers compassionate clinical support during diagnostic imaging, restorative treatments, and patient care preparations.",
  },
];

export default function TeamPage() {
  return (
    <>
      <SubpageHero
        category="Our Practice"
        breadcrumbText="Meet the Team"
        title="Meet Our Dedicated Bethesda Dental Team"
        description="Friendly, skilled professionals committed to making every visit comfortable, clear, and reassuring."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Patient Support &amp; Care Team
            </span>
            <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
              Here to make your dental experience exceptional.
            </h2>
            <p className="text-sm text-ink-600">
              Our clinical staff and office team work together to deliver warm, personal care at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-brand-50/60 rounded-2xl p-6 border border-line shadow-card flex flex-col justify-between hover:border-brand-500/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xl">
                    <User className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-brand-700 text-white mb-1">
                      {member.category}
                    </span>
                    <h3 className="text-xl font-bold text-ink-950">{member.name}</h3>
                    <p className="text-xs font-semibold text-brand-700 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-line/60 flex items-center gap-1 text-[11px] font-semibold text-brand-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Bethesda Clinical Team</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700/60 shadow-floating flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Have questions about your first visit?</h3>
              <p className="text-sm text-white/80">Our team is happy to discuss scheduling, insurance coverage, or specific dental concerns.</p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
