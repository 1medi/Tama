"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <>
    <Header/>
      <main className="min-h-screen flex items-center justify-center bg-[linear-gradient(to_bottom,_#fff7f2,_#ffffff)] text-neutral-900 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-lg"
        >
          <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#a5543c] mb-4">
            404
          </p>

          <h1 className="text-5xl lg:text-6xl font-serif tracking-[-0.04em] mb-5">
            Page not found
          </h1>

          <p className="text-neutral-700 leading-7 mb-8">
            The page you’re looking for does not exist or may have been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-[#c1684d] px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
          >
            Back to Home →
          </Link>
        </motion.div>

      </main>
      <Footer/>
    </>
  );
}
