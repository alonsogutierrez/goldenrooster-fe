import { MetadataRoute } from "next";

const BASE = "https://www.goldenroostersroofing.com";
const LOCALES = ["en", "es"] as const;

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

function localizedEntries(
  path: string,
  priority: number,
  changeFrequency: ChangeFreq = "monthly"
): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${BASE}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [l, `${BASE}/${l}${path}`])),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localizedEntries("", 1.0, "monthly"),
    ...localizedEntries("/services", 0.95, "monthly"),
    ...localizedEntries("/contact", 0.9, "monthly"),
    ...localizedEntries("/about", 0.8, "yearly"),
  ];
}
