import React from "react";
import "/src/Styles/CardDisplay.css";
import PhotoOne from "/src/assets/grainy-sphere.png";
import { GridTwo } from "./GridTwo";

export const CardDisplay = () => {
  return (
    <div className="grid-parent h-screen w-full place-content-center px-20 py-32 bg-black">
      <div className="grid grid-1">
        <div
          className="bg-cover w-auto h-auto "
          style={{ backgroundImage: `url(${PhotoOne})` }}
        ></div>
      </div>

      <GridTwo />

      <div className="grid grid-3 second-card">02</div>
      <div className="grid grid-4 second-card">02</div>
      <div className="grid grid-5 second-card">02</div>
    </div>
  );
};

{
  /* <div className="grid h-screen w-full place-content-center px-4 py-12 text-slate-900 bg-neutral-900">
      <div className="flex flex-row gap-10 mx-auto w-fit">

      </div> */
}
