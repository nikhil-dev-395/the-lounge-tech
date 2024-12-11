import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  const projectCardInfo = [
    {
      id: 1,
      ProjectName: "agency website design",
      ProjectLink: "https://github.com/project1",
      ProjectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 2,
      ProjectName: "Mobile App Design",
      ProjectLink: "https://github.com/project2",
      ProjectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 3,
      ProjectName: "E-Commerce Solution",
      ProjectLink: "https://github.com/project3",
      ProjectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 4,
      ProjectName: "Portfolio Website",
      ProjectLink: "https://github.com/project4",
      ProjectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: 5,
      ProjectName: "Task Management Tool",
      ProjectLink: "https://github.com/project5",
      ProjectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },

    {
      id: 6,
      ProjectName: "Task Management Tool",
      ProjectLink: "https://github.com/project5",
      ProjectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <>
      <section className="w-auto mx-auto h-auto  pt-20 ">
        <h1 className="text-xl font-thin uppercase  font-urbanist pl-32 ">
          our projects
        </h1>
        <div className=" pt-8 w-[80%] mx-auto flex items-center justify-between">
          <p className="text-[40px] font-semibold capitalize   ">
            the work we have done
          </p>
          <Button />
        </div>

        {/* project card */}

        <div className="project-cards pt-32 flex flex-wrap  gap-x-14 gap-y-10 mx-auto w-[90%]">
          {/* data :

          *  project title ,
          *  project information,
          * direct link

          .projectCard  - is special class for projects

          */}

          {/* from here projects */}

          {projectCardInfo.map(
            ({ id, ProjectDetails, ProjectLink, ProjectName }) => (
              <ProjectCard
                key={id}
                ProjectName={ProjectName}
                ProjectLink={ProjectLink}
                ProjectDetails={ProjectDetails}
              />
            )
          )}

          {/* projects end here */}
        </div>
      </section>
    </>
  );
};

export default Services;
