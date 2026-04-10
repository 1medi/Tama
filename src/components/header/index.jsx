"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Tama from "/public/tama.svg";

const navigation = [
  { name: "About", link: "/#about" },
  { name: "Products", link: "/#products" },
  { name: "Contact", link: "/#contact" },
  { name: "FAQ", link: "/#faq" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,243,232,0.96),_rgba(255,243,232,0.88))] backdrop-blur-xl border-b border-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(229,138,58,0.12),_transparent_45%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* MOBILE */}
        <div className="flex lg:hidden items-center justify-between py-3">
          {/* Hamburger */}
          <label htmlFor="my-drawer" className="cursor-pointer p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-neutral-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          {/* Centered logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image src={Tama} alt="Tama" height={40} />
          </div>

          {/* CTAs */}
          <div className="flex gap-2">
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* LEFT: LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Tama}
              alt="Tama"
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* CENTER: NAV */}
          <nav className="flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-[15px] font-medium tracking-[0.08em] uppercase text-neutral-800 transition duration-300 hover:text-[#C96F2C]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT: CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/tamasupermarket/"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E58A3A] text-white hover:bg-[#C96F2C] transition"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100066806259047"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E58A3A] text-white hover:bg-[#C96F2C] transition"
            >
              <FaFacebookF size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* DRAWER (unchanged) */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <div className="w-72 min-h-full bg-white p-6 flex flex-col gap-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
