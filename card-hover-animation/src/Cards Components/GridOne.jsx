import React from "react";
import { motion } from "framer-motion";
import PhotoOne from "/src/assets/grainy-sphere.png";

export const GridOne = () => {
  return (
    <div className="grid grid-1 overflow-hidden items-center relative justify-center shrink-0">
      <motion.div
        animate={{
          rotate: "360deg",
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="w-[50%] h-[auto] bg-cover justify-center absolute inset-0 m-auto"
        style={{ backgroundImage: `url(${PhotoOne})` }}
      ></motion.div>
    </div>
  );
};
