import React from "react";
import { motion } from "framer-motion";
import { BackgroundThree } from "./BackgroundThree";

export const AnimatedCardThree = () => {
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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-fuchsia-200 p-8"
    >
      <div className="relative z-10 text-black">
        {/* scale up into the origin-top-left */}
        <motion.span
          className="my-2 block origin-top-left text-5xl leading-[1.2]"
          // initial={{ x: -500 }}
        >
          Pulsating
        </motion.span>
        {/* <h1>Hi there</h1> */}
      </div>

      {/* <button
            className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-black uppercase text-black
            
              backdrop-blur
            transition-colors hover:bg-white/30 hover:text-white
            "
          >
            Get it now
          </button> */}
      <BackgroundThree />
    </motion.div>
  );
};
