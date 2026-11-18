import type { MetadataRoute } from "next";
import {languages,sections} from "@/lib/story";
const rawUrl=process.env.NEXT_PUBLIC_SITE_URL||process.env.RENDER_EXTERNAL_URL||"";
const origin=/^https?:\/\/[^/]+/.test(rawUrl)?rawUrl.replace(/\/$/,""):"";
export default function sitemap():MetadataRoute.Sitemap{
if(!origin)return [];
return languages.flatMap(lang=>["",...sections].map(section=>({
url:origin+"/"+lang+(section?"/"+section:""),
lastModified:new Date("2026-11-18"),
changeFrequency:"monthly" as const,
priority:section?0.65:1,
})));
}
