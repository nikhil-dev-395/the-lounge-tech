import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCard = ({ cardName, cardIcon, cardDetails, cardLink }) => {
  return (
    <>
      <div
        id="card"
        className="px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-all duration-300 hover:cursor-default hover:md:-mt-11 ease-in-out"
      >
        <div
          id="image-box"
          className="absolute top-[-30px] left-4 py-2 px-3 bg-secondary/80 text-white backdrop-blur-sm rounded-xl"
        >
          <Image src={cardIcon} width={50} height={44} alt="trophy" />
        </div>

        {/* details */}
        <div className="pt-10 text-Headings">
          <h2 className="text-[19px] w-max capitalize">{cardName}</h2>

          <p className="pt-10 text-slate-400">{cardDetails}</p>

          {/* TODO :  read more button */}
          <Link
            href={cardLink}
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
    </>
  );
};

export default AboutCard;
