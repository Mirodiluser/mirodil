"use client";
import {motion,useReducedMotion} from "motion/react";
import {Award,FileText,GraduationCap} from "lucide-react";
import {certifications} from "@/lib/certificates";
import type {Locale} from "@/lib/profile";
import {MediaAsset} from "./MediaAsset";

const serif={fontFamily:"Iowan Old Style, Baskerville, Georgia, serif"};
const shell="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-[76px]";
const label="text-[10px] uppercase tracking-[.23em] font-medium text-[#c7ab80]";
const theme:{[key:string]:{stroke:string;light:string;bg:string}}={
  blue:{stroke:"border-[#7eaab7]/40",light:"text-[#a4ccda]",bg:"bg-[#101c20]"},
  silver:{stroke:"border-[#b7bdc7]/35",light:"text-[#d5d9df]",bg:"bg-[#15191e]"},
  gold:{stroke:"border-[#c6a871]/35",light:"text-[#e1c28c]",bg:"bg-[#1e1b14]"},
};
export function CertificateShowcase({lang}:{lang:Locale}){
const d=certifications[lang];const reduced=useReducedMotion();
return <section className="border-y border-[#c6aa7d]/20 bg-[#101610]"><div className={shell+" py-24 lg:py-36"}>
<div className="flex items-center gap-4"><Award size={19} className="text-[#c9ad82]"/><span className={label}>CERTIFICATES / PRIVACY-REDACTED SCANS</span></div>
<h2 className="mt-10 max-w-[1050px] text-[clamp(54px,6.1vw,90px)] leading-[1.03] tracking-[-.06em]" style={serif}>{d.title}</h2><p className="mt-7 max-w-3xl text-[17px] leading-[1.85] text-[#b2b9ac]">{d.description}</p>
<div className="mt-16 space-y-16">{d.certificates.map((item,i)=>{const cl=theme[item.accent];return <motion.article key={item.id} initial={reduced?false:{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.75,ease:[.22,1,.36,1]}} className={"lux-frame grid gap-9 border p-5 sm:p-9 lg:grid-cols-[.95fr_1.05fr] lg:gap-12 "+cl.stroke+" "+cl.bg}>
<div className="flex flex-col justify-between"><div><p className={label}>0{i+1} / {item.kind}</p><h3 className="mt-8 text-[clamp(42px,4.7vw,68px)] leading-[1.04] tracking-[-.05em] text-[#f0e9dd]" style={serif}>{item.name}</h3><div className={"mt-7 text-[clamp(87px,10vw,152px)] leading-none tracking-[-.09em] "+cl.light} style={serif}>{item.score}</div><p className="mt-4 text-[15px] leading-7 text-[#c0c4b9]">{item.tagline}</p></div>
<div className="mt-12 grid grid-cols-2 gap-px border-t border-[#e6d9c0]/20 bg-[#e6d9c0]/20">{item.facts.map(f=><div key={f.label} className={"min-h-24 p-4 "+cl.bg}><p className="text-[10px] uppercase tracking-[.1em] text-[#a4aa9f]">{f.label}</p><p className="mt-3 text-[21px] text-[#eee3d1]" style={serif}>{f.value}</p></div>)}</div></div>
<div className="overflow-hidden"><MediaAsset src={item.image} alt={item.name+" — redacted certificate scan"} aspect={item.id==="sat"?"4/3":"4/5"} contain caption={lang==="ru"?"Посмотреть документ":lang==="uz"?"Hujjatni ko‘rish":"View document"}/><p className="mt-4 text-xs leading-6 text-[#adb3a7]">{d.docNote}</p></div>
</motion.article>})}</div>
<motion.div initial={reduced?false:{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}} className="lux-frame mt-16 grid gap-9 border border-dashed border-[#c6aa7d]/35 bg-[#161b16] p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-16"><div><div className="flex items-center gap-3"><GraduationCap size={22} className="text-[#cfb181]"/><p className={label}>04 / MARS IT</p></div><h3 className="mt-9 text-[clamp(55px,6vw,83px)] leading-[1] tracking-[-.06em]" style={serif}>{d.marsTitle}</h3><p className="mt-4 text-[23px] text-[#d7bb8e]" style={serif}>{d.marsSubtitle}</p><p className="mt-8 max-w-lg text-[17px] leading-[1.85] text-[#b7beb0]">{d.marsDescription}</p></div><div className="flex min-h-[270px] flex-col items-center justify-center border border-[#c6aa7d]/20 bg-[#0e130f] px-8 text-center"><FileText size={36} strokeWidth={1} className="text-[#b69d75]"/><p className="mt-7 text-[23px] text-[#d0c7b5]" style={serif}>{d.marsPending}</p></div></motion.div>
<p className="mt-11 max-w-3xl text-[12px] leading-[1.85] text-[#9da89c]">{d.disclaimer}</p>
</div></section>;
}
