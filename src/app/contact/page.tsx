import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free estimate for your metal roofing or fabrication project. Contact Sheet Metal today — we respond within 48 hours.",
  openGraph: {
    title: "Contact Us | Sheet Metal",
    description: "Get your free, no-obligation estimate today.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="section-padding bg-gray-50" aria-label="Contact form and information">
        <div className="container-xl">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">
            {/* Form */}
            <ContactForm />
            {/* Info */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section aria-label="Office location" className="h-80 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-gray-400">
          <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <p className="text-sm font-medium">1234 Industrial Blvd, Houston TX 77001</p>
          <p className="text-xs">
            {/* TODO: Replace this div with a real map embed (Google Maps, Mapbox, etc.) */}
            Replace with your Google Maps embed
          </p>
        </div>
      </section>
    </>
  );
}
