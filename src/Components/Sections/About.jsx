import { OnScroll } from "./OnScroll";
import "./About.css";

export const About = () => {
  const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "HTML", "CSS", "JavaScript"];
  const backendSkills = ["Node.js", "Express", "PHP"];
  const softSkills = ["Search Engine Optimization (SEO)", "Newsletter"];

  const experience = [
    {
      period: "February, 2024 — Present",
      role: "Frontend Developer",
      company: "Doyenify Academy",
      desc: "Developed and implementing UI/UX designs using React, TypeScript, and Tailwind CSS.",
      current: true,
    },
    {
      period: "September, 2023 — January, 2026",
      role: "WordPress Developer — Mid-Level",
      company: "Knopee Technologies",
      desc: "Designed and managed client websites with WordPress,php, and CSS.",
      current: false,
    },
     {
    period: "May, 2021 — August, 2022",
    role: "WordPress Developer - Internship",
    company: "Adex web Technology",
    desc: "Designed and managed client websites with WordPress, HTML, and CSS.",
    current: false,
  },
  ];

  return (
    <section id="about" className="about-root">
      <div className="about-orb" />
      <OnScroll>
        <div className="about-inner">

          <div className="section-label">
            <div className="section-label-line" />
            Who I am
          </div>

          <h2 className="section-heading">
            About <span>Me</span>
          </h2>

          <p className="about-bio">
            A passionate and dedicated fullstack developer with over 3 years of expertise
            building scalable web applications and crafting innovative,
            user-centered solutions from the ground up.
          </p>

          <div className="about-two-col">

            {/* Skills */}
            <div className="about-card">

              <div className="stack-section">
                <div className="card-title">
                  <span className="card-title-dot card-title-dot--frontend" />
                  Frontend stack
                </div>
                <div className="skills-grid">
                  {frontendSkills.map((skill, i) => (
                    <span key={i} className="skill-pill skill-pill--frontend">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skills-divider" />

              <div className="stack-section">
                <div className="card-title">
                  <span className="card-title-dot card-title-dot--backend" />
                  Backend stack
                </div>
                <div className="skills-grid">
                  {backendSkills.map((skill, i) => (
                    <span key={i} className="skill-pill skill-pill--backend">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skills-divider" />

              <div className="stack-section">
                <div className="card-title">
                  <span className="card-title-dot card-title-dot--soft" />
                  Soft skills
                </div>
                <div className="skills-grid">
                  {softSkills.map((skill, i) => (
                    <span key={i} className="skill-pill skill-pill--soft">{skill}</span>
                  ))}
                </div>
              </div>

            </div>

            {/* Timeline */}
            <div className="about-card">
              <div className="card-title">
                <span className="card-title-dot card-title-dot--frontend" />
                Work experience
              </div>
              <div className="timeline">
                {experience.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className={`timeline-dot ${item.current ? "timeline-dot--current" : ""}`} />
                    <div className={`timeline-period ${item.current ? "timeline-period--current" : ""}`}>
                      {item.period}
                      {item.current && <span className="timeline-badge">Active</span>}
                    </div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-company">{item.company}</div>
                    <div className="timeline-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </OnScroll>
    </section>
  );
};