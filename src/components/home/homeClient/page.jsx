"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import HeroSection from "../heroSection/page.jsx";

const faq = [
  {
    question: "Do you carry Filipino products?",
    answer: (
      <>
        Yes. We stock a range of Filipino pantry items, snacks, sauces, noodles,
        frozen goods, and more.
        <div className="mt-6 flex justify-center">
          <a
            href="/pages/products"
            className="inline-flex items-center rounded-full bg-[#c1684d] px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
          >
            View Brands We Carry →
          </a>
        </div>
      </>
    ),
  },
  {
    question: "Can I suggest a product?",
    answer: (
      <>
        Yes. We’re always open to suggestions from our customers. If there’s
        something you’d like us to carry, send us a message and we’ll do our
        best to bring it in.
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.instagram.com/tamasupermarket/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#c1684d] px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
          >
            Message Us on Instagram
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
        </div>
      </>
    ),
  },
  {
    question: "What payment methods do you accept?",
    answer: (
      <>
        Cash, debit, and major credit cards are accepted here. Please be advised
        there is a 2.4% service fee on all major <strong>CREDIT</strong> cards,
        debit cards are exempt.
      </>
    ),
  },
  {
    question: "Is parking available?",
    answer: (
      <>
        You are welcome to park in the back of the building or at the street
        parking out front barring the hours between <strong>4PM - 7PM</strong>.
      </>
    ),
  },
];

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

export default function HomeClient({ heroSlides, storeInfo, departments }) {
  return (
    <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fff7f2_0%,_#fde7dc_20%,_#fff3eb_48%,_#fffaf7_72%,_#ffffff_100%)] text-neutral-900">
      <div className="pointer-events-none fixed inset-0">
        <div className="relative h-screen w-full">
          <Image
            src="/1.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-10"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-5rem] top-8 h-40 w-40 rounded-full bg-[#c1684d]/10 blur-3xl sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
        <div className="absolute right-[-5rem] top-24 h-44 w-44 rounded-full bg-[#f0b596]/16 blur-3xl sm:h-60 sm:w-60 lg:h-80 lg:w-80" />
        <div className="hidden sm:block absolute left-1/3 top-[32rem] h-52 w-52 rounded-full bg-[#c1684d]/8 blur-3xl lg:h-64 lg:w-64" />
        <div className="absolute right-1/4 bottom-[-3rem] h-40 w-40 rounded-full bg-[#f2c6ae]/16 blur-3xl sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
        <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03] bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:18px_18px] sm:[background-size:22px_22px] lg:[background-size:24px_24px]" />
      </div>

      <HeroSection heroSlides={heroSlides} />

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
                <p className="text-neutral-700 break-words">
                  {storeInfo.email}
                </p>
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
                  Follow us for new arrivals, fresh produce updates, and
                  in-store highlights.
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
                Derived for our last names Tabon and Martinez, Tama Supermarket
                is a local grocery store serving customers looking for Filipino
                and Asian goods, fresh produce, pantry staples, and everyday
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
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

          <motion.div
            variants={stagger}
            className="grid md:grid-cols-2 gap-5"
          >
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
    </main>
  );
}