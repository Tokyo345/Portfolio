import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero*/}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 rounded-xl">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-10 rounded-md mb-4"
            loading="lazy"
          />
          <q className=" font-medium">
            Simplicity is the ultimate sophistication.
          </q>
          <h1 className="text-5xl/tight font-bold mb-6 mt-6">
            Hi, my name is Frederick Rainer Suryanto
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Driven by a passion for human-centered technology, my focus is on
            combining intuitive user interface (UI) design with the power of
            artificial intelligence (AI) to create solutions that make a
            tangible, positive impact.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/public/assets/Frederick Rainer suryanto-resume.pdf"
              className="bg-indigo-600 p-4 rounded-2xl hover:bg-indigo-500"
            >
              Download my CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#projects"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              View my Projects <i className="ri-list-view ri-lg"></i>
            </a>
          </div>
        </div>

        <div className="justify-end-safe">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s rounded-xl"
            loading="lazy"
          />
        </div>
      </div>
      {/* Hero*/}

      {/* About*/}
      <div
        className="about mt-32 py-10"
        id="about"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className=" flex items-center justify-center py-4 font-semibold text-4xl mb-4 ">
          About Me
        </h1>
        <div className="lg:w-3/4 w-full mx-auto p-7 bg-zinc-700 rounded-lg">
          <p>
            As an Informatics Engineering student at Universitas Brawijaya, I am
            passionate about creating human-centered technological solutions. I
            am focused on designing intuitive user interfaces (UI) to solve
            tangible problems, while simultaneously exploring the development of
            artificial intelligence (AI) to generate a widespread positive
            impact on society.
          </p>
        </div>
        <div className="tools mt-32 ">
          <h1
            className="font-semibold text-2xl mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools
          </h1>
          <p
            className=" xl:w-2/5 lg:w-2/4 md:-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            Here are some tools that I often use/am familiar with
          </p>
        </div>
        <div>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {listTools.map((tool) => (
              <div
                className=" flex items-center gap-2 p-3 border border-zinc-700 rounded-md hover:bg-zinc-700 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="tools image"
                  className="w-14 bg-zinc-600 p-1 group-hover:bg-zinc-500"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* About*/}

      {/* Projects */}
      <div
        className="projects text-center mt-32 py-10 font-semibold"
        id="projects"
      >
        <h1
          className="text-4xl mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Projects
        </h1>
        <p
          className="text-base/loose opacity-50 text-center font-medium"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Here are some projects that I worked lately:{" "}
        </p>
        <div className="projects-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md flex flex-col justify-between text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={project.dad}
            >
              <div>
                <img
                  src={project.gambar || "/placeholder.svg"}
                  alt="project images"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold my-4 text-white">
                  {project.nama}
                </h1>
                <p className="text-base/loose mb-4 text-justify text-white font-medium opacity-50">
                  {project.desk}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-500 rounded-md font-semibold text-white"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <a
                  className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600 transition-colors duration-200 text-white"
                  href={project.link}
                >
                  View prototype
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Projects */}

      {/* Kontak */}
      <div className="Contact mt-32 sm:p-10 p-0" id="Contact">
        <h1
          className="text-4xl mb-4 text-center font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Connect with me:
        </p>
        <form
          action="https://formsubmit.co/frederickrainer123@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full name</label>
              <input
                type="text"
                name="name"
                placeholder="Fill your name"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" required>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="45"
                rows="7"
                placeholder="Type here..."
                className="border border-zinc-500 p-2 rounded-md"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600 font-semibold"
                href="#"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Kontak */}
    </>
  );
}

export default App;
