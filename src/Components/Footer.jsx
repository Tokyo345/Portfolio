export const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="projects">Projects</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Tokyo345">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/f.rainerrr?igsh=MTZ6ZHl1bm56Y2FpaA==">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/frederick-rainer/">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};
