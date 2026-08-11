import type { Metadata } from "next";
import Link from "next/link";
import { Cpu, Zap, Moon, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Office & Technology | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Explore our advanced dental technology in Bethesda, MD: digital scanners, low-radiation 3D imaging, laser dentistry, and sleep diagnostic tools.",
};

const techList = [
  {
    title: "Digital Impression Scanners",
    desc: "Replaces uncomfortable impression putty trays with fast, highly precise 3D optical scans for custom crowns, veneers, and oral appliances.",
    icon: Cpu,
  },
  {
    title: "Low-Radiation Digital X-Rays",
    desc: "Provides instant high-resolution diagnostic images with up to 80% less radiation exposure than traditional film X-rays.",
    icon: ShieldCheck,
  },
  {
    title: "Soft-Tissue Laser Dentistry",
    desc: "Allows gentle, highly targeted gum contouring and deep periodontal therapies with minimal discomfort and accelerated healing.",
    icon: Zap,
  },
  {
    title: "Sleep Appliance Design & Fitting",
    desc: "Precision diagnostic tools and custom SomnoDent® and TAP® appliance fabrication for sleep apnea and snoring relief.",
    icon: Moon,
  },
  {
    title: "Advanced Bite & TMJ Analysis",
    desc: "Evaluates jaw alignment and occlusal contact points to diagnose bite imbalances, jaw popping, and chronic headaches.",
    icon: Activity,
  },
];

export default function TechnologyPage() {
  return (
    <>
      <SubpageHero
        category="Our Practice"
        breadcrumbText="Office & Technology"
        title="Modern Dental Technology in Bethesda"
        description="Investing in state-of-the-art diagnostic equipment to make your dental care faster, safer, and more comfortable."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                Precision &amp; Comfort
              </span>
              <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
                How modern technology elevates your dental experience.
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                At Bethesda Center for Family &amp; Cosmetic Dentistry, we continuously update our office technology to provide safer diagnostics, minimally invasive treatments, and predictable clinical outcomes. Technology is never used for its own sake—it is integrated specifically to enhance your comfort and understanding.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-line shadow-floating aspect-[4/3] relative">
                <AppImage
                  src={media.clinical.microscope.src}
                  alt="Precision dental microscope equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techList.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.title}
                  className="bg-brand-50/60 rounded-2xl p-6 border border-line shadow-card space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-ink-950">{tech.title}</h3>
                  <p className="text-xs text-ink-600 leading-relaxed">{tech.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Experience modern, comfortable dentistry</h3>
              <p className="text-sm text-white/80">Schedule your consultation and tour our Bethesda dental suite.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
