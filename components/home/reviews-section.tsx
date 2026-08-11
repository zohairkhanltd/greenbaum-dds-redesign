"use client";

import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";

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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Patient Feedback &amp; Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-ink-950 mt-1 tracking-tight">
              Trusted by Bethesda families.
            </h2>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-ink-950">
              5.0 Star Rated on Google
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
              className="bg-brand-50/50 rounded-2xl p-6 border border-line flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-brand-700/30" />
                </div>
                <p className="text-xs lg:text-sm text-ink-600 leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between">
                <span className="text-xs font-bold text-ink-950">{rev.name}</span>
                <span className="text-[11px] text-ink-600 font-medium">
                  {rev.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/new-patients/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-500 transition-colors"
          >
            <span>Read All Verified Patient Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
