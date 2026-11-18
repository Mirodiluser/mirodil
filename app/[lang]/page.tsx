import {notFound} from "next/navigation";
import {Archive} from "@/components/Archive";
import {languages,type Language} from "@/lib/story";
export default async function Page({params}:{params:Promise<{lang:string}>}){
 const {lang}=await params;
 if(!languages.includes(lang as Language))notFound();
 return <Archive lang={lang as Language}/>;
}
