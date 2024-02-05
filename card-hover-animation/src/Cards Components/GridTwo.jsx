import React from "react";
import { motion } from "framer-motion";

export const GridTwo = () => {
  return (
    <motion.div
      className="bg-natural-900 grid shrink-0 grid-2 overflow-hidden relative"
      whileHover="hover"
      variants={{
        scale: 1,
        // hover: {
        //   scale: 1,
        // },
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
        trasition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <motion.svg
          width="360"
          height="480"
          viewBox="0 0 320 384"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" m-auto"
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
          // animate={{
          //   rotate: 180,
          // }}
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
      </motion.div>
    </motion.div>
  );
};
