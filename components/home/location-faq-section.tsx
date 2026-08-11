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
  Sparkles,
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
    <section className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-gold-500/20">
      <div className="max-w-site mx-auto px-4 lg:px-8 space-y-20">
        {/* Location & Office Panel */}
        <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-gold-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Convenient Bethesda Location</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-white tracking-tight">
              Visit our modern <span className="italic gold-gradient-text">Bethesda studio.</span>
            </h2>
            <p className="text-sm text-white/80 font-light leading-relaxed">
              Located on Rockledge Drive near major Bethesda routes, offering ample ground and garage parking for your convenience.
            </p>

            <div className="space-y-4 text-sm text-white/90 font-light">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium text-white">Address</strong>
                  <span>6410 Rockledge Drive, Suite 106, Bethesda, MD 20817</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium text-white">Direct Line</strong>
                  <a
                    href="tel:3018124946"
                    className="text-gold-400 font-semibold hover:underline"
                  >
                    (301) 812-4946
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium text-white">Office Hours</strong>
                  <span>Monday – Thursday: 8:00 AM – 5:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Car className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-medium text-white">Parking &amp; Access</strong>
                  <span>Accessible ground-level building entrance with dedicated patient parking</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/?q=6410+Rockledge+Drive+Suite+106+Bethesda+MD+20817"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl gold-shimmer-btn font-medium text-sm shadow-card flex items-center gap-2 group"
              >
                <span className="gold-gradient-text font-semibold">Get Driving Directions</span>
                <ArrowRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
              >
                View Contact Details
              </Link>
            </div>
          </div>

          {/* Interactive Google Maps Frame */}
          <div className="lg:col-span-6 h-80 lg:h-full min-h-[360px] rounded-2xl overflow-hidden border border-gold-500/30 shadow-inner relative">
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
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-600 text-xs font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury text-ink-950 tracking-tight">
              Frequently Asked <span className="italic gold-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {homepageFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gold-500/20 overflow-hidden transition-all shadow-sm hover:border-gold-500/40"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-serif-luxury text-ink-950 hover:text-gold-600 transition-colors"
                  >
                    <span className="text-lg sm:text-xl font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-500 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-ink-600 font-light leading-relaxed border-t border-gold-500/10 pt-4">
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
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors group"
            >
              <span>Explore Full Patient FAQ Directory</span>
              <ArrowRight className="w-4 h-4 text-gold-500 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
