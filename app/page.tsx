import { HeroSection } from "@/components/home/hero-section";
import { PathwaysSection } from "@/components/home/pathways-section";
import { IntroSection } from "@/components/home/intro-section";
import { FeaturedExpertise } from "@/components/home/featured-expertise";
import { DoctorsSection } from "@/components/home/doctors-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ReviewsSection } from "@/components/home/reviews-section";
import { LocationFaqSection } from "@/components/home/location-faq-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PathwaysSection />
      <IntroSection />
      <FeaturedExpertise />
      <DoctorsSection />
      <WhyChooseUs />
      <ReviewsSection />
      <LocationFaqSection />
    </>
  );
}
