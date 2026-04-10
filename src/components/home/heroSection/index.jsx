"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

export default function HeroSection({ heroSlides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startSlideshow, setStartSlideshow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStartSlideshow(true);
    }, 3000);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!startSlideshow) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [startSlideshow, heroSlides.length]);

  return (
    <section className="relative min-h-screen border-b border-black/5 overflow-hidden">
      <div className="absolute inset-0">
        {!startSlideshow ? (
          <Image
            src={heroSlides[0].src}
            alt={heroSlides[0].alt}
            fill
            priority
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlides[currentSlide].src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentSlide].src}
                alt={heroSlides[currentSlide].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        )}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,247,242,0.92)_0%,rgba(255,247,242,0.82)_36%,rgba(255,247,242,0.55)_58%,rgba(255,247,242,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,250,247,0.35)_0%,rgba(255,250,247,0.18)_40%,rgba(255,250,247,0.3)_100%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 min-h-[85vh] flex items-center">
        <div className="max-w-2xl">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#a5543c]"
            >
              Since 2017 • Vancouver
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                className="text-5xl leading-[0.95] tracking-[-0.05em] lg:text-7xl font-serif"
                initial="hidden"
                animate={mounted ? "show" : "hidden"}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.14,
                      delayChildren: 0.25,
                    },
                  },
                }}
              >
                {["Tama", "Supermarket"].map((word) => (
                  <motion.span
                    key={word}
                    variants={{
                      hidden: { opacity: 0, y: 50, filter: "blur(8px)" },
                      show: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    className="inline-block mr-[0.2em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-8 text-neutral-700 lg:text-lg"
            >
              Filipino and Asian groceries, fresh produce, pantry staples, and
              essentials for the community in one convenient neighborhood store.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setStartSlideshow(true);
              setCurrentSlide(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-2.5 bg-white/55 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}