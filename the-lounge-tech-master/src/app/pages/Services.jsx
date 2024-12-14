import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const Services = () => {
  const projectCardInfo = [
    {
      id: 1,
      ProjectName: "Agency Website Design",
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
      ProjectLink: "https://github.com/project6",
      ProjectDetails:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  return (
    <section className="w-full  mx-auto h-auto pt-20 px-4 sm:px-8 lg:px-12">
      {/* Section Header */}
      <h1 className="text-lg sm:text-xl font-thin uppercase font-urbanist pl-6 sm:pl-12 md:pl-20 lg:pl-32">
        Our Projects
      </h1>

      <div className="pt-8 w-full sm:w-[80%] mx-auto flex items-center justify-between">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold capitalize">
          The work we have done
        </p>
        <div className="w-full sm:w-[40%] lg:w-[20%] mt-4 sm:mt-0">
          <Button />
        </div>
      </div>

      {/* Project Cards */}
      <div className="project-cards w-[95%] pt-16 sm:pt-32 flex flex-wrap gap-6 sm:gap-8 lg:gap-10 mx-auto">
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
      </div>
    </section>
  );
};

export default Services;
