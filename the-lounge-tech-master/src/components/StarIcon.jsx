import Image from "next/image";
import React from "react";

const StarIcon = ({ top, bottom, left, right, width, height, className }) => {
  return (
    <div
      className={`absolute ${className || ""}`}
      style={{
        top: top || undefined,
        bottom: bottom || undefined,
        left: left || undefined,
        right: right || undefined,
      }}
    >
      <Image
        src="/Icons/uiStarIcon.svg"
        width={width || 40}
        height={height || 40}
        alt="uiStarIcon"
      />
    </div>
  );
};

export default StarIcon;
