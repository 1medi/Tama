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

export default function FaqSection({ faq }) {
  return (
    <section id="faq">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 py-16 lg:py-20"
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]"
        >
          FAQ
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-serif leading-[0.98] tracking-[-0.04em] mb-9"
        >
          Common Questions
        </motion.h2>

        <motion.div variants={stagger} className="grid md:grid-cols-2 gap-5">
          {faq.map((item) => (
            <motion.div
              key={item.question}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] bg-white/80 border border-black/5 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] backdrop-blur-sm"
            >
              <h3 className="text-2xl font-serif tracking-[-0.02em] mb-4">
                {item.question}
              </h3>
              <div className="text-neutral-700 leading-7">{item.answer}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}