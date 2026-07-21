"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#08141B] shadow-lg border-b border-white/5">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8 lg:px-12">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Phakisa Signs"
            width={320}
            height={90}
            priority
            className="h-16 w-auto lg:h-20"
          />
        </a>

        {/* Burger Button */}
        <button
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A651] text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-[#00C15F]"
          aria-label="Open Menu"
        >
          <Menu size={34} strokeWidth={2.5} />
        </button>

      </div>
    </header>
  );
}