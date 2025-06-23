"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import React, { useState } from "react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div id='projects' className="mt-20 md:mt-54 flex flex-col items-center justify-center w-full bg-white px-4 sm:px-6 lg:px-8">
      <div className='flex flex-col items-center justify-center gap-9 w-full max-w-7xl'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-2xl md:text-3xl font-bold'>&lt; My Work /&gt;</h1>
          <h3 className='text-gray-600 text-sm md:text-base'>Most recent work</h3>
        </div>

        <div className="w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <li className="flex flex-col gap-4 h-auto min-h-[24rem] w-full max-w-xs sm:max-w-none sm:w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div 
                className="relative h-48 w-full rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openImage("/assets/image.png")}
              >
                <Image 
                  src="/assets/image.png" 
                  alt="Audocs" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-semibold">AU Docs</h2>
              <p className="text-gray-400 text-sm">Developed and launched a web application for Anna University students with syllabus, GPA, CGPA, Attendance Calculator, Faulty Notes, University News and University results.</p>
              <Link target="_blank" href="https://au-docs-giet.vercel.app/" className="mt-auto text-pink-600 font-semibold flex flex-row gap-2 hover:gap-4 transition-all duration-700">
                View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" />
              </Link>
            </li>
            
            <li className="flex flex-col gap-4 h-auto min-h-[24rem] w-full max-w-xs sm:max-w-none sm:w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              <div 
                className="relative h-48 w-full rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openImage("/assets/image1.png")}
              >
                <Image 
                  src="/assets/image1.png" 
                  alt="MobzWay" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-semibold">MobzWay Intern</h2>
              <p className="text-gray-400 text-sm">Build a site for the Internship of MobzWay, a platform for job seekers, Work with Techstacks like React.js, Node.js, Express.Js, MongoDB, Phaser.Js and many more.</p>
              <Link target="_blank" href="https://mobz-projects.vercel.app/" className="mt-auto text-pink-600 font-semibold flex flex-row gap-2 hover:gap-4 transition-all duration-700">
                View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" />
              </Link>
            </li>
            
            {[3, 4, 5, 6].map((item) => (
              <li key={item} className="flex flex-col gap-4 h-auto min-h-[24rem] w-full max-w-xs sm:max-w-none sm:w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <div 
                  className="relative h-48 w-full rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openImage("/assets/image.png")}
                >
                  <Image 
                    src="/assets/image.png" 
                    alt="Audocs" 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-lg font-semibold">AU Docs</h2>
                <p className="text-gray-400 text-sm">Developed and launched a web application for Anna University students with syllabus, GPA, CGPA, Attendance Calculator, Faulty Notes, University News and University results.</p>
                <Link target="_blank" href="/" className="mt-auto text-pink-600 font-semibold flex flex-row gap-2 hover:gap-4 transition-all duration-700">
                  View Project <Icon icon="solar:alt-arrow-right-bold-duotone" width="24" height="24" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={closeImage}
            >
              <Icon icon="mdi:close" width="32" height="32" />
            </button>
            <div className="w-full h-full">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
