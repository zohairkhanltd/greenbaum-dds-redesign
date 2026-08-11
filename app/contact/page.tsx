"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SubpageHero
        category="Contact Us"
        title="Get in Touch with Our Bethesda Practice"
        description="We are here to answer your questions, assist with scheduling, and provide direction to our office."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Form Column */}
            <div className="lg:col-span-7 bg-brand-50/60 rounded-3xl p-8 lg:p-12 border border-line shadow-card space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-ink-950">Send Us a Message</h2>
                <p className="text-xs text-ink-600 mt-1">
                  Fill out the form below and our team will respond promptly during business hours.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-emerald-950">Thank you for contacting us!</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                    We have received your message and will reach out to you shortly via phone or email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-ink-950 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 focus:border-brand-700 text-sm text-ink-950"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-ink-950 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(301) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 focus:border-brand-700 text-sm text-ink-950"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-ink-950 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 focus:border-brand-700 text-sm text-ink-950"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold text-ink-950 mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 focus:border-brand-700 text-sm text-ink-950 bg-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="New Patient Appointment">New Patient Appointment</option>
                        <option value="Sleep Apnea & Snoring">Sleep Apnea &amp; Snoring Care</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                        <option value="Dental Implants">Dental Implants</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-ink-950 mb-1">
                      Message / Questions *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can our team help you?"
                      className="w-full px-4 py-3 rounded-xl border border-line focus:ring-2 focus:ring-brand-500 focus:border-brand-700 text-sm text-ink-950"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-700 hover:bg-brand-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Practice Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-brand-900 text-white rounded-3xl p-8 border border-brand-700 shadow-floating space-y-6">
                <h3 className="text-xl font-bold">Bethesda Practice Details</h3>

                <div className="space-y-4 text-xs text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold text-white">Location Address</strong>
                      <span>6410 Rockledge Drive, Suite 106, Bethesda, MD 20817</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold text-white">Telephone</strong>
                      <a href="tel:3018124946" className="text-brand-100 font-semibold hover:underline">
                        (301) 812-4946
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold text-white">Office Hours</strong>
                      <span>Monday – Thursday: 8:00 AM – 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Container */}
              <div className="h-72 rounded-3xl overflow-hidden border border-line shadow-sm relative">
                <iframe
                  title="Bethesda Center Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.825666795415!2d-77.1445!3d39.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cbf107937d2f%3A0x8673f8a4521fa4d8!2s6410%20Rockledge%20Dr%20%23106%2C%20Bethesda%2C%20MD%2020817!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
