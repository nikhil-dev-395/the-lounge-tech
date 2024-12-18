"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

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
            <li className="hover:text-blue-400 transition-all duration-300">
              <Link href="/">home</Link>
            </li>
            <li className="hover:text-blue-400 transition-all duration-300">
              <Link href="/about-us">about us</Link>
            </li>
            <li className="hover:text-blue-400 transition-all duration-300">
              <Link href="/services">services</Link>
            </li>
            <li className="hover:text-blue-400 transition-all duration-300">
              <Link href="/pages">pages</Link>
            </li>
            <li className="hover:text-blue-400 transition-all duration-300">
              <Link href="/contact">contact</Link>
            </li>
            {/* Button */}
            <li>
              <Button name="lets talking" ImageSrc="/Icons/rightArrow.svg" />
            </li>
          </ul>
        </nav>

        {/* Navbar for Mobile and Small Devices */}
        <nav className="lg:hidden block md:px-10 px-4 mx-auto md:max-w-4xl w-[98%] py-4 border border-slate-300 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm">
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
            <ul
              className="text-xl capitalize flex flex-col gap-4 mt-4 bg-secondary/90 p-4 rounded-xl shadow-md transition-transform duration-500 ease-in-out transform origin-top scale-y-100"
              style={{ transform: isMenuOpen ? "scaleY(1)" : "scaleY(0)" }}
            >
              <li className="text-center hover:text-blue-400 transition-all duration-300">
                <Link href="/">home</Link>
              </li>
              <li className="text-center hover:text-blue-400 transition-all duration-300">
                <Link href="/about-us">about us</Link>
              </li>
              <li className="text-center hover:text-blue-400 transition-all duration-300">
                <Link href="/services">services</Link>
              </li>
              <li className="text-center hover:text-blue-400 transition-all duration-300">
                <Link href="/pages">pages</Link>
              </li>
              <li className="text-center hover:text-blue-400 transition-all duration-300">
                <Link href="/contact">contact</Link>
              </li>
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
