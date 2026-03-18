import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CTABanner from "@/components/home/CTABanner";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sheet Metal's 25-year history, our core values, and the expert team delivering precision sheet metal roofing and fabrication across Texas.",
  openGraph: {
    title: "About Us | Sheet Metal",
    description:
      "25+ years of precision craftsmanship. Meet the team behind the panels.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero
        title="25 Years of Precision Craftsmanship"
        subtitle="We started with a pickup truck and a commitment to quality. Today, we're the region's most trusted sheet metal specialists."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <OurStory />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <CTABanner />
    </>
  );
}
