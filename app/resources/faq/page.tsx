"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

const fullFaqList = [
  {
    category: "General Practice",
    question: "Where is Bethesda Center for Family & Cosmetic Dentistry located?",
    answer: "Our office is located at 6410 Rockledge Drive, Suite 106, Bethesda, MD 20817. We offer accessible ground and garage parking for all patients.",
  },
  {
    category: "General Practice",
    question: "What are your office hours?",
    answer: "We are open Monday through Thursday from 8:00 AM to 5:00 PM.",
  },
  {
    category: "New Patients",
    question: "Are you accepting new patients?",
    answer: "Yes, we warmly welcome new patients of all ages. You can request an initial appointment online or call (301) 812-4946.",
  },
  {
    category: "Dental Sleep Medicine",
    question: "What is oral appliance therapy for sleep apnea?",
    answer: "Dr. Greenbaum, a Diplomate of the ABDSM, designs custom oral appliances (SomnoDent®, TAP®) that reposition your lower jaw forward during sleep to keep your airway open without CPAP masks.",
  },
  {
    category: "Cosmetic Dentistry",
    question: "How long do porcelain veneers last?",
    answer: "With proper oral hygiene and regular dental checkups, high-quality porcelain veneers typically last 10 to 15 years or longer.",
  },
  {
    category: "Emergency Dentistry",
    question: "What should I do during a dental emergency?",
    answer: "Call our office immediately at (301) 812-4946. We prioritize emergency calls and attempt same-day care for severe toothaches or injuries.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <SubpageHero
        category="Resources"
        breadcrumbText="FAQs"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our practice, doctors, services, insurance, and sleep apnea care."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-8 max-w-3xl">
          <div className="space-y-4">
            {fullFaqList.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-brand-50/60 rounded-2xl border border-line overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-ink-950 hover:text-brand-700 transition-colors"
                  >
                    <div>
                      <span className="text-[11px] font-semibold text-brand-700 block mb-0.5">
                        {faq.category}
                      </span>
                      <span className="text-base sm:text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-700 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-ink-600 leading-relaxed border-t border-line/40 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 border border-brand-700 text-center space-y-4">
            <h3 className="text-xl font-bold">Have a specific question not listed here?</h3>
            <p className="text-xs text-white/80">Call our friendly Bethesda team directly or submit a contact request.</p>
            <div className="pt-2 flex justify-center gap-4">
              <a
                href="tel:3018124946"
                className="px-6 py-3 rounded-xl bg-white text-brand-900 font-bold text-xs hover:bg-brand-50 transition-colors"
              >
                Call (301) 812-4946
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl border border-white/30 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
