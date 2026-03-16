import { OnScroll } from "./OnScroll";
import "./Projects.css";

const projects = [
  {
    title: "Ife Youth Sport Development Camp",
    desc: "A competition platform for registering children attending the camp, providing schedules, results, and all relevant camp information.",
    link: "https://ifeyouthsportdc.com.ng/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    type: "fullstack",
    badge: "Live",
  },
  {
    title: "De-Wilby Shortlet Apartment",
    desc: "A luxury shortlet apartment website showcasing premium accommodation with elegant design and seamless guest experience.",
    link: "https://wilby-apartment.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    type: "frontend",
    badge: "Live",
  },
  {
    title: "Giantsteps Trasjo School",
    desc: "A clean, professional school website presenting academic programs, staff, and institutional information to parents and students.",
    link: "https://giantstepstrasjoschool.com",
    tech: ["WordPress", "Elementor", "CSS3", "PHP"],
    type: "wordpress",
    badge: "Live",
  },
  {
    title: "Holy Family Charities",
    desc: "A Christian charity website designed to connect donors with causes, share community stories, and drive meaningful engagement.",
    link: "https://holyfamilycharities.org/",
    tech: ["WordPress", "Elementor", "CSS3", "PHP"],
    type: "wordpress",
    badge: "Live",
  },
  
];

const typeColors = {
  fullstack: { pill: "pill--indigo" },
  frontend: { pill: "pill--teal" },
  wordpress: { pill: "pill--amber" },
  placeholder: { pill: "" },
};

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path
      d="M2 11L11 2M11 2H5M11 2v6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectLink = ({ link }) => {
  if (!link) {
    return <span className="project-link-disabled">In Development</span>;
  }
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      View Project <ArrowIcon />
    </a>
  );
};

const ProjectCard = ({ project }) => {
  const colors = typeColors[project.type];
  return (
    <div className={`project-card ${project.type === "placeholder" ? "project-card--placeholder" : ""}`}>
      <div className="project-card-header">
        <span className={`project-badge ${project.badge === "Live" ? "project-badge--live" : "project-badge--wip"}`}>
          <span className="project-badge-dot" />
          {project.badge}
        </span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      {project.tech.length > 0 && (
        <div className="project-pills">
          {project.tech.map((tech, j) => (
            <span key={j} className={`project-pill ${colors.pill}`}>
              {tech}
            </span>
          ))}
        </div>
      )}
      <ProjectLink link={project.link} />
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="projects-root">
      <div className="projects-orb" />
      <OnScroll>
        <div className="projects-inner">
          <div className="section-label">
            <div className="section-label-line" />
            What I've built
          </div>
          <h2 className="section-heading">
            Featured <span>Projects</span>
          </h2>
          <p className="projects-subheading">
            A selection of real-world projects across frontend, fullstack, and WordPress development.
          </p>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </OnScroll>
    </section>
  );
};