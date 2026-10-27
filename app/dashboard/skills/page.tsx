"use client";

import { Icon } from "@iconify/react";

const skills = [
  {
    name: "React Js",
    icon: "ri:reactjs-fill",
    color: "text-cyan-400",
    domain: "Frontend",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    color: "text-gray-800 dark:text-white",
    domain: "Frontend",
  },
  {
    name: "Tailwind",
    icon: "simple-icons:tailwindcss",
    color: "text-cyan-400",
    domain: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: "simple-icons:bootstrap",
    color: "text-purple-600",
    domain: "Frontend",
  },
  {
    name: "ShadCn",
    icon: "simple-icons:shadcnui",
    color: "text-gray-700 dark:text-gray-300",
    domain: "Frontend",
  },
  {
    name: "Figma",
    icon: "mynaui:brand-figma-solid",
    color: "text-orange-500",
    domain: "Design",
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    color: "text-amber-400",
    domain: "Language",
  },
  {
    name: "Python",
    icon: "simple-icons:python",
    color: "text-cyan-600 dark:text-cyan-400",
    domain: "Language",
  },
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
    color: "text-green-600",
    domain: "Backend",
  },
  {
    name: "Express.Js",
    icon: "simple-icons:express",
    color: "text-gray-700 dark:text-gray-300",
    domain: "Backend",
  },
  {
    name: "MongoDB",
    icon: "simple-icons:mongodb",
    color: "text-emerald-500",
    domain: "Database",
  },
  {
    name: "SQL",
    icon: "grommet-icons:mysql",
    color: "text-cyan-700 dark:text-cyan-400",
    domain: "Database",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    color: "text-orange-600",
    domain: "DevOps",
  },
  {
    name: "Github",
    icon: "simple-icons:github",
    color: "text-gray-800 dark:text-white",
    domain: "DevOps",
  },
  {
    name: "Google Cloud",
    icon: "streamline-logos:google-cloud-logo-solid",
    color: "text-red-500",
    domain: "Cloud",
  },
  {
    name: "Vercel",
    icon: "simple-icons:vercel",
    color: "text-gray-800 dark:text-white",
    domain: "DevOps",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen w-full bg-[#f7f8fe] dark:bg-[#10152c] transition-colors duration-300 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6928e6]/10 mb-1 sm:mb-2">
            <Icon icon="tabler:bulb" width="24" height="24" className="text-[#6928e6]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6928e6]">
            My Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] dark:text-white">
            My Skills
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">My Technical Skills</p>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#4219dc] to-[#973af1] mt-1" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#1d2030] rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4 shadow-[0_4px_15px_rgba(105,40,230,0.08)] border border-transparent hover:border-[#6928e6]/25 hover:shadow-[0_8px_30px_rgba(105,40,230,0.18)] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover fill overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4219dc] to-[#973af1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Icon */}
              <div className={`relative z-10 flex-shrink-0 ${skill.color} group-hover:text-white transition-colors duration-300`}>
                <Icon icon={skill.icon} width="34" height="34" className="sm:w-10 sm:h-10" />
              </div>

              {/* Text */}
              <div className="relative z-10 min-w-0">
                <h3 className="text-xs sm:text-sm font-semibold text-[#1a1a2e] dark:text-white group-hover:text-white transition-colors duration-300 truncate">
                  {skill.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-300 truncate">
                  {skill.domain}
                </p>
              </div>

              {/* Orix corner purple accent */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-[#973af1] to-transparent rounded-tr-2xl opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
