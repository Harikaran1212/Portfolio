"use client";

import About from "./about/page";
import Contact from "./contact/page";
import HomePage from "./home/page";
import Projects from "./projects/page";
import Qualification from "./qualification/page";
import Services from "./services/page";
import Skills from "./skills/page";
import Footer from "./footer/page";

export default function Dashboard() {
  return (
    <div className="bg-[#f7f8fe] dark:bg-[#10152c] transition-colors duration-300 w-full">
      <HomePage />
      <About />
      <Services />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
