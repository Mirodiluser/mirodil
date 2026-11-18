import type {MetadataRoute} from "next";
import {locales,pages} from "@/lib/profile";
const raw=process.env.NEXT_PUBLIC_SITE_URL||process.env.RENDER_EXTERNAL_URL||"";
const site=/^https?:\/\/[^/]+/.test(raw)?raw.replace(/\/$/,""):"";
export default function sitemap():MetadataRoute.Sitemap{
if(!site)return [];
return locales.flatMap(lang=>["",...pages].map(section=>({
url:site+"/"+lang+(section?"/"+section:""),
lastModified:new Date("2026-11-18"),
changeFrequency:"monthly" as const,
priority:section?0.7:1,
})));
}
