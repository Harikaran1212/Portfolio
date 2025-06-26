"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projectData: Project[] = [
  {
    title: "ResuMatch",
    description:
      "Land Your Dream Job with AI-Enhanced Resumes. Upload your resume, paste a job description, and let our AI match and optimize your resume for better results.",
    image: "/assets/image3.png",
    link: "https://job-matcher-eight.vercel.app/",
  },
  {
    title: "Yoom",
    description:
      "Yoom is a clone mockup of a video calling application called Zoom. Users can create, schedule, and manage meetings.",
    image: "/assets/image4.png",
    link: "https://yoom-zoom-clone.vercel.app/",
  },
  {
    title: "SMG Health Care (Freelance)",
    description:
      "Developed and launched a web app for SMG Health Care using Next.js, Tailwind, ShadCn, and TypeScript.",
    image: "/assets/image2.png",
    link: "https://smg-mu.vercel.app/",
  },
  {
    title: "MobzWay Intern",
    description:
      "Built a site during my internship at MobzWay using React.js, Node.js, Express.js, MongoDB, Phaser.js, and more.",
    image: "/assets/image1.png",
    link: "https://mobz-projects.vercel.app/",
  },
  {
    title: "AU Docs",
    description:
      "Web app for Anna University students: syllabus, GPA, CGPA, Attendance Calculator, Faculty Notes, News, and Results.",
    image: "/assets/image.png",
    link: "https://au-docs-giet.vercel.app/",
  },
  {
    title: "Flames",
    description:
      "Play the FLAMES game to discover the fun connection between you and your crush — Friendship, Love, Affection, Marriage, Enemy, or Sister.",
    image: "/assets/image5.png",
    link: "https://harikaran1212.github.io/flames-calculator",
  },
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div
      id="projects"
      className="mt-30 md:mt-0 flex flex-col items-center justify-center w-full bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center justify-center gap-9 w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold">&lt; My Work /&gt;</h1>
          <h3 className="text-gray-600 text-sm md:text-base">
            Most recent work
          </h3>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
          {projectData.map((project, index) => (
            <li
              key={index}
              className="flex flex-col gap-4 h-auto min-h-[24rem] w-full max-w-xs sm:w-80 shadow-[0_3px_8px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="relative h-48 w-full rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <Link
                target="_blank"
                href={project.link}
                className="mt-auto text-pink-600 font-semibold flex flex-row gap-2 hover:gap-4 transition-all duration-700"
              >
                View Project{" "}
                <Icon
                  icon="solar:alt-arrow-right-bold-duotone"
                  width="24"
                  height="24"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
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
};

export default Projects;
