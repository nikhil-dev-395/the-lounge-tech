import Image from "next/image";
import React from "react";

const Carousel = () => {
  return (
    <section>
      <hr />
      <div className="px-4 sm:px-8 md:px-10 mx-auto py-4 bg-secondary/80 text-white backdrop-blur-sm">
        <ul className="flex items-center justify-center gap-16 sm:gap-20 md:gap-32">
          {/* Logo 1 */}
          <li className="flex h-10 sm:h-12 md:h-16">
            <Image
              src="/Logos/cloudWatch.svg"
              alt="Logo"
              width={140}
              height={40}
            />
          </li>

          {/* Logo 2 */}
          <li className="flex h-10 sm:h-12 md:h-16">
            <Image
              src="/Logos/cloudWatch.svg"
              alt="Logo"
              width={140}
              height={40}
              className=""
            />
          </li>

          {/* Logo 3 */}
          <li className="flex h-10 sm:h-12 md:h-16">
            <Image
              src="/Logos/hourglass.svg"
              alt="Logo"
              width={140}
              height={40}
            />
          </li>

          {/* Logo 4 */}
          <li className="flex h-10 sm:h-12 md:h-16">
            <Image src="/Logos/Layers.svg" alt="Logo" width={140} height={40} />
          </li>
        </ul>
      </div>
      <hr />

      {/* Main content */}
    </section>
  );
};

export default Carousel;
