"use client";
import {motion,useReducedMotion} from "motion/react";
import {usePathname} from "next/navigation";
export default function Template({children}:{children:React.ReactNode}){
const reduce=useReducedMotion();
const pathname=usePathname();
return <motion.div key={pathname} initial={reduce?false:{opacity:0,y:16,filter:"blur(5px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} transition={{duration:0.64,ease:[0.22,1,0.36,1]}}>{children}</motion.div>;
}
