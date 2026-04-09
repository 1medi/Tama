"use client";

import Image from "next/image";
import Link from "next/link";
import Tama from "/public/tama.svg";

const navigation = [
  { name: "About", link: "/#about" },
  { name: "Products", link: "/#products" },
  { name: "Contact", link: "/#contact" },
  { name: "FAQ", link: "/#faq" },

];

export default function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="lg:hidden">
          <label htmlFor="my-drawer" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start">
          <Link href="/">
            <Image
              src={Tama}
              alt="Tama wordmark"
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-neutral-700 hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <div className="w-72 min-h-full bg-white p-6 flex flex-col gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-lg font-medium text-neutral-800"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}