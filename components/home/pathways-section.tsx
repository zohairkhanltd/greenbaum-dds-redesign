"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Anchor, Moon } from "lucide-react";

const pathways = [
  {
    title: "Maintain My Smile",
    outcome: "Keep your teeth and gums healthy for life with gentle preventive care and screenings.",
    href: "/services/preventive-dentistry",
    icon: ShieldCheck,
    badge: "Preventive Care",
  },
  {
    title: "Transform My Smile",
    outcome: "Enhance your confidence with custom porcelain veneers, teeth whitening, or clear aligners.",
    href: "/services/cosmetic-dentistry",
    icon: Sparkles,
    badge: "Cosmetic Care",
  },
  {
    title: "Restore Missing or Damaged Teeth",
    outcome: "Regain full strength and natural appearance with custom crowns, bridges, and dental implants.",
    href: "/services/dental-implants",
    icon: Anchor,
    badge: "Restorative & Implants",
  },
  {
    title: "Sleep Better / Relieve Jaw Pain",
    outcome: "Discover comfortable CPAP alternatives for sleep apnea and proven non-surgical TMJ therapy.",
    href: "/services/sleep-apnea-snoring",
    icon: Moon,
    badge: "Sleep & TMJ Care",
  },
];

export function PathwaysSection() {
  return (
    <section className="py-16 bg-brand-50/60 border-y border-line/60">
      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
            Fast Patient Pathways
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-ink-950 mt-1">
            How can our Bethesda team help you today?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.href}
                href={path.href}
                className="bg-white rounded-2xl p-6 border border-line shadow-card hover:shadow-hover hover:border-brand-500/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">
                      {path.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink-950 group-hover:text-brand-700 transition-colors mb-2">
                    {path.title}
                  </h3>
                  <p className="text-xs text-ink-600 leading-relaxed mb-6">
                    {path.outcome}
                  </p>
                </div>

                <div className="pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-brand-700 group-hover:text-brand-500 transition-colors">
                  <span>Explore Pathway</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
