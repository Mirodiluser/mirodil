import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { copy, languages, type Language } from "@/lib/story";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.RENDER_EXTERNAL_URL || "";
const siteUrl = /^https?:\/\/[^/]+/.test(rawUrl) ? rawUrl.replace(/\/$/, "") : "";
const indexable = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true" && Boolean(siteUrl);

export function generateStaticParams() { return languages.map(lang => ({ lang })); }

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as Language)) return {};
  const d = copy[lang as Language];
  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: { default: "Mirodil Hayitov | Personal Archive", template: "%s | Mirodil Hayitov" },
    description: d.overview,
    applicationName: "Mirodil Hayitov — Personal Archive",
    alternates: {
      canonical: "/" + lang,
      languages: Object.fromEntries(languages.map(item => [item, "/" + item])),
    },
    openGraph: {
      type: "profile",
      title: "Mirodil Hayitov | Personal Archive",
      description: d.overview,
      siteName: "Mirodil Hayitov",
      locale: lang,
    },
    robots: { index: indexable, follow: indexable },
  };
}

export default async function Layout({children,params}: {children:React.ReactNode;params:Promise<{lang:string}>}){
  const {lang}=await params;
  if (!languages.includes(lang as Language)) notFound();
  return <html lang={lang}><body className="antialiased">{children}</body></html>;
}
