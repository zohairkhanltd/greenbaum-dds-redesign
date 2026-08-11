import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";
import { serviceItems } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Dental Services | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Explore our full range of dental services in Bethesda, MD: preventive care, cosmetic veneers, restorative crowns, dental implants, laser gum therapy, and sleep apnea care.",
};

export default function ServicesHubPage() {
  return (
    <>
      <SubpageHero
        category="Services Overview"
        title="Comprehensive Dentistry in Bethesda, MD"
        description="From routine preventive hygiene to complex smile makeovers, dental implants, and specialized dental sleep medicine."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
              Tailored Treatment Plans for Every Stage of Life
            </h2>
            <p className="text-sm text-ink-600">
              Select a service below to learn about treatments, benefits, candidate requirements, and what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-brand-50/60 rounded-2xl p-6 border border-line shadow-card hover:shadow-hover hover:border-brand-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-ink-950 group-hover:text-brand-700 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ink-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-brand-700 group-hover:text-brand-500 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
