"use client"

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function App() {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

  const handleMouseMove = (event) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* this div can be used as the 'dotted grid' */}
      <motion.div
        style={{
          margin: "auto",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          perspective: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rotateX,
          rotateY
        }}
        transition={{ velocity: 0 }}
      >
        <motion.div
          key="card"
          style={{
            boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)",
            borderRadius: 10,
            backgroundColor: "blue",
            width: 400,
            height: 250,
            transformStyle: "preserve-3d",
            perspective: 800, // Set perspective on the card
            cardRotateX,
            cardRotateY
          }}
          transition={{ velocity: 0 }}
        >
          {/* content goes here */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
