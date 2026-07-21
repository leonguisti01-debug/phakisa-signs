"use client";

import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#08141B] shadow-lg">
      <div className="max-w-7xl mx-auto h-24 px-8 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="leading-none select-none">
          <h1 className="text-white font-black tracking-tight text-4xl">
            PHAKISA
          </h1>

          <h2 className="text-[#00D84A] font-black tracking-tight text-4xl -mt-2">
            SIGNS
          </h2>
        </div>

        {/* Burger Button */}
        <button
          className="h-16 w-16 rounded-2xl bg-[#00A651] text-white flex items-center justify-center shadow-xl transition duration-300 hover:scale-105 hover:bg-[#00C15F]"
          aria-label="Open Menu"
        >
          <Menu size={34} strokeWidth={2.5} />
        </button>

      </div>
    </header>
  );
}