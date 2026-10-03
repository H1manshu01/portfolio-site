import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL || "https://example.github.io";
  return [
    "",
    "/work",
    "/about",
    "/resume",
    ...caseStudies.map(({ slug }) => `/work/${slug}`),
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-10-03") }));
}
