"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { PointerEvent } from "react";
import { pages, profile, type Locale } from "@/lib/profile";

const serif = { fontFamily: "'Iowan Old Style', Baskerville, Georgia, serif" };
const ease = [0.22, 1, 0.36, 1] as const;

function moveLight(event: PointerEvent<HTMLAnchorElement>) {
  if (event.pointerType !== "mouse") return;
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--light-x", String(event.clientX - rect.left) + "px");
  event.currentTarget.style.setProperty("--light-y", String(event.clientY - rect.top) + "px");
}

/** Five distinct destinations, presented as an editorial index to the archive. */
export function HomeHero({ lang }: { lang: Locale }) {
  const reduce = useReducedMotion();
  const d = profile[lang];
  return (
    <section className="relative isolate overflow-hidden border-b border-[#c6aa7d]/20">
      <div aria-hidden className="pointer-events-none absolute -right-[44vw] -top-[46vw] h-[122vw] w-[122vw] max-w-[1400px] rounded-full border border-[#c1a477]/[.08] sm:-right-[27vw] sm:-top-[31vw] lg:-right-[20vw] lg:-top-[39vw]">
        <motion.div className="absolute inset-[12%] rounded-full border border-dashed border-[#c1a477]/[.15]" animate={reduce ? undefined : { rotate: 360 }} transition={{duration: 135, ease:"linear", repeat:Infinity}} />
        <motion.div className="absolute inset-[26%] rounded-full border border-[#c1a477]/[.14]" animate={reduce ? undefined : {rotate:-360}} transition={{duration:170,ease:"linear",repeat:Infinity}}/>
        <div className="absolute inset-[40%] rounded-full border border-[#c1a477]/[.11]" />
        <span className="absolute bottom-[17%] left-[38%] -rotate-12 text-[clamp(150px,19vw,330px)] italic leading-none text-[#c1a477]/[.045]" style={serif}>M</span>
      </div>
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#95754b]/[.075] blur-[100px]"/>
      <div aria-hidden className="pointer-events-none absolute right-[-9%] top-[18%] h-96 w-96 rounded-full bg-[#b79a68]/[.055] blur-[130px]"/>

      <div className="home-hero-viewport relative mx-auto flex min-h-[calc(100svh-84px)] w-full max-w-[1500px] flex-col justify-between px-6 pb-5 pt-6 sm:px-10 sm:pb-7 sm:pt-8 lg:px-[76px] lg:pb-8 lg:pt-9">
        <motion.div initial={reduce ? false : {opacity:0,y:-9}} animate={{opacity:1,y:0}} transition={{delay:.19,duration:.8,ease}} className="relative z-10 flex items-center gap-4 text-[9px] font-medium tracking-[.22em] text-[#c3a981] sm:text-[10px]">
          <span className="h-px w-8 shrink-0 bg-[#c7ab80]/75"/>
          <span>{d.homeOverline}</span>
        </motion.div>

        <div className="home-hero-center relative z-10 grid min-w-0 flex-1 grid-cols-1 content-center items-center gap-x-12 gap-y-6 py-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)] lg:gap-y-0 lg:py-8 xl:gap-x-20">
          <div className="relative min-w-0 self-center">
            <motion.h1 initial={reduce ? false : {opacity:0,y:45,filter:"blur(12px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} transition={{duration:1.16,delay:.1,ease}} style={serif} className="home-hero-name relative z-10 text-[clamp(69px,12vw,110px)] leading-[.84] tracking-[-.086em] sm:text-[clamp(84px,10.7vw,127px)] lg:text-[clamp(89px,9.3vw,150px)]">
              <span className="block whitespace-nowrap text-[#f3eedf]">Mirodil</span>
              <span className="hero-champagne mt-[.11em] block w-fit whitespace-nowrap italic text-[#d1b790]">Hayitov<span className="text-[#ad8c5d]">.</span></span>
            </motion.h1>
            <motion.span aria-hidden="true" className="home-hero-underline mt-6 block h-px w-[min(65%,310px)] origin-left bg-gradient-to-r from-[#ddbf8d]/90 via-[#c6a779]/45 to-transparent lg:mt-10" initial={reduce ? false:{scaleX:0,opacity:0}} animate={{scaleX:1,opacity:1}} transition={{delay:.87,duration:1,ease}}/>
            <motion.span aria-hidden="true" initial={reduce ? false:{opacity:0}} animate={{opacity:1}} transition={{delay:1.05,duration:1.1}} className="pointer-events-none mt-4 block h-1 w-1 rotate-45 bg-[#c8ae87]/75"/>
          </div>

          <nav aria-label={lang==="ru"?"Разделы сайта":lang==="uz"?"Sayt bo‘limlari":"Site sections"} className="relative z-10 w-full min-w-0 max-w-[475px] justify-self-end">
            <div className="home-hero-links grid gap-[10px] sm:gap-3 lg:gap-[14px]">
              {pages.map((page,index)=>(
                <motion.div key={page} initial={reduce?false:{opacity:0,x:42,filter:"blur(8px)"}} animate={{opacity:1,x:0,filter:"blur(0px)"}} transition={{duration:.75,delay:reduce?0:1.03+index*.16,ease}}>
                  <motion.div whileHover={reduce?undefined:{x:4,scale:1.008}} whileTap={reduce?undefined:{scale:.988}} transition={{type:"spring",stiffness:390,damping:28,mass:.8}}>
                    <Link href={"/"+lang+"/"+page} prefetch onPointerMove={moveLight} className="lux-portal home-hero-link group relative isolate flex min-h-[51px] w-full items-center gap-3 overflow-hidden border border-[#c7ac81]/[.29] bg-gradient-to-r from-[#222820]/95 via-[#1b221b]/93 to-[#111812]/94 px-3.5 py-2 shadow-[0_12px_32px_rgba(0,0,0,.22),inset_0_1px_0_rgba(235,208,162,.035)] backdrop-blur-xl outline-offset-[3px] transition-[border-color,box-shadow] duration-500 hover:border-[#e5c99b]/75 hover:shadow-[0_0_0_1px_rgba(221,183,123,.15),0_18px_42px_rgba(0,0,0,.36),0_0_45px_rgba(181,132,70,.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e1c494] sm:min-h-[57px] sm:gap-4 sm:px-5 lg:min-h-[63px]">
                      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f1d8ad]/40 to-transparent opacity-45 transition-opacity duration-500 group-hover:opacity-100"/>
                      <span aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-center scale-y-0 bg-[#e4c28b] transition-transform duration-500 group-hover:scale-y-100 group-focus-visible:scale-y-100"/>
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-[#cab18b]/[.27] bg-[#c6a779]/[.055] text-[10px] tracking-[.09em] text-[#bfa47e] transition-[background-color,border-color,color,transform] duration-400 group-hover:rotate-[-10deg] group-hover:border-[#e8cf9e]/65 group-hover:bg-[#c6a779]/[.14] group-hover:text-[#f7e5c4] sm:h-9 sm:w-9">{String(index+1).padStart(2,"0")}</span>
                      <span className="relative z-10 min-w-0 flex-1 text-[clamp(23px,4.4vw,29px)] leading-[1.1] tracking-[-.03em] text-[#eee5d7] transition-[color,transform] duration-400 group-hover:translate-x-1 group-hover:text-[#ffe1b3] sm:text-[clamp(25px,3vw,32px)] lg:text-[clamp(25px,2.25vw,32px)]" style={serif}>{d.nav[index+1]}</span>
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c5a77d]/20 text-[#ae9875] transition-[border-color,color,transform,background-color] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#d6b785]/60 group-hover:bg-[#c6a779]/15 group-hover:text-[#ffdfaa]"><ArrowUpRight aria-hidden size={17} strokeWidth={1.4}/></span>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </nav>
        </div>

        <div className="home-hero-bottom relative z-10 flex items-center justify-between gap-5 border-t border-[#c5a77d]/[.20] pt-3 text-[9px] tracking-[.17em] text-[#a3957d] sm:pt-4 sm:text-[10px]">
          <span>{d.city}</span><span>{d.year}</span>
        </div>
      </div>
    </section>
  );
}
