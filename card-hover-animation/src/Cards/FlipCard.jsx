import React from "react";
import { useState } from "react";

import { motion } from "framer-motion";

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const handleFlip = () => {
    if (!isAnimated) {
      setIsFlipped(!isFlipped);
      setIsAnimated(true);
    }
  };

  return (
    <motion.div
      className=" flip-card flex items-center justify-center cursor-pointer h-96 w-80 rounded-xl bg-sky-300 p-8"
      onClick={handleFlip}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 0.6, animationDuration: "normal" }}
      onAnimationComplete={() => setIsAnimated(false)}
    >
      <div style={{}}></div>
    </motion.div>

    // <div className="flex items-center justify-center bg-sky-300 h-[800px] cursor-pointer"></div>
  );
};
