import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="w-full h-auto  pt-7">
        <h2 className="text-[23px] font-light text-blue-100 text-center font-urbanist py-10 uppercase ">
          we're the experts
        </h2>
        <h1 className="text-[59px] max-w-[60%] text-center mx-auto capitalize font-bold">
          we develope{" "}
          <span className="font-urbanist text-purple-700 capitalize">
            amazing
          </span>{" "}
          website for your bussines
        </h1>
        <p className=" text-secondary font-normal capitalize max-w-[50%] text-center mx-auto text-[15px] pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in.
        </p>

        {/* button */}
        <div
          id="btn-hero"
          className="w-full flex items-center justify-center py-10 gap-10"
        >
          <Button />
          <Button />
        </div>
      </section>
    </>
  );
};

export default Hero;
