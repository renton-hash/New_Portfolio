import { OnScroll } from "./OnScroll";

export const Projects = () => {
  return (
    <>
    <section
      id="projects"
      className="min-h-screen flex items-center overflow-hidden justify-center py-20"
    >
      <OnScroll>
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">giantstepstrasjoschool</h3>
              <p className="text-gray-400 mb-4">A school website page layout</p>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "Elementor", "CSS3"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://giantstepstrasjoschool.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border-white/10 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">holyfamilycharities</h3>
              <p className="text-gray-400 mb-4">A Christian charity website</p>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "Elementor", "CSS3"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://holyfamilycharities.org/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </OnScroll>
    </section>
    </>
  );
};

