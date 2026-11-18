import type { MetadataRoute } from "next";
import { languages, sections } from "@/lib/data";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://mirodil-hayitov.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap(lang => ["", ...sections].map(section => ({
    url: base + "/" + lang + (section ? "/" + section : ""),
    lastModified: new Date("2026-11-18"),
    changeFrequency:"monthly" as const,
    priority:section?0.6:1,
  })));
}
