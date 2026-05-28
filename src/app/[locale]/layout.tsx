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
    default: "Roofing & Construction Contractor Brighton CO | Golden Rooster Construction",
    template: "%s | Golden Rooster Construction",
  },
  description:
    "Licensed roofing & construction contractor in Brighton, CO. Serving Denver, Colorado Springs, Fort Collins, Cheyenne WY, Omaha NE & California. Metal roofing, wood framing, steel frame, dry wall, remodeling & siding. Free estimates — (720) 663-4136.",
  keywords: [
    "roofing contractor Colorado",
    "metal roofing Brighton CO",
    "construction contractor Colorado",
    "wood framing contractor Colorado",
    "steel frame construction",
    "drywall contractor Colorado",
    "roofing contractor Brighton",
    "roofing Denver CO",
    "roofing Colorado Springs",
    "remodeling contractor Colorado",
    "siding contractor Colorado",
    "commercial roofing Colorado",
    "residential roofing Colorado",
    "techado Colorado",
    "contratista construcción Colorado",
  ],
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
    title: "Roofing & Construction Contractor Brighton CO | Golden Rooster Construction",
    description:
      "Licensed roofing & construction contractor in Brighton, CO. Metal roofing, wood framing, steel frame, dry wall, remodeling & siding. Serving Colorado, Wyoming, Nebraska & California. Free estimates.",
    siteName: "Golden Rooster Construction",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Rooster Construction — Roofing & Construction Contractor Brighton CO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing & Construction Contractor Brighton CO | Golden Rooster Construction",
    description:
      "Licensed roofing & construction contractor in Brighton, CO. Metal roofing, wood framing, steel frame, dry wall, remodeling & siding. Free estimates.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://www.goldenroostersroofing.com/en",
    languages: {
      "en": "https://www.goldenroostersroofing.com/en",
      "es": "https://www.goldenroostersroofing.com/es",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.goldenroostersroofing.com/#business",
  name: "Golden Rooster Construction",
  description:
    "Licensed roofing and construction contractor in Brighton, CO. Specializing in metal roofing, wood framing, steel frame, drywall, remodeling, and siding for residential and commercial projects across Colorado, Wyoming, Nebraska, and California.",
  url: "https://www.goldenroostersroofing.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.goldenroostersroofing.com/logo-rooster.png",
  },
  image: "https://www.goldenroostersroofing.com/og-image.jpg",
  telephone: "+1-720-663-4136",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Brighton", containedInPlace: { "@type": "State", name: "Colorado" } },
    { "@type": "City", name: "Denver", containedInPlace: { "@type": "State", name: "Colorado" } },
    { "@type": "City", name: "Colorado Springs", containedInPlace: { "@type": "State", name: "Colorado" } },
    { "@type": "City", name: "Fort Collins", containedInPlace: { "@type": "State", name: "Colorado" } },
    { "@type": "City", name: "Cheyenne", containedInPlace: { "@type": "State", name: "Wyoming" } },
    { "@type": "City", name: "Omaha", containedInPlace: { "@type": "State", name: "Nebraska" } },
    { "@type": "AdministrativeArea", name: "Colorado" },
    { "@type": "AdministrativeArea", name: "Wyoming" },
    { "@type": "AdministrativeArea", name: "Nebraska" },
    { "@type": "AdministrativeArea", name: "California" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Roofing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metal Roofing", description: "Metal roof installation, repair, and remodeling for residential and commercial properties." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wood Framing", description: "Professional wood framing for residential and commercial construction projects." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Steel Frame Construction", description: "Light-gauge and structural steel frame systems for commercial and industrial buildings." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Installation", description: "Drywall installation, taping, mudding and finishing for residential and commercial interiors." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodeling", description: "Full-service residential and commercial remodeling and renovation." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing", description: "New roofing installation, replacement, and storm damage repair for all roof types." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding", description: "Vinyl, fiber cement, and metal panel siding installation and replacement." } },
    ],
  },
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
