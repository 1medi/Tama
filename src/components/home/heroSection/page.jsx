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

            <div className="max-w-2xl overflow-hidden">
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

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-white/30 blur-2xl" />

            <div className="relative h-[360px] lg:h-[520px] overflow-hidden rounded-[2rem] border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {!startSlideshow ? (
                <Image
                  src={heroSlides[0].src}
                  alt={heroSlides[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  loading="eager"
                  fetchPriority="high"
                  className="object-cover"
                />
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroSlides[currentSlide].src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroSlides[currentSlide].src}
                      alt={heroSlides[currentSlide].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              )}

              <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}