'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/dhar.png',
'/dhar.png',
'/dhar.png',
'/dhar.png',
'/dhar.png',
'/dhar.png',
'/dhar.png',
];

export default function SelfMovingCarousel() {
  return (
    <div className="relative overflow-hidden h-[500px] w-full bg-white py-10">
      <motion.div
        className="flex w-max gap-8 absolute"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {/* Repeat images twice to fill the space for infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="min-w-[200px] h-[150px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`brand item ${index}`}
              width={200}
              height={150}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}