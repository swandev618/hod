import {
  HeroSlider,
  WhyInyeonSection,
  PricingSection,
  MatchingProcess,
  StatsCounter,
  ReviewCarousel,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WhyInyeonSection />
      <PricingSection />
      <MatchingProcess />
      <StatsCounter />
      <ReviewCarousel />
    </>
  );
}
