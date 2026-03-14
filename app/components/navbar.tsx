"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Responsive from "./responsive";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <div className="p-6 fixed w-full z-50 bg-white dark:bg-[#0A0A0F] transition-colors duration-300">
      <nav className="flex flex-row  items-center justify-between gap-4 xl:px-69 px-2  ">
        <h1
          className="text-lg hover:text-pink-500 font-medium dark:text-white"
          onClick={() => handleClick("home")}
        >
          <Link href="/#home">Harikaran</Link>
        </h1>

        <button className="md:hidden dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          <Icon icon="tdesign:app" width="22" height="25" />
        </button>

        {isOpen && <Responsive />}

        <ul className="md:flex flex-row gap-8 items-center hidden ">
          <li
            className={`font-medium transition-colors duration-300 ${
              activeLink === "home"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
            }`}
            onClick={() => handleClick("home")}
          >
            <Link href="/#home">Home</Link>
          </li>
          <li
            className={`font-medium transition-colors duration-300 ${
              activeLink === "about"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
            }`}
            onClick={() => handleClick("about")}
          >
            <Link href="/#about">About</Link>
          </li>
          <li
            className={`font-medium transition-colors duration-300 ${
              activeLink === "services"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
            }`}
            onClick={() => handleClick("services")}
          >
            <Link href="/#services">Services</Link>
          </li>
          <li
            className={`font-medium transition-colors duration-300 ${
              activeLink === "skills"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
            }`}
            onClick={() => handleClick("skills")}
          >
            <Link href="/#skills">Skill</Link>
          </li>
          <li
            className={`font-medium transition-colors duration-300 ${
              activeLink === "qualification"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
            }`}
            onClick={() => handleClick("qualification")}
          >
            <Link href="/#qualification">Qualification</Link>
          </li>
          <li
            className={`font-medium transition-colors duration-300 ${
              activeLink === "projects"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
            }`}
            onClick={() => handleClick("projects")}
          >
            <Link href="/#projects">Projects</Link>
          </li>
          <li
            className={`font-medium transition-colors duration-300 ${
              activeLink === "contact"
                ? "text-pink-600"
                : "text-gray-800 dark:text-gray-200 hover:text-pink-600"
            }`}
            onClick={() => handleClick("contact")}
          >
            <Link href="/#contact">Contact</Link>
          </li>
          <li className="font-medium transition-colors duration-300 text-gray-800 dark:text-gray-200 hover:text-pink-600 cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark"
              ? <Icon icon="solar:sun-outline" width="22" height="22" />
              : <Icon icon="solar:moon-outline" width="22" height="22" />}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
