"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { printingSlides } from "@/lib/printingSlides";

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % printingSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % printingSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + printingSlides.length) % printingSlides.length);
  };

  const slide = printingSlides[current];

  return (
    <section className="bg-[#08141B] py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-10 flex items-end justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00C853]">
              Featured Work
            </p>

            <h2 className="mt-3 text-5xl font-black text-white">
              Recent Printing Projects
            </h2>

          </div>

          <div className="hidden md:block text-right">

            <p className="text-5xl font-black text-[#00C853]">

              {String(current + 1).padStart(2, "0")}

            </p>

            <p className="text-gray-400">

              / {String(printingSlides.length).padStart(2, "0")}

            </p>

          </div>

        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

          <AnimatePresence mode="wait">

            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .6 }}
              className="relative h-[650px]"
            >

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-12 left-12 max-w-xl">

                <h3 className="text-6xl font-black text-white">

                  {slide.title}

                </h3>

                <p className="mt-5 text-xl leading-8 text-gray-200">

                  {slide.description}

                </p>

                <button className="mt-8 rounded-xl bg-[#00A651] px-8 py-4 font-bold text-white transition hover:bg-[#00C853]">

                  GET A QUOTE

                </button>

              </div>

            </motion.div>

          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-4 backdrop-blur transition hover:bg-[#00A651]"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-4 backdrop-blur transition hover:bg-[#00A651]"
          >
            <ChevronRight className="text-white" />
          </button>

        </div>

        <div className="mt-8 flex justify-center gap-3">

          {printingSlides.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-10 bg-[#00C853]"
                  : "w-3 bg-white/30"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}