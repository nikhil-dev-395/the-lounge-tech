import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <>
      <section className="w-auto mx-auto h-auto  pt-20 ">
        <h1 className="text-xl font-thin uppercase  font-urbanist pl-32 ">
          our projects
        </h1>
        <div className=" pt-8 w-[80%] mx-auto flex items-center justify-between">
          <p className="text-[40px] font-semibold capitalize   ">
            the work we have done
          </p>
          <Button />
        </div>

        {/* project card */}

        <div className="project-cards pt-32 flex flex-wrap  gap-x-14 gap-y-10 mx-auto w-[90%]">
          {/* data :

          *  project title ,
          *  project information,
          * direct link

          .projectCard  - is special class for projects

          */}
          <div className=" projectCard px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-projectBox text-white">
            {/* details */}
            <div className="pt-10 text-CardHead">
              <h2 className="text-[22px] text-center capitalize">
                agency website design
              </h2>

              {/* here don't exceed above 14 words */}
              <p className="pt-10 text-center text-slate-300 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>

              {/* Read More Button */}
              <div className=" mx-auto flex justify-center items-center w-auto  pt-10">
                <Link
                  href="/"
                  aria-label="Read more about agency website design"
                  className="inline-block bg-projectLink py-4 px-4 rounded-full "
                >
                  <Image
                    src="/Icons/x-rightArrow.svg"
                    width={13}
                    height={13}
                    alt="Navigate to project details"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* from here projects */}

          <div className=" projectCard px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-projectBox text-white">
            {/* details */}
            <div className="pt-10 text-CardHead">
              <h2 className="text-[22px] text-center capitalize">
                agency website design
              </h2>

              {/* here don't exceed above 14 words */}
              <p className="pt-10 text-center text-slate-300 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>

              {/* Read More Button */}
              <div className=" mx-auto flex justify-center items-center w-auto  pt-10">
                <Link
                  href="/"
                  aria-label="Read more about agency website design"
                  className="inline-block bg-projectLink py-4 px-4 rounded-full "
                >
                  <Image
                    src="/Icons/RightArrowPurple.svg"
                    width={13}
                    height={13}
                    alt="Navigate to project details"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" projectCard px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-projectBox text-white">
            {/* details */}
            <div className="pt-10 text-CardHead">
              <h2 className="text-[22px] text-center capitalize">
                agency website design
              </h2>

              {/* here don't exceed above 14 words */}
              <p className="pt-10 text-center text-slate-300 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>

              {/* Read More Button */}
              <div className=" mx-auto flex justify-center items-center w-auto  pt-10">
                <Link
                  href="/"
                  aria-label="Read more about agency website design"
                  className="inline-block bg-projectLink py-4 px-4 rounded-full "
                >
                  <Image
                    src="/Icons/RightArrowPurple.svg"
                    width={13}
                    height={13}
                    alt="Navigate to project details"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" projectCard px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-projectBox text-white">
            {/* details */}
            <div className="pt-10 text-CardHead">
              <h2 className="text-[22px] text-center capitalize">
                agency website design
              </h2>

              {/* here don't exceed above 14 words */}
              <p className="pt-10 text-center text-slate-300 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>

              {/* Read More Button */}
              <div className=" mx-auto flex justify-center items-center w-auto  pt-10">
                <Link
                  href="/"
                  aria-label="Read more about agency website design"
                  className="inline-block bg-projectLink py-4 px-4 rounded-full "
                >
                  <Image
                    src="/Icons/RightArrowPurple.svg"
                    width={13}
                    height={13}
                    alt="Navigate to project details"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" projectCard px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-projectBox text-white">
            {/* details */}
            <div className="pt-10 text-CardHead">
              <h2 className="text-[22px] text-center capitalize">
                agency website design
              </h2>

              {/* here don't exceed above 14 words */}
              <p className="pt-10 text-center text-slate-300 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>

              {/* Read More Button */}
              <div className=" mx-auto flex justify-center items-center w-auto  pt-10">
                <Link
                  href="/"
                  aria-label="Read more about agency website design"
                  className="inline-block bg-projectLink py-4 px-4 rounded-full "
                >
                  <Image
                    src="/Icons/RightArrowPurple.svg"
                    width={13}
                    height={13}
                    alt="Navigate to project details"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" projectCard px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-projectBox text-white">
            {/* details */}
            <div className="pt-10 text-CardHead">
              <h2 className="text-[22px] text-center capitalize">
                agency website design
              </h2>

              {/* here don't exceed above 14 words */}
              <p className="pt-10 text-center text-slate-300 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </p>

              {/* Read More Button */}
              <div className=" mx-auto flex justify-center items-center w-auto  pt-10">
                <Link
                  href="/"
                  aria-label="Read more about agency website design"
                  className="inline-block bg-projectLink py-4 px-4 rounded-full "
                >
                  <Image
                    src="/Icons/RightArrowPurple.svg"
                    width={13}
                    height={13}
                    alt="Navigate to project details"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* projects end here */}
        </div>
      </section>
    </>
  );
};

export default Services;
