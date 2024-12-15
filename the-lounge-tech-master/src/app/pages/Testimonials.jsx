"use client";

import TestimonialsCard from "@/components/TestimonialsCard";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion

const testimonialsData = [
  {
    clientImage: "/Icons/BlankCircle.svg",
    clientName: "Nikhil Wankhade",
    clientPosition: "Software Developer",
    clientReviewComment:
      "This is a test review. It is a long comment but for demonstration purposes.",
  },
  {
    clientImage: "/Icons/BlankCircle.svg",
    clientName: "John Doe",
    clientPosition: "Project Manager",
    clientReviewComment:
      "Great experience working with this team! Highly recommend.",
  },
  {
    clientImage: "/Icons/BlankCircle.svg",
    clientName: "Jane Smith",
    clientPosition: "UI/UX Designer",
    clientReviewComment:
      "Fantastic work and excellent communication throughout the project!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-auto">
      <div className="pt-32">
        <h3 className="text-testimonialsHead text-[23px] font-urbanist font-thin uppercase text-center">
          Testimonials
        </h3>
        <h1 className="pt-10 text-Headings text-[39px] font-urbanist font-thin capitalize text-center">
          This is what others have to say
        </h1>
        <p className="pt-4 text-slate-500 text-md font-urbanist capitalize text-center">
          Discover what our clients are saying about their experiences.
        </p>
      </div>

      {/* Carousel */}
      <div
        id="boxes"
        className="pt-32 py-24 flex max-w-[80%] mx-auto justify-center items-center relative"
      >
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 transform -translate-x-10  md:-translate-x-16 focus:outline-none"
        >
          <Image
            src="/Icons/x-leftArrow.svg"
            width={40}
            height={40}
            alt="x-leftArrow"
            className="inline-block md:w-auto md:h-auto w-10  rounded-full py-2 px-2 border-2 border-accent"
          />
        </button>

        {/* TestimonialsCard with animation */}
        <motion.div
          key={currentIndex} // Key is used to trigger animation on change
          initial={{ opacity: 0, x: 100 }} // Start from the right
          animate={{ opacity: 1, x: 0 }} // Move to original position
          exit={{ opacity: 0, x: -100 }} // Move to the left when exiting
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth animation
        >
          <TestimonialsCard
            clientImage={testimonialsData[currentIndex].clientImage}
            clientName={testimonialsData[currentIndex].clientName}
            clientPosition={testimonialsData[currentIndex].clientPosition}
            clientReviewComment={
              testimonialsData[currentIndex].clientReviewComment
            }
          />
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 transform translate-x-10 md:translate-x-16 focus:outline-none"
        >
          <Image
            src="/Icons/x-rightArrow.svg"
            width={40}
            height={40}
            alt="x-rightArrow"
            className="inline-block md:w-auto md:h-auto w-10 rounded-full py-2 px-2 border-2 border-accent"
          />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
