import React from "react";
import { TfiDownload } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around px-7 py-5 font-sans">
      {/*Logo*/}
      <div className="lg:text-4xl md:text-3xl text-5xl font-semibold">
        Portfolio.
      </div>

      {/*Navigation Links*/}
      <div className="flex gap-10 items-center lg:text-lg sm:text-sm">
        <a href="#home" className="hover:text-amber-600 transition">
          Home
        </a>
        <a href="#projects" className="hover:text-amber-600 transition">
          Featured Projects
        </a>
        <a href="#about" className="hover:text-amber-600 transition">
          About Me
        </a>
        <a href="#contact" className="hover:text-amber-600 transition">
          Contact
        </a>

        {/*Resume Button*/}
        <button className="flex items-center gap-2 px-3 py-1 sm:text-lg bg-amber-300 border border-amber-400 rounded-md hover:bg-amber-400 transition">
          Download CV
          <TfiDownload />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
