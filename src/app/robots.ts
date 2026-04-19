import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.goldenroostersroofing.com/sitemap.xml",
    host: "https://www.goldenroostersroofing.com",
  };
}
