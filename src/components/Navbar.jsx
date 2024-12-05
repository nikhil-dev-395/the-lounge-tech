import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="w-full h-20 ">
      <ul className="flex gap-10 mx-auto w-1/2 items-center justify-center py-4 border border-slate-300 rounded-xl my-4 bg-secondary text-white">
        {/* logo */}
        <li className="flex">
          {" "}
          <Image
            src="/Icons/Logo.svg"
            alt="RightArrow"
            width={140}
            height={10}
          />{" "}
        </li>
        <li>home</li>
        <li>about us</li>
        <li>services</li>
        <li>pages</li>
        <li>contact</li>
        <li>
          <button className="bg-gradient-g1 shadow-custom rounded-custom px-3 py-2 flex items-center gap-3">
            lets talk
            <Image
              src="/Icons/RightArrow.svg"
              alt="RightArrow"
              width={10}
              height={10}
            />{" "}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
