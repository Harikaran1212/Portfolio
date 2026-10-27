"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-[#f7f8fe] dark:bg-[#10152c] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 transition-colors duration-300"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#6928e6]/10 mb-1 sm:mb-2">
            <Icon icon="proicons:person" width="24" height="24" className="text-[#6928e6]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#6928e6]">
            Who I Am
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a2e] dark:text-white">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">My Introduction</p>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#4219dc] to-[#973af1] mt-1" />
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 w-full">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4219dc]/20 to-[#973af1]/20 blur-xl scale-105" />
            <Image
              src="/assets/neo.png"
              alt="Harikaran"
              width={320}
              height={380}
              className="relative w-64 h-72 sm:w-72 sm:h-84 md:w-80 md:h-96 object-cover rounded-2xl shadow-[0_8px_32px_rgba(105,40,230,0.2)] hover:shadow-[0_12px_40px_rgba(105,40,230,0.35)] transition-all duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full max-w-lg">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-6 w-full">
              {[
                { value: "01+", label1: "Years", label2: "Experience" },
                { value: "15+", label1: "Completed", label2: "Projects" },
                { value: "02", label1: "Companies", label2: "Intern" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center bg-white dark:bg-[#1d2030] px-2 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 rounded-2xl shadow-[0_4px_15px_rgba(105,40,230,0.1)] border border-[#6928e6]/10 hover:border-[#6928e6]/30 transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#4219dc] to-[#973af1] bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label1}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label2}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
              I&#39;m a Software Engineering Student &amp; Full-stack JS developer
              with 1 year of experience. I specialize in creating high-quality
              web applications.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col gap-2.5 w-full">
              {[
                "🚀 I deliver client-focused solutions.",
                "⚡ I'm a web developer Freelancer.",
                "🔥 I love sharing programming tips.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1d2030] px-4 py-3 rounded-xl shadow-[0_2px_8px_rgba(105,40,230,0.08)] border-l-4 border-[#6928e6] font-medium text-xs sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Download CV */}
            <a
              href="/assets/Harikaran R NEW.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4219dc] to-[#973af1] text-white font-semibold px-8 py-3 rounded-full shadow-[0_4px_15px_rgba(105,40,230,0.35)] hover:shadow-[0_8px_25px_rgba(105,40,230,0.5)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Download CV
              <Icon icon="line-md:download-loop" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
