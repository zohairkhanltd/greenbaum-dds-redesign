"use client";

import React from "react";
import { UserCheck, Layers, Cpu, HeartHandshake } from "lucide-react";

const reasons = [
  {
    num: "01",
    title: "Personalized, Unhurried Care",
    desc: "We schedule generous appointment times so our doctors can listen, explain treatment options thoroughly, and answer all your questions.",
    icon: UserCheck,
  },
  {
    num: "02",
    title: "Comprehensive Care Under One Roof",
    desc: "From routine family cleanings to complex porcelain crowns, dental implants, laser gum therapy, and sleep apnea appliances in Bethesda.",
    icon: Layers,
  },
  {
    num: "03",
    title: "Modern Diagnostic Technology",
    desc: "Equipped with digital impression scanners, low-radiation 3D imaging, and soft-tissue lasers for precise and gentle dental procedures.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Experienced, Compassionate Team",
    desc: "Led by Dr. Greenbaum (25+ years experience) and Dr. Luong, supported by dedicated hygienists and assistants who treat you like family.",
    icon: HeartHandshake,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Subtle Background Architectural Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-site h-full border-x border-brand-700/20 pointer-events-none" />

      <div className="max-w-site mx-auto px-4 lg:px-8 relative z-10 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-100">
            Why Patients Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            The Bethesda Center Difference
          </h2>
          <p className="text-sm lg:text-base text-white/80">
            A welcoming, established practice focused on patient relationships rather than corporate dental chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-brand-700/30 rounded-2xl p-6 border border-brand-500/30 hover:border-brand-500 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-brand-100 px-2.5 py-1 rounded bg-brand-700/80">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
