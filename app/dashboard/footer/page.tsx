"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  const time = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Skills", href: "/#skills" },
    { label: "Qualification", href: "/#qualification" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  const socials = [
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
    <footer
      id="footer"
      className="bg-[#10152c] dark:bg-[#0d1024] text-white transition-colors duration-300"
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4219dc] to-[#973af1] bg-clip-text text-transparent">
              Harikaran
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Full Stack Developer crafting responsive and elegant web experiences.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5 sm:gap-3 flex-wrap pt-1">
              {socials.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br hover:from-[#4219dc] hover:to-[#973af1] hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon icon={social.icon} width="18" height="18" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#973af1]">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-300"
                  >
                    <span className="text-[#6928e6]">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#973af1]">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "proicons:call", text: "+91 9843627312", href: "tel:+919843627312" },
                { icon: "proicons:mail", text: "harikaranrk2003@gmail.com", href: "mailto:harikaranrk2003@gmail.com" },
                { icon: "lucide:map-pin", text: "India - Tamil Nadu" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Icon icon={item.icon} width="16" height="16" className="text-[#6928e6] flex-shrink-0" />
                  {item.href ? (
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <p className="text-gray-500 text-xs">
            © {time} — Designed &amp; Developed by{" "}
            <span className="text-[#973af1] font-semibold">Harikaran</span> ❤️
          </p>
          <p className="text-gray-500 text-xs">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
