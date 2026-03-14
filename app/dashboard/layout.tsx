"use client";

import React from "react";
import Navbar from "../components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <div className=" flex flex-col min-h-screen bg-[#F8FAFC] dark:bg-[#0A0A0F] transition-colors duration-300">
      <div className="flex flex-1 ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
