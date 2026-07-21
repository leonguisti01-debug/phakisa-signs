"use client";

import { ArrowRight, PhoneCall } from "lucide-react";

export default function QuoteCTA() {
  return (
    <section className="relative overflow-hidden bg-[#07131B] py-28">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00A65122,transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#00A65118,transparent_40%)]" />

      {/* Watermark */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[22rem] font-black text-white/[0.03] leading-none">
        PRINT
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">

        <p className="uppercase tracking-[0.35em] text-[#00C853] font-semibold text-sm">
          Ready To Get Started?
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight">

          Let's Create Something
          <br />
          Incredible Together.

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">

          Whether you need one business card or a complete nationwide branding
          rollout, our team is ready to help bring your ideas to life.

        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#00A651] px-10 py-5 text-lg font-bold text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#00C853]"
          >
            GET A FREE QUOTE

            <ArrowRight size={22} />

          </a>

          <a
            href="tel:+27113927586"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/20 px-10 py-5 text-lg font-bold text-white transition duration-300 hover:border-[#00C853] hover:bg-white/5"
          >
            <PhoneCall size={22} />

            CALL US

          </a>

        </div>

      </div>

    </section>
  );
}