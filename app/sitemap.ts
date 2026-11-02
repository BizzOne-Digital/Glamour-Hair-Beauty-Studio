import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/pricing", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${site.url}${path}`,
    priority: path === "" ? 1 : path === "/privacy" || path === "/terms" ? 0.3 : 0.8,
  }));
}
