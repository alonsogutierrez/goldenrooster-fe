import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import AboutHero from "@/components/about/AboutHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactInfo from "@/components/contact/ContactInfo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";

  return {
    title: isEs
      ? "Contacto | Estimado Gratis de Techado y Construcción | Golden Rooster"
      : "Contact | Free Roofing & Construction Estimate Brighton CO | Golden Rooster",
    description: isEs
      ? "Solicita tu estimado gratis con Golden Rooster Construction en Brighton, CO. Respondemos en menos de 48 horas. Techado, construcción, remodelación — servicio en Colorado, Wyoming, Nebraska y California."
      : "Request your free estimate from Golden Rooster Construction in Brighton, CO. We respond within 48 hours. Roofing, framing, remodeling — serving Colorado, Wyoming, Nebraska & California. Call (720) 663-4136.",
    alternates: {
      canonical: `https://www.goldenroostersroofing.com/${locale}/contact`,
      languages: {
        en: "https://www.goldenroostersroofing.com/en/contact",
        es: "https://www.goldenroostersroofing.com/es/contact",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero pageKey="contact" />

      <section className="section-padding bg-gray-50" aria-label="Contact channels and information">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto space-y-10">
            <ContactChannels />

            <div className="border-t border-gray-200 pt-10">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
