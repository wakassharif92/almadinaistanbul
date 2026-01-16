import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com"; // change to your domain
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/menu`, lastModified: new Date() },
  ];
}
