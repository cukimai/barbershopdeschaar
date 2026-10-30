import type { MetadataRoute } from "next";
import { landingPages } from "@/data/pages";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...landingPages.map((page) => ({
      url: `${site.url}/${page.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/privacy/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
