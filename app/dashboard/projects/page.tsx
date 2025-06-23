"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import React from "react";


const Projects = () => {
 
    return (
        <div id='projects' className=" mt-20 md:mt-54 flex flex-col items-center justify-center w-full bg-white  ">
      <div className=' flex flex-col items-center justify-center gap-9 '>
        <div className='flex flex-col items-center justify-center gap-2 '>
      <h1 className='text-2xl font-bold '>&lt; My Work /&gt;</h1>
      <h3 className=' text-gray-600'>Most recent work</h3>
      </div>

<div className="p-5">
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    <li className="flex flex-col  gap-4 h-96 w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <Image src="/assets/image.png" alt="Audocs" height={100} width={100} className="h-1/2 w-auto rounded-lg"/>
      <h2 className="text-lg font-semibold">AU Docs</h2>
      <p className="text-gray-400 text-sm">Developed and launched a web application for Anna University students with syllabus, GPA, CGPA, Attendance Calculator, Faulty Notes, University News and University results. </p>
      <Link target="_blank" href="https://au-docs-giet.vercel.app/" className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 ">View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" /></Link>
      </li>
      <li className="flex flex-col  gap-4 h-96 w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <Image src="/assets/image1.png" alt="Audocs" height={100} width={100} className="h-1/2 w-auto rounded-lg"/>
      <h2 className="text-lg font-semibold">MobzWay Intern</h2>
      <p className="text-gray-400 text-sm">Build a site for the Internship of MobzWay, a platform for job seekers, Work with Techstacks like React.js, Node.js, Express.Js, MongoDB, Phaser.Js and many more.</p>
      <Link target="_blank" href="https://mobz-projects.vercel.app/" className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 ">View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" /></Link>
      </li>
      <li className="flex flex-col  gap-4 h-96 w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <Image src="/assets/image.png" alt="Audocs" height={100} width={100} className="h-1/2 w-auto rounded-lg"/>
      <h2 className="text-lg font-semibold">AU Docs</h2>
      <p className="text-gray-400 text-sm">Developed and launched a web application for Anna University students with syllabus, GPA, CGPA, Attendance Calculator, Faulty Notes, University News and University results. </p>
      <Link target="_blank" href="/" className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 ">View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" /></Link>
      </li>
      <li className="flex flex-col  gap-4 h-96 w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <Image src="/assets/image.png" alt="Audocs" height={100} width={100} className="h-1/2 w-auto rounded-lg"/>
      <h2 className="text-lg font-semibold">AU Docs</h2>
      <p className="text-gray-400 text-sm">Developed and launched a web application for Anna University students with syllabus, GPA, CGPA, Attendance Calculator, Faulty Notes, University News and University results. </p>
      <Link target="_blank" href="/" className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 ">View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" /></Link>
      </li>
      <li className="flex flex-col  gap-4 h-96 w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <Image src="/assets/image.png" alt="Audocs" height={100} width={100} className="h-1/2 w-auto rounded-lg"/>
      <h2 className="text-lg font-semibold">AU Docs</h2>
      <p className="text-gray-400 text-sm">Developed and launched a web application for Anna University students with syllabus, GPA, CGPA, Attendance Calculator, Faulty Notes, University News and University results. </p>
      <Link target="_blank" href="/" className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 ">View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" /></Link>
      </li>
      <li className="flex flex-col  gap-4 h-96 w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <Image src="/assets/image.png" alt="Audocs" height={100} width={100} className="h-1/2 w-auto rounded-lg"/>
      <h2 className="text-lg font-semibold">AU Docs</h2>
      <p className="text-gray-400 text-sm">Developed and launched a web application for Anna University students with syllabus, GPA, CGPA, Attendance Calculator, Faulty Notes, University News and University results. </p>
      <Link target="_blank" href="/" className="text-pink-600 font-semibold flex flex-row gap-2  hover:gap-4 transition-all duration-700 ">View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" /></Link>
      </li>
      
  </ul>
</div>
     

           
        </div>
        </div>
    );
}

export default Projects;