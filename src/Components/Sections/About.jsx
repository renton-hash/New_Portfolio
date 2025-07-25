import { OnScroll } from "./OnScroll";
export const About = () => {

    const frontendSkills = [
            "React",
            "Nextjs",
            "Typescript",
            "TailwindCSS",
            "WordPress",
        ];
    
    return (

        <section id="about" 
        className="min-h-screen -mt-48 flex items-center justify-center py-20"
        >
<OnScroll>
        <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        {" "}
        About Me
        </h2>

        <div className="rounded-xl p-8 overflow-hidden border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                A passionate self-taught developer with over 4 years expertise in 
                building scalable web applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 px-4 sm:px-6 lg:px-8">
  <div className="rounded-xl p-4 sm:p-6 hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center dark:bg-neutral-900 shadow-sm w-full">
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Frontend</h3>
    <div className="flex flex-wrap justify-center gap-2 ">
      {frontendSkills.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full
          hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition whitespace-nowrap"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</div>



        </div>
{/* The certification is not ready even though I am a self-taught developer */}
      <div className="grid-cols-2 overflow-hidden gap-6 mt-8">
    
    {/*<div className="p-2 rounded-xl border-white/10 border 
    hover:-translate-y-1 transition-all">
<h3 className="text-xl text-center font-bold mb-4"> Certifications </h3>

    </div>
    */}
    <div className=" grid grid-col p-2 overflow-hidden rounded-xl border-white/10 border 
    hover:-translate-y-1 transition-all">
<h3 className="text-xl text-center font-bold mb-4">Work Experience</h3>
<div className="space-y-4 text-gray-300">
 
 <div>
 <h4 className="font-semibold">Frontend Developer at Devs Corner Startup (2025 - Present) </h4>
 <p>Developing and Implementing UI/UX designs with nextJs, reactJs, typescript and TailwindCSS</p>
 </div>

 <div>
 <h4 className="font-semibold">Frontend Developer (Intern) at doyenify Academy (2024 - 2025) </h4>
 <p>Developing and Implementing UI/UX designs with react, typescript and TailwindCSS</p>
 </div>

 <div>
 
 <h4 className="font-semibold">WordPress Intern at Knopee Technologies (2023 - 2024) </h4>
 <p>Designing and managing clients websites.</p>
   
 </div>
</div>
    </div>

</div>
        </div>
        </OnScroll>
        </section>
    );
}
