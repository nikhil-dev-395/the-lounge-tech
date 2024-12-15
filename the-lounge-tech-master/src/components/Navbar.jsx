"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full pt-[50px]">
        {/* Navbar for Desktop */}
        <nav className="hidden lg:block md:px-10 px-4 mx-auto md:max-w-4xl w-full py-4 border border-slate-300 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm">
          <ul className="flex capitalize flex-col md:flex-row items-center md:justify-center text-[14px] md:gap-10 gap-4">
            {/* Logo */}
            <li className="flex">
              <Image src="/Icons/Logo.svg" alt="Logo" width={140} height={10} />
            </li>
            {/* Navigation Links */}
            <li>home</li>
            <li>about us</li>
            <li>services</li>
            <li>pages</li>
            <li>contact</li>
            {/* Button */}
            <li>
              <Button name="lets talking" ImageSrc="/Icons/rightArrow.svg" />
            </li>
          </ul>
        </nav>

        {/* Navbar for Mobile and Small Devices */}
        <nav className="lg:hidden block md:px-10 px-4 mx-auto md:max-w-4xl w-full py-4 border border-slate-300 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm">
          <ul className="flex justify-between items-center text-[14px] capitalize">
            {/* Logo */}
            <li>
              <Image src="/Icons/Logo.svg" alt="Logo" width={140} height={10} />
            </li>
            {/* Hamburger Menu Icon */}
            <li>
              <button
                onClick={toggleMenu}
                className="focus:outline-none"
                aria-label="Toggle menu"
              >
                <Image
                  src={isMenuOpen ? "/Icons/cancel.svg" : "/Icons/menu.svg"}
                  alt="Menu toggle icon"
                  width={30}
                  height={30}
                />
              </button>
            </li>
          </ul>
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <ul className=" text-xl capitalize flex flex-col gap-4 mt-4 bg-secondary/90 p-4 rounded-xl shadow-md">
              <li className="text-center">home</li>
              <li className="text-center">about us</li>
              <li className="text-center">services</li>
              <li className="text-center">pages</li>
              <li className="text-center">contact</li>
              <li className="text-center">
                <Button name="lets talking" ImageSrc="/Icons/rightArrow.svg" />
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
