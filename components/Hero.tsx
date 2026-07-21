"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[820px] overflow-hidden bg-[#08141B]">

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
            "linear-gradient(90deg, rgba(8,20,27,.98) 0%, rgba(8,20,27,.92) 35%, rgba(8,20,27,.65) 65%, rgba(8,20,27,.15) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full items-center pt-24">

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          {/* Large Watermark */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[28rem] font-black text-white/[0.03] leading-none pointer-events-none select-none">
            PS
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-2xl"
          >

            <span className="inline-block rounded-full border border-[#00A651]/40 bg-[#00A651]/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#00C853] backdrop-blur">
              Printing • Signage • Shopfitting
            </span>

            <h1 className="mt-8 text-6xl font-black leading-[0.9] text-white md:text-8xl">
              BOLD
              <br />
              <span className="text-[#00C853]">
                BRANDS
              </span>
            </h1>

            {/* 35 Years Experience */}
            <div className="mt-5 mb-7">
              <Image
                src="/35years.png"
                alt="35 Years Experience"
                width={520}
                height={160}
                priority
                className="w-[180px] md:w-[260px] h-auto"
              />
            </div>

            <p className="max-w-xl text-lg leading-8 text-gray-200 md:text-xl">
              Premium printing, signage and shopfitting solutions that turn
              ideas into bold brands and unforgettable spaces.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="rounded-2xl bg-[#00A651] px-10 py-5 text-lg font-bold text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#00C853]">
                OUR SERVICES
              </button>

              <button className="rounded-2xl border-2 border-white px-10 py-5 text-lg font-bold text-white transition duration-300 hover:bg-white hover:text-[#08141B]">
                GET A QUOTE
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}