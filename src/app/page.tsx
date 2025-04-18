'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import About from "./components/about";
import Projects from "./components/projects";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 0); // Trigger fade-in on mount
    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  return (
    <div
      className={`flex flex-row transition-opacity duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
      } text-center mt-12`}
    >
      <div className="flex-1 flex justify-center ">
      <About />
      </div>
      <div className="flex-1">
      <Projects />
      </div>
    </div>
  );
}