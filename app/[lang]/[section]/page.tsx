import {notFound} from "next/navigation";
import type {Metadata} from "next";
import {Archive} from "@/components/Archive";
import {copy,languages,sections,type Language,type Section} from "@/lib/story";
export function generateStaticParams(){return languages.flatMap(lang=>sections.map(section=>({lang,section})))}
export async function generateMetadata({params}:{params:Promise<{lang:string;section:string}>}):Promise<Metadata>{
const {lang,section}=await params;
if(!languages.includes(lang as Language)||!sections.includes(section as Section))return {};
const d=copy[lang as Language];const i=sections.indexOf(section as Section);
return {title:d.nav[i],description:i===0?d.bioLead:i===1?d.academicLead:i===2?d.projectsLead:d.publicLead,alternates:{canonical:"/"+lang+"/"+section,languages:Object.fromEntries(languages.map(l=>[l,"/"+l+"/"+section]))}};
}
export default async function Page({params}:{params:Promise<{lang:string;section:string}>}){
const {lang,section}=await params;
if(!languages.includes(lang as Language)||!sections.includes(section as Section))notFound();
return <Archive lang={lang as Language} section={section as Section}/>;
}
