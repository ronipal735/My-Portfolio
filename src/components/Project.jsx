import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  const ProjectItems = [
    {
      heading: "Personal Portfolio",
      description:
        "A modern portfolio built using React and Tailwind with responsive design and clean UI.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      url: "https://personal-portfolio-three-dun-63.vercel.app/",
    },
    {
      heading: "E-commerce UI",
      description:
        "A responsive e-commerce frontend with product listings and smooth UI interactions.",
      image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
      url: "https://personal-portfolio-three-dun-63.vercel.app/",
    },
    {
      heading: "Dashboard UI Design",
      description:
        "Interactive dashboard with charts and clean component-based structure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      heading: "Landing Page Design",
      description:
        "High-converting landing page with modern UI and responsive layout.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      view: "",
    },
  ];

  return (
    <div className="bg-mist-950">
      <div id="projects" className="min-h-screen py-15 max-w-7xl mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 text-amber-50">
          My <span className="text-amber-400">Work</span>
        </h2>
        <p className="max-w-3xl text-center mx-auto text-gray-400">
          A selection of projects showcasing modern, responsive, and scalable
          frontend applications built with React.js and Tailwind CSS, focused on
          clean UI and reusable components.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {ProjectItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-cover bg-center opacity-80  hover:opacity-100  p-5 rounded-sm scale-100 hover:scale-105 transition duration-500 "
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <h3 className="text-xl font-bold">{item.heading}</h3>
              <p className="mt-10 text-white font-bold">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-amber-50 border-2 rounded-sm mt-16 items-center gap-3 px-3 py-2 w-fit hover:bg-black hover:text-white scale-90 hover:scale-95 transition duration-700"
              >
                View
                <FaArrowRightLong />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
