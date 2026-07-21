"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  "/printing/business-cards.jpg",
  "/printing/flyers.jpg",
  "/printing/posters.jpg",
  "/printing/banners.jpg",
  "/printing/stickers.jpg",
  "/printing/business-cards.jpg",
];

export default function ProjectGallery() {
  return (
    <section className="bg-[#07131B] py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <p className="uppercase tracking-[0.35em] text-[#00C853] font-semibold text-sm">
          Portfolio
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-2xl text-gray-400 text-lg">
          A small selection of recent printing projects produced by Phakisa
          Signs.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: .25 }}
              className="group relative overflow-hidden rounded-3xl"
            >

              <div className="relative h-80">

                <Image
                  src={image}
                  alt="Printing Project"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">

                  <h3 className="text-2xl font-bold text-white">

                    Project {index + 1}

                  </h3>

                  <p className="mt-2 text-gray-300">

                    View Project →

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}