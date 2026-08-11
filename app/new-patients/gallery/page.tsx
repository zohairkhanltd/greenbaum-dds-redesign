import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { AppImage } from "@/components/ui/app-image";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Smile Gallery | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Explore smile transformation showcases, cosmetic porcelain veneer results, and restorative dentistry at Bethesda Center for Family & Cosmetic Dentistry.",
};

const galleryCases = [
  {
    title: "Porcelain Veneer Smile Transformation",
    category: "Cosmetic Dentistry",
    desc: "Custom ultra-thin porcelain veneers designed to correct teeth discoloration, minor gaps, and uneven edges.",
    image: media.lifestyle.beamingWoman,
  },
  {
    title: "Full Arch Restorative Reconstruction",
    category: "Restorative Dentistry",
    desc: "Comprehensive porcelain crowns and implant-supported restorations restoring full chewing function.",
    image: media.lifestyle.handsomeMan,
  },
  {
    title: "Invisalign® Clear Aligner Therapy",
    category: "Clear Aligners",
    desc: "Discreet teeth straightening executed by Dr. Luong, creating a balanced aesthetic arch alignment.",
    image: media.lifestyle.curlyHairWoman,
  },
  {
    title: "Laser Periodontal Gum Reshaping",
    category: "Laser Dentistry",
    desc: "Soft-tissue laser gum contouring to harmonize gumlines and reveal a broader, radiant smile.",
    image: media.lifestyle.happyWoman,
  },
];

export default function GalleryPage() {
  return (
    <>
      <SubpageHero
        category="New Patients"
        breadcrumbText="Smile Gallery"
        title="Smile Transformation Showcase"
        description="See how our custom cosmetic, restorative, and clear aligner therapies restore smile confidence and natural harmony."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryCases.map((item) => (
              <div
                key={item.title}
                className="bg-brand-50/60 rounded-3xl overflow-hidden border border-line shadow-card flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full">
                  <AppImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-700 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-ink-950">{item.title}</h3>
                  <p className="text-xs text-ink-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Want to see what's possible for your smile?</h3>
              <p className="text-sm text-white/80">Schedule a cosmetic consultation with our Bethesda clinicians.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
