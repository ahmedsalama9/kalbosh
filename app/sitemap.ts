import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { services } from "@/lib/data";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    freq: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/about", priority: 0.8, freq: "monthly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/treatment-journey", priority: 0.8, freq: "monthly" },
    { path: "/videos", priority: 0.6, freq: "weekly" },
    { path: "/faq", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.8, freq: "weekly" },
    { path: "/appointment", priority: 0.9, freq: "monthly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${siteUrl}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  for (const s of services) {
    entries.push({
      url: `${siteUrl}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const a of articles) {
    entries.push({
      url: `${siteUrl}/blog/${a.slug}`,
      lastModified: new Date(a.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
