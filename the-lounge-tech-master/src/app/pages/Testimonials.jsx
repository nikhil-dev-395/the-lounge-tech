import TestimonialsCard from "@/components/TestimonialsCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="w-full h-auto ">
        <div className=" pt-32 ">
          <h3 className="text-testimonialsHead text-[23px] font-urbanist font-thin uppercase text-center">
            {" "}
            Testimonials
          </h3>{" "}
          <h1 className=" pt-10 text-Headings text-[39px] font-urbanist font-thin capitalize text-center">
            this is what theres have to say
          </h1>
          <p className=" pt-4 text-slate-500 text-md font-urbanist  capitalize text-center">
            Discover what our clients are saying about their experiences.
          </p>
        </div>

        <div
          id="boxes"
          className="pt-32 py-24 flex flex-wrap max-w-[90%] gap-x-14 gap-y-10 mx-auto"
        >
          <button>
            <Image
              src="/Icons/x-leftArrow.svg"
              width={40}
              height={40}
              alt="x-leftArrow"
              className="inline-block w-auto h-auto  rounded-full py-2 px-2 border-2 border-accent  "
            />
          </button>
          {/* add here your looping feature */}

          <TestimonialsCard
            clientImage="/Icons/RightArrowPurple.svg"
            clientName="nike wan"
            clientPosition="soft dev"
            clientReviewComment="yhis si ssisi si sos is isisiyhis si ssisi si sos is isisiyhis si ssisi si sos is isisiyhis si ssisi si sos is isisi "
          />

          {/* from here is card */}

          {/* upto here is card */}
          <button>
            <Image
              src="/Icons/x-rightArrow.svg"
              width={120}
              height={44}
              alt="x-rightArrow"
              className="inline-block w-auto h-auto  rounded-full py-2 px-2 border-2 border-accent  "
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
