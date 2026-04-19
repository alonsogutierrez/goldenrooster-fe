import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Metal Roofing Contractor Houston TX | Golden Rooster Construction",
  description:
    "Golden Rooster Construction — licensed metal roofing contractor in Houston, TX. Standing seam installation, metal roof repair & remodeling, and wood framing. 25+ years. Free estimates: (800) 543-3862.",
  alternates: {
    canonical: "https://www.goldenroostersroofing.com",
  },
};

/* ─────────────────────────────────────
   FAQ Schema — aparece como rich snippet en Google
───────────────────────────────────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does metal roofing cost in Houston TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Metal roofing in Houston, TX typically costs between $7 and $14 per square foot installed, depending on the system (standing seam vs. exposed fastener), material gauge, and project scope. Golden Rooster Construction provides free, detailed estimates — call (800) 543-3862.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a metal roof last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professionally installed metal roof can last 40–70 years with minimal maintenance, significantly outlasting traditional asphalt shingles. Standing seam systems offer the longest lifespan due to their concealed fastener design.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer commercial metal roofing in Houston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Golden Rooster Construction specializes in commercial metal roofing for industrial facilities, office buildings, distribution centers, and multi-unit properties across Houston and the greater Texas area.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a licensed roofing contractor in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Golden Rooster Construction is fully licensed (TX-54892) and insured to perform roofing and construction work throughout Texas. We carry full liability insurance and workers' compensation coverage.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
