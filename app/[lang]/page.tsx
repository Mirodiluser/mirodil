import {notFound} from "next/navigation";
import {ProfileSite} from "@/components/ProfileSite";
import {locales,type Locale} from "@/lib/profile";
export default async function Home({params}:{params:Promise<{lang:string}>}){
const {lang}=await params;
if(!locales.includes(lang as Locale))notFound();
return <ProfileSite lang={lang as Locale}/>;
}
