import Image from "next/image";
import { Printer, Store, Wrench } from "lucide-react";

const services = [
  {
    title: "PRINTING",
    description:
      "Banners, posters, stickers, wallpaper, business cards, vehicle branding and much more.",
    image: "/printing.jpg",
    icon: Printer,
  },
  {
    title: "SHOPFITTING",
    description:
      "Custom shopfitting, counters, displays and complete retail fit-out solutions.",
    image: "/shopfitting.jpg",
    icon: Store,
  },
  {
    title: "SIGNAGE",
    description:
      "Illuminated signs, 3D letters, lightboxes, pylons and custom signage.",
    image: "/signage.jpg",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-2xl">

            <p className="font-semibold uppercase tracking-[4px] text-[#00A651]">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              COMPLETE SIGNAGE &
              <br />
              <span className="text-[#00A651]">
                SHOPFITTING
              </span>{" "}
              SOLUTIONS
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From bold branding to complete retail transformations,
              we deliver quality workmanship, innovative solutions
              and exceptional service.
            </p>

          </div>

          <button className="rounded-xl bg-[#00A651] px-8 py-4 font-bold text-white shadow-xl transition hover:scale-105 hover:bg-[#009245]">
            VIEW ALL SERVICES →
          </button>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="relative p-8">

                  <div className="-mt-16 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00A651] text-white shadow-lg">

                    <Icon size={30} />

                  </div>

                  <h3 className="text-3xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <button className="mt-8 font-bold text-[#00A651] transition hover:translate-x-2">
                    LEARN MORE →
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}