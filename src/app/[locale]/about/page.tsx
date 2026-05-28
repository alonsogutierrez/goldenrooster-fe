import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CTABanner from "@/components/home/CTABanner";
import StatsSection from "@/components/home/StatsSection";
import WatchOurWorkBanner from "@/components/ui/WatchOurWorkBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Sobre Nosotros | Contratista de Construcción Brighton CO | Golden Rooster"
      : "About Us | Construction Contractor Brighton CO | Golden Rooster Construction",
    description: isEs
      ? "Conoce al equipo de Golden Rooster Construction — contratistas de techado y construcción con 25+ años de experiencia en Brighton, Colorado. Misión, valores y nuestro equipo."
      : "Meet the team behind Golden Rooster Construction — licensed roofing & construction contractors with 25+ years of experience based in Brighton, Colorado. Our mission, values, and crew.",
    alternates: {
      canonical: `https://www.goldenroostersroofing.com/${locale}/about`,
      languages: {
        en: "https://www.goldenroostersroofing.com/en/about",
        es: "https://www.goldenroostersroofing.com/es/about",
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero pageKey="about" />
      <OurStory />
      <TeamSection />
      <MissionVision />
      <StatsSection />
      <ValuesSection />
      <section className="section-padding bg-white">
        <WatchOurWorkBanner />
      </section>
      <CTABanner />
    </>
  );
}
