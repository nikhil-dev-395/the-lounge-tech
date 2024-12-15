import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="w-full max-w-[95%] mx-auto border-t-2 border-slate-200 bg-footerBg text-slate-300">
      <Spotlight
        className={cn("-top-40", "left-0", "md:left-60", "md:-top-20")}
        fill="white"
      />

      {/* Main Content */}
      <div className="pt-12 pb-8">
        <ul className="max-w-[90%] mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo & Description */}
          <li>
            <div className="flex flex-col gap-4 items-start">
              <Image src="/Icons/Logo.svg" alt="Logo" width={180} height={20} />
              <p className="text-[15px] sm:text-[17px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </li>

          {/* Column 2: Office Information */}
          <li>
            <div className="flex flex-col items-start">
              <h3 className="text-xl sm:text-2xl font-semibold capitalize text-white">
                Our Office
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold capitalize text-white pt-3 sm:pt-5">
                LoungeTech
              </h4>
              <p className="text-[15px] sm:text-[17px] leading-relaxed w-full sm:w-[67%] pt-1">
                Sanguin Street No. 40, Sample, Region State 12121, Country
              </p>
            </div>
          </li>

          {/* Column 3: Subscription Form */}
          <li>
            <div className="flex flex-col gap-5 items-start">
              <h3 className="text-xl sm:text-2xl font-semibold capitalize text-white">
                Subscribe Now!
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  placeholder="Enter your email now!"
                  className="flex-1 py-2 sm:py-3 px-4 rounded-lg bg-slate-800 border border-slate-600 focus:border-blue-500 focus:outline-none text-slate-300"
                />
                <div className="">
                  <Button name="Subscribe" />
                </div>
              </div>
              <p className="text-[14px] sm:text-[17px] leading-relaxed text-slate-300">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="border-t-2 border-slate-700 py-6 max-w-[90%] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start text-left gap-4">
          <p className="text-sm sm:text-base">
            &copy; 2023 <span className="font-semibold">LOUNGETECH</span>. All
            Rights Reserved.
          </p>
          <ul className="flex gap-3 flex-wrap text-xs sm:text-sm">
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer">
              <Link href="/cookie-settings">Cookie Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
