import { motion, useDragControls } from "framer-motion";
import GrainySphere from "/src/assets/grainy-sphere-small.png";
import { useRef } from "react";

export const GridOne = () => {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      className="grid grid-1 overflow-hidden items-center relative justify-center"
    >
      <motion.div
        animate={{
          rotate: "360deg",
          scale: [2, 1, 2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.9}
        className="w-[50%] h-[auto] bg-cover justify-center absolute inset-0 m-auto"
        style={{ backgroundImage: `url(${GrainySphere})` }}
      ></motion.div>
    </div>
  );
};
