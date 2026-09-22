import { CtaBand } from "@/components/home/cta-band";
import { FeaturedWork } from "@/components/home/featured-work";
import { FoundersPreview } from "@/components/home/founders-preview";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { ServicesOverview } from "@/components/home/services-overview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedWork />
      <Process />
      <FoundersPreview />
      <CtaBand />
    </>
  );
}
