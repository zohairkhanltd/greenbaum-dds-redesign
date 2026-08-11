import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Dental Health Journal | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Educational dental articles on oral hygiene, sleep apnea relief, porcelain veneers, laser gum therapy, and dental care in Bethesda, MD.",
};

const articles = [
  {
    slug: "understanding-sleep-apnea-oral-appliance-therapy",
    title: "Understanding Sleep Apnea: How Custom Oral Appliances Offer CPAP Relief",
    author: "Bernard L. Greenbaum, DDS (ABDSM Diplomate)",
    date: "August 2026",
    category: "Dental Sleep Medicine",
    excerpt: "Obstructive sleep apnea impacts millions of adults. Learn how Diplomate custom oral appliances keep your airway open comfortably without noisy CPAP masks.",
  },
  {
    slug: "porcelain-veneers-vs-teeth-whitening",
    title: "Porcelain Veneers vs. Professional Whitening: Which Is Right for Your Smile?",
    author: "Nhu Thuy H. Luong, DDS",
    date: "July 2026",
    category: "Cosmetic Dentistry",
    excerpt: "Comparing aesthetic outcomes, longevity, and treatment timelines for porcelain veneers and professional teeth whitening in Bethesda.",
  },
  {
    slug: "advantages-of-soft-tissue-laser-dentistry",
    title: "The Advantages of Soft-Tissue Laser Dentistry for Gum Health",
    author: "Bethesda Center Clinical Team",
    date: "June 2026",
    category: "Laser Dentistry",
    excerpt: "Discover how dental lasers eliminate periodontitis bacteria, reduce procedure discomfort, and accelerate post-treatment gum healing.",
  },
];

export default function BlogPage() {
  return (
    <>
      <SubpageHero
        category="Resources"
        breadcrumbText="Dental Journal"
        title="Bethesda Dental Health Journal"
        description="Evidence-based articles on oral wellness, dental sleep medicine, cosmetic innovations, and preventive health."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="bg-brand-50/60 rounded-3xl p-6 border border-line shadow-card flex flex-col justify-between hover:border-brand-500/40 transition-colors"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-brand-100 text-brand-700">
                    {art.category}
                  </span>
                  <h3 className="text-xl font-bold text-ink-950 hover:text-brand-700 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-line/60 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-ink-600">
                    <User className="w-3.5 h-3.5 text-brand-700" />
                    <span>{art.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-ink-600">
                    <Calendar className="w-3.5 h-3.5 text-brand-700" />
                    <span>{art.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
