"use client";

import React from "react";
import { UserCheck, Layers, Cpu, HeartHandshake, Sparkles } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-[#06101E] text-white relative overflow-hidden">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-4 lg:px-8 relative z-10 space-y-14">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Why Patients Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white tracking-tight">
            The Bethesda Center <span className="italic gold-gradient-text">Difference</span>
          </h2>
          <p className="text-base text-white/70 font-light max-w-lg mx-auto">
            A welcoming, established practice focused on genuine patient relationships rather than corporate dental chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="glass-panel-dark rounded-2xl p-7 border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-serif-luxury font-bold text-gold-400 px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/25">
                      {item.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif-luxury font-semibold text-white mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light leading-relaxed">
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
