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
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full bg-[#f7f8fe] dark:bg-[#10152c] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 transition-colors duration-300"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6928e6]/10 mb-1 sm:mb-2">
            <Icon icon="solar:gallery-outline" width="24" height="24" className="text-[#6928e6]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6928e6]">
            My Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] dark:text-white">
            My Work
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Most Recent Work</p>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#4219dc] to-[#973af1] mt-1" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center w-full">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col w-full max-w-sm bg-white dark:bg-[#1d2030] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(105,40,230,0.08)] border border-transparent hover:border-[#6928e6]/20 hover:shadow-[0_12px_40px_rgba(105,40,230,0.18)] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div
                className="relative h-44 sm:h-48 w-full overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4219dc]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5">
                    <Icon icon="solar:eye-bold" width="18" height="18" />
                    Quick View
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a2e] dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <Link
                  target="_blank"
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#6928e6] font-semibold text-xs sm:text-sm mt-3 pt-2 hover:gap-3 transition-all duration-300"
                >
                  View Project
                  <Icon icon="solar:alt-arrow-right-bold-duotone" width="18" height="18" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-transparent rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 sm:-top-12 sm:right-0 text-white bg-[#6928e6] rounded-full p-2 hover:bg-[#973af1] transition-colors z-20 shadow-lg"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <Icon icon="mdi:close" width="22" height="22" />
            </button>
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-black/40">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
