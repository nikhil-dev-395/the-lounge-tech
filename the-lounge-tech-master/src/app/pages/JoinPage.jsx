import React from "react";
import JoinedPeople from "@/components/JoinedPeople";
import Image from "next/image";

const JoinPage = () => {
  return (
    <section className="w-full h-screen relative">
      {/* Top-left Circle */}
      <Image
        src="/Icons/BlankCircle.svg"
        width={100}
        height={100}
        alt="BlankCircle"
        className="absolute top-20 md:top-36 left-5 md:left-20 w-24 md:w-40"
      />
      <JoinedPeople top="100px" left="20%" className="hidden md:block" />

      {/* Center Content */}
      <div className="w-[90%] h-full mx-auto flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-[24px] md:text-[40px] font-semibold capitalize max-w-[90%] md:max-w-[50%]">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Global 25k
          </span>{" "}
          users working with us, join for free
        </h1>
      </div>

      {/* Bottom-right Circle */}
      <Image
        src="/Icons/BlankCircle.svg"
        width={100}
        height={100}
        alt="BlankCircle"
        className="absolute bottom-20 md:bottom-48 right-5 md:right-20 w-24 md:w-40"
      />
      <JoinedPeople bottom="50px" right="20%" className="hidden md:block" />
    </section>
  );
};

export default JoinPage;
