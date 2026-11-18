import type {Metadata} from "next";
import {notFound} from "next/navigation";
import "../globals.css";
import {locales,profile,type Locale} from "@/lib/profile";

const raw=process.env.NEXT_PUBLIC_SITE_URL||process.env.RENDER_EXTERNAL_URL||"";
const site=/^https?:\/\/[^/]+/.test(raw)?raw.replace(/\/$/,""):"";
const approved=process.env.NEXT_PUBLIC_ALLOW_INDEXING==="true"&&!!site;
export function generateStaticParams(){return locales.map(lang=>({lang}));}
export async function generateMetadata({params}:{params:Promise<{lang:string}>}):Promise<Metadata>{
 const {lang}=await params;
 if(!locales.includes(lang as Locale))return {};
 const c=profile[lang as Locale];
 return {
   ...(site?{metadataBase:new URL(site)}:{}),
   title:{default:"Mirodil Hayitov | Personal Archive",template:"%s | Mirodil Hayitov"},
   description:c.meta,
   applicationName:"Mirodil Hayitov — Personal Archive",
   alternates:{canonical:"/"+lang,languages:Object.fromEntries(locales.map(l=>[l,"/"+l]))},
   openGraph:{type:"profile",title:"Mirodil Hayitov | Personal Archive",description:c.meta,siteName:"Mirodil Hayitov",locale:lang},
   robots:{index:approved,follow:approved},
 };
}
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){
 const {lang}=await params;
 if(!locales.includes(lang as Locale))notFound();
 const jsonld={"@context":"https://schema.org","@type":"ProfilePage","inLanguage":lang,
 mainEntity:{"@type":"Person","name":"Mirodil Hayitov","alternateName":"Миродил Ҳайитов",
 "birthPlace":{"@type":"Place","name":"Tashkent, Uzbekistan"},
 "description":profile[lang as Locale].meta,
 "knowsAbout":["Software development","Artificial intelligence","Uzbek language technology","Education"],
 "sameAs":["https://github.com/Mirodiluser"]}};
 return <html lang={lang}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonld).replace(/</g,"\\u003c")}}/>{children}</body></html>;
}
