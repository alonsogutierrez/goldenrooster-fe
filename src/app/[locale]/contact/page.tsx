import { setRequestLocale, getTranslations } from "next-intl/server";
import AboutHero from "@/components/about/AboutHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <AboutHero pageKey="contact" />

      <section className="section-padding bg-gray-50" aria-label="Contact form and information">
        <div className="container-xl">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <section aria-label="Office location" className="h-80 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-gray-400">
          <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <p className="text-sm font-medium">1234 Industrial Blvd, Houston TX 77001</p>
          <p className="text-xs">{t("mapPlaceholder")}</p>
        </div>
      </section>
    </>
  );
}
