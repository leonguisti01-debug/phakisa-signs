"use client";

import {
  Building2,
  Store,
  Lightbulb,
  Badge,
  PanelsTopLeft,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Retail Signage",
    description:
      "Professional storefront signs that attract customers and build brand recognition.",
  },
  {
    icon: Building2,
    title: "Corporate Signage",
    description:
      "Interior and exterior business signage tailored to your company's identity.",
  },
  {
    icon: Lightbulb,
    title: "Illuminated Signs",
    description:
      "LED and illuminated signage that keeps your business visible day and night.",
  },
  {
    icon: Badge,
    title: "Reception Signs",
    description:
      "Premium reception and office signage that creates a professional first impression.",
  },
  {
    icon: PanelsTopLeft,
    title: "Directional Signage",
    description:
      "Wayfinding and informational signs for offices, shopping centres and public spaces.",
  },
  {
    icon: Landmark,
    title: "Pylon & Monument Signs",
    description:
      "Large-scale freestanding signage engineered for maximum visibility and impact.",
  },
];

export default function SignageServices() {
  return (
    <section className="bg-[#08141B] py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00C853]">
          Our Signage Services
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          What We Create
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-[#00C853] hover:bg-white/10"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A651]/20 transition group-hover:bg-[#00A651]">

                  <Icon
                    size={30}
                    className="text-[#00C853] group-hover:text-white"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {service.description}
                </p>

                <button className="mt-8 font-semibold text-[#00C853] transition hover:text-white">
                  Learn More →
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}