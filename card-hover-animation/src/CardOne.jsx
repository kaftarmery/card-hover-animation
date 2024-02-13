import { motion, useDragControls } from "framer-motion";
import GrainySphere from "/src/assets/grainy-sphere-small.png";
import { useRef } from "react";
// change this to the new animations

export const CardOne = () => {
  const constraintsRef = useRef(null);

  return (
    <div
      className="relative h-96 w-80 shrink-0 items-center overflow-hidden rounded-xl bg-black place-content-center"
      ref={constraintsRef}
    >
      <div className="relative h-96 w-80 shrink-0 items-center overflow-hidden justify-center">
        <motion.div
          animate={{
            rotate: "360deg",
            scale: [2, 4, 2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.4}
          className="w-[20%] h-[auto] bg-contain justify-center absolute inset-0 m-auto"
          style={{ backgroundImage: `url(${GrainySphere})` }}
        ></motion.div>

        <motion.div
          animate={{
            rotate: "360deg",
            scale: [2, 4, 2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.4}
          className="w-[20%] h-[auto] bg-contain justify-center absolute inset-0 m-auto"
          style={{ backgroundImage: `url(${GrainySphere})` }}
        ></motion.div>

        <motion.div
          animate={{
            rotate: "360deg",
            scale: [2, 4, 2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.4}
          className="w-[20%] h-[auto] bg-contain justify-center absolute inset-0 m-auto"
          style={{ backgroundImage: `url(${GrainySphere})` }}
        ></motion.div>
      </div>
    </div>
  );
};
