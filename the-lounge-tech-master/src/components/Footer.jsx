import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full  max-w-[95%] mx-auto border-t-2 border-slate-200 bg-footerBg text-slate-300">
      {/* Main Content */}
      <div className="pt-16 pb-10">
        <ul className="max-w-[90%] mx-auto grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-12">
          {/* Column 1: Logo & Description */}
          <li>
            <div className="flex flex-col gap-4">
              <Image src="/Icons/Logo.svg" alt="Logo" width={180} height={20} />
              <p className="text-[17px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </li>

          {/* Column 2: Office Information */}
          <li>
            <div className="flex flex-col ">
              <h3 className="text-2xl font-semibold capitalize text-white">
                Our Office
              </h3>
              <h4 className="text-xl font-semibold capitalize text-white pt-5">
                LoungeTech
              </h4>
              <p className="text-[17px] leading-relaxed w-[67%] pt-1">
                Sanguin Street No. 40, Sample, Region State 12121, Country
              </p>
            </div>
          </li>

          {/* Column 3: Subscription Form */}
          <li className="md:ml-[-100px]">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold capitalize text-white">
                Subscribe Now!
              </h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email now!"
                  className="flex-1 py-3 px-4 rounded-lg bg-slate-800 border border-slate-600 focus:border-blue-500 focus:outline-none text-slate-300"
                />
                <Button name="subscribe" />
              </div>
              <p className="text-[17px] leading-relaxed text-slate-300">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-slate-700 py-6 pb-16 pt-10 max-w-90%">
        <div className="max-w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-sm md:text-base">
            &copy; 2023 <span className="font-semibold">LOUNGETECH</span>. All
            Rights Reserved.
          </p>
          <ul className="flex gap-24">
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              <Link href=" Privacy Policy"> Privacy Policy</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              <Link href="Terms of Service">Terms of Service</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              <Link href="Cookie Settings">Cookie Settings</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
