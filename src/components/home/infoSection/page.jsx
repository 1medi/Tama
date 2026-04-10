"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

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

export default function InfoSection({ storeInfo }) {
  return (
    <section className="relative border-b border-black/5 scroll-mt-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
        className="max-w-6xl mx-auto px-6 py-14"
      >
        <div className="grid md:grid-cols-3 gap-5">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="rounded-[2rem] bg-white/80 border border-black/5 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] backdrop-blur-sm"
          >
            <h2 className="text-2xl font-serif tracking-[-0.02em] mb-4">
              Visit Us
            </h2>
            <p className="text-neutral-700 leading-7 mb-3">
              {storeInfo.address}
            </p>
            <div className="space-y-1 mb-5">
              <p className="text-neutral-700">{storeInfo.phone}</p>
              <p className="text-neutral-700 break-words">{storeInfo.email}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${storeInfo.phone.replace(/[^0-9]/g, "")}`}
                className="flex-1 text-center rounded-full bg-[#c1684d] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
              >
                Call Now
              </a>
              <a
                href={`mailto:${storeInfo.email}`}
                className="flex-1 text-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-800 transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff7f2]"
              >
                Email Us
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="rounded-[2rem] bg-[#f5b08f]/20 border border-black/5 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
          >
            <h2 className="text-2xl font-serif tracking-[-0.02em] mb-4">
              Store Hours
            </h2>
            <div className="space-y-2.5 text-neutral-800">
              {storeInfo.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <span className="font-medium">{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="rounded-[2rem] bg-white/80 border border-black/5 p-7 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.04)] backdrop-blur-sm"
          >
            <div>
              <h2 className="text-2xl font-serif tracking-[-0.02em] mb-4">
                Latest Updates
              </h2>
              <p className="text-neutral-700 leading-7 mb-6">
                Follow us for new arrivals, fresh produce updates, and in-store
                highlights.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/tamasupermarket/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c1684d] px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
              >
                Follow on Instagram
                <span className="transition group-hover:translate-x-1">
                  <FaInstagram className="text-white" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}