import { motion } from "framer-motion";

export const CardThree = () => {
  return (
    <motion.div
      className="relative  flex items-center justify-center h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-black"
      whileHover="hover"
      variants={{
        hover: {
          scale: 1,
        },
      }}
      transition={{
        duration: 2,
        ease: "backInOut",
      }}
    >
      {/* <p className="absolute text-white z-10 text-center">HI</p> */}
      <motion.div
        variants={{
          hover: {
            scale: 1,
          },
        }}
        transition={{
          duration: 3,
          ease: "backInOut",
        }}
      >
        <motion.svg
          width="395"
          height="473"
          viewBox="110 -60 395 473"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
        >
          {/* the actual circles of the SVG */}
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
            cx="313.5"
            cy="173.5"
            r="144.5"
            fill="#0F0F0F"
          />

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
            cx="313.5"
            cy="173.5"
            r="118.5"
            fill="#151515"
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
            cx="314"
            cy="173"
            r="97"
            fill="#191919"
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
            cx="314"
            cy="173"
            r="71"
            fill="#1D1D1D"
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
            cx="313.5"
            cy="173.5"
            r="50.5"
            fill="#232323"
          />

          <motion.circle
            variants={{
              hover: {
                scale: 9,
              },
            }}
            transition={{
              duration: 1.1,
              ease: "backInOut",
              delay: 0.3,
            }}
            cx="313.5"
            cy="173.5"
            r="31.5"
            fill="#292929"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};
