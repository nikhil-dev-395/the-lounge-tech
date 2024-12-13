import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <section>
      <hr />
      <div className="px-10 mx-auto  py-4   bg-secondary/80 text-white backdrop-blur-sm">
        <ul className="flex items-center justify-center gap-32 ">
          {/* logo */}
          <li className="flex h-10">
            <Image
              src="/Logos/cloudWatch.svg"
              alt="Logo"
              width={140}
              height={10}
            />
          </li>

          <li className="flex h-10">
            <Image
              src="/Logos/cloudWatch.svg"
              alt="Logo"
              width={140}
              height={10}
            />
          </li>

          <li className="flex h-10">
            <Image
              src="/Logos/hourglass.svg"
              alt="Logo"
              width={140}
              height={10}
            />
          </li>

          <li className="flex h-10">
            <Image src="/Logos/Layers.svg" alt="Logo" width={140} height={10} />
          </li>
        </ul>
      </div>
      <hr />

      {/* main code */}
    </section>
  );
};

export default Carousel;
