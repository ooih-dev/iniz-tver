import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date().toISOString();
  const pages = ["", "/burenie-skvazhin", "/inzhenernye-izyskaniya", "/vodosnabzhenie", "/faq", "/kontakty"];
  return pages.map((p) => ({
    url: base + p,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
