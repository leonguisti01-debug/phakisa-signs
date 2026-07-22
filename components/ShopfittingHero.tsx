"use client";

import { motion } from "framer-motion";

export default function ShopfittingHero() {
  return (
    <section className="relative overflow-hidden bg-[#08141B] pt-40 pb-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00A65122,transparent_45%)]" />

      {/* Watermark */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[18rem] md:text-[24rem] font-black text-white/[0.03] leading-none">
        FIT
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="inline-block rounded-full border border-[#00A651]/30 bg-[#00A651]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#00D84A]">
            Professional Shopfitting
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none md:text-8xl">
            SHOPFITTING
          </h1>

          <div className="mt-4 h-1 w-32 rounded-full bg-[#00A651]" />

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
            Custom-designed commercial interiors, retail spaces and office
            fit-outs that combine functionality, craftsmanship and exceptional
            attention to detail.
          </p>

        </motion.div>

      </div>

    </section>
  );
}