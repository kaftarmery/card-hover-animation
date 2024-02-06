import React from "react";
import { motion } from "framer-motion";

export const GridTwo = () => {
  return (
    <motion.div
      className="bg-natural-900  grid shrink-0 grid-2 overflow-hidden justify-center relative"
      whileHover="hover"
      // variants={{

      variants={{
        hover: {
          scale: 1,
        },
      }}
      transition={{
        duration: 2,
        ease: "backInOut",
      }}
    >
      <motion.div
        variants={{
          hover: {
            scale: 1,
          },
        }}
        transition={{
          duration: 3,
          ease: "backInOut",
        }}
      >
        <motion.svg
          width="627"
          height="346"
          viewBox="0 0 627 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" m-auto  inset-2"
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
        >
          {/* the actual circles of the SVG */}
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
            cx="313.5"
            cy="173.5"
            r="144.5"
            fill="#1c1c1c"
          />

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
            cx="313.5"
            cy="173.5"
            r="118.5"
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
            cx="314"
            cy="173"
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
            cx="314"
            cy="173"
            r="71"
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
            cx="313.5"
            cy="173.5"
            r="50.5"
            fill="#3D3D3D"
          />

          <motion.circle
            variants={{
              hover: {
                scale: 8,
              },
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              delay: 0.3,
            }}
            cx="313.5"
            cy="173.5"
            r="31.5"
            fill="#444444"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};
