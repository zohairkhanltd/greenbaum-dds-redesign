"use client";

import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, User, Phone, Mail, ShieldCheck } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    patientType: "New Patient",
    doctorPreference: "No Preference",
    service: "Preventive Care & Exam",
    preferredDay: "Monday",
    preferredTime: "Morning",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SubpageHero
        category="Schedule Online"
        title="Book Your Dental Appointment"
        description="Request your consultation with Dr. Greenbaum or Dr. Luong in Bethesda, MD."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="bg-brand-50/60 rounded-3xl p-8 lg:p-12 border border-line shadow-card space-y-8">
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="font-bold text-2xl text-emerald-950">Appointment Request Received!</h2>
                <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{bookingData.name}</strong>. Our scheduling team will review your requested time and contact you at <strong>{bookingData.phone}</strong> to confirm your appointment.
                </p>
                <div className="pt-4">
                  <a
                    href="tel:3018124946"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs hover:bg-emerald-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Questions? Call (301) 812-4946</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-ink-950">Appointment Request Form</h2>
                  <p className="text-xs text-ink-600 mt-1">
                    Select your visit details below and our coordinator will contact you to confirm final availability.
                  </p>
                </div>

                {/* Patient Status Selector */}
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, patientType: "New Patient" })}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all ${
                      bookingData.patientType === "New Patient"
                        ? "bg-brand-700 text-white border-brand-700 shadow-sm"
                        : "bg-white text-ink-950 border-line hover:bg-brand-50"
                    }`}
                  >
                    I am a New Patient
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, patientType: "Existing Patient" })}
                    className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all ${
                      bookingData.patientType === "Existing Patient"
                        ? "bg-brand-700 text-white border-brand-700 shadow-sm"
                        : "bg-white text-ink-950 border-line hover:bg-brand-50"
                    }`}
                  >
                    I am an Existing Patient
                  </button>
                </div>

                {/* Clinical Preference & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-doctor" className="block text-xs font-bold text-ink-950 mb-1">
                      Doctor Preference
                    </label>
                    <select
                      id="book-doctor"
                      value={bookingData.doctorPreference}
                      onChange={(e) => setBookingData({ ...bookingData, doctorPreference: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950 bg-white"
                    >
                      <option value="No Preference">No Preference (First Available)</option>
                      <option value="Dr. Bernard L. Greenbaum, DDS">Dr. Bernard L. Greenbaum, DDS</option>
                      <option value="Dr. Nhu Thuy H. Luong, DDS">Dr. Nhu Thuy H. Luong, DDS</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="book-service" className="block text-xs font-bold text-ink-950 mb-1">
                      Primary Concern / Service
                    </label>
                    <select
                      id="book-service"
                      value={bookingData.service}
                      onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950 bg-white"
                    >
                      <option value="Preventive Care & Exam">Preventive Cleaning &amp; Exam</option>
                      <option value="Sleep Apnea & Snoring Consultation">Sleep Apnea &amp; Snoring Consultation</option>
                      <option value="Cosmetic Dentistry / Veneers">Cosmetic Dentistry / Veneers</option>
                      <option value="Invisalign Aligners">Invisalign&reg; Clear Aligners</option>
                      <option value="Dental Implants">Dental Implants Evaluation</option>
                      <option value="Crowns or Restorative">Restorative Crowns / Bridges</option>
                      <option value="TMJ / Jaw Pain Relief">TMJ &amp; Jaw Pain Relief</option>
                      <option value="Emergency Toothache">Emergency Toothache / Broken Tooth</option>
                    </select>
                  </div>
                </div>

                {/* Day & Time Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="book-day" className="block text-xs font-bold text-ink-950 mb-1">
                      Preferred Day of Week
                    </label>
                    <select
                      id="book-day"
                      value={bookingData.preferredDay}
                      onChange={(e) => setBookingData({ ...bookingData, preferredDay: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950 bg-white"
                    >
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="book-time" className="block text-xs font-bold text-ink-950 mb-1">
                      Preferred Time of Day
                    </label>
                    <select
                      id="book-time"
                      value={bookingData.preferredTime}
                      onChange={(e) => setBookingData({ ...bookingData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950 bg-white"
                    >
                      <option value="Morning">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon">Afternoon (1:00 PM – 5:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pt-2 border-t border-line/60">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="book-name" className="block text-xs font-bold text-ink-950 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="book-name"
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950"
                      />
                    </div>
                    <div>
                      <label htmlFor="book-phone" className="block text-xs font-bold text-ink-950 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="book-phone"
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        placeholder="(301) 812-4946"
                        className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="book-email" className="block text-xs font-bold text-ink-950 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="book-email"
                      type="email"
                      required
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950"
                    />
                  </div>

                  <div>
                    <label htmlFor="book-notes" className="block text-xs font-bold text-ink-950 mb-1">
                      Additional Notes / Health Concerns
                    </label>
                    <textarea
                      id="book-notes"
                      rows={3}
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      placeholder="Any specific symptoms or questions?"
                      className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 text-sm text-ink-950"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-bold text-sm shadow-hover transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Submit Appointment Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
