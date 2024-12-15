"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const TeamPeople = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamMembers = [
    {
      name: "Sarah Lee",
      position: "UI/UX Designer",
      image: "/image.jpg", // Update with actual path
    },
    {
      name: "James Bond",
      position: "Project Manager",
      image: "/img5.jpg", // Update with actual path
    },
    {
      name: "Lily Adams",
      position: "Backend Developer",
      image: "/img6.jpg", // Update with actual path
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full h-auto max-w-[90%] mx-auto">
      <h1 className="md:text-xl  font-thin uppercase font-urbanist">
        Our Dedicated Team
      </h1>
      <div className="flex justify-between gap-10 md:pt-10 pt-4 flex-col md:flex-row">
        <p className="text-3xl sm:text-[40px] font-semibold capitalize">
          Meet Our People
        </p>
        <div className="btn flex gap-10">
          <button onClick={handlePrev} className="outline-none">
            <Image
              src="/Icons/x-leftArrow.svg"
              width={40}
              height={40}
              alt="x-leftArrow"
              className="inline-block w-auto h-auto rounded-full py-2 px-2 border-2 border-accent"
            />
          </button>
          <button onClick={handleNext} className="outline-none">
            <Image
              src="/Icons/x-rightArrow.svg"
              width={40}
              height={40}
              alt="x-rightArrow"
              className="inline-block w-auto h-auto rounded-full py-2 px-2 border-2 border-accent"
            />
          </button>
        </div>
      </div>

      <div className="flex w-[88%] mx-auto items-center overflow-x-hidden scroll-smooth pt-20">
        {/* Sliding effect using framer-motion */}
        <motion.div
          className="flex"
          initial={{ x: 100 }} // Start from right
          animate={{ x: 0 }} // Slide to original position
          exit={{ x: -100 }} // Slide to left
          transition={{ duration: 0.5 }}
        >
          {teamMembers
            .slice(currentIndex, currentIndex + 4) // Show 4 team members at once
            .map((member, index) => (
              <div
                key={index}
                className={`teamProfileType${index % 2 === 0 ? "1" : "2"} mx-2`} // Alternate between small and large
              >
                <div className="w-[310px]">
                  {/* Display image with alternating height and animation */}
                  <motion.div
                    whileHover={{ scale: 1.04 }} // Scale up on hover
                    initial={{ opacity: 0.8 }} // Start with slight opacity
                    animate={{ opacity: 1 }} // Animate to full opacity
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.image}
                      width={289}
                      height={index % 2 == 0 ? 357 : 450} // Increased height for odd indexes
                      alt={`${member.name} - ${member.position}`}
                      className="rounded-xl w-[289px]  mx-auto object-cover object-fit px-[5px]"
                    />
                  </motion.div>
                  <h3 className="text-center font-semibold text-lg capitalize">
                    {member.name}
                  </h3>
                  <p className="text-center font-thin capitalize">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPeople;
