import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does metal roofing cost in Houston TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Metal roofing in Houston, TX typically costs between $7 and $14 per square foot installed, depending on the system, material gauge, and project scope. Golden Rooster Construction provides free estimates — call (800) 543-3862.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a metal roof last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professionally installed metal roof can last 40–70 years with minimal maintenance, significantly outlasting traditional asphalt shingles.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer commercial metal roofing in Houston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Golden Rooster Construction specializes in commercial metal roofing for industrial facilities, office buildings, distribution centers, and multi-unit properties across Houston and Texas.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a licensed roofing contractor in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Golden Rooster Construction is fully licensed (TX-54892) and insured to perform roofing and construction work throughout Texas.",
      },
    },
  ],
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
