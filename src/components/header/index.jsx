"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Tama from "/public/tama.svg";

const navigation = [
  { name: "About", link: "/about" },
  { name: "Products", link: "/about" },
  { name: "Vendors", link: "/about" },
  { name: "Contact", link: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm  dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image src={Tama} alt="Tama wordmark" height={48} />
        </div>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="relative text-2xl text-gray-600 hover:text-black"
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </nav> */}

        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded bg-gray-100"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button> */}
      </div>

      {/* Mobile Menu */}
      {/* {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="block py-2 border-b text-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )} */}
    </header>
  );
}
