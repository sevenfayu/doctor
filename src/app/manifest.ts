import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eastern Doctor",
    short_name: "EasternDr",
    description: siteConfig.description,
    start_url: "/app",
    scope: "/",
    display: "standalone",
    background_color: "#f5f7f6",
    theme_color: "#143034",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      },
      {
        src: "/maskable-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable"
      }
    ]
  };
}
