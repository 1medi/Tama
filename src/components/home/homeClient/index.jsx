"use client";

import Image from "next/image";
import HeroSection from "../heroSection";
import InfoSection from "../infoSection";
import AboutSection from "../aboutSection";
import DepartmentsSection from "../departmentsSection";
import FaqSection from "../faqSection";

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
      <InfoSection storeInfo={storeInfo} />
      <AboutSection />
      <DepartmentsSection departments={departments} />
      <FaqSection faq={faq} />
    </main>
  );
}