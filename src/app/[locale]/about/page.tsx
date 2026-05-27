import { setRequestLocale } from "next-intl/server";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CTABanner from "@/components/home/CTABanner";
import StatsSection from "@/components/home/StatsSection";
import WatchOurWorkBanner from "@/components/ui/WatchOurWorkBanner";

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
