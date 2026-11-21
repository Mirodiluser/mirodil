"use client";

import Image from "next/image";
import { motion } from "motion/react";

/**
 * Original supplied MH monogram, displayed on the site's near-black
 * palette. Screen blending makes the original black backdrop disappear
 * while keeping its metallic gold texture and signature flourish intact.
 */
export function BrandLogo({size="nav"}:{size?:"nav"|"footer"}){
  const footer=size==="footer";
  return <motion.span
    aria-label="Mirodil Hayitov — MH monogram"
    role="img"
    whileHover={{scale:1.035}}
    transition={{type:"spring",stiffness:300,damping:26}}
    className={"relative inline-flex shrink-0 items-center justify-center overflow-visible "+(footer?"h-[84px] w-[96px] sm:h-[96px] sm:w-[110px]":"h-[55px] w-[62px] sm:h-[61px] sm:w-[69px]")}
  >
    <Image
      src="/brand/mh-monogram.webp"
      width={240}
      height={215}
      alt="MH"
      priority
      unoptimized
      className="block h-full w-full object-contain mix-blend-screen"
    />
  </motion.span>;
}
