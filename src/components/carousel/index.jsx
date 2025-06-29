'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Carousel() {
  const items = [
    { url: '/dhar.png' },
    { url: '/dhar.png' },
    { url: '/dhar.png' },
    { url: '/dhar.png'},
  ];

  const [activeItem, setActiveItem] = useState(items[0]);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing"
      >
        {items.slice(0, 8).map((itemData, index) => (
          <motion.div key={index} className="min-w-screen min-h-[100vh] p-2">
            <Image
              src={itemData.url}
              width={400}
              height={400}
              alt={`img-${index}`}
              className="w-full h-full object-cover pointer-events-none rounded-md"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
