import { useEffect } from "react"
import "./Home.css";
import profilePhoto from "../../images/Assets/nano-banana-2025-09-24T13-26-45.png"; // 👈 replace with your actual filename

export const Home = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap";
    link.id = "hero-fonts";
    if (!document.getElementById("hero-fonts")) {
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section id="home" className="hero-root">
      <div className="grid-bg" />
      <div className="orb-1" />
      <div className="orb-2" />

      <div className="floating-badge">
        <div className="badge-dot" />
        <span className="badge-text">Open to opportunities</span>
      </div>

      <div className="hero-inner">

        <div className="hero-text">
          <div className="eyebrow">
            <div className="eyebrow-dot" />
            FullStack Developer
          </div>

          <h1 className="hero-heading">
            Hello, I am<br />
            <span className="accent">Anthony</span>
          </h1>

          <div className="divider" />

          <p className="hero-body">
            Committed to crafting clean, scalable web applications — with a
            focus on delightful interfaces and user-centered experiences that
            are as thoughtful under the hood as they are on the surface.
          </p>

          <div className="cta-row">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="stats-row">
            <div>
              <div className="stat-num">3+</div>
              <div className="stat-label">Years exp.</div>
            </div>
            <div>
              <div className="stat-num">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div>
              <div className="stat-num">100%</div>
              <div className="stat-label">Committed</div>
            </div>
          </div>
        </div>

        {/* ── Photo ── */}
        <div className="photo-wrapper">
          <div className="photo-glow" />
          <div className="photo-ring" />
          <div className="photo-frame">
            <img src={profilePhoto} alt="Anthony" />
          </div>
        </div>

      </div>
    </section>
  );
};