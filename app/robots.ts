import type { MetadataRoute } from "next";
const rawUrl=process.env.NEXT_PUBLIC_SITE_URL||process.env.RENDER_EXTERNAL_URL||"";
const origin=/^https?:\/\/[^/]+/.test(rawUrl)?rawUrl.replace(/\/$/,""):"";
export default function robots():MetadataRoute.Robots{
const allow=process.env.NEXT_PUBLIC_ALLOW_INDEXING==="true"&&Boolean(origin);
return {rules:{userAgent:"*",...(allow?{allow:"/"}:{disallow:"/"})},...(allow?{sitemap:origin+"/sitemap.xml"}:{})};
}
