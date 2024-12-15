"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const containerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const scrollerContent = Array.from(containerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        containerRef.current.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary/80 text-white backdrop-blur-sm">
      <hr />
      <div
        className="px-4 sm:px-8 md:px-10 py-4 mx-auto"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <ul
          ref={containerRef}
          className={`flex items-center gap-7 h-auto ${
            start ? "animate-scroll" : ""
          }`}
        >
          <li className="flex ">
            <Image
              src="/Logos/cloudWatch.svg"
              alt="Logo"
              width={240}
              height={100}
              className=""
            />
          </li>
          <li className="flex ">
            <Image
              src="/Logos/sysiphus.svg"
              alt="Logo"
              width={240}
              height={100}
            />
          </li>
          <li className="flex ">
            <Image
              src="/Logos/hourglass.svg"
              alt="Logo"
              width={240}
              height={100}
            />
          </li>
          <li className="flex ">
            <Image
              src="/Logos/Layers.svg"
              alt="Logo"
              width={240}
              height={100}
            />
          </li>
        </ul>
      </div>
      <hr />
    </section>
  );
};

export default Carousel;
