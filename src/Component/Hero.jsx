import React from "react";
import img from "E:/React project/portfolia/public/image/kartik.png";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-row items-center w-5/5 -my-32 justify-center  text-center">
        <div>
          <span className="text-white text-8xl font-sans font-bold my-16">
            I'm Frontend Developer
          </span>
          <div className="text-white mt-14 text-center">
            I build responsive, easy-to-use web <br /> interfaces with React.js,
            Material UI, and Tailwind CSS. I'm skilled <br />
            in Git and GitHub for smooth teamwork. My goal is to create <br />
            clean designs that improve user experience and meet project needs.
          </div>
        </div>
        <span className=" w-3/6 scale-150">
          <img src={img} alt="kartik img" />
        </span>
      </div>
    </>
  );
};
