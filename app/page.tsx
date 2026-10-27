"use client";

import Navbar from "./components/navbar";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <div className="bg-[#f7f8fe] dark:bg-[#10152c] transition-colors duration-300 w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Dashboard />
    </div>
  );
}
