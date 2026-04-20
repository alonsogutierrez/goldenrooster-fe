import { setRequestLocale } from "next-intl/server";
import AboutHero from "@/components/about/AboutHero";
import ContactChannels from "@/components/contact/ContactChannels";
import ContactInfo from "@/components/contact/ContactInfo";

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
