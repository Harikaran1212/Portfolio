"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <div
      id="services"
      className=" mt-80 md:mt-0 flex flex-col items-center justify-center h-screen w-full bg-white  "
    >
      <div className=" flex flex-col items-center justify-center gap-9 ">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <h1 className="text-2xl md:text-3xl font-bold ">
            &lt; Services /&gt;
          </h1>
          <h3 className=" text-gray-600">What I Offer</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-10">
          <div className="h-80 w-full md:w-75 bg-white   shadow-[0_3px_8px_rgb(0,0,0,0.2)]   hover:shadow-[0_3px_14px_rgb(0,0,0,0.2)] transition-shadow duration-500 rounded-lg p-6 flex flex-col justify-center gap-8">
            <h1 className="text-pink-600  text-4xl"> &#123; &#125;</h1>
            <h2 className="text-2xl font-medium">Web Developer</h2>
            <p className="text-gray-600 text-[16px]">
              I build responsive and dynamic web applications, providing
              seamless user experiences.
            </p>
            <Link
              href="https://github.com/Harikaran1212"
              target="_blank"
              className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 "
            >
              View My Github{" "}
              <Icon icon="uil:arrow-right" width="24" height="24" />
            </Link>
          </div>
          <div className="h-80 w-full md:w-75 bg-white  shadow-[0_3px_8px_rgb(0,0,0,0.2)]   hover:shadow-[0_3px_14px_rgb(0,0,0,0.2)] transition-shadow duration-500 rounded-lg p-6 flex flex-col justify-center gap-8">
            <h1 className="text-pink-600  ">
              <Icon
                icon="fluent:paint-brush-32-regular"
                width="48"
                height="48"
              />
            </h1>
            <h2 className="text-2xl font-medium">UX/UI Designer</h2>
            <p className="text-gray-600 text-[16px]">
              I build responsive and dynamic web applications, providing
              seamless user experiences.
            </p>
            <Link
              href="/#projects"
              className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 "
            >
              View More <Icon icon="uil:arrow-right" width="24" height="24" />
            </Link>
          </div>
          <div className="h-80 w-full md:w-75 bg-white  shadow-[0_3px_8px_rgb(0,0,0,0.2)]   hover:shadow-[0_3px_14px_rgb(0,0,0,0.2)] transition-shadow duration-500 rounded-lg p-6 flex flex-col justify-center gap-8">
            <h1 className="text-pink-600  ">
              {" "}
              <Icon
                icon="streamline-freehand:presentation-analytics"
                width="48"
                height="48"
                className=""
              />
            </h1>
            <h2 className="text-2xl font-medium">Data Analyst</h2>
            <p className="text-gray-600 text-[16px]">
              I transform raw data into actionable insights through analysis,
              visualization, reporting.
            </p>
            <Link
              href="https://dribbble.com/hari1212"
              target="_blank"
              className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 "
            >
              View My Dribble{" "}
              <Icon icon="uil:arrow-right" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
