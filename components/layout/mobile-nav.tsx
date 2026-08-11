"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone, Calendar, MapPin, X } from "lucide-react";
import { serviceItems } from "@/lib/services-data";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [openSection, setOpenSection] = useState<string | null>("services");

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white overflow-y-auto">
      {/* Drawer Header */}
      <div className="flex items-center justify-between p-4 border-b border-line">
        <div className="flex items-center gap-2">
          <img
            src="/brand/greenbaum-mark.webp"
            alt="Greenbaum DDS Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-sm text-brand-900 leading-tight">
            Bethesda Center for <br />
            Family & Cosmetic Dentistry
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 rounded-lg text-ink-600 hover:bg-brand-50 hover:text-ink-950"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Accordion Menu List */}
      <div className="flex-1 p-4 space-y-3">
        <Link
          href="/"
          onClick={onClose}
          className="block font-semibold text-ink-950 py-2 border-b border-line/50"
        >
          Home
        </Link>

        {/* Our Practice Accordion */}
        <div className="border-b border-line/50 py-2">
          <button
            onClick={() => toggleSection("practice")}
            className="w-full flex items-center justify-between font-semibold text-ink-950 text-left py-1"
          >
            <span>Our Practice</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSection === "practice" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === "practice" && (
            <div className="mt-2 pl-3 space-y-2 text-sm">
              <Link
                href="/about"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                About the Practice
              </Link>
              <Link
                href="/about/dr-greenbaum"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Meet Dr. Greenbaum
              </Link>
              <Link
                href="/about/dr-luong"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Meet Dr. Luong
              </Link>
              <Link
                href="/about/team"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Meet the Team
              </Link>
              <Link
                href="/about/technology"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Office & Technology
              </Link>
            </div>
          )}
        </div>

        {/* Services Accordion */}
        <div className="border-b border-line/50 py-2">
          <button
            onClick={() => toggleSection("services")}
            className="w-full flex items-center justify-between font-semibold text-ink-950 text-left py-1"
          >
            <span>Dental Services</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSection === "services" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === "services" && (
            <div className="mt-2 pl-3 space-y-2 text-sm">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block text-ink-600 hover:text-brand-700 py-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* New Patients Accordion */}
        <div className="border-b border-line/50 py-2">
          <button
            onClick={() => toggleSection("new-patients")}
            className="w-full flex items-center justify-between font-semibold text-ink-950 text-left py-1"
          >
            <span>New Patients</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSection === "new-patients" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === "new-patients" && (
            <div className="mt-2 pl-3 space-y-2 text-sm">
              <Link
                href="/new-patients"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                What to Expect
              </Link>
              <Link
                href="/new-patients/registration"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Patient Registration & Forms
              </Link>
              <Link
                href="/new-patients/insurance-financing"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Insurance & Financing
              </Link>
              <Link
                href="/new-patients/reviews"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Patient Reviews
              </Link>
              <Link
                href="/new-patients/gallery"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Smile Gallery
              </Link>
            </div>
          )}
        </div>

        {/* Resources Accordion */}
        <div className="border-b border-line/50 py-2">
          <button
            onClick={() => toggleSection("resources")}
            className="w-full flex items-center justify-between font-semibold text-ink-950 text-left py-1"
          >
            <span>Resources</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                openSection === "resources" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === "resources" && (
            <div className="mt-2 pl-3 space-y-2 text-sm">
              <Link
                href="/resources/home-care"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Home-Care Instructions
              </Link>
              <Link
                href="/resources/blog"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Dental Health Journal
              </Link>
              <Link
                href="/resources/faq"
                onClick={onClose}
                className="block text-ink-600 hover:text-brand-700 py-1"
              >
                Frequently Asked Questions
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="block font-semibold text-ink-950 py-2"
        >
          Contact & Location
        </Link>
      </div>

      {/* Mobile Drawer Bottom Actions */}
      <div className="p-4 bg-brand-50 border-t border-line space-y-3">
        <div className="flex items-center gap-2 text-xs text-ink-600">
          <MapPin className="w-4 h-4 text-brand-700 shrink-0" />
          <span>6410 Rockledge Dr #106, Bethesda, MD</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:3018124946"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-brand-700 text-brand-700 font-semibold text-sm hover:bg-brand-100 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Practice</span>
          </a>
          <Link
            href="/book"
            onClick={onClose}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-700 text-white font-semibold text-sm hover:bg-brand-500 transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
