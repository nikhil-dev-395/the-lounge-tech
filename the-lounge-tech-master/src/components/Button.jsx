import Image from "next/image";
import Link from "next/link";
import React from "react";


const Button = (props) => {
  return (
    <Link
      href="/home"
      className=" bg-gradient-g1 shadow-custom rounded-custom py-3 px-4 bg-slate-400 inline-block  "
    >
      <div className="flex gap-2 items-center">
        <span className=""> {props.name || "get in touch"} </span>{" "}
        <Image
          src={props.ImageSrc || "/Icons/rightArrow.svg"}
          width={10}
          height={14}
          className=""
          alt="rightArrow"
        />
      </div>
    </Link>
  );
};

export default Button;
