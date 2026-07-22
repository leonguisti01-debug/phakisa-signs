"use client";

import {
  Store,
  Building2,
  Sofa,
  PanelsTopLeft,
  Warehouse,
  Hammer,
} from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Retail Shopfitting",
    description:
      "Complete retail store installations designed to maximise customer experience.",
  },
  {
    icon: Building2,
    title: "Office Fit-Outs",
    description:
      "Professional office interiors that create productive, modern workspaces.",
  },
  {
    icon: Sofa,
    title: "Reception Areas",
    description:
      "Stylish reception counters and waiting areas that create lasting first impressions.",
  },
  {
    icon: PanelsTopLeft,
    title: "Display Units",
    description:
      "Custom-built shelving, display units and merchandising solutions.",
  },
  {
    icon: Warehouse,
    title: "Custom Cabinetry",
    description:
      "Manufactured cabinetry and storage solutions built to your exact requirements.",
  },
  {
    icon: Hammer,
    title: "Renovations",
    description:
      "Commercial renovations and refurbishments completed with quality workmanship.",
  },
];

export default function ShopfittingServices() {
  return (
    <section className="bg-[#08141B] py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00C853]">
          Our Shopfitting Services
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          What We Build
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