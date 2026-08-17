"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, Calendar, ArrowUpRight } from "lucide-react";
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

  const practiceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const patientsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Hover Handlers with 150ms Grace Buffer
  const handlePracticeEnter = () => {
    if (practiceTimeoutRef.current) clearTimeout(practiceTimeoutRef.current);
    setPracticeDropdownOpen(true);
  };
  const handlePracticeLeave = () => {
    practiceTimeoutRef.current = setTimeout(() => {
      setPracticeDropdownOpen(false);
    }, 150);
  };

  const handlePatientsEnter = () => {
    if (patientsTimeoutRef.current) clearTimeout(patientsTimeoutRef.current);
    setPatientsDropdownOpen(true);
  };
  const handlePatientsLeave = () => {
    patientsTimeoutRef.current = setTimeout(() => {
      setPatientsDropdownOpen(false);
    }, 150);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setResourcesDropdownOpen(true);
  };
  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesDropdownOpen(false);
    }, 150);
  };

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  };
  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 lg:pt-5 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div
          className={`max-w-site mx-auto rounded-full bg-white/95 backdrop-blur-md border border-brand-100/80 shadow-lg px-4 lg:px-6 py-2 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
            isScrolled ? "shadow-xl border-brand-200/90 bg-white/98" : ""
          }`}
        >
          {/* Logo & Practice Title */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-dark p-1.5 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="/brand/greenbaum-mark.webp"
                alt="Bethesda Center for Family & Cosmetic Dentistry Logo"
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <span className="block font-extrabold text-xs sm:text-sm text-brand-dark leading-tight group-hover:text-brand-primary transition-colors">
                Greenbaum DDS
              </span>
              <span className="block text-[10px] text-ink-600 font-medium tracking-tight">
                Family &amp; Cosmetic Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-semibold text-xs xl:text-sm text-ink-950">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-full hover:text-brand-dark hover:bg-brand-50 transition-colors"
            >
              Home
            </Link>

            {/* Practice Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={handlePracticeEnter}
              onMouseLeave={handlePracticeLeave}
            >
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-brand-dark hover:bg-brand-50 transition-colors">
                <span>Our Practice</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
              {practiceDropdownOpen && (
                <div
                  onMouseEnter={handlePracticeEnter}
                  onMouseLeave={handlePracticeLeave}
                  className="absolute top-full left-0 w-56 pt-2 z-50 before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']"
                >
                  <div className="bg-white rounded-2xl shadow-floating border border-brand-100 py-2">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      About the Practice
                    </Link>
                    <Link
                      href="/about/dr-greenbaum"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Meet Dr. Greenbaum
                    </Link>
                    <Link
                      href="/about/dr-luong"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Meet Dr. Luong
                    </Link>
                    <Link
                      href="/about/team"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Meet the Team
                    </Link>
                    <Link
                      href="/about/technology"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Office &amp; Technology
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Mega Menu Trigger */}
            <div
              className="static py-1"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors ${
                  megaMenuOpen
                    ? "bg-brand-50 text-brand-dark"
                    : "hover:text-brand-dark hover:bg-brand-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    megaMenuOpen ? "rotate-180 text-brand-dark" : "opacity-70"
                  }`}
                />
              </button>
            </div>

            {/* New Patients Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={handlePatientsEnter}
              onMouseLeave={handlePatientsLeave}
            >
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-brand-dark hover:bg-brand-50 transition-colors">
                <span>New Patients</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
              {patientsDropdownOpen && (
                <div
                  onMouseEnter={handlePatientsEnter}
                  onMouseLeave={handlePatientsLeave}
                  className="absolute top-full left-0 w-60 pt-2 z-50 before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']"
                >
                  <div className="bg-white rounded-2xl shadow-floating border border-brand-100 py-2">
                    <Link
                      href="/new-patients"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      What to Expect
                    </Link>
                    <Link
                      href="/new-patients/registration"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Patient Forms
                    </Link>
                    <Link
                      href="/new-patients/insurance-financing"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Insurance &amp; Financing
                    </Link>
                    <Link
                      href="/new-patients/reviews"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Patient Reviews
                    </Link>
                    <Link
                      href="/new-patients/gallery"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Smile Gallery
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
            >
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:text-brand-dark hover:bg-brand-50 transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>
              {resourcesDropdownOpen && (
                <div
                  onMouseEnter={handleResourcesEnter}
                  onMouseLeave={handleResourcesLeave}
                  className="absolute top-full left-0 w-56 pt-2 z-50 before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']"
                >
                  <div className="bg-white rounded-2xl shadow-floating border border-brand-100 py-2">
                    <Link
                      href="/resources/home-care"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Home-Care Instructions
                    </Link>
                    <Link
                      href="/resources/blog"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Dental Health Journal
                    </Link>
                    <Link
                      href="/resources/faq"
                      className="block px-4 py-2 text-sm text-ink-950 hover:bg-brand-50 hover:text-brand-dark font-medium"
                    >
                      Frequently Asked Questions
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-full hover:text-brand-dark hover:bg-brand-50 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Split-Pill CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:3018124946"
              className="text-xs font-bold text-brand-dark hover:text-brand-primary flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-full hover:bg-brand-50"
            >
              <Phone className="w-3.5 h-3.5 text-brand-primary" />
              <span>(301) 812-4946</span>
            </a>
            <Link
              href="/book"
              className="group inline-flex items-center gap-2.5 p-1 pl-4 bg-brand-dark hover:bg-brand-primary text-white font-bold text-xs xl:text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span>Reserve Visit</span>
              <span className="w-7 h-7 rounded-full bg-white/20 text-white group-hover:bg-white group-hover:text-brand-dark flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-45" />
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger & Call Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:3018124946"
              className="p-2 rounded-full bg-brand-50 text-brand-dark hover:bg-brand-100"
              aria-label="Call Practice"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open main menu"
              className="p-2 rounded-full text-ink-950 hover:bg-brand-50"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <div
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <MegaMenu
            isOpen={megaMenuOpen}
            onClose={() => setMegaMenuOpen(false)}
          />
        </div>
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
