"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { pages, profile, type Locale } from "@/lib/profile";

const serif = { fontFamily: "'Iowan Old Style', Baskerville, Georgia, serif" };
const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero({ lang }: { lang: Locale }) {
  const reduceMotion = useReducedMotion();
  const data = profile[lang];
  const names = data.nav.slice(1);

  return (
    <section className="relative isolate overflow-hidden border-b border-[#c6aa7d]/20">
      {/* The original graphic ornaments remain purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[44vw] -top-[46vw] h-[122vw] w-[122vw] max-w-[1400px] rounded-full border border-[#c1a477]/[.08] sm:-right-[27vw] sm:-top-[31vw] lg:-right-[20vw] lg:-top-[39vw]"
      >
        <motion.div
          className="absolute inset-[12%] rounded-full border border-dashed border-[#c1a477]/[.17]"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 125, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute inset-[26%] rounded-full border border-[#c1a477]/[.12]" />
        <div className="absolute inset-[40%] rounded-full border border-[#c1a477]/[.12]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#95754b]/[.075] blur-[100px]"
      />

      {/* Size is based on the available viewport, rather than a fixed 800px height.
          Every link remains visible above the fold at typical mobile and desktop heights. */}
      <div className="relative mx-auto flex min-h-[calc(100svh-84px)] w-full max-w-[1500px] flex-col justify-between px-5 pb-5 pt-6 sm:px-10 sm:pb-7 sm:pt-8 lg:px-[76px] lg:pb-9 lg:pt-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.23, duration: 0.72, ease }}
          className="relative z-10 flex items-center gap-4 text-[9px] font-medium tracking-[.22em] text-[#bda27d] sm:text-[10px]"
        >
          <span className="h-px w-8 shrink-0 bg-[#c7ab80]/75" />
          <span>{data.homeOverline}</span>
        </motion.div>

        <div className="relative z-10 grid min-w-0 flex-1 grid-cols-1 content-center items-center gap-x-9 gap-y-8 py-7 md:grid-cols-[minmax(0,1.03fr)_minmax(310px,.97fr)] md:gap-y-0 lg:gap-x-12 lg:py-10 xl:gap-x-16">
          <div className="relative min-w-0 self-center">
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(13px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.06, delay: 0.16, ease }}
              style={serif}
              className="relative z-10 text-[clamp(63px,12vw,102px)] leading-[.82] tracking-[-.085em] sm:text-[clamp(75px,10vw,115px)] md:text-[clamp(74px,8.1vw,136px)] lg:text-[clamp(91px,8.25vw,141px)]"
            >
              <span className="block whitespace-nowrap text-[#f3eedf]">Mirodil</span>
              <span className="mt-[.09em] block whitespace-nowrap italic text-[#d1b790]">
                Hayitov<span className="text-[#ad8c5d]">.</span>
              </span>
            </motion.h1>
            <motion.span
              aria-hidden="true"
              className="mt-8 block h-px w-[min(58%,270px)] origin-left bg-gradient-to-r from-[#d0b182]/70 via-[#c6a779]/30 to-transparent md:mt-12"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.91, duration: 1.05, ease }}
            />
          </div>

          <nav
            aria-label={lang === "ru" ? "Разделы персонального сайта" : lang === "uz" ? "Shaxsiy sayt bo‘limlari" : "Personal site sections"}
            className="relative z-10 w-full min-w-0 max-w-[550px] justify-self-end"
          >
            <div className="grid gap-[6px] sm:gap-2">
              {pages.map((page, index) => (
                <motion.div
                  key={page}
                  initial={reduceMotion ? false : { opacity: 0, x: 32, y: 7, filter: "blur(9px)" }}
                  animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: reduceMotion ? 0 : 1.1 + index * 0.14, ease }}
                  className="min-w-0"
                >
                  <motion.div
                    whileHover={reduceMotion ? undefined : { x: 4, scale: 1.012 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.987 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.78 }}
                  >
                    <Link
                      href={"/" + lang + "/" + page}
                      prefetch
                      className="group relative flex min-h-[51px] w-full items-center gap-3 overflow-hidden border border-[#c7ac81]/[.29] bg-gradient-to-r from-[#1f251e]/[.91] via-[#181d18]/[.87] to-[#101611]/[.82] px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,.13)] backdrop-blur-xl outline-offset-[3px] transition-[border-color,background-color,box-shadow] duration-500 hover:border-[#e4c799]/75 hover:shadow-[0_0_0_1px_rgba(221,183,123,.17),0_16px_48px_rgba(0,0,0,.31),0_0_45px_rgba(181,132,70,.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e1c494] sm:min-h-[58px] sm:gap-4 sm:px-5 md:min-h-[64px] lg:min-h-[65px]"
                    >
                      {/* Layered glints make a rich reaction without affecting the layout. */}
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_45%,rgba(214,173,107,.17),transparent_66%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#efd8ae]/50 to-transparent opacity-35 transition-opacity duration-500 group-hover:opacity-100" />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-center scale-y-0 bg-[#e4c28b] transition-transform duration-500 group-hover:scale-y-100 group-focus-visible:scale-y-100" />

                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cab18b]/[.28] bg-[#c6a779]/[.06] text-[10px] tracking-[.09em] text-[#bfa47e] transition-[background-color,border-color,color] duration-300 group-hover:border-[#e8cf9e]/65 group-hover:bg-[#c6a779]/[.13] group-hover:text-[#f7e5c4] sm:h-9 sm:w-9">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="relative min-w-0 flex-1 text-[clamp(22px,4.4vw,28px)] leading-[1.1] tracking-[-.035em] text-[#e8e1d5] transition-colors duration-300 group-hover:text-[#f4dcb4] sm:text-[clamp(24px,3.1vw,32px)] md:text-[clamp(24px,2.4vw,31px)]"
                        style={serif}
                      >
                        {names[index]}
                      </span>
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c5a77d]/20 text-[#ae9875] transition-[border-color,color,transform,background-color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#d6b785]/50 group-hover:bg-[#c6a779]/10 group-hover:text-[#f4dcaf]">
                        <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.4} />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </nav>
        </div>

        <div className="relative z-10 flex items-center justify-between gap-5 border-t border-[#c5a77d]/[.20] pt-3 text-[9px] tracking-[.17em] text-[#998e7a] sm:pt-4 sm:text-[10px]">
          <span>{data.city}</span>
          <span>{data.year}</span>
        </div>
      </div>
    </section>
  );
}
