"use client";
import {motion,useReducedMotion} from "motion/react";
import {ArrowUpRight,Newspaper,Radio,BookOpen} from "lucide-react";
import {press,newspaperImages} from "@/lib/media";
import type {Locale} from "@/lib/profile";
import {MediaAsset} from "./MediaAsset";

const serif={fontFamily:"Iowan Old Style, Baskerville, Georgia, serif"};
const shell="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-[76px]";
const label="text-[10px] tracking-[.24em] font-medium text-[#c9ad82]";
function Intro({lang}:{lang:Locale}){
const d=press[lang];return <section className="relative overflow-hidden border-b border-[#c6aa7d]/20">
<div aria-hidden className="pointer-events-none absolute -right-20 top-16 text-[300px] italic text-[#c9ab7b]/[.04]" style={serif}>M</div>
<div className={shell+" relative pb-16 pt-24 lg:pb-24 lg:pt-36"}><p className={label}>05 / CULTURE · BROADCAST · PUBLICATION</p><h1 className="mt-12 max-w-[1080px] text-[clamp(69px,8.9vw,137px)] leading-[.93] tracking-[-.07em] text-[#f3ede0]" style={serif}>{d.title}<span className="text-[#bd9d6c]">.</span></h1>
<p className="mt-12 max-w-3xl border-l border-[#c6aa7d]/60 pl-7 text-[clamp(21px,2.3vw,31px)] leading-[1.65] text-[#bbc1b6]">{d.lead}</p>
<div className="mt-20 flex justify-between border-t border-[#c6aa7d]/20 pt-6 text-[10px] tracking-[.16em] text-[#a89b85]"><span>MIRODIL HAYITOV / PRESS ARCHIVE</span><span>05 / 05</span></div></div></section>}
export function MediaPage({lang}:{lang:Locale}){
const d=press[lang];const reduced=useReducedMotion();
return <><Intro lang={lang}/>
<section className={shell+" py-24 lg:py-32"}><div className="flex items-center gap-4"><Radio size={18} className="text-[#c9ac7e]"/><span className={label}>01 / BROADCAST</span></div><h2 className="mt-9 text-[clamp(51px,5.8vw,83px)] leading-[1.08] tracking-[-.055em]" style={serif}>{d.television}</h2>
<div className="mt-16 space-y-24 lg:space-y-32">{d.programs.map((item,i)=><article key={item.title} className={"lux-interview-row grid items-center gap-12 lg:gap-20 "+(i===0?"lg:grid-cols-[1.1fr_.9fr]":"lg:grid-cols-[.9fr_1.1fr]")}>
<div className={i===1?"lg:order-2":""}><MediaAsset src={item.image} alt={item.alt} aspect={i===0?"4/5":"16/10"} caption={d.openPhoto} contain/></div>
<motion.div initial={reduced?false:{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.75,ease:[.22,1,.36,1]}} className={i===1?"lg:order-1":""}>
<p className={label}>{item.overline}</p><div className="mt-7 h-px w-16 bg-[#c9ac7e]/55"/><h3 className="mt-11 text-[clamp(54px,6.1vw,91px)] leading-[1.03] tracking-[-.055em] text-[#efe7d9]" style={serif}>{item.title}</h3><p className="mt-9 max-w-xl text-[clamp(19px,2vw,25px)] leading-[1.85] text-[#b7bfb1]">{item.intro}</p><p className="mt-9 border-t border-[#c6aa7d]/20 pt-7 text-[12px] leading-7 text-[#a6ac9e]">{d.sourcesNote}</p>
</motion.div></article>)}</div><p className="mt-16 max-w-2xl border-t border-[#c6aa7d]/25 pt-6 text-[13px] leading-[1.75] text-[#a7a99e]">{d.broadcastNote}</p></section>
<section className="border-t border-[#c6aa7d]/20 bg-[#141915]"><div className={shell+" py-24 lg:py-36"}><div className="flex items-center gap-4"><Newspaper size={18} className="text-[#c9ac7e]"/><span className={label}>02 / PRINT MEDIA</span></div>
<div className="mt-10 grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-20"><div><p className={label}>{d.issueLabel}</p><h2 className="mt-7 text-[clamp(61px,7.3vw,112px)] leading-[.96] tracking-[-.055em]" style={serif}>{d.newspaperTitle}</h2><p className="mt-8 text-[17px] tracking-[.015em] text-[#dbbc8c]">{d.issue}</p><p className="mt-9 max-w-xl text-[clamp(19px,2.1vw,27px)] leading-[1.85] text-[#b8bfb0]">{d.newspaperSummary}</p></div>
<div className="grid gap-7 sm:grid-cols-2">{newspaperImages.map((photo,i)=><div key={photo.src}><MediaAsset src={photo.src} alt={i===0?d.frontTitle:d.featureTitle} aspect="3/4" contain caption={d.openPhoto}/><p className="mt-5 text-[12px] tracking-[.14em] text-[#d2b48a]">{i===0?d.frontTitle:d.featureTitle}</p></div>)}</div></div>
</div></section></>;
}
