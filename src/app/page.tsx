import {
  HeroSlider,
  WhyInyeonSection,
  ServicePreview,
  MatchingProcess,
  StatsCounter,
  ReviewCarousel,
  CtaBanner,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <WhyInyeonSection />
      <ServicePreview />
      <MatchingProcess />
      <StatsCounter />
      <ReviewCarousel />
      <CtaBanner />
    </>
  );
}
