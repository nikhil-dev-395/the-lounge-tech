import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="w-full h-auto pt-7 px-4 md:px-0">
        {/* Subtitle */}
        <h2 className="text-[18px] md:text-[23px] font-light text-blue-100 text-center font-urbanist py-6 uppercase">
          we&apos;re the experts
        </h2>

        {/* Title */}
        <h1 className="text-[32px] md:text-[59px] leading-tight max-w-[90%] md:max-w-[60%] text-center mx-auto capitalize font-bold">
          we develop{" "}
          <span className="font-urbanist text-purple-700">amazing</span> website
          for your business
        </h1>

        {/* Description */}
        <p className="text-slate-400 font-normal capitalize max-w-[90%] md:max-w-[50%] text-center mx-auto text-[15px] md:text-[17px] pt-6 md:pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in.
        </p>

        {/* Buttons */}
        <div
          id="btn-hero"
          className="w-full flex flex-col md:flex-row items-center justify-center py-8 md:py-10 gap-4 md:gap-10"
        >
          <Button />
          <Button />
        </div>
      </section>
    </>
  );
};

export default Hero;
