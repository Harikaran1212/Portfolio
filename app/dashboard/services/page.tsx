"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

const services = [
  {
    icon: "mdi:code-braces",
    title: "Web Developer",
    description:
      "I build responsive and dynamic web applications, providing seamless user experiences.",
    link: "https://github.com/Harikaran1212",
    linkLabel: "View My Github",
    external: true,
  },
  {
    icon: "fluent:paint-brush-32-regular",
    title: "UX/UI Designer",
    description:
      "I build responsive and dynamic web applications, providing seamless user experiences.",
    link: "/#projects",
    linkLabel: "View More",
    external: false,
  },
  {
    icon: "streamline-freehand:presentation-analytics",
    title: "Data Analyst",
    description:
      "I transform raw data into actionable insights through analysis, visualization, reporting.",
    link: "https://dribbble.com/hari1212",
    linkLabel: "View My Dribble",
    external: true,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center min-h-screen w-full bg-[#f7f8fe] dark:bg-[#10152c] transition-colors duration-300 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6928e6]/10 mb-1 sm:mb-2">
            <Icon icon="hugeicons:work" width="24" height="24" className="text-[#6928e6]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6928e6]">
            What I Do
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] dark:text-white">
            My Services
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">What I Offer</p>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#4219dc] to-[#973af1] mt-1" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#1d2030] rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center gap-5 shadow-[0_4px_20px_rgba(105,40,230,0.08)] border border-transparent hover:border-[#6928e6]/20 hover:shadow-[0_8px_35px_rgba(105,40,230,0.18)] transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Icon box */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f0ebfd] dark:bg-[#6928e6]/15 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#4219dc] group-hover:to-[#973af1] transition-all duration-300">
                <Icon
                  icon={service.icon}
                  width="36"
                  height="36"
                  className="text-[#6928e6] group-hover:text-white transition-colors duration-300"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#1a1a2e] dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>

              {service.external ? (
                <Link
                  href={service.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[#6928e6] font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-300 mt-auto pt-2"
                >
                  {service.linkLabel}
                  <Icon icon="uil:arrow-right" width="18" height="18" />
                </Link>
              ) : (
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#6928e6] font-semibold text-xs sm:text-sm hover:gap-3 transition-all duration-300 mt-auto pt-2"
                >
                  {service.linkLabel}
                  <Icon icon="uil:arrow-right" width="18" height="18" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
