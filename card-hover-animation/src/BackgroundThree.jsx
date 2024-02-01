import React from "react";
import { motion } from "framer-motion";

export const BackgroundThree = () => {
  return (
    <div>
      <motion.svg
        width="320"
        height="384"
        viewBox="0 0 320 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 2, 1],
        }}
        transition={{
          duration: "5",
          delay: "2",
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.circle
          animate={{
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            repeat: Infinity,
            duration: "6",
          }}
          cx="159.5"
          cy="192.5"
          r="118.5"
          fill="#F8DBFF"
        />
        <motion.circle
          transition={{
            delay: 1,
            repeat: Infinity,
            duration: 3,
          }}
          animate={{
            scale: [0.7, 1.4, 0.7],
          }}
          cx="160"
          cy="192"
          r="87"
          fill="#FBEAFF"
        />

        <motion.circle
          transition={{
            delay: 1,
            repeat: Infinity,
            duration: 2,
          }}
        />

        <motion.ellipse
          animate={{
            initial: 0,
          }}
          transition={{
            delay: 1,
            repeat: Infinity,
            duration: 1,
          }}
          cx="160"
          cy="192.5"
          rx="39"
          ry="40.5"
          fill="#FDF5FF"
        />
      </motion.svg>
    </div>
  );
};
