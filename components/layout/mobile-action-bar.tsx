"use client";

import React from "react";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-line/80 p-3 shadow-floating">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href="tel:3018124946"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-brand-700/30 bg-brand-50 text-brand-900 font-semibold text-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-brand-700" />
          <span>(301) 812-4946</span>
        </a>
        <Link
          href="/book"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-700 text-white font-semibold text-sm shadow-md active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </Link>
      </div>
    </div>
  );
}
