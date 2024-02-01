import React from "react";
import { motion } from "framer-motion";

export const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="159.5"
        cy="134.5"
        r="79.5"
        fill="black"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.55,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
        cx="159.5"
        cy="278"
        rx="79.5"
        ry="29"
        fill="black"
      />
    </motion.svg>
  );
};
