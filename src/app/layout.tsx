import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* ─────────────────────────────────────
   Fonts
───────────────────────────────────── */
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

/* ─────────────────────────────────────
   SEO Metadata
───────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.goldenroostersroofing.com"),
  title: {
    default: "Metal Roofing Contractor Houston TX | Golden Rooster Construction",
    template: "%s | Golden Rooster Construction Houston TX",
  },
  description:
    "Licensed metal roofing contractor in Houston, TX. Expert standing seam installation, metal roof repair & remodeling, and wood framing for commercial & residential projects. 25+ years. Free estimates — call (800) 543-3862.",
  keywords: [
    // Primary — high intent
    "metal roofing contractor Houston TX",
    "commercial metal roofing Houston",
    "residential metal roofing Houston",
    "standing seam metal roof Houston",
    "metal roof installation Houston TX",
    "metal roof repair Houston",
    "roofing contractor Houston Texas",
    // Secondary — services
    "wood framing contractor Texas",
    "sheet metal roofing services",
    "metal roof remodeling Houston",
    "gutter systems Houston",
    "roof flashing repair Texas",
    "commercial roofing contractor Texas",
    "industrial roofing Houston",
    // Long tail
    "licensed roofing contractor Houston TX",
    "metal roofing company near me Houston",
    "standing seam roof installation Texas",
    // Brand
    "Golden Rooster Construction",
    "Golden Rooster roofing Houston",
  ],
  authors: [{ name: "Golden Rooster Construction" }],
  creator: "Golden Rooster Construction",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.goldenroostersroofing.com",
    title: "Metal Roofing Contractor Houston TX | Golden Rooster Construction",
    description:
      "Licensed metal roofing contractor in Houston, TX. Standing seam installation, roof repair, remodeling & wood framing. 25+ years of experience. Free estimates.",
    siteName: "Golden Rooster Construction",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Rooster Construction — Metal Roofing Contractor Houston TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal Roofing Contractor Houston TX | Golden Rooster Construction",
    description:
      "Licensed metal roofing & wood framing contractor in Houston, TX. 25+ years experience. Free estimates.",
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
    canonical: "https://www.goldenroostersroofing.com",
  },
};

/* ─────────────────────────────────────
   JSON-LD Structured Data
───────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.goldenroostersroofing.com",
  name: "Golden Rooster Construction",
  alternateName: "The Golden Rooster Sheet Metal Roofing",
  description:
    "Licensed metal roofing contractor in Houston, TX. Expert in standing seam installation, metal roof repair & remodeling, and wood framing for commercial and residential projects. Over 25 years of experience.",
  url: "https://www.goldenroostersroofing.com",
  logo: "https://www.goldenroostersroofing.com/logo-icon.svg",
  image: "https://www.goldenroostersroofing.com/og-image.jpg",
  telephone: "+1-800-543-3862",
  email: "info@goldenroostersroofing.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1234 Industrial Blvd",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.7604",
    longitude: "-95.3698",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Houston",
      sameAs: "https://en.wikipedia.org/wiki/Houston",
    },
    {
      "@type": "AdministrativeArea",
      name: "Texas",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 29.7604,
      longitude: -95.3698,
    },
    geoRadius: "80467",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing & Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Metal Roofing Installation Houston TX",
          description:
            "Standing seam and exposed fastener metal roof installation for commercial and residential properties in Houston, TX.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Metal Roof Repair & Remodeling Houston",
          description:
            "Professional metal roof inspection, leak repair, panel replacement, full re-roofing, and remodeling services in Houston, TX.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wood Framing Contractor Houston TX",
          description:
            "Structural wood framing for residential and commercial construction projects in Houston, TX.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gutter Systems & Flashing Houston",
          description:
            "Custom gutter system installation, flashing, and trim work to protect your property in Houston, TX.",
        },
      },
    ],
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
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/goldenroostersroofing",
    "https://www.linkedin.com/company/goldenroostersroofing",
    "https://www.instagram.com/goldenroostersroofing",
  ],
};

/* ─────────────────────────────────────
   Root Layout
───────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-800">
        <Navbar />
        <main className="page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
