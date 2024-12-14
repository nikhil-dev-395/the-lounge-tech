import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="w-full h-auto pt-7 px-4 sm:px-8 md:px-16 lg:px-20">
        {/* Subtitle */}
        <h2 className="text-[18px] sm:text-[20px] md:text-[23px] font-light text-blue-100 text-center font-urbanist py-6 uppercase">
          we&apos;re the experts
        </h2>

        {/* Title */}
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[59px] leading-tight max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] text-center mx-auto capitalize font-bold">
          we develop{" "}
          <span className="font-urbanist text-purple-700">amazing</span>{" "}
          websites for your business
        </h1>

        {/* Description */}
        <p className="text-slate-400 font-normal capitalize max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[50%] text-center mx-auto text-[14px] sm:text-[15px] md:text-[17px] pt-6 md:pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in.
        </p>

        {/* Buttons */}
        <div
          id="btn-hero"
          className="w-full flex  sm:flex-row items-center justify-center py-8 sm:py-10 gap-4 sm:gap-6 md:gap-10"
        >
          <Button />
          <Button />
        </div>
      </section>
    </>
  );
};

export default Hero;
