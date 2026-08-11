import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/ui/subpage-hero";

export const metadata: Metadata = {
  title: "Patient Reviews | Bethesda Center for Family & Cosmetic Dentistry",
  description:
    "Read genuine Google reviews and patient feedback for Dr. Bernard L. Greenbaum and Dr. Nhu Thuy H. Luong in Bethesda, MD.",
};

const allReviews = [
  {
    name: "Mani G",
    rating: 5,
    text: "Dr. Greenbaum and his team are extraordinary. Very attentive, gentle, and knowledgeable. The office environment is modern, calm, and extremely clean.",
    source: "Google Review",
  },
  {
    name: "Marissa pagett",
    rating: 5,
    text: "Best dental experience I've had in Bethesda. Dr. Greenbaum took the time to explain everything thoroughly without rushing. The staff is warm and accommodating.",
    source: "Google Review",
  },
  {
    name: "M M",
    rating: 5,
    text: "Highly professional practice. Dr. Luong and the dental hygienists are skilled, gentle, and make every appointment a pleasant experience.",
    source: "Google Review",
  },
  {
    name: "Albert K.",
    rating: 5,
    text: "Dr. Greenbaum's expertise in dental sleep medicine changed my sleep quality completely. The custom oral appliance was comfortable and effective. Highly recommend!",
    source: "Google Review",
  },
  {
    name: "Viola Forrester",
    rating: 5,
    text: "Punctual, thorough, and highly skilled. They treat patients with respect and genuine care.",
    source: "Google Review",
  },
  {
    name: "Judy Waxman",
    rating: 5,
    text: "I have been coming to this practice for years. Dr. Luong and the hygienists provide outstanding, gentle care. I always feel completely comfortable.",
    source: "Google Review",
  },
  {
    name: "W Ennaco",
    rating: 5,
    text: "Exceptional clinical care and very responsive staff. Scheduling is efficient and treatment options are clearly explained.",
    source: "Google Review",
  },
  {
    name: "Summer Carbone",
    rating: 5,
    text: "Wonderful, professional staff and very clear communication about dental treatment. Truly a patient-first dental clinic.",
    source: "Google Review",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <SubpageHero
        category="New Patients"
        breadcrumbText="Patient Reviews"
        title="Verified Patient Reviews &amp; Testimonials"
        description="Read what our Bethesda patients say about their experience with Dr. Greenbaum, Dr. Luong, and our team."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-site mx-auto px-4 lg:px-8 space-y-12">
          {/* Elfsight Live Widget */}
          <div className="w-full">
            <div
              className="elfsight-app-86a95421-f814-4c87-b609-cea3f253474c"
              data-elfsight-app-lazy
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allReviews.map((rev) => (
              <div
                key={rev.name}
                className="bg-brand-50/60 rounded-2xl p-6 border border-line flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-brand-700/30" />
                  </div>
                  <p className="text-xs text-ink-600 leading-relaxed italic">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-line/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-ink-950">{rev.name}</span>
                  <span className="text-[11px] text-ink-600 font-medium">
                    {rev.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-900 text-white rounded-3xl p-8 lg:p-12 border border-brand-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to experience patient-first care?</h3>
              <p className="text-sm text-white/80">Schedule your consultation at our Bethesda office today.</p>
            </div>
            <Link
              href="/book"
              className="px-6 py-3.5 rounded-xl bg-white text-brand-900 font-bold text-sm hover:bg-brand-50 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-brand-700" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
