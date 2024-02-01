import React from "react";

import { motion } from "framer-motion";
import { BackgroundPink } from "./BackgroundPink";
// import { Background } from "./Background";

export const AnimatedCard = () => {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-gray p-8"
    >
      <div className="relative z-10 text-white">
        {/* scale up into the origin-top-left */}
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          trasition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left text-5xl leading-[1.2]"
        >
          Standard
        </motion.span>
        <p>Playing around with React, Motion and TailwindCSS.</p>
      </div>

      {/* <button
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-black
      
        backdrop-blur
      transition-colors hover:bg-white/30 hover:text-white
      "
      >
        Get it now
      </button> */}
      <BackgroundPink />
    </motion.div>
  );
};
