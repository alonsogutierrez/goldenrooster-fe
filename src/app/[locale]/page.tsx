import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTABanner from "@/components/home/CTABanner";
import ProjectsSection from "@/components/home/ProjectsSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Contratista de Techado y Construcción Brighton CO | Golden Rooster Construction"
      : "Roofing & Construction Contractor Brighton CO | Golden Rooster Construction",
    description: isEs
      ? "Contratista licenciado de techado y construcción en Brighton, CO. Techado de metal, estructura de madera, acero, tablaroca, remodelación y revestimiento. Servimos Denver, Colorado Springs, Fort Collins y más. Estimados gratis — (800) 543-3862."
      : "Licensed roofing & construction contractor in Brighton, CO. Metal roofing, wood framing, steel frame, drywall, remodeling & siding. Serving Denver, Colorado Springs, Fort Collins, Cheyenne WY & Omaha NE. Free estimates — (800) 543-3862.",
    alternates: {
      canonical: `https://www.goldenroostersroofing.com/${locale}`,
      languages: {
        en: "https://www.goldenroostersroofing.com/en",
        es: "https://www.goldenroostersroofing.com/es",
      },
    },
  };
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does metal roofing cost in Colorado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Metal roofing in Colorado typically costs between $7 and $15 per square foot installed, depending on the system, material gauge, and project scope. Golden Rooster Construction provides free on-site estimates — call (800) 543-3862.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer roofing services in Denver and Colorado Springs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Golden Rooster Construction serves the entire Front Range including Denver, Colorado Springs, Fort Collins, Pueblo, Brighton, and surrounding areas in Colorado.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a metal roof last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professionally installed metal roof can last 40–70 years with minimal maintenance, significantly outlasting traditional asphalt shingles. It also performs exceptionally well in Colorado's climate including snow loads and hail.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a licensed roofing contractor in Colorado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Golden Rooster Construction is fully licensed and insured to perform roofing and construction work in Colorado, Wyoming, Nebraska, and California.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle storm damage and insurance roofing claims in Colorado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with homeowners and commercial property owners on hail and storm damage repairs throughout Colorado, and can assist with the insurance claims process.",
      },
    },
    {
      "@type": "Question",
      name: "What construction services do you offer besides roofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beyond roofing, Golden Rooster Construction offers wood framing, steel frame construction, drywall installation, full remodeling, and siding for residential and commercial projects.",
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
      <WhyUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
