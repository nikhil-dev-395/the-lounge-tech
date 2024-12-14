import Carousel from "@/components/carousel.jsx";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutCard from "@/components/AboutCard";

const About = () => {
  const aboutCardInfo = [
    {
      id: 1,
      cardName: "expertise in figma-to-webflow",
      cardDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      cardIcon: "/Icons/trophy.svg",
      cardLink: "/home",
    },
    {
      id: 2,
      cardName: "on-page SEO excellence",
      cardDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      cardIcon: "/Icons/trophy.svg",
      cardLink: "/home",
    },
    {
      id: 3,
      cardName: "dedicated project manager",
      cardDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      cardIcon: "/Icons/trophy.svg",
      cardLink: "/home",
    },
  ];

  const slides = [
    "https://via.placeholder.com/300x400",
    "https://via.placeholder.com/300x400?text=Slide+2",
    "https://via.placeholder.com/300x400?text=Slide+3",
  ];

  return (
    <section className="w-full h-auto pt-20 ">
      <Carousel />

      <p className="text-center font-urbanist text-[23px] font-semibold leading-[118%] tracking-[3.45px] uppercase pt-[80px] text-accent2">
        what we do
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold pt-10 capitalize">
        we provide the best service for you
      </h1>

      <p className="text-[17px] sm:text-[19px] pt-8 sm:pt-16 text-slate-400 max-w-[90%] md:max-w-[600px] mx-auto text-center font-base">
        We help clients create with our talented experts.
      </p>

      <div
        id="boxes"
        className="pt-16 sm:pt-32 flex flex-wrap max-w-full md:max-w-[90%] gap-6 sm:gap-8 lg:gap-10 mx-auto justify-center px-4"
      >
        {aboutCardInfo.map(
          ({ id, cardName, cardDetails, cardIcon, cardLink }) => (
            <AboutCard
              key={id}
              cardName={cardName}
              cardDetails={cardDetails}
              cardIcon={cardIcon}
              cardLink={cardLink}
            />
          )
        )}
      </div>
    </section>
  );
};

export default About;
