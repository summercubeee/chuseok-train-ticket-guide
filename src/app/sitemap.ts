import type { MetadataRoute } from "next";
import { questions } from "@/data/questions";
import { routes } from "@/data/routes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/schedule`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/routes`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/how-to`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/questions`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/my-case`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/sold-out`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/sources`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const questionRoutes: MetadataRoute.Sitemap = questions.map((q) => ({
    url: `${SITE_URL}/${q.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const routeDetailRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${SITE_URL}/routes/${r.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...questionRoutes, ...routeDetailRoutes];
}
