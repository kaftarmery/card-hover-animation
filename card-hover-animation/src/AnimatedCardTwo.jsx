import React from "react";
// YT TUTORIAL

import { motion } from "framer-motion";
import { BackgroundGreen } from "./BackgroundGreen";

export const AnimatedCardTwo = () => {
  return (
    <motion.div
      // whileHover="hover"
      // variants={{
      //   hover: {
      //     scale: 1.05,
      //   },
      // }}
      // transition={{
      //   duration: 1,
      //   ease: "backInOut",
      // }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-fuchsia-200 p-8"
    >
      <div className="relative z-10 text-black">
        {/* scale up into the origin-top-left */}
        <motion.span
          className="my-2 block origin-top-left text-5xl leading-[1.2]"
          initial={{ x: -200 }}
          animate={{
            x: [0, 900, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.2,
          }}
          whileHover={{
            scale: 0.9,
            opacity: 0.2,
          }}
        >
          Pro
        </motion.span>
        {/* <h1>Hi there</h1> */}
      </div>

      <BackgroundGreen />
    </motion.div>
  );
};
