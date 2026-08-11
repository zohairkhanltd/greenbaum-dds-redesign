import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, Calendar, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Dr. Nhu Thuy H. Luong, DDS | Bethesda Dentist & Invisalign Provider",
  description:
    "Meet Dr. Nhu Thuy H. Luong, DDS. Howard University DDS, OKU National Dental Honor Society, LECOM AEGD residency, and Invisalign certified provider in Bethesda, MD.",
};

export default function DrLuongPage() {
  return (
    <>
      <SubpageHero
        category="Our Practice"
        breadcrumbText="Dr. Luong"
        title="Nhu Thuy H. Luong, DDS"
        description="Bethesda General, Cosmetic & Invisalign Dentist | Omicron Kappa Upsilon Honor Society"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Portrait & Credentials Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand-700 shadow-floating aspect-[3/4] w-full">
                <AppImage
                  src={media.doctors.drLuong.src}
                  alt="Dr. Nhu Thuy H. Luong, DDS"
                  fill
                  isLocal
                  priority
                  className="object-cover"
                />
              </div>

              <div className="bg-brand-50 rounded-2xl p-6 border border-line space-y-3 text-xs text-ink-950">
                <div className="flex items-center gap-2 font-bold text-sm text-brand-900 border-b border-line pb-2">
                  <ShieldCheck className="w-4 h-4 text-brand-700" />
                  <span>Clinical Snapshot</span>
                </div>
                <div><strong>Dental Degree:</strong> Howard University College of Dentistry (DDS)</div>
                <div><strong>Honors:</strong> Omicron Kappa Upsilon (OKU) National Honor Society</div>
                <div><strong>Residency:</strong> LECOM School of Dental Medicine (AEGD)</div>
                <div><strong>Master's Degree:</strong> M.S. Biomedical Sciences, Barry University</div>
                <div><strong>Bachelor's Degree:</strong> B.S. Biology, University of Central Florida</div>
                <div><strong>Certifications:</strong> Invisalign&reg; Certified Provider</div>
              </div>
            </div>

            {/* Right Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Doctor Profile
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Compassionate, attentive care with high academic distinction.
              </h2>

              <p className="text-base text-ink-600 leading-relaxed">
                Dr. Nhu Thuy H. Luong brings an exceptional academic background and a gentle, compassionate patient care philosophy to Bethesda Center for Family &amp; Cosmetic Dentistry. She completed her Bachelor of Science in Biology at the <strong>University of Central Florida</strong> and earned a Master of Science in Biomedical Sciences from <strong>Barry University</strong>.
              </p>

              <p className="text-base text-ink-600 leading-relaxed">
                Dr. Luong obtained her Doctor of Dental Surgery degree from <strong>Howard University College of Dentistry</strong>, where her academic excellence earned her induction into the elite <strong>Omicron Kappa Upsilon (OKU) National Dental Honor Society</strong>. Following dental school, she completed an intensive post-graduate Advanced Education in General Dentistry (AEGD) residency at the <strong>LECOM School of Dental Medicine</strong>.
              </p>

              <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100 space-y-3">
                <div className="flex items-center gap-2 text-brand-900 font-bold text-base">
                  <Award className="w-5 h-5 text-brand-700" />
                  <span>Invisalign&reg; &amp; Aesthetic Dentistry Focus</span>
                </div>
                <p className="text-xs text-ink-600 leading-relaxed">
                  As a certified <strong>Invisalign&reg; provider</strong>, Dr. Luong combines aesthetic planning with precise alignment techniques. She takes time to listen to each patient, ensuring gentle cleanings, preventive care, tooth-colored restorations, and clear aligner therapies are executed with optimal comfort.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-line">
                <h3 className="text-lg font-bold text-ink-950">Approved Personal Interests</h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Outside of her clinical practice, Dr. Luong enjoys hiking, trying new cuisines, working on jigsaw puzzles, and crafting. She resides in Washington, D.C. with her husband.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Luong</span>
                </Link>
                <Link
                  href="/services/cosmetic-dentistry"
                  className="px-6 py-3 rounded-xl border border-line text-ink-950 font-semibold text-sm hover:bg-brand-50 transition-colors"
                >
                  Explore Cosmetic &amp; Invisalign Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
