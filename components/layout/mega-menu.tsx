"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  RefreshCw,
  Anchor,
  Zap,
  Moon,
  Activity,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import { serviceItems } from "@/lib/services-data";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full pt-2 z-50 transition-all duration-200 before:absolute before:-top-4 before:inset-x-0 before:h-5 before:content-['']"
      onMouseLeave={onClose}
    >
      <div className="bg-white shadow-floating border-t border-line/80">
        <div className="max-w-site mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Services Grid (8 columns) */}
          <div className="col-span-8">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-line">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-600">
                Comprehensive Dental Care
              </h3>
              <Link
                href="/services"
                onClick={onClose}
                className="text-xs font-semibold text-brand-700 hover:text-brand-500 flex items-center gap-1 transition-colors"
              >
                View All Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {serviceItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="p-3.5 rounded-xl hover:bg-brand-50 transition-colors group flex items-start gap-3 border border-transparent hover:border-brand-100"
                  >
                    <div className="p-2 rounded-lg bg-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink-950 group-hover:text-brand-700 transition-colors">
                        {item.title}
                      </div>
                      <p className="text-xs text-ink-600 line-clamp-1 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Highlight Featured Panel (4 columns) */}
          <div className="col-span-4 bg-brand-900 text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand-700 text-brand-100 mb-3">
                Specialty Focus
              </span>
              <h4 className="text-lg font-bold mb-2">
                Dental Sleep Medicine & TMJ Care
              </h4>
              <p className="text-xs text-white/80 leading-relaxed mb-4">
                Dr. Greenbaum is a Diplomate of the ABDSM, providing non-invasive, custom oral appliances for obstructive sleep apnea and snoring relief.
              </p>
            </div>

            <div className="relative z-10 pt-2 border-t border-brand-700/60">
              <Link
                href="/services/sleep-apnea-snoring"
                onClick={onClose}
                className="inline-flex items-center text-xs font-semibold text-brand-100 hover:text-white transition-colors gap-1.5"
              >
                Explore Sleep Apnea Care <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Subtle background glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
