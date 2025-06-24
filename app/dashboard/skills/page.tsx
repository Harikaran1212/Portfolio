"use client";

import { Icon } from "@iconify/react";

const skills = [
  {
    name: "React Js",
    icon: "ri:reactjs-fill",
    color: "text-cyan-300",
    domain: "Frontend",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    color: "",
    domain: "Frontend",
  },
  {
    name: "Tailwind",
    icon: "simple-icons:tailwindcss",
    color: "text-cyan-300",
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
    color: "text-gray-700",
    domain: "Frontend",
  },
  {
    name: "Figma",
    icon: "mynaui:brand-figma-solid",
    color: "text-orange-600",
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
    color: "text-cyan-900",
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
    color: "text-gray-700",
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
    color: "text-cyan-800",
    domain: "Database",
  },
  {
    name: "Git",
    icon: "simple-icons:git",
    color: "text-red-600",
    domain: "DevOps",
  },
  {
    name: "Github",
    icon: "simple-icons:github",
    color: "text-black",
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
    color: "",
    domain: "DevOps",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="mt-96 md:mt-0 flex flex-col items-center justify-center h-screen w-full bg-white"
    >
      <div className="flex flex-col items-center justify-center gap-9">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            &lt; My Skills /&gt;
          </h1>
          <h3 className="text-gray-600">My Technical Skills</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full px-4 md:px-10 lg:px-20">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="h-20 w-full p-4 bg-white rounded-sm shadow-[0_3px_8px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_14px_rgb(0,0,0,0.2)] relative group overflow-hidden active:bg-pink-600 transition-all duration-300 hover:bg-pink-600"
            >
              <div className="absolute top-0 right-0 w-5 h-5 bg-pink-600 rounded-bl-full group-hover:w-full group-hover:h-full group-hover:rounded-none transition-all duration-300"></div>
              <div className="content flex items-center space-x-4 relative z-10 group-hover:text-white">
                <div className={`${skill.color} group-hover:text-white`}>
                  <Icon icon={skill.icon} width="48" height="48" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-medium group-hover:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-semibold group-hover:text-white group-hover:opacity-100 transition-opacity duration-300">
                    {skill.domain}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
