"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Responsive from "./responsive";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#1d2030]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(105,40,230,0.12)] py-3"
            : "bg-white/80 dark:bg-[#1d2030]/80 backdrop-blur-sm py-4"
        }`}
      >
        <nav className="flex flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <h1
            className="text-xl sm:text-2xl font-bold tracking-tight"
            onClick={() => handleClick("home")}
          >
            <Link
              href="/#home"
              className="bg-gradient-to-r from-[#4219dc] to-[#973af1] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
            >
              Harikaran
            </Link>
          </h1>

          {/* Mobile controls (Theme toggle + Menu toggle) */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[#6928e6] dark:hover:text-[#973af1] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-outline" width="20" height="20" className="text-amber-400" />
              ) : (
                <Icon icon="solar:moon-outline" width="20" height="20" />
              )}
            </button>
            <button
              id="mobile-menu-btn"
              className="p-2 rounded-lg dark:text-white text-[#1a1a2e] hover:text-[#6928e6] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              <Icon icon={isOpen ? "mdi:close" : "tdesign:app"} width="22" height="22" />
            </button>
          </div>

          {/* Desktop Nav */}
          <ul className="md:flex flex-row gap-6 lg:gap-8 items-center hidden">
            {[
              { key: "home", label: "Home", href: "/#home" },
              { key: "about", label: "About", href: "/#about" },
              { key: "services", label: "Services", href: "/#services" },
              { key: "skills", label: "Skills", href: "/#skills" },
              { key: "qualification", label: "Qualification", href: "/#qualification" },
              { key: "projects", label: "Projects", href: "/#projects" },
              { key: "contact", label: "Contact", href: "/#contact" },
            ].map((item) => (
              <li
                key={item.key}
                className={`font-medium text-sm tracking-wide transition-colors duration-300 relative group ${
                  activeLink === item.key
                    ? "text-[#6928e6]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#6928e6] dark:hover:text-[#973af1]"
                }`}
                onClick={() => handleClick(item.key)}
              >
                <Link href={item.href}>{item.label}</Link>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#4219dc] to-[#973af1] transition-all duration-300 ${
                    activeLink === item.key ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* Desktop Theme Toggle */}
            <li
              className="font-medium transition-colors duration-300 text-gray-700 dark:text-gray-300 hover:text-[#6928e6] dark:hover:text-[#973af1] cursor-pointer p-1"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-outline" width="22" height="22" className="text-amber-400" />
              ) : (
                <Icon icon="solar:moon-outline" width="22" height="22" />
              )}
            </li>

            {/* Download CV Button */}
            <li>
              <a
                href="/assets/Harikaran R NEW.pdf"
                download
                className="bg-gradient-to-r from-[#4219dc] to-[#973af1] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:shadow-[0_4px_15px_rgba(105,40,230,0.4)] transition-all duration-300 hover:-translate-y-0.5 inline-block"
              >
                Download CV
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Drawer Rendered as a sibling of header to avoid backdrop-filter stacking context containment */}
      {isOpen && <Responsive onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Navbar;
