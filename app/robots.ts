import type { MetadataRoute } from "next";
import { STUDIO } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/privacy-policy", "/cookie-policy"],
      },
    ],
    sitemap: `${STUDIO.siteUrl}/sitemap.xml`,
  };
}
