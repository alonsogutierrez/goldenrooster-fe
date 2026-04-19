import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CTABanner from "@/components/home/CTABanner";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "About Us — 25 Years of Metal Roofing in Houston TX",
  description:
    "Golden Rooster Construction has delivered expert metal roofing and wood framing in Houston, TX since 1998. Licensed, insured, and trusted by commercial & residential clients across Texas. Meet our team.",
  alternates: {
    canonical: "https://www.goldenroostersroofing.com/about",
  },
  openGraph: {
    title: "About Golden Rooster Construction | Metal Roofing Contractor Houston TX",
    description:
      "25+ years of precision metal roofing craftsmanship in Houston, TX. Licensed & insured. Meet the team behind Golden Rooster Construction.",
    url: "https://www.goldenroostersroofing.com/about",
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
      <MissionVision />
      <StatsSection />
      <ValuesSection />
      <TeamSection />
      <CTABanner />
    </>
  );
}
