import { OnScroll } from "./OnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center relative pt-12"
    >
      <OnScroll>
        <div className="text-center -mt-16 z-10 px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Hello, I am Anthony
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I am a frontend developer who is committed to creating clean and scalable web applications.
            My aim is to offer solutions by building delightful and user-friendly experiences.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
              hover:-translate-y-0.5 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-600/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </OnScroll>
    </section>
  );
};
