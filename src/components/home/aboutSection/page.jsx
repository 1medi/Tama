"use client";

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

export default function AboutSection() {
  return (
    <section id="about" className="relative border-b border-black/5 scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10">
          <motion.div variants={fadeUp}>
            <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]">
              About
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif leading-[0.98] tracking-[-0.04em] mb-5">
              A simple neighborhood grocery store
            </h2>
            <p className="text-neutral-700 leading-8 max-w-3xl text-base lg:text-lg">
              Derived for our last names Tabon and Martinez, Tama Supermarket is
              a local grocery store serving customers looking for Filipino and
              Asian goods, fresh produce, pantry staples, and everyday
              necessities.
              <br />
              <span className="flex font-bold justify-center m-4">
                AND $1 Veggies and Fruit EVERYDAY
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative rounded-[2rem] bg-white/70 border border-black/5 px-6 py-10 lg:px-10 lg:py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-md overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#c1684d]/10 to-transparent pointer-events-none" />

            <h4 className="relative text-3xl lg:text-5xl font-serif leading-[1.05] tracking-[-0.03em] text-neutral-900">
              Our goal is to make grocery shopping
              <br className="hidden lg:block" />
              <span className="text-[#c1684d]">easy and affordable</span>
              <br className="hidden lg:block" />
              for our community.
            </h4>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}