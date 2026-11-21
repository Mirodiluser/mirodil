"use client";
import { motion,useReducedMotion } from "motion/react";
import { Award, BookOpen, CalendarDays, Trophy } from "lucide-react";
import { awards,type Award as AwardData } from "@/lib/awards";
import type { Locale } from "@/lib/profile";
import { MediaAsset } from "./MediaAsset";

const serif={fontFamily:"Iowan Old Style, Baskerville, Georgia, serif"};
const shell="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-[76px]";
const label="text-[10px] uppercase font-medium tracking-[.24em] text-[#c9ae83]";
const accent={
 sapphire:{border:"border-[#7c9fc6]/40",tone:"text-[#b5c9e4]",panel:"bg-[#111a26]",line:"bg-[#91accb]/50"},
 gold:{border:"border-[#d0b077]/40",tone:"text-[#e7c48d]",panel:"bg-[#1b1914]",line:"bg-[#cba76b]/50"},
 copper:{border:"border-[#bb906c]/40",tone:"text-[#d0a082]",panel:"bg-[#1b1715]",line:"bg-[#b6845e]/50"}
};

function Feature({item,lang,large=false}:{item:AwardData;lang:Locale;large?:boolean}){
 const d=awards[lang];const reduce=useReducedMotion();const palette=accent[item.accent];
 return <motion.article initial={reduce?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.16}} transition={{duration:.78,ease:[.22,1,.36,1]}}
   className={"lux-frame group grid gap-8 border p-5 sm:p-8 "+(large?"lg:grid-cols-[1.02fr_.98fr] lg:gap-14":"") + " "+palette.panel+" "+palette.border}>
  <div className="min-w-0">
   <div className="flex flex-wrap items-center justify-between gap-4"><span className={label}>{item.id==="english"?"LANGUAGE / 2026":item.id==="chess"?"CHESS / 2022":"BOXING / 2025"}</span><span className="text-[10px] tracking-[.16em] text-[#a9ad9e]">{d.awardType}</span></div>
   <div className={"mt-7 w-12 h-px "+palette.line}/>
   <h3 className={"mt-8 tracking-[-.045em] leading-[1.08] text-[#f0e9dc] "+(large?"text-[clamp(45px,5.4vw,79px)]":"text-[clamp(34px,3.8vw,55px)]")} style={serif}>{item.title}</h3>
   <div className="mt-8 flex flex-wrap items-end gap-5"><div className={"text-[clamp(88px,10vw,144px)] leading-[.9] tracking-[-.085em] "+palette.tone} style={serif}>{item.result}</div><span className="mb-2 max-w-[250px] text-[14px] leading-[1.6] text-[#d5d4c8]">{item.level}</span></div>
   <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[.08em] text-[#b4b4a5]"><CalendarDays size={15} className={palette.tone}/>{item.date}</div>
   <p className="mt-8 max-w-[610px] text-[17px] leading-[1.85] text-[#c0c5bb]">{item.summary}</p>
   <p className="mt-7 max-w-[630px] border-t border-white/10 pt-5 text-[12px] leading-[1.8] text-[#a4a99f]">{item.footnote}</p>
  </div>
  <div className={large?"flex flex-col justify-center":""}>
    <MediaAsset src={item.image} alt={item.alt} contain aspect={large?"3/2":"8/5"} caption={d.viewImage}/>
  </div>
 </motion.article>;
}

export function EnglishAward({lang}:{lang:Locale}){
 const d=awards[lang];
 return <section className="border-y border-[#c8ad83]/20 bg-[#101713]"><div className={shell+" py-24 lg:py-36"}>
  <div className="flex items-center gap-4"><BookOpen size={19} className="text-[#d4b589]"/><span className={label}>{d.academicKicker}</span></div>
  <h2 className="mt-9 max-w-[950px] text-[clamp(52px,6vw,90px)] leading-[1.08] tracking-[-.065em] text-[#eee9dc]" style={serif}>{d.academicHeading}</h2>
  <p className="mt-7 mb-14 max-w-3xl text-[17px] leading-[1.88] text-[#b0b8ac]">{d.academicIntro}</p>
  <Feature item={d.english} lang={lang} large/>
  <p className="mt-8 max-w-3xl text-[12px] leading-[1.8] text-[#a1a99c]">{d.documentationNote}</p>
 </div></section>;
}
export function SportsAwards({lang}:{lang:Locale}){
 const d=awards[lang];
 return <section className="border-b border-[#c8ad83]/20 bg-[#0e140f]"><div className={shell+" py-24 lg:py-36"}>
  <div className="flex items-center gap-4"><Trophy size={19} className="text-[#d4b589]"/><span className={label}>{d.sportKicker}</span></div>
  <h2 className="mt-9 max-w-[900px] text-[clamp(52px,6vw,88px)] leading-[1.08] tracking-[-.06em] text-[#eee9dc]" style={serif}>{d.sportHeading}</h2>
  <p className="mt-7 max-w-3xl text-[17px] leading-[1.88] text-[#b0b8ac]">{d.sportIntro}</p>
  <div className="mt-14 grid gap-8 xl:grid-cols-2">{d.sports.map(item=><Feature key={item.id} item={item} lang={lang}/>)}</div>
  <p className="mt-8 max-w-3xl text-[12px] leading-[1.85] text-[#9fa99b]">{d.documentationNote}</p>
 </div></section>;
}
