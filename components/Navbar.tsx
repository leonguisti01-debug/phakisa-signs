"use client";

import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex h-20 items-center justify-between">

        <Image
          src="/logo.png"
          alt="Phakisa Signs"
          width={260}
          height={70}
          priority
        />

        <button className="h-14 w-14 rounded-xl bg-[#00A651] text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}