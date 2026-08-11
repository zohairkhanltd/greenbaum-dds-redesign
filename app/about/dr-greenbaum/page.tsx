import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, Moon, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Dr. Bernard L. Greenbaum, DDS | Bethesda Dentist & ABDSM Diplomate",
  description:
    "Meet Dr. Bernard L. Greenbaum, DDS. Over 25 years of general, cosmetic, and dental sleep medicine experience in Bethesda, MD. Georgetown DDS & ABDSM Diplomate.",
};

export default function DrGreenbaumPage() {
  return (
    <>
      <SubpageHero
        category="Our Practice"
        breadcrumbText="Dr. Greenbaum"
        title="Bernard L. Greenbaum, DDS"
        description="Bethesda General & Cosmetic Dentist | Diplomate, American Board of Dental Sleep Medicine"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Portrait & Credentials Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brand-700 shadow-floating aspect-[3/4] w-full">
                <AppImage
                  src={media.doctors.drGreenbaum.src}
                  alt="Dr. Bernard L. Greenbaum, DDS"
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
                <div><strong>Experience:</strong> 25+ Years in Bethesda, MD</div>
                <div><strong>Education:</strong> Georgetown University School of Dentistry</div>
                <div><strong>Specialty Focus:</strong> Sleep Apnea, Snoring, TMJ &amp; Restorative Dentistry</div>
                <div><strong>Diplomate Status:</strong> American Board of Dental Sleep Medicine (ABDSM)</div>
                <div><strong>Fellowship:</strong> Academy of General Dentistry (FAGD)</div>
                <div><strong>Advanced Studies:</strong> LVI for Advanced Dental Studies</div>
              </div>
            </div>

            {/* Right Detailed Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Doctor Profile
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                Dedicated to clinical excellence, patient comfort, and healthier sleep.
              </h2>

              <p className="text-base text-ink-600 leading-relaxed">
                For more than 25 years, Dr. Bernard L. Greenbaum has provided personalized, high-quality family and cosmetic dental care to the Bethesda community. After earning his Doctor of Dental Surgery degree from the prestigious <strong>Georgetown University School of Dentistry</strong>, Dr. Greenbaum dedicated his career to combining advanced technical precision with a warm, patient-first approach.
              </p>

              <p className="text-base text-ink-600 leading-relaxed">
                Recognizing the profound connection between oral anatomy and overall systemic health, Dr. Greenbaum pursued extensive post-graduate education, completing advanced studies at the <strong>LVI for Advanced Dental Studies</strong> and earning the distinction of <strong>Fellow of the Academy of General Dentistry (FAGD)</strong>.
              </p>

              <div className="bg-brand-900 text-white rounded-2xl p-6 border border-brand-700 space-y-3">
                <div className="flex items-center gap-2 text-brand-100 font-bold text-base">
                  <Moon className="w-5 h-5 text-brand-500" />
                  <span>Dental Sleep Medicine &amp; Snoring Leadership</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Dr. Greenbaum is a certified <strong>Diplomate of the American Board of Dental Sleep Medicine (ABDSM)</strong>. He specializes in non-invasive custom oral-appliance therapy (including SomnoDent&reg; and TAP&reg; devices) to treat obstructive sleep apnea and chronic snoring, providing a comfortable, effective alternative for patients who struggle with CPAP machines.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-line">
                <h3 className="text-lg font-bold text-ink-950">Clinical Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-ink-950">
                  <div className="p-3 rounded-lg bg-brand-50 font-medium">Comprehensive Family Dentistry</div>
                  <div className="p-3 rounded-lg bg-brand-50 font-medium">Cosmetic &amp; Porcelain Restorations</div>
                  <div className="p-3 rounded-lg bg-brand-50 font-medium">Dental Sleep Medicine (ABDSM)</div>
                  <div className="p-3 rounded-lg bg-brand-50 font-medium">TMJ &amp; Occlusal Therapy</div>
                  <div className="p-3 rounded-lg bg-brand-50 font-medium">Laser Periodontal Dentistry</div>
                  <div className="p-3 rounded-lg bg-brand-50 font-medium">Dental Implant Restorations</div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Dr. Greenbaum</span>
                </Link>
                <Link
                  href="/services/sleep-apnea-snoring"
                  className="px-6 py-3 rounded-xl border border-line text-ink-950 font-semibold text-sm hover:bg-brand-50 transition-colors"
                >
                  Explore Sleep Apnea Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
