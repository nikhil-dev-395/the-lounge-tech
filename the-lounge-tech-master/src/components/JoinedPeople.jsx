import Image from "next/image";
import React from "react";

const JoinedPeople = ({ top, bottom, left, right }) => {
  return (
    <div
      className="flex"
      style={{
        position: "absolute",
        top: top || undefined,
        bottom: bottom || undefined,
        left: left || undefined,
        right: right || undefined,
      }}
    >
      <Image
        src="/Icons/BlankCircle.svg"
        width={100}
        height={100}
        alt="BlankCircle"

      />

      <div className="px-4 py-3 mx-auto inline-block border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm relative shadow-white-glow-soft hover:shadow-white-glow-soft transition-all duration-300 hover:cursor-default ease-in-out">
        <h3 className="text-accent text-lg">Raina Grace</h3>
        <p className="text-sm text-white font-thin">Product Manager</p>
      </div>
    </div>
  );
};

export default JoinedPeople;
