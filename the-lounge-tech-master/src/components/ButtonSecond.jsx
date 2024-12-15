import Image from "next/image";
import Link from "next/link";
import React from "react";

const ButtonSecond = (props) => {
  return (
    <Link
      href={props.src || "/"}
      className=" rounded-custom py-3 px-4 border border-accent bg-[#0B081E] inline-block  "
    >
      <div className="flex gap-2 items-center text-accent">
        <span className=""> {props.name || "get in touch"} </span>{" "}
        <Image
          src={props.ImageSrc || "/Icons/RightArrowPurple.svg"}
          width={10}
          height={14}
          className=""
          alt="rightArrow"
        />
      </div>
    </Link>
  );
};

export default ButtonSecond;
