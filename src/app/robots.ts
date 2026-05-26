import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/app", "/consultation", "/privacy", "/terms", "/medical-disclaimer"],
        disallow: ["/admin"]
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url
  };
}
