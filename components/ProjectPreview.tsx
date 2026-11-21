"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { useRef } from "react";
import type { Locale } from "@/lib/profile";

const details = {
  uz: {
    expand: "Tasvirni kattalashtirish",
    close: "Yopish",
    window: "LOYIHA INTERFEYSI",
    note: "Raqamli mahsulot · interfeys ko‘rinishi",
  },
  ru: {
    expand: "Посмотреть интерфейс целиком",
    close: "Закрыть",
    window: "ИНТЕРФЕЙС ПРОЕКТА",
    note: "Цифровая платформа · настоящий интерфейс",
  },
  en: {
    expand: "View full interface",
    close: "Close",
    window: "PROJECT INTERFACE",
    note: "Digital platform · real interface preview",
  },
} as const;

type ProjectPreviewProps = {
  src: string;
  title: string;
  lang: Locale;
  index: number;
  width: number;
  height: number;
};

/**
 * A faithful, uncropped screenshot displayed in an editorial browser frame.
 * Clicking the icon opens the same image at full size.
 */
export function ProjectPreview({ src, title, lang, index, width, height }: ProjectPreviewProps) {
  const d = details[lang];
  const dialog = useRef<HTMLDialogElement>(null);
  const reduced = useReducedMotion();

  return (
    <>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.13 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="group/project relative mx-auto w-full max-w-[1210px]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[2px] rounded-[16px] bg-gradient-to-br from-[#dfc594]/25 via-transparent to-[#a87c4c]/15 opacity-80 blur-[2px] transition-opacity duration-700 group-hover/project:opacity-100"
        />
        <motion.div
          whileHover={reduced ? undefined : { y: -5, scale: 1.003 }}
          transition={{ type: "spring", stiffness: 210, damping: 24 }}
          className="relative overflow-hidden rounded-[15px] border border-[#e1c697]/[.29] bg-[#101310] shadow-[0_30px_95px_rgba(0,0,0,.40),0_0_0_1px_rgba(217,180,121,.055)] transition-[border-color,box-shadow] duration-700 group-hover/project:border-[#e6cb9d]/60 group-hover/project:shadow-[0_38px_110px_rgba(0,0,0,.46),0_0_58px_rgba(175,124,62,.10)]"
        >
          <div className="flex min-h-[51px] items-center justify-between gap-3 border-b border-[#c6ac81]/20 bg-[linear-gradient(110deg,#24251f,#171a16_65%,#242218)] px-4 sm:px-6">
            <div className="flex items-center gap-[7px]" aria-hidden="true">
              <span className="h-[7px] w-[7px] rounded-full border border-[#d6c29e]/45 bg-[#ab8155]/30" />
              <span className="h-[7px] w-[7px] rounded-full border border-[#d6c29e]/40 bg-[#b29b6f]/25" />
              <span className="h-[7px] w-[7px] rounded-full border border-[#d6c29e]/35 bg-[#7c8067]/25" />
            </div>
            <span className="max-w-[60%] truncate text-[9px] font-medium tracking-[.16em] text-[#bcb19e] sm:text-[10px] sm:tracking-[.21em]">
              {title.toUpperCase()} <span className="px-1 text-[#a88858]">/</span> {d.window}
            </span>
            <button
              type="button"
              onClick={() => dialog.current?.showModal()}
              aria-label={d.expand + ": " + title}
              className="group/zoom flex h-8 w-8 items-center justify-center border border-[#c6aa7d]/20 text-[#cbb18a] transition-[background-color,border-color,color,transform] duration-300 hover:scale-105 hover:border-[#e1be89]/70 hover:bg-[#c6aa7d]/10 hover:text-[#f8e4c3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e5ca96]"
            >
              <Maximize2 size={15} strokeWidth={1.6} className="transition-transform duration-300 group-hover/zoom:scale-110" />
            </button>
          </div>

          <div className="relative overflow-hidden bg-[#0a100c]" style={{ aspectRatio: width + "/" + height }}>
            <Image
              src={src}
              alt={title + " — " + d.note}
              width={width}
              height={height}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1210px"
              className="block h-full w-full object-contain transition-transform duration-[1000ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover/project:scale-[1.012]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e9c895]/50 to-transparent" />
          </div>
        </motion.div>

        <div className="mt-5 flex items-center justify-between gap-3 px-1">
          <span className="text-[10px] tracking-[.17em] text-[#998f7c]">{d.note}</span>
          <span className="flex items-center gap-2 text-[10px] tracking-[.17em] text-[#c6a879]">
            {String(index).padStart(2, "0")} <span className="h-px w-7 bg-[#c6a879]/45" /> 03
          </span>
        </div>
      </motion.div>

      <dialog
        ref={dialog}
        aria-label={d.expand + ": " + title}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        className="fixed inset-0 m-auto max-h-[96dvh] max-w-[97vw] overflow-visible border border-[#d1b78b]/50 bg-[#0a100d] p-2 text-[#ede6d8] shadow-[0_30px_120px_rgba(0,0,0,.75)] backdrop:bg-[#020503]/95 backdrop:backdrop-blur-lg sm:p-3"
      >
        <div className="relative">
          <button
            type="button"
            autoFocus
            onClick={() => dialog.current?.close()}
            aria-label={d.close}
            className="absolute -right-1 -top-1 z-10 flex h-10 w-10 items-center justify-center border border-[#e4c28b]/45 bg-[#0b100d]/95 text-[#f1dab8] transition-colors hover:bg-[#24251d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e5ca96]"
          >
            <X size={19} />
          </button>
          <Image
            src={src}
            alt={title + " — " + d.note}
            width={width}
            height={height}
            className="block max-h-[88dvh] max-w-full object-contain"
            sizes="95vw"
          />
        </div>
      </dialog>
    </>
  );
}
