import React from "react";
import { motion } from "framer-motion";
export const GridFive = () => {
  return (
    <div className="text-white shrink-0 grid grid-5 justify-center overflow-hidden items-center relative">
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: [-50, 250],
          opacity: [1, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
        }}
        className="bg-gray w-[200px]  h-[200px] inline rounded-[5px] px-5 py-2 font-PPEditorial m-1"
      ></motion.div>
    </div>
  );
};
