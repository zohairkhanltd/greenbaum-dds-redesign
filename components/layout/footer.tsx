"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, Sparkles } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060C1E] text-white pt-20 pb-24 lg:pb-12 border-t border-gold-500/20 relative overflow-hidden">
      {/* Top CTA Banner in Footer */}
      <div className="max-w-site mx-auto px-4 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-[#0B1832] to-[#060C1E] rounded-3xl p-8 lg:p-12 border border-gold-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-gold-500/15 text-gold-400 border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Accepting New Patients in Bethesda</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-white tracking-tight pt-1">
              Ready to experience <span className="italic gold-gradient-text">exceptional care?</span>
            </h2>
            <p className="text-sm lg:text-base text-white/80 font-light leading-relaxed">
              Schedule your comprehensive consultation with Dr. Greenbaum or Dr. Luong today. Experience personalized, unhurried dentistry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/book"
              className="px-7 py-4 rounded-xl gold-shimmer-btn font-medium text-sm shadow-lg flex items-center gap-2 group"
            >
              <span className="text-white font-bold">Reserve Your Visit</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:3018124946"
              className="px-6 py-4 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>(301) 812-4946</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gold-500/15">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-brand-900 rounded-xl p-1.5 flex items-center justify-center border border-gold-500/40 shadow-sm">
                <img
                  src="/brand/greenbaum-mark.webp"
                  alt="Bethesda Center Logo"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <span className="font-serif-luxury text-lg text-white font-medium block leading-snug">
                  Bethesda Center for Family &amp; Cosmetic Dentistry
                </span>
                <span className="text-xs text-gold-400/90 font-light">
                  Bernard L. Greenbaum, DDS &middot; Nhu Thuy H. Luong, DDS
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              Combining advanced dental technology with a patient-first approach in Bethesda, MD for over 25 years. Comprehensive preventive, cosmetic, restorative, implant, laser, and dental sleep medicine.
            </p>

            <div className="space-y-3 text-xs text-white/80 font-light pt-1">
              <a
                href="https://maps.google.com/?q=6410+Rockledge+Drive+Suite+106+Bethesda+MD+20817"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-gold-400 transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>6410 Rockledge Drive, Suite 106, Bethesda, MD 20817</span>
              </a>
              <a
                href="tel:3018124946"
                className="flex items-center gap-2.5 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-semibold text-gold-400">(301) 812-4946</span>
              </a>
              <div className="flex items-start gap-2.5 text-white/70">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Monday – Thursday: 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Practice */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif-luxury uppercase tracking-wider text-gold-400 font-semibold">
              Our Practice
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About the Practice
                </Link>
              </li>
              <li>
                <Link href="/about/dr-greenbaum" className="hover:text-gold-400 transition-colors">
                  Meet Dr. Greenbaum, DDS
                </Link>
              </li>
              <li>
                <Link href="/about/dr-luong" className="hover:text-gold-400 transition-colors">
                  Meet Dr. Luong, DDS
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-gold-400 transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/about/technology" className="hover:text-gold-400 transition-colors">
                  Office &amp; Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Location &amp; Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif-luxury uppercase tracking-wider text-gold-400 font-semibold">
              Dental Services
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/services/preventive-dentistry" className="hover:text-gold-400 transition-colors">
                  Preventive &amp; Family Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/cosmetic-dentistry" className="hover:text-gold-400 transition-colors">
                  Cosmetic Dentistry &amp; Veneers
                </Link>
              </li>
              <li>
                <Link href="/services/restorative-dentistry" className="hover:text-gold-400 transition-colors">
                  Restorative Crowns &amp; Bridges
                </Link>
              </li>
              <li>
                <Link href="/services/dental-implants" className="hover:text-gold-400 transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/laser-periodontal-dentistry" className="hover:text-gold-400 transition-colors">
                  Laser Gum Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/sleep-apnea-snoring" className="hover:text-gold-400 transition-colors font-medium text-gold-400">
                  Sleep Apnea &amp; Snoring Care
                </Link>
              </li>
              <li>
                <Link href="/services/tmj-therapy" className="hover:text-gold-400 transition-colors">
                  TMJ &amp; Jaw Pain Relief
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-dentistry" className="hover:text-gold-400 transition-colors">
                  Emergency Urgent Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Patient Info & Resources */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif-luxury uppercase tracking-wider text-gold-400 font-semibold">
              Patients &amp; Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/new-patients" className="hover:text-gold-400 transition-colors">
                  What to Expect
                </Link>
              </li>
              <li>
                <Link href="/new-patients/registration" className="hover:text-gold-400 transition-colors">
                  Patient Registration &amp; Forms
                </Link>
              </li>
              <li>
                <Link href="/new-patients/insurance-financing" className="hover:text-gold-400 transition-colors">
                  Insurance &amp; Payment Policies
                </Link>
              </li>
              <li>
                <Link href="/new-patients/reviews" className="hover:text-gold-400 transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/new-patients/gallery" className="hover:text-gold-400 transition-colors">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources/home-care" className="hover:text-gold-400 transition-colors">
                  Post-Care Instructions
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-gold-400 transition-colors">
                  Dental Health Journal
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="hover:text-gold-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 font-light gap-4">
          <p>
            &copy; {currentYear} Bethesda Center for Family &amp; Cosmetic Dentistry. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-gold-400 transition-colors">
              Accessibility Statement (ADA)
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gold-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
