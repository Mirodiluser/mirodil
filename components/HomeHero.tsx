"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { pages, profile, type Locale } from "@/lib/profile";

const serif = { fontFamily: "'Iowan Old Style', Baskerville, Georgia, serif" };
const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero({ lang }: { lang: Locale }) {
  const reduced = useReducedMotion();
  const names = profile[lang].nav.slice(1);
  return (
    <section className="relative isolate overflow-hidden border-b border-[#c6aa7d]/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[32vw] -top-[45vw] h-[112vw] w-[112vw] max-w-[1350px] rounded-full border border-[#c1a477]/[.07] sm:-right-[20vw] sm:-top-[24vw] lg:-right-[19vw] lg:-top-[35vw]"
      >
        <motion.div
          className="absolute inset-[12%] rounded-full border border-dashed border-[#c1a477]/[.15]"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 110, ease: "linear", repeat: Infinity }}
        />
        <div className="absolute inset-[26%] rounded-full border border-[#c1a477]/[.13]" />
        <div className="absolute inset-[40%] rounded-full border border-[#c1a477]/[.12]" />
      </div>

      <div className="pointer-events-none absolute bottom-[3%] left-[-14%] h-[450px] w-[450px] rounded-full bg-[#8b6c3d]/[.055] blur-[90px]" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100svh-84px)] max-w-[1500px] grid-cols-1 items-center gap-16 px-6 pb-20 pt-24 sm:px-10 lg:min-h-[800px] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,.85fr)] lg:gap-8 lg:px-[76px] lg:py-24 xl:gap-14">
        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 48, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.18, ease }}
          style={serif}
          className="relative z-10 min-w-0 text-[clamp(76px,11.5vw,172px)] leading-[.84] tracking-[-.085em] lg:text-[clamp(92px,8.9vw,144px)]"
        >
          <span className="block whitespace-nowrap text-[#f3eedf]">Mirodil</span>
          <span className="mt-5 block whitespace-nowrap italic text-[#d1b790]">
            Hayitov<span className="text-[#aa895a]">.</span>
          </span>
        </motion.h1>

        <nav
          aria-label={lang === "ru" ? "Разделы сайта" : lang === "uz" ? "Sayt bo‘limlari" : "Website sections"}
          className="relative z-10 w-full min-w-0 lg:max-w-[540px] lg:justify-self-end"
        >
          <div className="border-y border-[#cbb18b]/35">
            {pages.map((page, index) => (
              <motion.div
                key={page}
                initial={reduced ? false : { opacity: 0, x: 32, filter: "blur(5px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.76,
                  delay: reduced ? 0 : 0.93 + index * 0.15,
                  ease,
                }}
                className="border-b border-[#c6aa7d]/20 last:border-b-0"
              >
                <motion.div
                  whileHover={reduced ? undefined : { x: 6 }}
                  whileTap={reduced ? undefined : { scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <Link
                    href={"/" + lang + "/" + page}
                    prefetch
                    className="group relative flex min-h-[84px] items-center gap-5 overflow-hidden px-4 py-4 outline-offset-4 transition-[background-color,border-color] duration-300 hover:bg-[#d6b888]/[.085] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4b584] sm:min-h-[92px] sm:px-6 lg:min-h-[96px]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[2px] origin-center scale-y-0 bg-[#d9bc8b] transition-transform duration-500 group-hover:scale-y-100 group-focus-visible:scale-y-100"
                    />
                    <span className="w-8 shrink-0 text-[11px] tracking-[.12em] text-[#a38e6e] transition-colors group-hover:text-[#ddc69f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="min-w-0 flex-1 text-[clamp(25px,2.7vw,38px)] leading-[1.12] tracking-[-.035em] text-[#e8e0d1] transition-colors duration-300 group-hover:text-[#efd5a5]"
                      style={serif}
                    >
                      {names[index]}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={21}
                      strokeWidth={1.3}
                      className="shrink-0 text-[#9d886b] transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#e9ce9f]"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
