import Carousel from "@/components/carousel";
import React from "react";

const About = () => {
  return (
    <section className="w-full h-screen pt-20">
      <Carousel />
      <p
        className="text-center font-urbanist text-[23px] font-semibold leading-[118%] tracking-[3.45px] uppercase pt-[80px]"
        style={{
          "--tw-text-opacity": "1",
          color: "var(--ACCENT-COLOR-01-A200, #DDCCF8)",
        }}
      >
        what we do
      </p>
    </section>
  );
};

export default About;
