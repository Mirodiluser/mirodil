import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Site } from "@/components/Site";
import { dictionary, languages, sections, type Lang, type Section } from "@/lib/data";

export function generateStaticParams() { return languages.flatMap(lang => sections.map(section => ({lang,section}))); }
export async function generateMetadata({params}: {params: Promise<{lang:string;section:string}>}): Promise<Metadata> {
  const {lang,section}=await params;
  if (!languages.includes(lang as Lang) || !sections.includes(section as Section)) return {};
  const d=dictionary[lang as Lang];
  const i=sections.indexOf(section as Section);
  return {
    title:d.nav[i], description:d.detail[section as Section].intro,
    alternates:{canonical:"/"+lang+"/"+section,languages:Object.fromEntries(languages.map(l=>[l,"/"+l+"/"+section]))}
  };
}
export default async function Page({params}: {params: Promise<{lang:string;section:string}>}) {
  const {lang,section}=await params;
  if (!languages.includes(lang as Lang) || !sections.includes(section as Section)) notFound();
  return <Site lang={lang as Lang} section={section as Section} />;
}
