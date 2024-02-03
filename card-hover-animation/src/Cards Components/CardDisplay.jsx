import React from "react";
import "/src/Styles/CardDisplay.css";
import { GridTwo } from "./GridTwo";
import { GridFour } from "./GridFour";
import { GridFive } from "./GridFive";
import { GridOne } from "./GridOne";

export const CardDisplay = () => {
  return (
    <div className=" grid-parent h-screen w-full place-content-center px-20 py-32 bg-black">
      <GridOne />

      <GridTwo />
      <div className="font-PPEditorial grid grid-3 second-card text-xl text-dirty-gray">
        Better than never
      </div>
      <GridFour />
      <GridFive />
    </div>
  );
};
