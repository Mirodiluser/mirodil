"use client";
import {useEffect,useState} from "react";
import {motion,useReducedMotion} from "motion/react";
import {ImageIcon,Maximize2,X} from "lucide-react";

export function MediaAsset({src,alt,aspect="4/3",contain=false,caption="View image",className=""}:{src:string;alt:string;aspect?:string;contain?:boolean;caption?:string;className?:string}){
const [status,setStatus]=useState<"pending"|"ready"|"missing">("pending");
const [open,setOpen]=useState(false);
const reduced=useReducedMotion();
useEffect(()=>{if(!open)return;const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setOpen(false)};window.addEventListener("keydown",close);return()=>window.removeEventListener("keydown",close)},[open]);
return <>
<motion.button type="button" aria-label={caption} onClick={()=>status==="ready"&&setOpen(true)} whileHover={status==="ready"&&!reduced?{scale:1.012}:undefined} whileTap={status==="ready"?{scale:.99}:undefined}
className={"group relative block w-full overflow-hidden border border-[#c6aa7d]/25 bg-[#151b16] text-left outline-offset-4 transition-colors duration-300 hover:border-[#d7ba8d]/60 "+className} style={{aspectRatio:aspect,cursor:status==="ready"?"zoom-in":"default"}}>
<div aria-hidden className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgba(179,151,106,.11),transparent_70%)]">
<div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c6aa7d]/20"><ImageIcon size={24} strokeWidth={1} className="text-[#ac9576]"/></div></div>
<img key={src} src={src} alt={alt} loading="lazy" onLoad={()=>setStatus("ready")} onError={()=>setStatus("missing")}
className={"absolute inset-0 h-full w-full transition-[opacity,transform] duration-700 group-hover:scale-[1.018] "+(contain?"object-contain":"object-cover")+" "+(status==="ready"?"opacity-100":"opacity-0")}/>
{status==="ready"&&<span className="absolute bottom-4 right-4 flex items-center gap-2 border border-[#e6d4b9]/35 bg-[#0c110e]/80 px-3 py-2 text-[10px] tracking-[.13em] text-[#f0e1c8] backdrop-blur-sm"><Maximize2 size={12}/>{caption}</span>}
{status==="missing"&&<span className="absolute bottom-4 left-4 right-4 text-center text-[11px] tracking-[.08em] text-[#b7a98e]">MEDIA ARCHIVE / IMAGE PENDING</span>}
</motion.button>
{open&&<div role="dialog" aria-modal="true" aria-label={alt} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050807]/95 p-4 backdrop-blur-2xl sm:p-9" onClick={()=>setOpen(false)}>
<button type="button" aria-label="Close image" onClick={()=>setOpen(false)} className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center border border-white/30 text-white transition hover:bg-white/10"><X size={22}/></button>
<motion.img initial={reduced?false:{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:.32}} src={src} alt={alt} onClick={e=>e.stopPropagation()} className="max-h-[89vh] max-w-full object-contain shadow-2xl"/>
</div>}
</>;
}
