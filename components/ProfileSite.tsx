"use client";

import Link from "next/link";
import {useEffect,useState} from "react";
import {motion,MotionConfig,useReducedMotion,useScroll,useSpring} from "motion/react";
import {ArrowUpRight,ChevronDown,FileText,Globe2,Menu,X} from "lucide-react";
import {locales,pages,profile,sourceLinks,type Locale,type Page} from "@/lib/profile";
import {CertificateShowcase} from "./CertificateShowcase";
import {MediaPage} from "./MediaPage";
import {HomeHero} from "./HomeHero";
import {EnglishAward,SportsAwards} from "./AwardsShowcase";

const serif={fontFamily:"'Iowan Old Style', Baskerville, Georgia, serif"};
const shell="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-[76px]";
const muted="text-[#a3a89f]";
const label="text-[10px] tracking-[.24em] uppercase font-medium text-[#c5a87c]";
const ring="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4b584]";
const curve=[0.22,1,0.36,1] as const;
const projectLinks={
  uz:{website:"TAHRIR AI saytini ochish",code:"GitHub · dastur kodi"},
  ru:{website:"Открыть платформу TAHRIR AI",code:"GitHub · исходный код"},
  en:{website:"Visit TAHRIR AI platform",code:"GitHub · source code"}
};

function Eyebrow({children,index}:{children:React.ReactNode;index?:string}){
return <div className="flex items-center gap-4"><span className="h-px w-8 bg-[#c2a47a]"/><span className={label}>{index?index+" / ":""}{children}</span></div>;
}
function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){
const reduce=useReducedMotion();
return <motion.div className={className} initial={reduce?false:{opacity:0,y:24,filter:"blur(6px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} viewport={{once:true,amount:0.15}} transition={{duration:0.85,delay,ease:curve}}>{children}</motion.div>;
}
function Nav({lang,section}:{lang:Locale;section?:Page}){
const d=profile[lang];
const [mobile,setMobile]=useState(false);
const [languages,setLanguages]=useState(false);
useEffect(()=>{setMobile(false);setLanguages(false)},[lang,section]);
const entries:[string,string][]=[[d.nav[0],"/"+lang],...pages.map((key,i)=>[d.nav[i+1],"/"+lang+"/"+key] as [string,string])];
return <header className="sticky top-0 z-50 border-b border-[#c6aa7d]/20 bg-[#0b0f0d]/90 backdrop-blur-2xl">
<div className={shell+" flex h-[84px] items-center justify-between gap-5"}>
<Link href={"/"+lang} aria-label="Mirodil Hayitov" className={"flex min-w-0 items-center gap-4 "+ring}>
<motion.span whileHover={{scale:1.04,rotate:-2}} transition={{type:"spring",stiffness:320,damping:20}} className="flex h-12 w-12 items-center justify-center border border-[#c8ac7e]/65 text-[23px] tracking-[-.12em] text-[#edd2a7]" style={serif}>MH<span className="text-[#a78351]">.</span></motion.span>
<span className="hidden sm:flex flex-col gap-1.5"><strong className="text-[11px] tracking-[.16em] text-[#f0ecdf]">MIRODIL HAYITOV</strong><span className="text-[9px] tracking-[.23em] text-[#9a9e92]">{d.k}</span></span></Link>
<nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label={d.navLabel}>
{entries.map(([name,url],i)=>{const active=i===0?!section:section===pages[i-1];return <Link prefetch href={url} key={url} aria-current={active?"page":undefined} className={"relative py-7 text-[11px] tracking-[.04em] "+ring+(active?" text-[#ebd1a2]":" text-[#adb3a8] hover:text-[#ebd1a2]")}>
<motion.span className="inline-block" whileHover={{y:-2}} whileTap={{scale:0.96}} transition={{type:"spring",stiffness:400,damping:24}}>{name}</motion.span>
{active&&<motion.span layoutId="active-nav" transition={{type:"spring",stiffness:400,damping:32}} className="absolute bottom-4 left-0 right-0 h-px bg-[#c5a779]"/>}
</Link>})}</nav>
<div className="flex items-center gap-2">
<div className="relative"><motion.button whileTap={{scale:0.95}} type="button" aria-label="Language" aria-expanded={languages} onClick={()=>setLanguages(!languages)} className={"flex h-10 items-center gap-2 border border-[#c6aa7d]/30 px-3 text-[11px] text-[#e5cba0] transition hover:border-[#c6aa7d]/70 "+ring}><Globe2 size={14}/>{lang.toUpperCase()}<ChevronDown size={12}/></motion.button>
{languages&&<motion.div initial={{opacity:0,y:-7,scale:0.98}} animate={{opacity:1,y:0,scale:1}} transition={{duration:0.2}} className="absolute right-0 top-12 z-50 w-44 border border-[#c6aa7d]/30 bg-[#151b16] p-1.5 shadow-2xl">{locales.map(l=><Link className="block px-3 py-3 text-[12px] text-[#e7dfd0] transition-colors hover:bg-[#c6aa7d]/15" href={"/"+l+(section?"/"+section:"")} key={l}>{l==="uz"?"O‘zbekcha":l==="ru"?"Русский":"English"}</Link>)}</motion.div>}
</div>
{<motion.button whileTap={{scale:0.92}} type="button" onClick={()=>setMobile(!mobile)} aria-label="Toggle navigation" aria-expanded={mobile} className={"flex h-10 w-10 items-center justify-center border border-[#c6aa7d]/30 text-[#e5cba0] lg:hidden "+ring}>{mobile?<X size={18}/>:<Menu size={18}/>}</motion.button>}</div></div>
{mobile&&<motion.nav initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} className={shell+" grid overflow-hidden border-t border-[#c6aa7d]/20 bg-[#0d130e] py-4 lg:hidden"}>{entries.map(([name,url],i)=><Link className={"border-b border-[#c6aa7d]/15 py-4 text-[15px] "+(i===0&&!section||pages[i-1]===section?"text-[#e7ca9c]":"text-[#d2d3c7]")} key={url} href={url}>{name}</Link>)}</motion.nav>}
</header>;
}
function Footer({lang,home}:{lang:Locale;home:boolean}){
const d=profile[lang];
return <footer className="border-t border-[#c6aa7d]/20 bg-[#080b09]"><div className={shell+" flex min-h-[174px] items-center"}>
<span className="block text-[49px] italic tracking-[-.1em] text-[#c7ac81]" style={serif}>MH.</span>
</div></footer>;
return <footer className="border-t border-[#c6aa7d]/20 bg-[#080b09]"><div className={shell+" flex flex-wrap items-end justify-between gap-12 py-14"}>
<div><span className="block text-[47px] italic tracking-[-.1em] text-[#c7ac81]" style={serif}>MH.</span><p className="mt-4 text-[23px]" style={serif}>Mirodil Hayitov</p><p className={"mt-3 max-w-md text-[12px] leading-[1.9] "+muted}>{d.homeClosing}</p></div>
<div className="text-[10px] tracking-[.17em] text-[#8f988c]">© 2026 MIRODIL HAYITOV <span className="mx-3 text-[#947e5e]">/</span> {d.k}</div></div></footer>;
}
function Opening({lang}:{lang:Locale}){return <HomeHero lang={lang}/>;}
function Chapter({lang,section,title,subtitle}:{lang:Locale;section:Page;title:string;subtitle:string}){
const d=profile[lang];const n=pages.indexOf(section)+1;
return <section className="relative overflow-hidden border-b border-[#c6aa7d]/20"><div className={shell+" relative pb-14 pt-20 lg:pb-20 lg:pt-28"}><div aria-hidden className="pointer-events-none absolute right-[6%] top-16 text-[250px] italic leading-none text-[#c7aa7d]/[.045]" style={serif}>0{n}</div><Reveal><Eyebrow index={"0"+n}>{d.section}</Eyebrow></Reveal>
<Reveal delay={0.07}><h1 className="relative mt-12 max-w-[1180px] text-[clamp(56px,7.5vw,122px)] leading-[.99] tracking-[-.065em] text-[#f2ecdf]" style={serif}>{title}<span className="text-[#ba9b70]">.</span></h1></Reveal>
<Reveal delay={0.16}><p className="mt-11 max-w-3xl border-l border-[#c6aa7d]/60 pl-7 text-[clamp(20px,2.3vw,31px)] leading-[1.62] text-[#b9bfb3]">{subtitle}</p></Reveal>
<div className="mt-20 flex justify-between gap-4 border-t border-[#c6aa7d]/20 pt-6 text-[10px] tracking-[.17em] text-[#9ea596]"><span>{d.navLabel} / {d.nav[n]}</span><span>0{n} / 05</span></div></div></section>;
}
function Biography({lang}:{lang:Locale}){const d=profile[lang];
return <><Chapter lang={lang} section="biography" title={d.bioTitle} subtitle={d.bioSubtitle}/>
<section className={shell+" grid gap-16 py-24 lg:grid-cols-[220px_1fr] lg:gap-24 lg:py-36"}><aside><Reveal><Eyebrow>{d.bioOverline}</Eyebrow><p className={"mt-9 max-w-[225px] text-[12px] leading-[1.9] "+muted}>{d.sourceLabel}</p></Reveal></aside>
<article className="max-w-[870px] space-y-11">{d.officialParagraphs.map((para,i)=><Reveal key={i} delay={i===0?0.1:0}><p className={i===0?"text-[clamp(24px,2.75vw,36px)] leading-[1.65] tracking-[-.025em] text-[#e4ddcf]":"text-[clamp(17px,1.45vw,21px)] leading-[1.98] text-[#b4bbb0]"}>{para}</p></Reveal>)}</article></section>
<div className="border-y border-[#c6aa7d]/20 bg-[#141915]"><div className={shell+" grid gap-0 md:grid-cols-3"}>{d.biographyFacts.map((item,i)=><Reveal key={item.label} delay={i*.08} className={"border-[#c6aa7d]/20 py-12 md:px-9 "+(i>0?"border-t md:border-l md:border-t-0":"")}><span className={label}>{item.label}</span><p className="mt-9 text-[clamp(24px,2.4vw,35px)] leading-[1.35] text-[#e2d7c5]" style={serif}>{item.value}</p></Reveal>)}</div></div></>;
}
function Academic({lang}:{lang:Locale}){const d=profile[lang];
return <><Chapter lang={lang} section="academic" title={d.academicTitle} subtitle={d.academicSubtitle}/>
<section className={shell+" grid gap-14 py-24 lg:grid-cols-[.9fr_1fr] lg:gap-24 lg:py-36"}><Reveal><Eyebrow>01 / SCHOOL</Eyebrow><h2 className="mt-10 text-[clamp(51px,5.7vw,83px)] leading-[1.08] tracking-[-.05em]" style={serif}>{d.schoolTitle}</h2></Reveal><Reveal delay={0.1} className="flex flex-col justify-center"><p className="max-w-xl text-[clamp(19px,2vw,26px)] leading-[1.9] text-[#bec4b8]">{d.schoolBody}</p></Reveal></section>
<section className="border-y border-[#c6aa7d]/20 bg-[#141915]"><div className={shell+" grid items-center gap-14 py-24 md:grid-cols-[.8fr_1.2fr] lg:gap-24"}><Reveal><p className="text-[clamp(115px,17vw,240px)] leading-[.87] tracking-[-.10em] text-[#d5bd96]" style={serif}>142<span className="text-[#a38a62]">,7</span></p><span className={"mt-7 block "+label}>{d.admissionLabel}</span></Reveal><Reveal delay={0.1}><p className="max-w-[590px] border-l border-[#c6aa7d]/50 pl-8 text-[clamp(20px,2.1vw,28px)] leading-[1.8] text-[#c8ccbe]">{d.admissionBody}</p></Reveal></div></section>
<CertificateShowcase lang={lang}/>
<EnglishAward lang={lang}/>
<div className={shell+" flex flex-wrap items-center justify-between gap-6 py-12"}><span className={label}>UWED · ACADEMIC LYCEUM</span><a href={sourceLinks[0].href} target="_blank" rel="noopener noreferrer" className={"group inline-flex items-center gap-3 text-[12px] text-[#e4c89b] hover:text-white "+ring}>{d.openSource}<motion.span whileHover={{x:3,y:-3}}><ArrowUpRight size={17}/></motion.span></a></div></>;
}
function Projects({lang}:{lang:Locale}){const d=profile[lang];
return <><Chapter lang={lang} section="projects" title={d.projectsTitle} subtitle={d.projectsSubtitle}/>
<section className={shell+" py-14 lg:py-20"}>{d.projects.map((item,i)=><article key={item.title} className="grid gap-12 border-b border-[#c6aa7d]/25 py-20 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
<Reveal><Eyebrow index={"0"+(i+1)}>{item.category}</Eyebrow><h2 className="mt-11 text-[clamp(59px,6.6vw,98px)] leading-[.98] tracking-[-.065em] text-[#ece5d7]" style={serif}>{item.title}</h2>
<motion.div whileHover={{borderColor:"rgba(202,172,123,0.65)",scale:1.012}} transition={{type:"spring",stiffness:170,damping:24}} className="relative mt-12 flex h-[290px] items-center justify-center overflow-hidden border border-[#c6aa7d]/20 bg-[#131a14]">
<div aria-hidden className="absolute h-52 w-52 rotate-45 border border-[#c6aa7d]/20"/><div aria-hidden className="absolute h-44 w-44 rounded-full border border-[#c6aa7d]/30"/>
<span className="text-[125px] italic text-[#ccb182]/30" style={serif}>{i===0?"T":i===1?"B":"U"}</span></motion.div></Reveal>
<Reveal delay={0.1} className="flex flex-col justify-center"><p className="max-w-xl text-[clamp(21px,2.35vw,31px)] leading-[1.7] text-[#d9d8cc]">{item.description}</p>
<div className="mt-10 border-t border-[#c6aa7d]/25">{item.details.map((fact,j)=><div key={j} className="grid grid-cols-[52px_1fr] gap-6 border-b border-[#c6aa7d]/20 py-5 text-[15px] text-[#aeb5a9]"><span className="text-[#c3a478]">0{j+1}</span>{fact}</div>)}</div>
<p className="mt-9 text-[11px] tracking-[.16em] text-[#c9ab7e]">{item.status}</p>
<div className="mt-8 flex flex-wrap items-center gap-x-9 gap-y-6">
{item.website&&<motion.a whileHover={{x:4}} whileTap={{scale:0.98}} className={"inline-flex w-fit items-center gap-3 border-b border-[#d6bc91]/65 pb-2 text-[12px] text-[#f1d5a5] "+ring} target="_blank" rel="noopener noreferrer" href={item.website}>{projectLinks[lang].website}<ArrowUpRight size={16}/></motion.a>}
{item.href&&<motion.a whileHover={{x:4}} whileTap={{scale:0.98}} className={"inline-flex w-fit items-center gap-3 border-b border-[#c6aa7d]/50 pb-2 text-[12px] text-[#d2d2c1] "+ring} target="_blank" rel="noopener noreferrer" href={item.href}>{projectLinks[lang].code}<ArrowUpRight size={16}/></motion.a>}
</div>
</Reveal></article>)}</section></>;
}
function Activities({lang}:{lang:Locale}){const d=profile[lang];
return <><Chapter lang={lang} section="public-life" title={d.lifeTitle} subtitle={d.lifeSubtitle}/>
<section className={shell+" grid gap-14 py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:py-36"}><Reveal><Eyebrow>01 / SPORT</Eyebrow><h2 className="mt-10 text-[clamp(54px,5.9vw,88px)] leading-[1.06] tracking-[-.06em]" style={serif}>{d.sportsTitle}</h2></Reveal><Reveal delay={0.1} className="flex items-center"><p className="max-w-xl text-[clamp(20px,2.2vw,29px)] leading-[1.82] text-[#bfc6b8]">{d.sportsIntro}</p></Reveal></section>
<section className="border-y border-[#c6aa7d]/20 bg-[#141915]"><div className={shell+" py-20"}><div className="grid border-y border-[#c6aa7d]/20 md:grid-cols-3">{d.sports.map((name,i)=><Reveal delay={i*.1} key={i} className={"py-12 md:px-9 "+(i>0?"border-t border-[#c6aa7d]/20 md:border-l md:border-t-0":"")}><span className={label}>0{i+1} / DISCIPLINE</span><p className="mt-10 text-[clamp(46px,4.8vw,67px)] leading-[1.1]" style={serif}>{name}</p></Reveal>)}</div><p className={"mt-7 max-w-xl text-[13px] leading-[1.8] "+muted}>{d.sportsNote}</p></div></section>
<SportsAwards lang={lang}/>
<section className={shell+" grid gap-14 py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:py-36"}><Reveal><Eyebrow>03 / LEADERSHIP & INITIATIVES</Eyebrow><h2 className="mt-10 text-[clamp(70px,8.5vw,126px)] leading-[.9] tracking-[-.06em] text-[#e9dfce]" style={serif}>Nuriyat<br/><span className="italic text-[#c9ad83]">Ilmi.</span></h2></Reveal><Reveal delay={0.12} className="flex flex-col justify-center"><h3 className="text-[clamp(25px,2.7vw,38px)] text-[#e2dbc9]" style={serif}>{d.initiativeTitle}</h3><p className="mt-8 max-w-xl text-[18px] leading-[1.95] text-[#b7bfb0]">{d.initiativeBody}</p></Reveal></section></>;
}
export function ProfileSite({lang,page}:{lang:Locale;page?:Page}){
const {scrollYProgress}=useScroll();
const scaleX=useSpring(scrollYProgress,{stiffness:120,damping:27,restDelta:0.001});
return <MotionConfig reducedMotion="user"><div className="relative min-h-screen overflow-x-clip bg-[#0b100d] text-[#f0ebdf]" style={{backgroundImage:"radial-gradient(ellipse at 85% 0%,rgba(141,110,67,.13),transparent 37%),radial-gradient(ellipse at 0% 67%,rgba(48,67,49,.13),transparent 48%)"}}>
<motion.div style={{scaleX,transformOrigin:"0%"}} aria-hidden className="fixed left-0 right-0 top-0 z-[80] h-[2px] bg-[#d2b184]"/>
<div aria-hidden className="pointer-events-none fixed inset-0 opacity-[.045]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.2'/%3E%3C/svg%3E\")"}}/>
<Nav lang={lang} section={page}/><main id="main">{!page?<Opening lang={lang}/>:page==="biography"?<Biography lang={lang}/>:page==="academic"?<Academic lang={lang}/>:page==="projects"?<Projects lang={lang}/>:page==="public-life"?<Activities lang={lang}/>:<MediaPage lang={lang}/>}</main><Footer lang={lang} home={!page}/></div></MotionConfig>;
}
