"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Qualification = () => {
  const [education, setEducation] = useState("education");
  const handleClicks = (link: string) => {
    setEducation(link);
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
<<<<<<< HEAD
  return (
    <div
      id="qualification"
      className=" md:mt-0     mt-72 flex flex-col items-center justify-center h-screen w-full bg-white p-10 "
      data-aos="zoom-in"
    >
      <div className=" flex flex-col items-center justify-center   ">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <h1 className="text-2xl md:text-3xl font-bold ">
            &lt; Qualification /&gt;
          </h1>
          <h3 className=" text-gray-600">My Personal Journey</h3>
        </div>
=======
    return(
        <div id="qualification" className=" md:mt-0     mt-72 flex flex-col items-center justify-center h-screen w-full bg-white p-10 " data-aos="zoom-in" >
            <div className=' flex flex-col items-center justify-center   '>
        <div className='flex flex-col items-center justify-center gap-2 '>
      <h1 className='text-2xl font-bold '>&lt; Qualification /&gt;</h1>
      <h3 className=' text-gray-600'>My Personal Journey</h3>
      </div>
>>>>>>> 611e201a308ca5d54683f595f791ef292109334d

        <div className="flex flex-row items-center justify-center gap-6 mt-5  ">
          <button
            className={`font-medium transition-colors duration-300 flex flex-row gap-2 items-center text-xl ${
              education === "education"
                ? "text-pink-600"
                : "text-gray-400 hover:text-pink-600"
            }`}
            onClick={() => handleClicks("education")}
          >
            <Icon icon="mdi:education-outline" width="29" height="48" />{" "}
            Education
          </button>
          <button
            className={`font-medium transition-colors duration-300 flex flex-row gap-2 items-center text-xl ${
              education === "work"
                ? "text-pink-600"
                : "text-gray-400 hover:text-pink-600"
            }`}
            onClick={() => handleClicks("work")}
          >
            <Icon icon="hugeicons:work" width="29" height="40" /> Work
          </button>
        </div>
      </div>
      <div className="">
        {education === "education" ? (
          <div className="flex flex-row items-center justify-center gap-15  ">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="mt-10">
                <h1 className="text-xl font-bold ">
                  Bachelor&#39;s in Computer Science
                </h1>
                <h2>Global Institute Of Engineering And Technology (GIET)</h2>
                <p className="text-gray-500">CGPA: 8.4</p>
                <p className="flex flex-row gap-2 items-center mt-3 text-gray-500">
                  <Icon icon="solar:calendar-linear" width="18" height="20" />{" "}
                  2021 - 2025
                </p>
              </div>
              <div className="mt-20">
                <h1 className="text-xl font-bold ">SSLC</h1>
                <h2>The Namakkal Teachers Vidhyaashram Matric School</h2>
                <p className="text-gray-500">Percentage: 80%</p>
                <p className="flex flex-row gap-2 items-center mt-3 text-gray-500">
                  <Icon icon="solar:calendar-linear" width="18" height="20" />
                  2018-2019
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="h-4 w-4 rounded-full bg-pink-600"></div>
              <div className="h-30 w-[2px] bg-pink-600"></div>
              <div className="h-4 w-4 rounded-full bg-pink-600"></div>
              <div className="h-30 w-[2px] bg-pink-600"></div>
              <div className="h-4 w-4 rounded-full bg-pink-600"></div>
            </div>
            <div className="mt-30">
              <h1 className="text-xl font-bold">HSC</h1>
              <h2>The Namakkal Teachers Vidhyaashram Matric School</h2>
              <p className="text-gray-500">Percentage: 82%</p>
              <p className="flex flex-row gap-2 items-center mt-3 text-gray-500">
                <Icon icon="solar:calendar-linear" width="18" height="20" />{" "}
                2020 - 2021
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center  gap-15 ">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="mt-10">
                <h1 className="text-xl font-bold ">Software Intern</h1>
                <h2>Mobzway Technologies</h2>
                <p className="text-gray-500">Remote - Rajasthan</p>
                <p className="flex flex-row gap-2 items-center mt-3 text-gray-500">
                  <Icon icon="solar:calendar-linear" width="18" height="20" />
                  Sep 2024 -Dec 2024
                </p>
              </div>
              <div className="mt-20">
                <h1 className="text-xl font-bold ">Web Developer</h1>
                <h2>Bharat Intern</h2>
                <p className="text-gray-500">Remote</p>
                <p className="flex flex-row gap-2 items-center mt-3 text-gray-500">
                  <Icon icon="solar:calendar-linear" width="18" height="20" />
                  Oct 2023 -Nov 2023
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 md:ml-[90px] ">
              <div className="h-4 w-4 rounded-full bg-pink-600"></div>
              <div className="h-30 w-[2.5px] bg-pink-600"></div>
              <div className="h-4 w-4 rounded-full bg-pink-600"></div>
              <div className="h-30 w-[2.5px] bg-pink-600"></div>
              <div className="h-4 w-4 rounded-full bg-pink-600"></div>
            </div>
            <div className="mt-30">
              <h1 className="text-xl font-bold">Junior Data Analyst Intern</h1>
              <h2>Brakes India Private Limited (TVS)</h2>
              <p className="text-gray-500">Full Time - Sholinghur, TN</p>
              <p className="flex flex-row gap-2 items-center mt-3 text-gray-500">
                <Icon icon="solar:calendar-linear" width="18" height="20" />
                July 2024 - Aug 2024
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qualification;
