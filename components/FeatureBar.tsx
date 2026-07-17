import {
  Printer,
  Store,
  Lightbulb,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Printer,
    title: "HIGH QUALITY",
    subtitle: "PRINTING",
  },
  {
    icon: Store,
    title: "SHOPFITTING",
    subtitle: "SOLUTIONS",
  },
  {
    icon: Lightbulb,
    title: "CREATIVE",
    subtitle: "DESIGN",
  },
  {
    icon: Gauge,
    title: "FAST",
    subtitle: "TURNAROUND",
  },
];

export default function FeatureBar() {
  return (
    <section className="relative z-30 -mt-24 px-6">

      <div className="mx-auto max-w-7xl rounded-3xl bg-white shadow-2xl">

        <div className="grid grid-cols-2 md:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex flex-col items-center justify-center gap-4 border-gray-100 p-8 transition hover:bg-gray-50 md:border-r last:border-r-0"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition group-hover:scale-110 group-hover:bg-[#00A651]">

                  <Icon
                    size={34}
                    className="text-[#00A651] transition group-hover:text-white"
                  />

                </div>

                <div className="text-center">

                  <h3 className="font-bold tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500">
                    {feature.subtitle}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}