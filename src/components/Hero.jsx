import React from "react";

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen pt-16">
        <h2 className="text-[23px] font-light text-center font-urbanist py-10 uppercase ">
          we're the experts
        </h2>
        <h1 className="text-[59px] max-w-[60%] text-center mx-auto capitalize font-bold">
          we develope{" "}
          <span className="font-urbanist text-purple-700 capitalize">
            amazing
          </span>{" "}
          website for your bussines
        </h1>
        <p className=" text-purple-50 capitalize max-w-[40%] text-center mx-auto text-sm pt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in.
        </p>
      </section>
    </>
  );
};

export default Hero;
