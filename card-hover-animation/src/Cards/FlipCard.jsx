import React from "react";
import { useState } from "react";

import PhotoOne from "/src/assets/circular-glass.png";

import PhotoTwo from "/src/assets/glass-vibrant.png";

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
      className="flex items-center justify-center bg-sky-300 h-96 w-80 p-y cursor-pointer rounded-xl"
      onClick={handleFlip}
      initial={false}
      animate={{ rotateY: isFlipped ? 180 : 360 }}
      transition={{ duration: 0.6, animationDuration: "normal" }}
      onAnimationComplete={() => setIsAnimated(false)}
    >
      <motion.div className="flip-card w-[600px] h-[360px] rounded-md">
        <motion.div className="flip-card-inner w-[100%] h-[100%]">
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg"
            style={{ backgroundImage: `url(${PhotoOne})` }}
          >
            helloooooo world
          </div>

          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg"
            style={{ backgroundImage: `url(${PhotoTwo})` }}
          >
            back of the card
          </div>
        </motion.div>
      </motion.div>
    </motion.div>

    // <div className="flex items-center justify-center bg-sky-300 h-[800px] cursor-pointer"></div>
  );
};

{
  /* <motion.div>
      <motion.div
        className=" flip-card flex items-center justify-center cursor-pointer h-96 w-80 rounded-xl bg-sky-300 p-8"
        onClick={handleFlip}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDuration: "normal" }}
        onAnimationComplete={() => setIsAnimated(false)}
        style={{ backgroundImage: `url(${PhotoOne})` }}
      >
        <div>
          <h1 className="text-white">hello</h1>
        </div>
      </motion.div>
    </motion.div> */
}
