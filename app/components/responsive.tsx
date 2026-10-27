"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

interface ResponsiveProps {
  onClose: () => void;
}

const Responsive = ({ onClose }: ResponsiveProps) => {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: "/#home", label: "Home", icon: "ant-design:home-outlined" },
    { href: "/#about", label: "About", icon: "proicons:person" },
    { href: "/#services", label: "Services", icon: "hugeicons:work" },
    { href: "/#skills", label: "Skills", icon: "tabler:bulb" },
    { href: "/#qualification", label: "Qualify", icon: "mdi:certificate" },
    { href: "/#projects", label: "Projects", icon: "solar:gallery-outline" },
    { href: "/#contact", label: "Contact", icon: "material-symbols-light:mail-outline-rounded" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-xs z-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet Drawer */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1d2030] dark:text-gray-200 p-5 pb-7 transition-all duration-300 rounded-t-3xl shadow-[0_-8px_30px_rgba(105,40,230,0.2)] border-t border-[#6928e6]/15 max-h-[85vh] overflow-y-auto"
      >
        {/* Top Handle / Close Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-4">
          <div className="w-10 h-1 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2.5" />
          <span className="text-sm font-bold bg-gradient-to-r from-[#4219dc] to-[#973af1] bg-clip-text text-transparent">
            Navigation
          </span>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-[#6928e6] dark:hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <Icon icon="mdi:close" width="22" height="22" />
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-4 gap-y-4 gap-x-2 text-center text-xs">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex flex-col items-center gap-1.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-[#6928e6] dark:hover:text-[#973af1] hover:bg-[#6928e6]/5 transition-all"
            >
              <Icon icon={item.icon} width="22" height="22" />
              <span className="font-medium text-[11px]">{item.label}</span>
            </Link>
          ))}

          {/* Theme toggle in grid */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center gap-1.5 p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-[#6928e6] dark:hover:text-[#973af1] hover:bg-[#6928e6]/5 transition-all"
          >
            {theme === "dark" ? (
              <Icon icon="solar:sun-outline" width="22" height="22" className="text-amber-400" />
            ) : (
              <Icon icon="solar:moon-outline" width="22" height="22" className="text-[#6928e6]" />
            )}
            <span className="font-medium text-[11px]">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>

        {/* Mobile Download CV CTA */}
        <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
          <a
            href="/assets/Harikaran R NEW.pdf"
            download
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#4219dc] to-[#973af1] text-white text-sm font-semibold py-2.5 rounded-xl shadow-[0_4px_15px_rgba(105,40,230,0.3)] transition-all active:scale-95"
          >
            <Icon icon="line-md:download-loop" width="18" height="18" />
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Responsive;
