import Image from "next/image";
import React from "react";

const TestimonialsCard = ({
  clientName,
  clientPosition,
  clientReviewComment,
  clientImage,
}) => {
  return (
    <div
      id="card"
      className="px-10 mx-auto md:w-2/3 w-[80%]  py-4 border border-slate-600 rounded-xl my-4 bg-secondary/80 text-white backdrop-blur-sm shadow-white-glow-soft"
    >
      <div id="image-box" className="py-2 px-3">
        <Image src="/Icons/StarIcon.svg" width={120} height={44} alt="trophy" />
      </div>

      {/* details */}
      <div className="pt-4 text-Headings">
        <p className="text-slate-400">“{clientReviewComment}“</p>

        <div className="text-white flex items-center gap-2 pt-5 w-full">
          <Image
            src={clientImage || "/Icons/userIcon.svg"}
            width={20}
            height={20}
            alt="client"
          />
          <div className="flex pt-2 w-[320px] items-center">
            <h3 className="w-full md:text-sm text-xs">{clientName}</h3>{" "}
            <span>-</span>
            <p className="md:text-sm text-xs font-thin w-full pl-2">
              {clientPosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
