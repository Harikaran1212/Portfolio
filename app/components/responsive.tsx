"use  client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const Responsive = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#0A0A0F] dark:text-gray-200 p-4 pb-6 transition-colors duration-300 ease-in-out rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.5)]`}
    >
      <div className="grid grid-cols-4 gap-y-5 gap-x-2 text-center text-xs">
        <Link
          href="/#home"
          className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors"
        >
          <Icon icon="ant-design:home-outlined" width="24" height="24" />
          <span>Home</span>
        </Link>
        <Link
          href="/#about"
          className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors"
        >
          <Icon icon="proicons:person" width="24" height="24" />
          <span>About</span>
        </Link>
        <Link
          href="/#services"
          className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors"
        >
          <Icon icon="hugeicons:work" width="24" height="24" />
          <span>Services</span>
        </Link>
        <Link
          href="/#skills"
          className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors"
        >
          <Icon icon="tabler:bulb" width="24" height="24" />
          <span>Skills</span>
        </Link>
        <Link
          href="/#qualification"
          className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors"
        >
          <Icon icon="mdi:certificate" width="24" height="24" />
          <span>Qualify</span>
        </Link>
        <Link
          href="/#projects"
          className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors"
        >
          <Icon icon="solar:gallery-outline" width="24" height="24" />
          <span>Projects</span>
        </Link>
        <Link
          href="/#contact"
          className="flex flex-col items-center gap-1 hover:text-pink-500 transition-colors"
        >
          <Icon icon="material-symbols-light:mail-outline-rounded" width="24" height="24" />
          <span>Contact</span>
        </Link>
        <div
          className="flex flex-col items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors"
          onClick={toggleTheme}
        >
          {theme === "dark"
            ? <Icon icon="solar:sun-outline" width="24" height="24" />
            : <Icon icon="solar:moon-outline" width="24" height="24" />}
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
