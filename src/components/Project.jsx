import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  const items = [
    {
      heading: "Personal Portfolio",
      description:
        "hfsdjfhsjkd fhjkdshjfhjsdhfhjdsh  jfkhsjkdhfjkhdskfhshdjfhk sjd jhsdfjkhjskd sdhdsaafsdfsd jffhjskahfkljhkjh ahjfh asjhfkj djifhakh",
      image:
        "https://unsplash.com/photos/turned-on-monitor-displaying-digital-products-pKRNxEguRgM",
      url: "https://personal-portfolio-three-dun-63.vercel.app/",
    },
    {
      heading: "abc",
      description:
        "hfsdjfhsjkdfh  jkdshjfhjsdhfhj dshjfkhsjkdhfjkhds kfhshdjfhk sjd jhsdfjkhjskd sdhjffhjskahfkljhkjh ahjfh asjhfkj djifhakh",
      view: "",
      url: "https://personal-portfolio-three-dun-63.vercel.app/",
    },
    {
      heading: "pqr",
      description:
        "hfsdjfhsjkdf hjkdshjfhjsdhf hjdshjfkhsjkdhfj  khdskfhs  hdjfhk sjd jhsdfjkhjskd sdhjffhjskahfkljhkjh ahjfh asjhfkj djifhakh",
      view: "",
    },
    {
      heading: "xyz",
      description:
        "hfsdjfhsjkd fhjkdshjfh jsdhfhjdsh jfkhsjkdhfj khdaasad dskf hshdjfhk sjd jhsdfjkhjskd sdhjffhjskahfkljhkjh ahjfh asjhfkj djifhakh",
      view: "",
    },
  ];

  return (
    <div id="projects" className="min-h-screen py-15 max-w-7xl mx-auto px-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
        My <span className="text-amber-400">Work</span>
      </h2>
      <p className="max-w-3xl text-center mx-auto">
        A selection of projects showcasing modern, responsive, and scalable
        frontend applications built with React.js and Tailwind CSS, focused on
        clean UI and reusable components.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-amber-100 p-5 rounded-2xl scale-100 hover:scale-105 hover:bg-amber-200 transition duration-300 "
          >
            <h3 className="text-xl font-bold">{item.heading}</h3>
            <p className="mt-10 ">{item.description}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-amber-500 rounded-sm mt-16 items-center gap-3 px-3 py-2 w-fit hover:bg-black hover:text-white scale-90 hover:scale-95 transition duration-700"
            >
              View
              <FaArrowRightLong />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
