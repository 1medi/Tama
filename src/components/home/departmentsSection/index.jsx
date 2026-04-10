"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DepartmentsSection({ departments }) {
  return (
    <section id="products" className="relative border-b border-black/5 scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]"
        >
          Departments
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-serif leading-[0.98] tracking-[-0.04em] mb-9"
        >
          Grocery essentials in one place
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {departments.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="rounded-[1.75rem] bg-white/80 border border-black/5 p-5 text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm overflow-hidden"
            >
              <h3 className="text-[1.05rem] font-serif tracking-[-0.02em] mb-2">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-neutral-600 mb-4">
                {item.description}
              </p>

              <div className="relative w-full h-[150px] overflow-hidden rounded-[1.25rem] border border-black/5">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-10 text-center text-sm text-neutral-600"
        >
          Looking for specific brands or products?
        </motion.p>

        <motion.div variants={fadeUp} className="mt-5 flex justify-center">
          <a
            href="/pages/products"
            className="group inline-flex items-center gap-2 rounded-full bg-[#c1684d] px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
          >
            Browse All Brands
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}