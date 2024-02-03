import React from "react";
import { motion } from "framer-motion";

export const GridTwo = () => {
  return (
    <div className=" grid grid-2 second-card overflow-hidden">
      <motion.svg
        width="320"
        height="384"
        viewBox="0 0 320 384"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-0"
        ariants={{
          hover: {
            scale: 4,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.4,
        }}
        animate={{
          rotate: 180,
        }}
      >
        {/* the circles */}
        <motion.circle
          variants={{
            hover: {
              scale: 9,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.3,
          }}
          cx="159.5"
          cy="192.5"
          r="123"
          fill="#282828"
        />

        <motion.circle
          variants={{
            hover: {
              scale: 8.5,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.3,
          }}
          cx="160"
          cy="192"
          r="97"
          fill="#2F2F2F"
        />
        <motion.circle
          variants={{
            hover: {
              scale: 7.5,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.3,
          }}
          cx="159.5"
          cy="192.5"
          r="69.5"
          fill="#363636"
        />
        <motion.circle
          variants={{
            hover: {
              scale: 6.5,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.3,
          }}
          cx="159.5"
          cy="192.5"
          r="50.5"
          fill="#3D3D3D"
        />

        <motion.circle
          variants={{
            hover: {
              scale: 5,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
            delay: 0.3,
          }}
          cx="159.5"
          cy="192.5"
          r="30"
          fill="#444444"
        />
      </motion.svg>
    </div>
  );
};
