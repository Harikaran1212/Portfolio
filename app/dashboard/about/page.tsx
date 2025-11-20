"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div
      id="about"
      className="mt-20 md:mt-0 flex flex-col items-center justify-center min-h-screen bg-white px-4 md:px-0"
    >
      <div className="flex flex-col items-center justify-center gap-9 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            &lt; About Me /&gt;
          </h1>
          <h3 className="text-gray-600 text-base md:text-lg">
            My Introduction
          </h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
          <Image
            src="/assets/mine.jpg"
            alt="Harikaran"
            width={280}
            height={180}
            className="border-4 border-purple-100 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 rounded-lg"
          />

          <div className="flex flex-col items-center md:items-start  gap-7 w-full max-w-lg text-left">
            <p className="text-base text-gray-700 md:w-96">
              I&#39;m a Software Engineering Student & Full-stack JS developer
              with 1 years of experience. I specialize in creating high-quality
              web applications.
            </p>

            <ul className="text-pink-600 font-semibold list-disc space-y-1 pl-6 md:pl-0">
              <li>🚀 I deliver client-focused solutions.</li>
              <li>⚡ I&#39;m a web developer Freelancer.</li>
              <li>🔥 I love sharing programming tips.</li>
            </ul>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <div className="text-center">
                <h2 className="text-xl font-bold">01+</h2>
                <p className="text-sm">years</p>
                <p className="text-sm">experience</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">15+</h2>
                <p className="text-sm">Completed</p>
                <p className="text-sm">projects</p>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold">02</h2>
                <p className="text-sm">Companies</p>
                <p className="text-sm">Intern</p>
              </div>
            </div>

            <a
              href="/assets/Harikaran R NEW.pdf"
              download
              className="mt-2 h-12 bg-pink-600 text-white font-bold px-4 py-2 rounded-md hover:bg-pink-700 transition duration-300 flex gap-2 items-center"
            >
              Download CV
              <span className="hover:animate-ping">
                <Icon icon="line-md:download-loop" width="24" height="24" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
