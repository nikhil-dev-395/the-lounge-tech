import React from "react";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <header className="w-full pt-[50px]">
        <nav className="md:px-10 px-4 mx-auto md:max-w-4xl w-full py-4 border border-slate-300 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm">
          <ul className="flex flex-col md:flex-row items-center md:justify-center text-[14px] md:gap-10 gap-4">
            {/* Logo */}
            <li className="flex">
              <Image
                src="/Icons/Logo.svg"
                alt="Logo"
                width={140}
                height={10}
              
              />
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
      </header>
    </>
  );
};

export default Navbar;
