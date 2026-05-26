import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = ["/", "/app", "/consultation", "/privacy", "/terms", "/medical-disclaimer"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
