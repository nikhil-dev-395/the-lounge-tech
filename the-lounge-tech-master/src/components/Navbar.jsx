import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="w-full pt-[74px] ">
      <nav className="px-10 mx-auto max-w-4xl py-4 border border-slate-300 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm">
        <ul className="flex items-center justify-center gap-10">
          {/* logo */}
          <li className="flex">
            <Image src="/Icons/Logo.svg" alt="Logo" width={140} height={10} />
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
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;