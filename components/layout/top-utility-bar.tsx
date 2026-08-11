"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, FileText } from "lucide-react";

export function TopUtilityBar() {
  return (
    <div className="hidden lg:block bg-brand-900 text-white/90 text-xs border-b border-brand-700/40 py-2">
      <div className="max-w-site mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Left: Location & Hours */}
        <div className="flex items-center space-x-6">
          <a
            href="https://maps.google.com/?q=6410+Rockledge+Drive+Suite+106+Bethesda+MD+20817"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-brand-500" />
            <span>6410 Rockledge Drive, Suite 106, Bethesda, MD 20817</span>
          </a>
          <div className="flex items-center space-x-1.5 text-white/70">
            <Clock className="w-3.5 h-3.5 text-brand-500" />
            <span>Mon – Thu: 8:00 AM – 5:00 PM</span>
          </div>
        </div>

        {/* Right: Shortcuts & Direct Phone */}
        <div className="flex items-center space-x-6">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-brand-700/80 text-brand-100">
            New Patients Welcome
          </span>
          <Link
            href="/new-patients/registration"
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-brand-500" />
            <span>Patient Forms</span>
          </Link>
          <a
            href="tel:3018124946"
            className="flex items-center space-x-1.5 font-semibold text-white hover:text-brand-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-500" />
            <span>(301) 812-4946</span>
          </a>
        </div>
      </div>
    </div>
  );
}
