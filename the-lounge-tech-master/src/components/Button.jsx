import Image from "next/image";
import Link from "next/link";
import React from "react";

/*
 * here just we need icon url , bg color , button text , link href , image block or hidden like what we want like contact or anything else using props
 */
const Button = (props) => {
  return (
    <Link
      href="/home"
      className=" bg-gradient-g1 shadow-custom rounded-custom py-3 px-4 bg-slate-400 inline-block  "
    >
      <div className="flex gap-2 items-center">
        <span className=""> {props.name || "get in touch"} </span>{" "}
        <Image
          src="/Icons/rightArrow.svg"
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
