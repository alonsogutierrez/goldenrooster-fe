import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LanguageSelector from "@/components/ui/LanguageSelector";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.goldenroostersroofing.com"),
  title: {
    default: "Roofing & Construction Contractor | Golden Rooster Construction",
    template: "%s | Golden Rooster Construction",
  },
  description:
    "Licensed construction contractor serving Colorado, Wyoming, Nebraska & California. Expert roofing, wood framing, steel frame, dry wall, remodeling & siding. 25+ years. Free estimates — call (800) 543-3862.",
  authors: [{ name: "Golden Rooster Construction" }],
  creator: "Golden Rooster Construction",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/logo-rooster.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://www.goldenroostersroofing.com",
    title: "Roofing & Construction Contractor | Golden Rooster Construction",
    description:
      "Licensed construction contractor serving Colorado, Wyoming, Nebraska & California. Roofing, framing, steel frame, dry wall, remodeling & siding. 25+ years of experience. Free estimates.",
    siteName: "Golden Rooster Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Rooster Construction — Roofing & Construction Contractor",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.goldenroostersroofing.com",
  name: "Golden Rooster Construction",
  description:
    "Licensed metal roofing contractor in Houston, TX. Expert in standing seam installation, metal roof repair & remodeling, and wood framing.",
  url: "https://www.goldenroostersroofing.com",
  logo: "https://www.goldenroostersroofing.com/logo-rooster.png",
  image: "https://www.goldenroostersroofing.com/og-image.jpg",
  telephone: "+1-800-543-3862",
  email: "info@goldenroostersroofing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "336 Wheatberry Dr",
    addressLocality: "Brighton",
    addressRegion: "CO",
    postalCode: "80601",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.0753",
    longitude: "-104.8124",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Colorado" },
    { "@type": "AdministrativeArea", name: "Wyoming" },
    { "@type": "AdministrativeArea", name: "Nebraska" },
    { "@type": "AdministrativeArea", name: "California" },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/goldenroostersroofing",
    "https://www.linkedin.com/company/goldenroostersroofing",
    "https://www.instagram.com/goldenroostersroofing",
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "es")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-800">
        <NextIntlClientProvider messages={messages}>
          <LanguageSelector />
          <Navbar />
          <main className="page-enter">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
