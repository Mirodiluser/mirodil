"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { pages, profile, type Locale } from "@/lib/profile";

const serif = { fontFamily: "'Iowan Old Style', Baskerville, Georgia, serif" };
const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Home is intentionally a single clean hero:
 * identity on the left; five destinations on the right.
 * The main navigation, overline, ornaments and footer are owned
 * elsewhere and remain visible. The buttons are fully above the fold.
 */
export function HomeHero({ lang }: { lang: Locale }) {
  const reduced = useReducedMotion();
  const d = profile[lang];
  const labels = d.nav.slice(1);

  return (
    <section className="relative isolate overflow-hidden border-b border-[#c6aa7d]/20">
      {/* Original orbital ornament, subtly animated. */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[44vw] -top-[46vw] h-[122vw] w-[122vw] max-w-[1400px] rounded-full border border-[#c1a477]/[.08] sm:-right-[27vw] sm:-top-[31vw] lg:-right-[20vw] lg:-top-[39vw]">
        <motion.div
          className="absolute inset-[12%] rounded-full border border-dashed border-[#c1a477]/[.17]"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 125, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute inset-[26%] rounded-full border border-[#c1a477]/[.12]" />
        <div className="absolute inset-[40%] rounded-full border border-[#c1a477]/[.12]" />
        <span className="absolute bottom-[17%] left-[38%] -rotate-12 text-[clamp(150px,19vw,330px)] italic leading-none text-[#c1a477]/[.045]" style={serif}>M</span>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#95754b]/[.075] blur-[100px]" />

      <div className="home-hero-viewport relative mx-auto flex min-h-[calc(100svh-84px)] w-full max-w-[1500px] flex-col justify-between px-6 pb-5 pt-6 sm:px-10 sm:pb-7 sm:pt-8 lg:px-[76px] lg:pb-8 lg:pt-9">
        {/* Preserve the small archive label as part of the original concept. */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7, ease }}
          className="relative z-10 flex items-center gap-4 text-[9px] font-medium tracking-[.22em] text-[#bda27d] sm:text-[10px]"
        >
          <span className="h-px w-8 shrink-0 bg-[#c7ab80]/75" />
          <span>{d.homeOverline}</span>
        </motion.div>

        <div className="home-hero-center relative z-10 grid min-w-0 flex-1 grid-cols-1 content-center items-center gap-x-12 gap-y-6 py-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)] lg:gap-y-0 lg:py-8 xl:gap-x-20">
          {/* The name gets the first, unhurried entrance animation. */}
          <div className="relative min-w-0 self-center">
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 43, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.15, delay: 0.14, ease }}
              style={serif}
              className="home-hero-name relative z-10 text-[clamp(69px,12vw,110px)] leading-[.84] tracking-[-.086em] sm:text-[clamp(84px,10.7vw,127px)] lg:text-[clamp(89px,9.3vw,150px)]"
            >
              <span className="block whitespace-nowrap text-[#f3eedf]">Mirodil</span>
              <span className="mt-[.11em] block whitespace-nowrap italic text-[#d1b790]">
                Hayitov<span className="text-[#ad8c5d]">.</span>
              </span>
            </motion.h1>
            <motion.span
              aria-hidden="true"
              className="home-hero-underline mt-6 block h-px w-[min(65%,310px)] origin-left bg-gradient-to-r from-[#d0b182]/80 via-[#c6a779]/40 to-transparent lg:mt-10"
              initial={reduced ? false : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.88, duration: 1.08, ease }}
            />
          </div>

          {/* Every link is visible before scrolling. A sequence follows the name reveal. */}
          <nav
            aria-label={lang === "ru" ? "Разделы сайта" : lang === "uz" ? "Sayt bo‘limlari" : "Site sections"}
            className="relative z-10 w-full min-w-0 max-w-[475px] justify-self-end"
          >
            <div className="home-hero-links grid gap-[10px] sm:gap-3 lg:gap-[14px]">
              {pages.map((page, index) => (
                <motion.div
                  key={page}
                  initial={reduced ? false : { opacity: 0, x: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.72, delay: reduced ? 0 : 1.08 + index * 0.17, ease }}
                >
                  <motion.div
                    whileHover={reduced ? undefined : { x: 5, scale: 1.012 }}
                    whileTap={reduced ? undefined : { scale: 0.985 }}
                    transition={{ type: "spring", stiffness: 370, damping: 27, mass: 0.82 }}
                  >
                    <Link
                      href={"/" + lang + "/" + page}
                      prefetch
                      className="home-hero-link group relative flex min-h-[51px] w-full items-center gap-3 overflow-hidden border border-[#c7ac81]/[.31] bg-gradient-to-r from-[#232820]/95 via-[#1a211a]/92 to-[#101711]/90 px-3.5 py-2 shadow-[0_10px_28px_rgba(0,0,0,.22),inset_0_1px_0_rgba(238,208,155,.045)] backdrop-blur-xl outline-offset-[3px] transition-[border-color,background-color,box-shadow] duration-500 hover:border-[#eed09d]/75 hover:shadow-[0_0_0_1px_rgba(221,183,123,.2),0_18px_48px_rgba(0,0,0,.35),0_0_48px_rgba(181,132,70,.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e1c494] sm:min-h-[57px] sm:gap-4 sm:px-5 lg:min-h-[63px]"
                    >
                      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_45%,rgba(214,173,107,.19),transparent_66%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#efd8ae]/50 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
                      <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-center scale-y-0 bg-[#e4c28b] transition-transform duration-500 group-hover:scale-y-100 group-focus-visible:scale-y-100" />
                      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cab18b]/[.28] bg-[#c6a779]/[.06] text-[10px] tracking-[.09em] text-[#bfa47e] transition-[background-color,border-color,color] duration-300 group-hover:border-[#e8cf9e]/65 group-hover:bg-[#c6a779]/[.13] group-hover:text-[#f7e5c4] sm:h-9 sm:w-9">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="relative min-w-0 flex-1 text-[clamp(23px,4.4vw,29px)] leading-[1.1] tracking-[-.03em] text-[#eee5d7] transition-colors duration-300 group-hover:text-[#f4dcb4] sm:text-[clamp(25px,3vw,32px)] lg:text-[clamp(25px,2.25vw,32px)]" style={serif}>
                        {labels[index]}
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

        <div className="home-hero-bottom relative z-10 flex items-center justify-between gap-5 border-t border-[#c5a77d]/[.20] pt-3 text-[9px] tracking-[.17em] text-[#998e7a] sm:pt-4 sm:text-[10px]">
          <span>{d.city}</span>
          <span>{d.year}</span>
        </div>
      </div>
    </section>
  );
}
