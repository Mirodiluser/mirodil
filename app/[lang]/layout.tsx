import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { languages, dictionary, type Lang } from "@/lib/data";

const origin = process.env.NEXT_PUBLIC_SITE_URL || "https://mirodil-hayitov.vercel.app";
export function generateStaticParams() { return languages.map(lang => ({ lang })); }
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) return {};
  const d = dictionary[lang as Lang];
  return {
    metadataBase: new URL(origin),
    title: { default: "Mirodil Hayitov | Personal Archive", template: "%s | Mirodil Hayitov" },
    description: d.meta,
    alternates: { canonical: "/" + lang, languages: Object.fromEntries(languages.map(v => [v, "/" + v])) },
    openGraph: { type: "profile", title: "Mirodil Hayitov | Personal Archive", description: d.meta, siteName: "Mirodil Hayitov" },
    robots: { index: false, follow: false },
  };
}
export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();
  return <html lang={lang}><body className="antialiased">{children}</body></html>;
}
