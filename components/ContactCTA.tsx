export default function ContactCTA() {
  return (
    <section className="bg-[#0F172A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <p className="mb-3 uppercase tracking-[4px] text-[#00C853] font-semibold">
          Ready to Start?
        </p>

        <h2 className="text-4xl md:text-6xl font-black">
          LET'S BUILD YOUR
          <span className="text-[#00C853]"> NEXT PROJECT</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Whether it's a single sign, vehicle branding or a complete
          shopfitting project, our team is ready to help.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="tel:+27573556519"
            className="rounded-xl bg-[#00A651] px-8 py-4 font-bold transition hover:bg-[#009245]"
          >
            CALL US
          </a>

          <a
            href="https://wa.me/27763295806"
            target="_blank"
            className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-black"
          >
            WHATSAPP
          </a>

        </div>

      </div>
    </section>
  );
}