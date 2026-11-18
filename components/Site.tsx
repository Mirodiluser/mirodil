"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Menu, X, Github, ScrollText } from "lucide-react";
import { dictionary, languages, records, sections, type Lang, type Section } from "@/lib/data";

const projects = ["Tahrir AI","UWED AI","Nuriyat Ilmi"];
const serif = {fontFamily:"Iowan Old Style, Baskerville, Georgia, serif"};
const ring = {background:"radial-gradient(circle at 50% 48%,rgba(188,153,94,.10) 0%,transparent 51%)"};
const pageBg = {background:"radial-gradient(ellipse at 86% 0%,rgba(109,83,55,.15),transparent 39%),radial-gradient(ellipse at 0% 54%,rgba(50,55,47,.15),transparent 39%),#0b0d0c"};

export function Site({lang,section}: {lang:Lang;section?:Section}) {
  const [mobile,setMobile] = useState(false);
  const [languageMenu,setLanguageMenu] = useState(false);
  const d=dictionary[lang];
  const p=(key:Section)=>"/"+lang+"/"+key;
  const current=section ? sections.indexOf(section) : -1;
  const detail=section ? d.detail[section] : null;
  const gold="text-[#c6a878]";
  const muted="text-[#aaa99e]";
  const rule="border-[#c6a878]/20";
  const ld={"@context":"https://schema.org","@type":"ProfilePage",mainEntity:{"@type":"Person",name:"Mirodil Hayitov",description:d.meta,knowsAbout:["Software development","Artificial intelligence","Uzbek language technology","Education"],sameAs:["https://github.com/Mirodiluser"]}};
  return <div className="relative min-h-screen overflow-hidden text-[#eee9dc]" style={pageBg}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld).replace(/</g,"\\u003c")}} />
    <div aria-hidden className="pointer-events-none fixed inset-0 opacity-[.055]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.25'/%3E%3C/svg%3E\")"}}/>
    <header className="sticky top-0 z-50 border-b border-[#c6a878]/15 bg-[#0b0d0c]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-10 lg:px-14">
        <Link href={"/"+lang} className="flex items-center gap-3.5" aria-label={d.home}>
          <span className="flex h-11 w-11 items-center justify-center border border-[#c6a878]/65 text-[19px] font-normal tracking-[-.11em] text-[#d3b786]" style={serif}>MH</span>
          <span className="hidden sm:block"><span className="block text-[12px] font-semibold tracking-[.16em]">MIRODIL HAYITOV</span><span className="mt-1 block text-[9px] tracking-[.22em] text-[#b7a17c]">{d.topline}</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {sections.map((key,i)=><Link key={key} href={p(key)} className={"group relative py-3 text-[12px] font-medium transition-colors hover:text-[#d8c19b] "+(section===key?"text-[#d8c19b]":"text-[#b6b5ad]")}><span>{d.nav[i]}</span><span className={"absolute bottom-1 left-0 h-px bg-[#c6a878] transition-all "+(section===key?"w-full":"w-0 group-hover:w-full")} /></Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button type="button" aria-label={d.languages} onClick={()=>setLanguageMenu(!languageMenu)} aria-expanded={languageMenu} className="flex items-center gap-2 border border-[#c6a878]/25 px-3 py-2.5 text-[11px] tracking-[.18em] text-[#dcd1b9] transition hover:border-[#c6a878]/60">
              {lang.toUpperCase()} <ChevronDown size={12}/>
            </button>
            {languageMenu&&<div className="absolute right-0 top-12 w-[156px] border border-[#c6a878]/30 bg-[#161916] p-1 shadow-2xl">{languages.map(l=><Link key={l} href={"/"+l+(section?"/"+section:"")} onClick={()=>setLanguageMenu(false)} className="block px-4 py-2.5 text-xs tracking-wide text-[#e2dbc9] hover:bg-[#c6a878]/10">{l==="en"?"English":l==="ru"?"Русский":"O‘zbekcha"}</Link>)}</div>}
          </div>
          <button className="flex h-10 w-10 items-center justify-center border border-[#c6a878]/25 text-[#d8c19b] lg:hidden" onClick={()=>setMobile(!mobile)} aria-label="Toggle menu">{mobile?<X size={18}/>:<Menu size={18}/>}</button>
        </div>
      </div>
      {mobile&&<nav className="grid border-t border-[#c6a878]/15 bg-[#111410] px-5 py-4 sm:px-10 lg:hidden">{sections.map((key,i)=><Link key={key} href={p(key)} onClick={()=>setMobile(false)} className="border-b border-[#c6a878]/10 py-3.5 text-sm text-[#e8dfcc]">{d.nav[i]}</Link>)}</nav>}
    </header>

    <main>
      {section && detail ? <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between border-b border-[#c6a878]/20 py-9">
          <Link href={"/"+lang} className="inline-flex items-center gap-2 text-xs text-[#bfa981] transition hover:text-white"><ArrowLeft size={15}/>{d.back}</Link>
          <span className="text-[10px] tracking-[.23em] text-[#a8987c]">{d.chapter} / 0{current+1}</span>
        </div>
        <section className="relative grid gap-16 border-b border-[#c6a878]/20 py-20 md:py-28 xl:grid-cols-[1fr_330px]">
          <div className="relative">
            <span className="text-[11px] font-medium tracking-[.28em] text-[#c6a878]">0{current+1} / {d.nav[current].toUpperCase()}</span>
            <h1 className="mt-8 max-w-[850px] text-[clamp(65px,8vw,132px)] font-normal leading-[.96] tracking-[-.065em] text-[#eee9dc]" style={serif}>{detail.heading}</h1>
            <p className="mt-10 max-w-[700px] border-l border-[#c6a878] pl-6 text-xl leading-[1.7] text-[#d3c4a8] sm:text-2xl">{detail.intro}</p>
          </div>
          <aside className="flex items-end"><div className="w-full border-t border-[#c6a878]/35 pt-7"><span className="text-[10px] tracking-[.23em] text-[#bda47b]">PERSONAL ARCHIVE / 2026</span><p className="mt-5 text-sm leading-7 text-[#989b90]">{d.source}</p></div></aside>
        </section>
        <section className="grid gap-14 border-b border-[#c6a878]/20 py-20 lg:grid-cols-[240px_1fr] lg:py-28">
          <div className="text-[11px] tracking-[.23em] text-[#c6a878]">{d.archive} / 0{current+1}</div>
          <div className="max-w-[850px] space-y-9">{detail.paras.map((para,i)=><p key={i} className={"leading-[1.9] "+(i===0?"text-[clamp(22px,2.6vw,34px)] tracking-[-.025em] text-[#e5dfd0]":"text-[16px] text-[#a8a99f] sm:text-[18px]")}>{para}</p>)}</div>
        </section>
        <section className="grid gap-5 py-20 md:grid-cols-3 md:py-28">{detail.blocks.map((b,i)=><article key={i} className="group relative min-h-[255px] overflow-hidden border border-[#c6a878]/20 bg-[#f4e5c7]/[.025] p-7 transition-colors duration-300 hover:border-[#c6a878]/60 hover:bg-[#f4e5c7]/[.045]"><div className="text-[11px] tracking-[.21em] text-[#a99470]">0{i+1} / RECORD</div><div className="mt-16 text-[29px] leading-[1.1] text-[#f0eadd]" style={serif}>{b[0]}</div><p className="mt-4 max-w-[330px] text-sm leading-6 text-[#a6a79a]">{b[1]}</p><div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c6a878] transition-all duration-500 group-hover:w-full" /></article>)}</section>
      </div> : <>
        <section className="relative mx-auto max-w-[1440px] overflow-hidden px-5 pb-10 pt-20 sm:px-10 sm:pt-28 lg:min-h-[800px] lg:px-14 lg:pb-20">
          <div className="pointer-events-none absolute -right-40 top-10 hidden h-[760px] w-[760px] items-center justify-center lg:flex" aria-hidden style={ring}>
            <div className="absolute h-[650px] w-[650px] rounded-full border border-[#c6a878]/10"/>
            <div className="absolute h-[550px] w-[550px] rounded-full border border-[#c6a878]/20"/>
            <div className="absolute h-[450px] w-[450px] rotate-[-20deg] rounded-full border border-[#c6a878]/25"/>
            <div className="absolute h-[320px] w-[320px] rotate-45 rounded-full border border-[#c6a878]/15"/>
            <span className="translate-x-7 text-[270px] italic tracking-[-.12em] text-[#c6a878]/[.12]" style={serif}>M</span>
            <div className="absolute left-1/2 top-7 h-[85%] w-px rotate-[26deg] bg-gradient-to-b from-transparent via-[#c6a878]/20 to-transparent"/>
          </div>
          <div className="relative z-10 max-w-[930px]">
            <div className="flex items-center gap-5 text-[10px] tracking-[.29em] text-[#c6a878]"><span className="h-px w-11 bg-[#c6a878]"/>{d.eyebrow}</div>
            <div className="mt-14 text-[11px] tracking-[.26em] text-[#95988f]">{d.edition}</div>
            <h1 className="mt-7 text-[clamp(76px,11.2vw,184px)] font-normal leading-[.81] tracking-[-.08em]" style={serif}>
              <span className="block text-[#f1ede5]">{d.first}</span><span className="mt-3 block italic text-[#d1b583]">{d.last}<span className="text-[#ac8954]">.</span></span>
            </h1>
            <div className="mt-16 grid max-w-[880px] gap-10 lg:grid-cols-[1fr_315px] lg:gap-20">
              <p className="max-w-[540px] text-[clamp(23px,2.5vw,35px)] leading-[1.35] tracking-[-.03em] text-[#e3ded1]" style={serif}>{d.hero}</p>
              <p className="max-w-[325px] border-l border-[#c6a878]/45 pl-6 text-sm leading-[1.95] text-[#9ca096]">{d.heronote}</p>
            </div>
          </div>
          <div className="relative z-10 mt-20 flex items-center justify-between border-t border-[#c6a878]/25 py-6 text-[10px] tracking-[.22em] text-[#a9a18e]"><span>{d.topline}</span><span className="flex items-center gap-3">{d.scroll}<span className="h-6 w-px bg-[#c6a878]/50"/></span></div>
        </section>
        <div className="border-y border-[#c6a878]/20 bg-[#c6a878]/[.035]">
          <div className="mx-auto grid max-w-[1440px] grid-cols-3 px-5 py-7 text-center text-[9px] tracking-[.16em] text-[#afa38c] sm:px-10 sm:text-[11px] lg:px-14"><span>ACADEMIC</span><span className="border-x border-[#c6a878]/25">TECHNOLOGY</span><span>INITIATIVE</span></div>
        </div>
        <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-28 sm:px-10 lg:grid-cols-[.65fr_1fr] lg:gap-24 lg:px-14 lg:py-40" id="biography">
          <div><p className="mb-8 text-[10px] tracking-[.26em] text-[#c6a878]">{d.number}</p><h2 className="max-w-[540px] text-[clamp(52px,6vw,91px)] leading-[.99] tracking-[-.06em]" style={serif}>{d.aboutTitle}</h2></div>
          <div className="flex flex-col items-start justify-center"><p className="max-w-[700px] text-[clamp(21px,2.25vw,31px)] leading-[1.67] tracking-[-.02em] text-[#c4c4b9]">{d.about}</p><Link href={p("biography")} className="group mt-12 inline-flex items-center gap-4 border-b border-[#c6a878]/50 pb-3 text-[12px] tracking-[.12em] text-[#e9c996] transition hover:gap-6">{d.biographyLink}<ArrowUpRight size={17}/></Link></div>
        </section>
        <section className="border-y border-[#c6a878]/20 bg-[#121511]/60" id="academic">
          <div className="mx-auto max-w-[1440px] px-5 py-28 sm:px-10 lg:px-14 lg:py-32">
            <div className="flex flex-wrap items-end justify-between gap-8"><div><p className="mb-6 text-[10px] tracking-[.26em] text-[#c6a878]">{d.measure}</p><h2 className="text-[clamp(50px,6vw,90px)] leading-none tracking-[-.055em]" style={serif}>{d.measureTitle}</h2></div><Link href={p("academic")} className="group inline-flex items-center gap-3 border-b border-[#c6a878]/50 pb-2 text-xs text-[#e9c996] transition hover:gap-5">{d.fullAcademic}<ArrowUpRight size={17}/></Link></div>
            <div className="mt-16 grid gap-px border border-[#c6a878]/20 bg-[#c6a878]/20 md:grid-cols-3">{records.map((r,i)=><div key={r.key} className="min-h-[245px] bg-[#111410] p-8 sm:p-10"><div className="flex justify-between text-[10px] tracking-[.17em] text-[#a99a81]"><span>0{i+1} / RECORD</span><span>{d.reported}</span></div><div className="mt-11 text-[clamp(72px,7vw,114px)] leading-none tracking-[-.075em] text-[#e8dfca]" style={serif}>{r.value}</div><div className="mt-6 text-sm tracking-[.07em] text-[#c6a878]">{r.key==="MATH" ? "MATHEMATICS · NATIONAL CERTIFICATE" : r.key}</div></div>)}</div>
            <p className="mt-7 max-w-[650px] text-[12px] leading-[1.9] text-[#8e9589]">{d.measureNote}</p>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] px-5 py-28 sm:px-10 lg:px-14 lg:py-40" id="projects">
          <div className="flex flex-wrap items-end justify-between gap-8"><div><p className="mb-6 text-[10px] tracking-[.26em] text-[#c6a878]">{d.work}</p><h2 className="max-w-[750px] text-[clamp(50px,6vw,88px)] leading-[1.05] tracking-[-.05em]" style={serif}>{d.workTitle}</h2></div><Link href={p("projects")} className="inline-flex items-center gap-3 border-b border-[#c6a878]/50 pb-2 text-xs text-[#e9c996] transition hover:gap-5">{d.fullProjects}<ArrowUpRight size={17}/></Link></div>
          <div className="mt-16 border-t border-[#c6a878]/30">{projects.map((name,i)=><div key={name} className="group grid gap-5 border-b border-[#c6a878]/20 py-8 transition-colors hover:bg-[#c6a878]/[.035] sm:grid-cols-[85px_1fr_1fr] sm:items-center"><span className="text-[11px] tracking-[.2em] text-[#a98b60]">0{i+1}</span><h3 className="text-[38px] leading-none tracking-[-.04em] text-[#ece6db] sm:text-[48px]" style={serif}>{name}</h3><p className="max-w-md text-sm leading-7 text-[#959c92]">{d.projectDescriptions[i]}</p></div>)}</div>
        </section>
        <section className="border-t border-[#c6a878]/20 bg-[#141611]" id="public-life">
          <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-28 sm:px-10 lg:grid-cols-[1fr_1fr] lg:gap-28 lg:px-14 lg:py-40">
            <div><div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#c6a878]/50 text-[#c6a878]"><ScrollText size={22} strokeWidth={1.2}/></div><p className="mb-7 text-[10px] tracking-[.26em] text-[#c6a878]">{d.closing}</p><h2 className="text-[clamp(52px,6vw,92px)] leading-[1.03] tracking-[-.06em]" style={serif}>{d.closingTitle}</h2></div>
            <div className="flex flex-col justify-end"><p className="max-w-[600px] text-[22px] leading-[1.75] text-[#b7b9aa]">{d.closingText}</p><Link href={p("public-life")} className="mt-11 inline-flex w-fit items-center gap-3 border-b border-[#c6a878]/60 pb-3 text-xs text-[#e9c996]">{d.fullPublic}<ArrowRight size={17}/></Link></div>
          </div>
        </section>
      </>}
    </main>

    <footer className="border-t border-[#c6a878]/20 bg-[#090a09]"><div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-12 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-14">
      <div><span className="text-[34px] tracking-[-.06em] text-[#d9c092]" style={serif}>MH.</span><p className="mt-4 max-w-lg text-xs leading-7 text-[#92998d]">{d.footerNote}</p></div>
      <div className="flex flex-col items-start gap-4 lg:items-end"><a href="https://github.com/Mirodiluser" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-[#c6a878] hover:text-[#f1d8a9]"><Github size={15}/>GitHub<ArrowUpRight size={13}/></a><span className="text-[10px] tracking-[.17em] text-[#787e75]">© 2026 MIRODIL HAYITOV / INDEPENDENT ARCHIVE</span></div>
    </div></footer>
  </div>;
}
