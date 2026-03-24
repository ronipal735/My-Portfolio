import { TfiDownload } from "react-icons/tfi";
import { RxTextAlignJustify } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 sm:px-10 lg:px-20 py-5 font-sans">
      {/* Logo  */}
      <div className="flex items-center gap-5 text-3xl md:text-4xl lg:text-5xl font-semibold">
        Portfolio.
        <div className="md:hidden text-2xl">
          <RxTextAlignJustify />
        </div>
      </div>

      {/* Navigation Links (Desktop only) */}
      <div className="flex gap-10 items-center text-sm sm:text-base md:text-lg max-md:hidden">
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

        {/* Resume Button */}
        <button className="flex items-center gap-2 px-3 py-1 text-sm sm:text-base md:text-lg bg-amber-300 border border-amber-400 rounded-md hover:bg-amber-400 transition">
          Download CV
          <TfiDownload />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
