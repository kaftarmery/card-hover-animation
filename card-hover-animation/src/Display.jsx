import { motion } from "framer-motion";
import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";
import { CardThree } from "./CardThree";

export const Display = () => {
  return (
    <section className="flex flex-col h-screen place-content-center bg-neutral-900">
      <div className="mx-auto flex gap-10 w-fit">
        <CardOne />
        <CardThree />
        <CardTwo />
      </div>
    </section>
  );
};
