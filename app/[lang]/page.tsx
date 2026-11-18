import { notFound } from "next/navigation";
import { Site } from "@/components/Site";
import { languages, type Lang } from "@/lib/data";

export default async function Page({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  if (!languages.includes(lang as Lang)) notFound();
  return <Site lang={lang as Lang} />;
}
