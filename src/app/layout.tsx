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
  metadataBase: new URL("https://www.sheetmetalservices.com"),
  title: {
    default: "The Golden Rooster Sheet Metal Roofing | Professional Metal Roofing",
    template: "%s | The Golden Rooster Sheet Metal",
  },
  description:
    "The Golden Rooster Sheet Metal Roofing — industry-leading metal roofing, fabrication, and construction services. Over 25 years of precision craftsmanship trusted by commercial and residential clients nationwide.",
  keywords: [
    "sheet metal",
    "metal roofing",
    "sheet metal fabrication",
    "commercial roofing",
    "residential roofing",
    "gutter systems",
    "skylights",
    "metal construction",
    "standing seam",
    "metal panels",
  ],
  authors: [{ name: "Sheet Metal Services" }],
  creator: "Sheet Metal Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sheetmetalservices.com",
    title: "The Golden Rooster Sheet Metal Roofing | Professional Metal Roofing",
    description:
      "The Golden Rooster Sheet Metal Roofing — 25+ years of precision craftsmanship in metal roofing and fabrication.",
    siteName: "The Golden Rooster Sheet Metal Roofing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sheet Metal – Professional Metal Roofing & Fabrication",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheet Metal | Professional Metal Roofing & Fabrication",
    description:
      "Industry-leading sheet metal roofing and fabrication services.",
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
    canonical: "https://www.sheetmetalservices.com",
  },
};

/* ─────────────────────────────────────
   JSON-LD Structured Data
───────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.sheetmetalservices.com",
  name: "The Golden Rooster Sheet Metal Roofing",
  description:
    "Professional sheet metal roofing, fabrication, and construction services with over 25 years of experience.",
  url: "https://www.sheetmetalservices.com",
  logo: "https://www.sheetmetalservices.com/logo-icon.svg",
  image: "https://www.sheetmetalservices.com/og-image.jpg",
  telephone: "+1-800-543-3862",
  email: "info@sheetmetalservices.com",
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
    "https://www.facebook.com/sheetmetalservices",
    "https://www.linkedin.com/company/sheetmetalservices",
    "https://www.instagram.com/sheetmetalservices",
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
