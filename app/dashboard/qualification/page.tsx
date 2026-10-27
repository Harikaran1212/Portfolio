"use client";

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const educationItems = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Global Institute Of Engineering And Technology (GIET)",
      detail: "CGPA: 8.4",
      period: "2021 - 2025",
    },
    {
      degree: "HSC",
      institution: "The Namakkal Teachers Vidhyaashram Matric School",
      detail: "Percentage: 82%",
      period: "2020 - 2021",
    },
    {
      degree: "SSLC",
      institution: "The Namakkal Teachers Vidhyaashram Matric School",
      detail: "Percentage: 80%",
      period: "2018 - 2019",
    },
  ];

  const workItems = [
    {
      degree: "Software Intern",
      institution: "Mobzway Technologies",
      detail: "Remote - Rajasthan",
      period: "Sep 2024 - Dec 2024",
    },
    {
      degree: "Junior Data Analyst Intern",
      institution: "Brakes India Private Limited (TVS)",
      detail: "Full Time - Sholinghur, TN",
      period: "July 2024 - Aug 2024",
    },
    {
      degree: "Web Developer",
      institution: "Bharat Intern",
      detail: "Remote",
      period: "Oct 2023 - Nov 2023",
    },
  ];

  const activeItems = activeTab === "education" ? educationItems : workItems;

  return (
    <section
      id="qualification"
      className="flex flex-col items-center justify-center min-h-screen w-full bg-[#f7f8fe] dark:bg-[#10152c] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full max-w-4xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6928e6]/10 mb-1 sm:mb-2">
            <Icon icon="mdi:certificate" width="24" height="24" className="text-[#6928e6]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6928e6]">
            My Journey
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] dark:text-white">
            Qualification
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">My Personal Journey</p>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#4219dc] to-[#973af1] mt-1" />
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 bg-white dark:bg-[#1d2030] p-1.5 rounded-2xl shadow-[0_4px_15px_rgba(105,40,230,0.1)]">
          {[
            { key: "education", label: "Education", icon: "mdi:education-outline" },
            { key: "work", label: "Work", icon: "hugeicons:work" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-[#4219dc] to-[#973af1] text-white shadow-[0_4px_12px_rgba(105,40,230,0.3)]"
                  : "text-gray-500 dark:text-gray-400 hover:text-[#6928e6] dark:hover:text-[#973af1]"
              }`}
            >
              <Icon icon={tab.icon} width="18" height="18" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div data-aos="fade-up" className="w-full relative px-2 sm:px-4">
          {/* Timeline vertical line: left-aligned on mobile, centered on md+ */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#4219dc] to-[#973af1] transform md:-translate-x-1/2" />

          <div className="flex flex-col gap-6 sm:gap-8">
            {activeItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center w-full ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10 flex-shrink-0">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#4219dc] to-[#973af1] shadow-[0_0_10px_rgba(105,40,230,0.4)] border-2 border-white dark:border-[#10152c]" />
                  </div>

                  {/* Card Content: full-width on mobile (offset by line), 45% on desktop */}
                  <div
                    className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[45%] bg-white dark:bg-[#1d2030] rounded-2xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(105,40,230,0.1)] border border-[#6928e6]/10 hover:border-[#6928e6]/25 hover:shadow-[0_8px_30px_rgba(105,40,230,0.18)] transition-all duration-300 text-left ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <h3 className="text-sm sm:text-base font-bold text-[#1a1a2e] dark:text-white leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6928e6] font-semibold mt-1">
                      {item.institution}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {item.detail}
                    </p>
                    <p
                      className={`flex items-center gap-1.5 mt-2.5 text-xs text-gray-400 dark:text-gray-500 font-medium justify-start ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <Icon icon="solar:calendar-linear" width="14" height="14" />
                      {item.period}
                    </p>
                  </div>

                  {/* Empty spacer on desktop to maintain alternating 45% layout */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
