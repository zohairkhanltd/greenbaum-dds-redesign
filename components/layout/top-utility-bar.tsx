"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, FileText, Sparkles } from "lucide-react";

export function TopUtilityBar() {
  return (
    <div className="hidden lg:block bg-brand-900 text-white/90 text-xs border-b border-gold-500/20 py-2.5">
      <div className="max-w-site mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Left: Location & Hours */}
        <div className="flex items-center space-x-6">
          <a
            href="https://maps.google.com/?q=6410+Rockledge+Drive+Suite+106+Bethesda+MD+20817"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-light tracking-wide">6410 Rockledge Drive, Suite 106, Bethesda, MD 20817</span>
          </a>
          <div className="flex items-center space-x-1.5 text-white/70">
            <Clock className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-light">Mon – Thu: 8:00 AM – 5:00 PM</span>
          </div>
        </div>

        {/* Right: Shortcuts & Direct Phone */}
        <div className="flex items-center space-x-6">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-gold-500/15 border border-gold-500/30 text-gold-400">
            <Sparkles className="w-3 h-3 text-gold-400" />
            Bethesda Premier Care
          </span>
          <Link
            href="/new-patients/registration"
            className="flex items-center space-x-1 hover:text-gold-400 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-gold-500" />
            <span>Patient Forms</span>
          </Link>
          <a
            href="tel:3018124946"
            className="flex items-center space-x-1.5 font-medium text-gold-400 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-semibold">(301) 812-4946</span>
          </a>
        </div>
      </div>
    </div>
  );
}
