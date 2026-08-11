"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  ArrowRight,
  Car,
} from "lucide-react";

const homepageFaqs = [
  {
    question: "Are you currently accepting new patients in Bethesda?",
    answer:
      "Yes! Bethesda Center for Family & Cosmetic Dentistry warmly welcomes new individuals and families. You can easily request your initial consultation online or call us directly at (301) 812-4946.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive oral evaluation, low-radiation digital X-rays (if needed), soft-tissue examination, oral cancer screening, and an unhurried consultation with Dr. Greenbaum or Dr. Luong to discuss your goals.",
  },
  {
    question: "How do you assist with dental insurance?",
    answer:
      "Our team will gladly process and file insurance claims on your behalf to help maximize your benefits. We provide transparent fee estimates before any treatment begins and offer flexible payment options.",
  },
  {
    question: "How does custom oral appliance therapy work for sleep apnea?",
    answer:
      "Dr. Greenbaum is a Diplomate of the ABDSM who designs custom-fitted oral appliances (such as SomnoDent® and TAP®). These appliances gently reposition the lower jaw forward during sleep to keep your airway open, offering a quiet, comfortable alternative to CPAP machines.",
  },
  {
    question: "What should I do if I have a dental emergency?",
    answer:
      "If you suffer a severe toothache, broken tooth, or dental injury, call our office immediately at (301) 812-4946. We prioritize emergency calls and attempt same-day appointments whenever possible.",
  },
  {
    question: "How can I request an appointment?",
    answer:
      "You can submit an online request through our 24/7 appointment booking page or call our team during office hours (Monday – Thursday, 8:00 AM – 5:00 PM).",
  },
];

export function LocationFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-brand-50/40 border-t border-line/60">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
        {/* Location & Office Panel */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-line shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Convenient Bethesda Location
            </span>
            <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
              Visit our modern Bethesda practice.
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
              Located on Rockledge Drive near major Bethesda routes, offering ample ground and garage parking for your convenience.
            </p>

            <div className="space-y-3 text-sm text-ink-950">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Address</strong>
                  <span>6410 Rockledge Drive, Suite 106, Bethesda, MD 20817</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Phone</strong>
                  <a
                    href="tel:3018124946"
                    className="text-brand-700 font-semibold hover:underline"
                  >
                    (301) 812-4946
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Office Hours</strong>
                  <span>Monday – Thursday: 8:00 AM – 5:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-semibold">Parking &amp; Access</strong>
                  <span>Accessible building entrance with dedicated patient parking</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=6410+Rockledge+Drive+Suite+106+Bethesda+MD+20817"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <span>Get Driving Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl border border-line text-ink-950 font-semibold text-sm hover:bg-brand-50 transition-colors"
              >
                View Contact Page
              </Link>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="lg:col-span-6 h-80 lg:h-full min-h-[340px] rounded-2xl overflow-hidden border border-line shadow-inner relative">
            <iframe
              title="Bethesda Center for Family & Cosmetic Dentistry Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.825666795415!2d-77.1445!3d39.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cbf107937d2f%3A0x8673f8a4521fa4d8!2s6410%20Rockledge%20Dr%20%23106%2C%20Bethesda%2C%20MD%2020817!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Homepage FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-ink-950 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {homepageFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-line overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-ink-950 hover:text-brand-700 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.question}</span>
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

          <div className="text-center pt-4">
            <Link
              href="/resources/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-500 transition-colors"
            >
              <span>Explore Full Patient FAQ Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
