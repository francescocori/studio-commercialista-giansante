import type { MetadataRoute } from "next";
import { STUDIO } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = STUDIO.siteUrl;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/studio`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/servizi`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/contatti`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
