import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ ProjectName, ProjectDetails, ProjectLink }) => {
  return (
    <>
      <div className=" projectCard px-10 mx-auto md:w-[324px] md:h-[308px] py-4 border border-slate-600 rounded-xl my-4 bg-projectBox text-white">
        {/* details */}
        <div className="pt-10 text-Headings">
          <h2 className="text-[22px] text-center capitalize">{ProjectName}</h2>

          {/* here don't exceed above 14 words */}
          <p className="pt-10 text-center text-slate-300 text-base">
            {ProjectDetails}
          </p>

          {/* Read More Button */}
          <div className=" mx-auto flex justify-center items-center w-auto  pt-10">
            <Link
              href={ProjectLink}
              aria-label="Read more about agency website design"
              className="inline-block bg-projectLink py-4 px-4 rounded-full "
            >
              <Image
                src="/Icons/x-rightArrow.svg"
                width={13}
                height={13}
                alt="Navigate to project details"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
