"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";

// Snapshot of verified patient reviews preserved from live source
const verifiedReviews = [
  {
    name: "Mani G",
    rating: 5,
    text: "Dr. Greenbaum and his team are extraordinary. Very attentive, gentle, and knowledgeable. The office environment is modern, calm, and extremely clean.",
    source: "Verified Google Review",
  },
  {
    name: "Marissa pagett",
    rating: 5,
    text: "Best dental experience I've had in Bethesda. Dr. Greenbaum took the time to explain everything thoroughly without rushing. The staff is warm and accommodating.",
    source: "Verified Google Review",
  },
  {
    name: "Albert K.",
    rating: 5,
    text: "Dr. Greenbaum's expertise in dental sleep medicine changed my sleep quality completely. The custom oral appliance was comfortable and effective. Highly recommend!",
    source: "Verified Google Review",
  },
  {
    name: "Judy Waxman",
    rating: 5,
    text: "I have been coming to this practice for years. Dr. Luong and the hygienists provide outstanding, gentle care. I always feel completely comfortable.",
    source: "Verified Google Review",
  },
  {
    name: "Summer Carbone",
    rating: 5,
    text: "Wonderful, professional staff and very clear communication about dental treatment. Truly a patient-first dental clinic.",
    source: "Verified Google Review",
  },
  {
    name: "Viola Forrester",
    rating: 5,
    text: "Punctual, thorough, and highly skilled. They treat patients with respect and genuine care.",
    source: "Verified Google Review",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Patient Feedback &amp; Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-ink-950 tracking-tight">
              Trusted by <span className="italic gold-gradient-text">Bethesda families.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 shrink-0 p-4 rounded-2xl bg-white border border-gold-500/25 shadow-sm">
            <div className="flex items-center gap-1 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-ink-950">
              5.0 Rating on Google
            </span>
          </div>
        </div>

        {/* Elfsight Live Google Reviews Widget Container */}
        <div className="w-full">
          <div
            className="elfsight-app-86a95421-f814-4c87-b609-cea3f253474c"
            data-elfsight-app-lazy
          />
        </div>

        {/* Verified Review Cards Snapshot Fallback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedReviews.map((rev) => (
            <div
              key={rev.name}
              className="bg-white rounded-2xl p-7 border border-gold-500/20 shadow-card hover:border-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30" />
                </div>
                <p className="text-sm text-ink-600 font-light leading-relaxed italic font-serif-luxury text-base">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-gold-500/15 flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-950">{rev.name}</span>
                <span className="text-[11px] text-gold-600 font-medium bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/new-patients/reviews"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors group"
          >
            <span>Read All Verified Patient Reviews</span>
            <ArrowRight className="w-4 h-4 text-gold-500 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
