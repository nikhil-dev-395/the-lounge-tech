import Carousel from "@/components/carousel";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className="w-full h-auto pt-20">
      <Carousel />
      <p
        className="text-center font-urbanist text-[23px] font-semibold leading-[118%] tracking-[3.45px] uppercase pt-[80px]"
        style={{
          "--tw-text-opacity": "1",
          color: "var(--ACCENT-COLOR-01-A200, #DDCCF8)",
        }}
      >
        what we do
      </p>

      <h1 className="text-6xl text-center font-semibold pt-10 capitalize">
        we provide the best service for you
      </h1>

      <p className="text-sm pt-16  text-slate-400 max-w-[231px] mx-auto text-center font-base">
        we helping clients to create with our talented expert.
      </p>

      <div
        id="boxes"
        className="pt-32 flex flex-wrap max-w-[90%] gap-x-14 gap-y-10 mx-auto"
      >
        <div
          id="card"
          className="px-10 mx-auto md:w-[324px] md:h-[308] py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-shadow duration-300"
        >
          <div
            id="image-box"
            className="absolute top-[-30px] left-4 py-2 px-3 bg-secondary/80 text-white backdrop-blur-sm rounded-xl "
          >
            <Image
              src="/Icons/trophy.svg"
              width={50}
              height={44}
              alt="trophy"
            />
          </div>

          {/* details */}

          <div className="pt-10 text-aboutCardHead">
            <h2 className="text-[19px] w-max capitalize">
              expertise in figma-to-webflow
            </h2>

            <p className="pt-10 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* read more button */}

            <Link
              href="/home"
              className="text-accent  flex items-center gap-2 pt-4"
            >
              read more{" "}
              <Image
                src="/Icons/RightArrowPurple.svg"
                width={13}
                height={13}
                alt="RightArrow"
              />
            </Link>
          </div>
        </div>

        <div
          id="card"
          className="px-10 mx-auto md:w-[324px] md:h-[308] py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-shadow duration-300"
        >
          <div
            id="image-box"
            className="absolute top-[-30px] left-4 py-2 px-3 bg-secondary/80 text-white backdrop-blur-sm rounded-xl "
          >
            <Image
              src="/Icons/trophy.svg"
              width={50}
              height={44}
              alt="trophy"
            />
          </div>

          {/* details */}

          <div className="pt-10 text-aboutCardHead">
            <h2>expertise in figma-to-webflow</h2>

            <p className="pt-10 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* read more button */}

            <Link
              href="/home"
              className="text-accent flex items-center gap-2 pt-4"
            >
              read more{" "}
              <Image
                src="/Icons/RightArrowPurple.svg"
                width={13}
                height={13}
                alt="RightArrow"
              />
            </Link>
          </div>
        </div>

        <div
          id="card"
          className="px-10 mx-auto md:w-[324px] md:h-[308] py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-shadow duration-300"
        >
          <div
            id="image-box"
            className="absolute top-[-30px] left-4 py-2 px-3 bg-secondary/80 text-white backdrop-blur-sm rounded-xl "
          >
            <Image
              src="/Icons/trophy.svg"
              width={50}
              height={44}
              alt="trophy"
            />
          </div>

          {/* details */}

          <div className="pt-10 text-aboutCardHead">
            <h2>expertise in figma-to-webflow</h2>

            <p className="pt-10 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* read more button */}

            <Link
              href="/home"
              className="text-accent flex items-center gap-2 pt-4"
            >
              read more{" "}
              <Image
                src="/Icons/RightArrowPurple.svg"
                width={13}
                height={13}
                alt="RightArrow"
              />
            </Link>
          </div>
        </div>

        <div
          id="card"
          className="px-10 mx-auto md:w-[324px] md:h-[308] py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-shadow duration-300"
        >
          <div
            id="image-box"
            className="absolute top-[-30px] left-4 py-2 px-3 bg-secondary/80 text-white backdrop-blur-sm rounded-xl "
          >
            <Image
              src="/Icons/trophy.svg"
              width={50}
              height={44}
              alt="trophy"
            />
          </div>

          {/* details */}

          <div className="pt-10 text-aboutCardHead">
            <h2>expertise in figma-to-webflow</h2>

            <p className="pt-10 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* read more button */}

            <Link
              href="/home"
              className="text-accent flex items-center gap-2 pt-4"
            >
              read more{" "}
              <Image
                src="/Icons/RightArrowPurple.svg"
                width={13}
                height={13}
                alt="RightArrow"
              />
            </Link>
          </div>
        </div>

        <div
          id="card"
          className="px-10 mx-auto md:w-[324px] md:h-[308] py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-shadow duration-300"
        >
          <div
            id="image-box"
            className="absolute top-[-30px] left-4 py-2 px-3 bg-secondary/80 text-white backdrop-blur-sm rounded-xl "
          >
            <Image
              src="/Icons/trophy.svg"
              width={50}
              height={44}
              alt="trophy"
            />
          </div>

          {/* details */}

          <div className="pt-10 text-aboutCardHead">
            <h2>expertise in figma-to-webflow</h2>

            <p className="pt-10 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* read more button */}

            <Link
              href="/home"
              className="text-accent flex items-center gap-2 pt-4"
            >
              read more{" "}
              <Image
                src="/Icons/RightArrowPurple.svg"
                width={13}
                height={13}
                alt="RightArrow"
              />
            </Link>
          </div>
        </div>

        <div
          id="card"
          className="px-10 mx-auto md:w-[324px] md:h-[308] py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-shadow duration-300"
        >
          <div
            id="image-box"
            className="absolute top-[-30px] left-4 py-2 px-3 bg-secondary/80 text-white backdrop-blur-sm rounded-xl "
          >
            <Image
              src="/Icons/trophy.svg"
              width={50}
              height={44}
              alt="trophy"
            />
          </div>

          {/* details */}

          <div className="pt-10 text-aboutCardHead">
            <h2>expertise in figma-to-webflow</h2>

            <p className="pt-10 text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            {/* read more button */}

            <Link
              href="/home"
              className="text-accent flex items-center gap-2 pt-4"
            >
              read more{" "}
              <Image
                src="/Icons/RightArrowPurple.svg"
                width={13}
                height={13}
                alt="RightArrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
