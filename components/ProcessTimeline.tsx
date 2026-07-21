"use client";

import {
  MessageSquare,
  PencilRuler,
  Printer,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consult",
    description: "Tell us about your project and we'll recommend the best solution.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description: "Our designers prepare artwork and proofs for approval.",
  },
  {
    icon: Printer,
    title: "Print",
    description: "We manufacture using premium materials and modern equipment.",
  },
  {
    icon: Truck,
    title: "Deliver",
    description: "Collection, delivery or installation — on time, every time.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-[#08141B] py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#00C853]">
          Our Process
        </p>

        <h2 className="mt-3 text-5xl font-black text-white">
          From Idea To Reality
        </h2>

        <div className="relative mt-20">

          {/* Green Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-[#00A651]/30 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00A651] shadow-[0_0_30px_rgba(0,200,83,.35)]">

                    <Icon
                      size={34}
                      className="text-white"
                    />

                  </div>

                  <div className="mt-6 text-[#00C853] font-black text-lg">
                    0{index + 1}
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}