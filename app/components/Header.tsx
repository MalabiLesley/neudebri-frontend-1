"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          Nuedebri Health
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 text-gray-700 font-medium">
          <Link href="/" className="block hover:text-blue-600" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-blue-600" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="block hover:text-blue-600" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
