"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white pt-16 pb-24 lg:pb-12 border-t border-brand-700/50">
      {/* Top CTA Banner in Footer */}
      <div className="max-w-site mx-auto px-4 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-brand-700 to-brand-900 rounded-2xl p-8 lg:p-12 border border-brand-500/30 shadow-floating flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/30 text-brand-100 mb-3 border border-brand-500/40">
              Accepting New Patients in Bethesda
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2">
              Ready to feel confident about your care?
            </h2>
            <p className="text-sm lg:text-base text-white/80 leading-relaxed">
              Schedule your comprehensive consultation with Dr. Greenbaum or Dr. Luong today. Experience personalized, unhurried dentistry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shadow-lg flex items-center gap-2"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
            <a
              href="tel:3018124946"
              className="px-6 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-100" />
              <span>(301) 812-4946</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-site mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-brand-700/40">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-700 rounded-xl p-1.5 flex items-center justify-center border border-brand-500/40">
                <img
                  src="/brand/greenbaum-mark.webp"
                  alt="Bethesda Center Logo"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  Bethesda Center for Family & Cosmetic Dentistry
                </span>
                <span className="text-xs text-brand-100/70">
                  Bernard L. Greenbaum, DDS &middot; Nhu Thuy H. Luong, DDS
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm pt-1">
              Combining advanced dental technology with a patient-first approach in Bethesda, MD for over 25 years. Comprehensive preventive, cosmetic, restorative, implant, laser, and dental sleep medicine.
            </p>

            <div className="space-y-2.5 text-xs text-white/80 pt-2">
              <a
                href="https://maps.google.com/?q=6410+Rockledge+Drive+Suite+106+Bethesda+MD+20817"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>6410 Rockledge Drive, Suite 106, Bethesda, MD 20817</span>
              </a>
              <a
                href="tel:3018124946"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <span>(301) 812-4946</span>
              </a>
              <div className="flex items-start gap-2 text-white/70">
                <Clock className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Monday – Thursday: 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Practice */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-100">
              Our Practice
            </h3>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Practice
                </Link>
              </li>
              <li>
                <Link href="/about/dr-greenbaum" className="hover:text-white transition-colors">
                  Meet Dr. Greenbaum, DDS
                </Link>
              </li>
              <li>
                <Link href="/about/dr-luong" className="hover:text-white transition-colors">
                  Meet Dr. Luong, DDS
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="hover:text-white transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/about/technology" className="hover:text-white transition-colors">
                  Office & Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Location & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-100">
              Dental Services
            </h3>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link href="/services/preventive-dentistry" className="hover:text-white transition-colors">
                  Preventive & Family Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/cosmetic-dentistry" className="hover:text-white transition-colors">
                  Cosmetic Dentistry & Veneers
                </Link>
              </li>
              <li>
                <Link href="/services/restorative-dentistry" className="hover:text-white transition-colors">
                  Restorative Crowns & Bridges
                </Link>
              </li>
              <li>
                <Link href="/services/dental-implants" className="hover:text-white transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/laser-periodontal-dentistry" className="hover:text-white transition-colors">
                  Laser Gum Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/sleep-apnea-snoring" className="hover:text-white transition-colors font-medium text-brand-100">
                  Sleep Apnea & Snoring Care
                </Link>
              </li>
              <li>
                <Link href="/services/tmj-therapy" className="hover:text-white transition-colors">
                  TMJ & Jaw Pain Relief
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-dentistry" className="hover:text-white transition-colors">
                  Emergency Urgent Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Patient Info & Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-100">
              Patients & Resources
            </h3>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link href="/new-patients" className="hover:text-white transition-colors">
                  What to Expect
                </Link>
              </li>
              <li>
                <Link href="/new-patients/registration" className="hover:text-white transition-colors">
                  Patient Registration & Forms
                </Link>
              </li>
              <li>
                <Link href="/new-patients/insurance-financing" className="hover:text-white transition-colors">
                  Insurance & Payment Policies
                </Link>
              </li>
              <li>
                <Link href="/new-patients/reviews" className="hover:text-white transition-colors">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/new-patients/gallery" className="hover:text-white transition-colors">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link href="/resources/home-care" className="hover:text-white transition-colors">
                  Post-Care Instructions
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="hover:text-white transition-colors">
                  Dental Health Journal
                </Link>
              </li>
              <li>
                <Link href="/resources/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            &copy; {currentYear} Bethesda Center for Family & Cosmetic Dentistry. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility Statement (ADA)
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
