import { useEffect, useState } from "react";
import "./Navbar.css";

export const Navbar = ({ OpenMenu, setOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.body.style.overflow = OpenMenu ? "hidden" : "";
  }, [OpenMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home",     label: "Home"     },
    { id: "about",    label: "About"    },
    { id: "projects", label: "Projects" },
    { id: "contact",  label: "Contact"  },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          Tony<span className="navbar-logo-accent">.dev</span>
        </a>

        {/* Desktop links */}
        <div className="navbar-links">
          {links.map((link) => (
            
            <a  href={`#${link.id}`} key={link.id}
              className={`navbar-link ${active === link.id ? "navbar-link--active" : ""}`}
              onClick={() => setActive(link.id)}
            >
              {link.label}
              {active === link.id && <span className="navbar-link-dot" />}
            </a>
          ))}
          <a href="#contact" className="navbar-cta">
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`navbar-hamburger ${OpenMenu ? "navbar-hamburger--open" : ""}`}
          onClick={() => setOpenMenu((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

      </div>
    </nav>
  );
};