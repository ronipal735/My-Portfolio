import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className=" relative">
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div
        id="home"
        className="flex justify-center items-center min-h-screen bg-linear-to-br from-amber-400 via-yellow-100 to-orange-500"
      >
        <div className="flex flex-col justify-center items-center text-center pt-24 sm:pt-28 md:pt-32">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-amber-800 to-orange-500 bg-clip-text text-transparent">
              Roni Pal
            </span>
          </div>

          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold">
            UI/UX Designer & Frontend Developer
          </div>

          <div className="max-w-xl px-4 text-base sm:text-lg md:text-xl text-gray-700 mt-5">
            I build responsive, scalable, and modern web applications using
            React.js and Tailwind CSS. I focus on clean UI design, smooth user
            experience, and performance optimization.
          </div>

          <div className="flex mt-20 text-xl sm:text-2xl md:text-3xl gap-8">
            <a
              href="https://github.com/ronipal735"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:scale-110 hover:text-gray-800 transition duration-300" />
            </a>

            <a href="mailto:ronipal735@gmail.com">
              <SiGmail className="hover:scale-110 hover:text-red-500 transition duration-300" />
            </a>

            <a
              href="http://linkedin.com/in/ronipal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:scale-110 hover:text-blue-600 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
