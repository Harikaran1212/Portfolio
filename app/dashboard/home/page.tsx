"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/harikaran-r-29553121a/",
      icon: "basil:linkedin-outline",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Harikaran1212",
      icon: "uil:github-alt",
      label: "GitHub",
    },
    {
      href: "https://www.cloudskillsboost.google/public_profiles/161c87ab-19f9-4b6a-b6d1-4f77ebb0cc19",
      icon: "uim:google",
      label: "Google Cloud",
    },
    {
      href: "https://dribbble.com/hari1212",
      icon: "icon-park-outline:dribble",
      label: "Dribbble",
    },
    {
      href: "https://www.facebook.com/share/1653xihyo2/",
      icon: "icon-park-twotone:facebook",
      label: "Facebook",
    },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-[#f7f8fe] dark:bg-[#10152c] overflow-hidden transition-colors duration-300 pt-24 pb-16 md:py-0 px-4 sm:px-6"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] rounded-full bg-gradient-to-br from-[#4219dc]/10 to-[#973af1]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] rounded-full bg-gradient-to-tr from-[#4219dc]/8 to-[#973af1]/8 blur-3xl pointer-events-none" />

      <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16 relative z-10 w-full max-w-5xl"
      >
        {/* Desktop Social links - vertical */}
        <div className="hidden md:flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-4">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#1d2030] shadow-[0_2px_10px_rgba(105,40,230,0.15)] text-[#6928e6] hover:bg-gradient-to-r hover:from-[#4219dc] hover:to-[#973af1] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <Icon icon={social.icon} width="20" height="20" />
              </Link>
            ))}
          </div>
          <div className="w-[2px] h-16 bg-gradient-to-b from-[#6928e6] to-transparent" />
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {/* Profile image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4219dc] to-[#973af1] blur-md opacity-30 scale-105" />
            <Image
              src="/assets/mine.jpg"
              alt="Harikaran"
              width={260}
              height={260}
              priority
              className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-[#1d2030] shadow-[0_8px_32px_rgba(105,40,230,0.25)] hover:shadow-[0_12px_40px_rgba(105,40,230,0.4)] transition-all duration-500 hover:scale-105"
            />
          </div>

          <div className="text-center px-2">
            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#6928e6] dark:text-[#973af1] mb-2">
              Hello I Am
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] dark:text-white leading-tight">
              Harikaran
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-medium text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Software Engineering Student &amp; Full-stack JS Developer
            </p>
          </div>

          {/* Mobile Social links - horizontal row */}
          <div className="flex md:hidden items-center gap-3 mt-1">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-[#1d2030] shadow-[0_2px_8px_rgba(105,40,230,0.15)] text-[#6928e6] hover:bg-gradient-to-r hover:from-[#4219dc] hover:to-[#973af1] hover:text-white transition-all duration-300 active:scale-95"
              >
                <Icon icon={social.icon} width="18" height="18" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA buttons */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex flex-col sm:flex-row gap-4 items-center mt-8 sm:mt-10 relative z-10 w-full justify-center"
      >
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4219dc] to-[#973af1] text-white font-semibold px-7 sm:px-8 py-3 rounded-full shadow-[0_4px_15px_rgba(105,40,230,0.35)] hover:shadow-[0_8px_25px_rgba(105,40,230,0.5)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
        >
          Get in Touch
          <Icon icon="proicons:send" width="18" height="18" />
        </Link>
        <Link
          href="/#about"
          className="inline-flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 font-medium hover:text-[#6928e6] dark:hover:text-[#973af1] hover:translate-y-1 transition-all duration-300 py-2"
        >
          <Icon icon="bi:mouse" width="18" height="18" />
          Scroll Down
          <Icon icon="iconoir:nav-arrow-down" width="18" height="18" />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
