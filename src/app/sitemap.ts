import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/schedule`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/how-to`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/sold-out`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/sources`, changeFrequency: "monthly", priority: 0.4 },
  ];
}
