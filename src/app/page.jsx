"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "/public/tama.jpg";
import Header from "@/components/header";
import Footer from "@/components/footer";

const storeInfo = {
  name: "Tama Supermarket",
  tagline: "Filipino, Asian groceries and more!",
  address: "698 Kingsway, Vancouver, BC",
  phone: "(604) 559-9593",
  email: "tamasupermarket@gmail.ca",
  hours: [
    { day: "Monday", hours: "9:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
    { day: "Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 8:00 PM" },
  ],
};

const instagramPosts = [
  {
    link: "https://www.instagram.com/p/B-oNdCBniKW/",
    image: "/insta1.jpg",
  },
  {
    link: "https://www.instagram.com/p/B-gaXmzHn9h/",
    image: "/insta2.jpg",
  },
];

const departments = [
  "Fresh produce",
  "Filipino pantry staples",
  "Rice and noodles",
  "Frozen goods",
  "Snacks and drinks",
  "Condiments and sauces",
  "Household essentials",
  "Local and imported specialty items",
];

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
    question: "Do you sell fresh produce?",
    answer: (
      <>
        Yes. We carry fresh vegetables and fruits along with everyday grocery
        essentials. We also carry $1 specials with vegetables purchased every
        day. Come check it out as our selection is updated constantly everyday!
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

export default function Home() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[linear-gradient(to_bottom,_#fff7f2_0%,_#fde7dc_20%,_#fff3eb_48%,_#fffaf7_72%,_#ffffff_100%)] text-neutral-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-7rem] top-8 h-64 w-64 rounded-full bg-[#c1684d]/10 blur-3xl" />
          <div className="absolute right-[-6rem] top-40 h-72 w-72 rounded-full bg-[#f0b596]/20 blur-3xl" />
          <div className="absolute left-1/3 top-[42rem] h-56 w-56 rounded-full bg-[#c1684d]/8 blur-3xl" />
          <div className="absolute right-1/4 top-[90rem] h-64 w-64 rounded-full bg-[#f2c6ae]/20 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="relative border-b border-black/5">
          <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="show"
                variants={stagger}
                className="relative"
              >
                <motion.p
                  variants={fadeUp}
                  className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]"
                >
                  Since 2017 • Vancouver
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  className="max-w-2xl text-5xl leading-[0.95] tracking-[-0.05em] lg:text-7xl font-serif"
                >
                  Tama Supermarket
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-xl text-base leading-8 text-neutral-700 lg:text-lg"
                >
                  Filipino and Asian groceries, fresh produce, pantry staples,
                  and everyday essentials in one convenient neighborhood store.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl"
                >
                  <div className="rounded-[1.75rem] border border-black/5 bg-white/80 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                      Address
                    </p>
                    <p className="font-medium text-neutral-900">
                      {storeInfo.address}
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-black/5 bg-white/80 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm">
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                      Phone
                    </p>
                    <p className="font-medium text-neutral-900">
                      {storeInfo.phone}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2.5rem] bg-white/30 blur-2xl" />
                <Image
                  src={heroImage}
                  alt="Tama Supermarket storefront or interior"
                  className="relative w-full h-[360px] lg:h-[520px] object-cover rounded-[2rem] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
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
                <p className="text-neutral-700">{storeInfo.phone}</p>
                <p className="text-neutral-700">{storeInfo.email}</p>
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

                  <p className="text-neutral-700 leading-7 mb-4">
                    See what’s new in store, fresh arrivals, and weekly
                    highlights.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {instagramPosts.map((post, index) => (
                    <a
                      key={index}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-2xl border border-black/5"
                    >
                      <img
                        src={post.image}
                        alt="Instagram post"
                        className="w-full h-[90px] object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
                    </a>
                  ))}
                </div>

                <a
                  href="https://www.instagram.com/tamasupermarket/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-[#c1684d] transition hover:translate-x-1"
                >
                  @tamasupermarket →
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative border-b border-black/5 scroll-mt-24"
        >
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
                  Tama Supermarket is a local grocery store serving customers
                  looking for Filipino and Asian food, fresh produce, pantry
                  staples, and everyday necessities. Our goal is to make grocery
                  shopping easy, affordable, and familiar for the community.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] bg-[#c1684d]/10 border border-black/5 p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
              >
                <h3 className="text-2xl font-serif tracking-[-0.02em] mb-4">
                  Why People Visit
                </h3>
                <ul className="space-y-3 text-neutral-700 leading-7">
                  <li>Fresh produce for everyday cooking</li>
                  <li>Trusted Filipino and Asian grocery items</li>
                  <li>Convenient local shopping</li>
                  <li>Friendly service and practical prices</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Departments */}
        <section
          id="products"
          className="relative border-b border-black/5 scroll-mt-24"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-6xl mx-auto px-6 py-16"
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]"
            >
              Departments
            </motion.p>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-serif leading-[0.98] tracking-[-0.04em] mb-9"
            >
              Grocery essentials in one place
            </motion.h2>

            {/* Grid */}
            <motion.div
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {departments.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[1.75rem] bg-white/80 border border-black/5 px-5 py-6 text-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm"
                >
                  <p className="text-[1.02rem] leading-7">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Context Text */}
            <motion.p
              variants={fadeUp}
              className="mt-10 text-center text-sm text-neutral-600"
            >
              Looking for specific brands or products?
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-5 flex justify-center">
              <a
                href="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-[#c1684d] px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
              >
                Browse All Brands
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative border-b border-black/5 scroll-mt-24"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-6xl mx-auto px-6 py-16"
          >
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-stretch">
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/80 p-7 lg:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.05)]"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#c1684d]/10 to-transparent pointer-events-none" />

                <div className="relative">
                  <p className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c] mb-3">
                    Visit Us
                  </p>

                  <h2 className="text-4xl lg:text-5xl font-serif leading-[0.98] tracking-[-0.04em] mb-4">
                    Plan Your Visit
                  </h2>

                  <p className="text-neutral-700 leading-7 mb-6 max-w-md">
                    Stop by for fresh produce, Filipino staples, pantry
                    essentials, and everyday grocery finds in the neighbourhood.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="rounded-[1.5rem] bg-[#fff7f2] border border-black/5 px-4 py-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                        Address
                      </p>
                      <p className="text-neutral-800 font-medium">
                        698 Kingsway, Vancouver, BC
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="rounded-[1.5rem] bg-white border border-black/5 px-4 py-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                          Phone
                        </p>
                        <p className="text-neutral-800 font-medium">
                          {storeInfo.phone}
                        </p>
                      </div>

                      <div className="rounded-[1.5rem] bg-white border border-black/5 px-4 py-4">
                        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-neutral-500 mb-1">
                          Email
                        </p>
                        <p className="text-neutral-800 font-medium break-words">
                          {storeInfo.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=698+Kingsway+Vancouver+BC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-[#c1684d] text-white px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-[#a5543c]"
                    >
                      Get Directions
                    </a>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=698+Kingsway+Vancouver+BC"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-black/10 bg-white text-neutral-800 px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff7f2]"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-[#c1684d]/10 p-3 shadow-[0_10px_35px_rgba(0,0,0,0.05)] min-h-[320px] lg:min-h-[100%]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.45),_transparent_35%)] pointer-events-none" />

                <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/40 bg-white/60 backdrop-blur-sm">
                  <iframe
                    src="https://www.google.com/maps?q=698+Kingsway+Vancouver+BC&output=embed"
                    className="w-full h-full min-h-[320px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map showing Tama Supermarket location at 698 Kingsway, Vancouver, BC"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
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
                  <div className="text-neutral-700 leading-7">
                    {item.answer}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
