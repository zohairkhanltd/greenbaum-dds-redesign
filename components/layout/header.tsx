"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, Calendar } from "lucide-react";
import { TopUtilityBar } from "./top-utility-bar";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";
import { MobileActionBar } from "./mobile-action-bar";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [patientsDropdownOpen, setPatientsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopUtilityBar />
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-card py-3 border-b border-line/60"
            : "bg-white py-4 border-b border-line/40"
        }`}
      >
        <div className="max-w-site mx-auto px-4 lg:px-8 flex items-center justify-between">
          {/* Logo & Practice Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-brand-700 rounded-xl p-1.5 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <img
                src="/brand/greenbaum-mark.webp"
                alt="Bethesda Center for Family & Cosmetic Dentistry Logo"
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <span className="block font-bold text-sm lg:text-base text-brand-900 leading-snug group-hover:text-brand-700 transition-colors">
                Bethesda Center for <br className="hidden sm:block lg:hidden" />
                Family & Cosmetic Dentistry
              </span>
              <span className="block text-[11px] text-ink-600 tracking-wide font-medium">
                Bernard L. Greenbaum, DDS &middot; Nhu Thuy H. Luong, DDS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-ink-950">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg hover:text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Home
            </Link>

            {/* Practice Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPracticeDropdownOpen(true)}
              onMouseLeave={() => setPracticeDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-brand-700 hover:bg-brand-50 transition-colors">
                <span>Our Practice</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
              {practiceDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-floating border border-line py-2 z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    About the Practice
                  </Link>
                  <Link
                    href="/about/dr-greenbaum"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Meet Dr. Greenbaum
                  </Link>
                  <Link
                    href="/about/dr-luong"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Meet Dr. Luong
                  </Link>
                  <Link
                    href="/about/team"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Meet the Team
                  </Link>
                  <Link
                    href="/about/technology"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Office & Technology
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mega Menu Trigger */}
            <div
              className="static"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  megaMenuOpen
                    ? "bg-brand-50 text-brand-700"
                    : "hover:text-brand-700 hover:bg-brand-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    megaMenuOpen ? "rotate-180 text-brand-700" : "opacity-70"
                  }`}
                />
              </button>
            </div>

            {/* New Patients Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPatientsDropdownOpen(true)}
              onMouseLeave={() => setPatientsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-brand-700 hover:bg-brand-50 transition-colors">
                <span>New Patients</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
              {patientsDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-floating border border-line py-2 z-50">
                  <Link
                    href="/new-patients"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    What to Expect
                  </Link>
                  <Link
                    href="/new-patients/registration"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Patient Registration & Forms
                  </Link>
                  <Link
                    href="/new-patients/insurance-financing"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Insurance & Financing
                  </Link>
                  <Link
                    href="/new-patients/reviews"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Patient Reviews
                  </Link>
                  <Link
                    href="/new-patients/gallery"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Smile Gallery
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:text-brand-700 hover:bg-brand-50 transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-floating border border-line py-2 z-50">
                  <Link
                    href="/resources/home-care"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Home-Care Instructions
                  </Link>
                  <Link
                    href="/resources/blog"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Dental Health Journal
                  </Link>
                  <Link
                    href="/resources/faq"
                    className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-700"
                  >
                    Frequently Asked Questions
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg hover:text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:3018124946"
              className="text-xs font-semibold text-brand-900 hover:text-brand-700 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-700" />
              <span>(301) 812-4946</span>
            </a>
            <Link
              href="/book"
              className="px-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Book an Appointment
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:3018124946"
              className="p-2 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100"
              aria-label="Call Practice"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open main menu"
              className="p-2 rounded-lg text-ink-950 hover:bg-brand-50"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Nav Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      {/* Persistent Mobile Bottom Bar */}
      <MobileActionBar />
    </>
  );
}
