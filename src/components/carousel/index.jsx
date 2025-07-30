"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Carousel() {
  const items = [
    {
      url: "/tama.jpg",
      description: (
        <div className="flex flex-col">
          <h1 className="text-9xl">ta·ma</h1>
          <h2>Since 2017</h2>
          <p> Located on the corner of Fraser and Kingsway.</p>
        </div>
      ),
    },
    {
      url: "/tama.jpg",
      description: (
        <div>
          <h1>Right food. Right price. Right for the community.</h1>
        </div>
      ),
    },
    {
      url: "/tama.jpg",
      description: (
        <div>
          <h1>Tama is the neighbourhood grocery that feels like home.</h1>
          <h2>
            We bring cultural staples, comforting essentials, and everyday value
            to communities with warmth, pride, and purpose!
          </h2>
        </div>
      ),
    },
    { url: "/tama.jpg", description: "EXPERIENCE TAMA COMMUNITY" },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="relative h-screen m-4"
        >
          <Image
            src={items[index].url}
            fill
            alt={`carousel-image-${index}`}
            className="object-cover rounded-xl "
          />
          <div className="absolute bottom-4 left-4 p-4  rounded-lg bg-background shadow-gentle border border-border text-foreground">
            {items[index].description}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between px-8">
        <button
          onClick={handlePrev}
          className="bg-white/70 hover:bg-white text-black px-3 py-1 rounded shadow hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-white/70 hover:bg-white text-black px-3 py-1 rounded shadow hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
