import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {ProfileSite} from "@/components/ProfileSite";
import {locales,pages,profile,type Locale,type Page} from "@/lib/profile";
export function generateStaticParams(){return locales.flatMap(lang=>pages.map(section=>({lang,section})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;section:string}>}):Promise<Metadata>{
const {lang,section}=await params;
if(!locales.includes(lang as Locale)||!pages.includes(section as Page))return {};
const d=profile[lang as Locale];
const i=pages.indexOf(section as Page);
const description=[d.bioSubtitle,d.academicSubtitle,d.projectsSubtitle,d.lifeSubtitle][i];
return {title:d.nav[i+1],description,alternates:{canonical:"/"+lang+"/"+section,languages:Object.fromEntries(locales.map(l=>[l,"/"+l+"/"+section]))}};
}
export default async function PageView({params}:{params:Promise<{lang:string;section:string}>}){
const {lang,section}=await params;
if(!locales.includes(lang as Locale)||!pages.includes(section as Page))notFound();
return <ProfileSite lang={lang as Locale} page={section as Page}/>;
}
