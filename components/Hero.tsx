"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[820px] overflow-hidden">

      {/* Background */}
      <Image
        src="/hero.jpg"
        alt="Phakisa Signs"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.82) 28%, rgba(0,0,0,.45) 55%, rgba(0,0,0,.05) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >

            <span className="inline-block rounded-full bg-[#00A651]/20 border border-[#00A651]/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#00C853] backdrop-blur">
              Printing • Signage • Shopfitting
            </span>

            <h1 className="mt-8 text-6xl font-black leading-[0.92] text-white md:text-8xl">
              PRINTING
              <br />
              THAT BUILDS
              <br />
              <span className="text-[#00C853]">
                BRANDS
              </span>
            </h1>

            <div className="mt-8 h-1 w-24 rounded-full bg-[#00C853]" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200 md:text-xl">
              Premium printing, signage and shopfitting solutions
              designed to make your business impossible to ignore.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="rounded-xl bg-[#00A651] px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-[#009245]">
                OUR SERVICES
              </button>

              <button className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-black">
                GET A QUOTE
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}