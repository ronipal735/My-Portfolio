import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-100">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Hi, I'm <span className="text-amber-900">Roni Pal</span>
        </div>

        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold">
          FRONTEND <br />
          DEVELOPER
        </div>

        <div className="max-w-md sm:max-w-lg md:max-w-xl text-base sm:text-lg md:text-xl text-gray-700">
          I build responsive, scalable, and modern web applications using
          React.js and Tailwind CSS. I focus on clean UI design, smooth user
          experience, and performance optimization.
        </div>

        <div className="flex mt-20 text-2xl sm:text-3xl md:text-4xl gap-10 ">
          <a
            href="https://github.com/ronipal735"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:scale-110 hover:text-gray-800 transition" />
          </a>

          <a href="mailto:ronipal735@gmail.com">
            <SiGmail className="hover:scale-110 hover:text-red-500 transition" />
          </a>

          <a
            href="http://linkedin.com/in/ronipal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:scale-110 hover:text-blue-600 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
