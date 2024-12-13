import Image from "next/image";
import React from "react";
const TeamPeople = () => {
  return (
    <>
      <section className="w-full h-screen  max-w-[90%] mx-auto">
        <h1 className="text-xl font-thin uppercase font-urbanist">
          our dedicated team
        </h1>
        <div className="flex justify-between gap-10 pt-10">
          <p className="text-[40px] font-semibold capitalize">
            meet with our people
          </p>
          <div className="btn flex gap-10">
            <button>
              <Image
                src="/Icons/x-leftArrow.svg"
                width={40}
                height={40}
                alt="x-leftArrow"
                className="inline-block w-auto h-auto rounded-full py-2 px-2 border-2 border-accent"
              />
            </button>
            <button>
              <Image
                src="/Icons/x-rightArrow.svg"
                width={40}
                height={40}
                alt="x-rightArrow"
                className="inline-block w-auto h-auto rounded-full py-2 px-2 border-2 border-accent"
              />
            </button>
          </div>
        </div>

        <div
          id="team-member"
          className="flex w-[88%] mx-auto items-center overflow-x-auto scroll-smooth scrollbar-none pt-20"
        >
          {/* Team member content */}
          <div className="teamProfileType1">
            <div className="w-[310px]">
              <Image
                src="/image1.jpg"
                width={289}
                height={357}
                alt="team member"
                className="rounded-xl w-[289px] h-[357px] mx-auto object-cover object-fit px-[5px]"
              />
              <h3 className="text-center font-semibold text-lg capitalize">
                Josh Mullins
              </h3>
              <p className="text-center font-thin capitalize">
                Full Stack Developer
              </p>
            </div>
          </div>
          {/* Repeat for other members */}
          <div className="teamProfileType2">
            <div className="w-[310px]">
              <Image
                src="/image1.jpg"
                width={289}
                height={405}
                alt="team member"
                className="rounded-xl w-[289px] h-[405px] mx-auto object-cover object-fit px-[5px]"
              />
              <h3 className="text-center font-semibold text-lg capitalize">
                Josh Mullins
              </h3>
              <p className="text-center font-thin capitalize">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="teamProfileType1">
            <div className="w-[310px]">
              <Image
                src="/image1.jpg"
                width={289}
                height={357}
                alt="team member"
                className="rounded-xl w-[289px] h-[357px] mx-auto object-cover object-fit px-[5px]"
              />
              <h3 className="text-center font-semibold text-lg capitalize">
                Josh Mullins
              </h3>
              <p className="text-center font-thin capitalize">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="teamProfileType2">
            <div className="w-[310px]">
              <Image
                src="/image1.jpg"
                width={289}
                height={405}
                alt="team member"
                className="rounded-xl w-[289px] h-[405px] mx-auto object-cover object-fit px-[5px]"
              />
              <h3 className="text-center font-semibold text-lg capitalize">
                Josh Mullins
              </h3>
              <p className="text-center font-thin capitalize">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* 3 one */}

          <div className="teamProfileType1">
            <div className="w-[310px]">
              <Image
                src="/image1.jpg"
                width={289}
                height={357}
                alt="team member"
                className="rounded-xl w-[289px] h-[357px] mx-auto object-cover object-fit px-[5px]"
              />
              <h3 className="text-center font-semibold text-lg capitalize">
                Josh Mullins
              </h3>
              <p className="text-center font-thin capitalize">
                Full Stack Developer
              </p>
            </div>
          </div>

          <div className="teamProfileType2">
            <div className="w-[310px]">
              <Image
                src="/image1.jpg"
                width={289}
                height={405}
                alt="team member"
                className="rounded-xl w-[289px] h-[405px] mx-auto object-cover object-fit px-[5px]"
              />
              <h3 className="text-center font-semibold text-lg capitalize">
                Josh Mullins
              </h3>
              <p className="text-center font-thin capitalize">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/*  */}
        </div>
      </section>
    </>
  );
};

export default TeamPeople;
