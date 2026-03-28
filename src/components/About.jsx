const About = () => {
  return (
    <div id="about" className="min-h-screen py-10">
      <div className="text-4xl md:text-5xl font-bold text-center">
        About <span className="text-amber-300">Me</span>
      </div>
      <div className="mt-3 text-center">
        A frontend developer passionate about building modern, responsive and
        visually engaging web experiences.
      </div>
      <div className="grid md:grid-cols-2 gap-14 items-center px-20 relative">
        <div>
          <img
            src="/assets/hero.png"
            alt="Roni Pal"
            className="h-80 w-xl mt-20 "
          />
        </div>
        <div>b</div>
      </div>
    </div>
  );
};

export default About;
