import React, { useState, useEffect } from "react";
import "./App.scss";

import avatar from "./Images/avatar.jpg";
import jokeApp from "./Images/jokeApp.png";
import passwordManager from "./Images/PasswordManager.png";
import admissionCalculator from "./Images/admissionCalculator.png";
import todoApp from "./Images/todoApp.png";

const PRIMARY_COLOR = "#00C6FF";
const TEXT_COLOR = "#F5F5F5";
const BACKGROUND_COLOR = "#0D1117";
const SECONDARY_TEXT_COLOR = "#B0B0B0";

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        <div className="navbar__logo" onClick={() => scrollToSection("home")}>
          Marlen.dev
        </div>
        <ul className="navbar__links">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="navbar__link"
              onMouseEnter={(e) => (e.target.style.color = PRIMARY_COLOR)}
              onMouseLeave={(e) => (e.target.style.color = TEXT_COLOR)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg-effect"></div>
      <div className="hero__content">
        <h1 className="hero__title">
          Hi, I'm Marlen —{" "}
          <span style={{ color: PRIMARY_COLOR }}>Frontend Developer</span>{" "}
          crafting modern web experiences.
        </h1>
        <p className="hero__subtitle">
          I build fast, elegant, and user-friendly websites using React and
          JavaScript.
        </p>
        <div className="hero__buttons">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn btn--primary"
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = `0 0 30px ${PRIMARY_COLOR}80`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = `0 0 20px ${PRIMARY_COLOR}4D`;
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn btn--secondary"
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(0, 198, 255, 0.1)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="section section--about">
      <div className="container">
        <h2 className="section__title">
          About Me
          <span className="section__underline"></span>
        </h2>
        <div className="about__content">
          <div className="about__image-container">
            <img src={avatar} alt="Marlen" className="about__avatar" />
          </div>
          <div>
            <p className="about__text">
              I'm a passionate frontend developer from{" "}
              <span style={{ color: PRIMARY_COLOR, fontWeight: "600" }}>
                Messina, Italy
              </span>
              . I focus on clean code, scalable interfaces, and smooth user
              experience.
            </p>
            <div className="about__cards">
              {[
                { title: "Agile", subtitle: "From Idea to Deploy (MVP)" },
                {
                  title: "React Mastery",
                  subtitle: "Complex State & Custom Hooks",
                },
                { title: "Scalable", subtitle: "Built for Future Growth" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="about__card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 198, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(0, 198, 255, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <h3 className="about__card-title">{item.title}</h3>
                  <p className="about__card-text">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skills = [
    { name: "Accessability", icon: "📱" },
    { name: "SCSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Git Flow / GitHub", icon: "🔧" },
    { name: "Component Design", icon: "🎭" },
  ];

  return (
    <section id="skills" className="section section--skills">
      <div className="container">
        <h2 className="section__title">
          Skills
          <span className="section__underline"></span>
        </h2>
        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="skills__card"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 198, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = `0 10px 30px ${PRIMARY_COLOR}4D`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 198, 255, 0.03)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="skills__icon">{skill.icon}</div>
              <h3 className="skills__name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "Admission Chance Calculator",
      description: "React platform for assessing admission chances",
      tech: ["React", "SCSS", "db.json"],
      image: admissionCalculator,
      liveDemo: "https://admission-chance-calculator.vercel.app",
      github: "https://github.com/yourusername/admission-calculator",
    },
    {
      title: "Joke App",
      description: "Intuitive todo app with drag-and-drop functionality",
      tech: ["React", "SCSS", "LocalStorage"],
      image: jokeApp,
      liveDemo: "https://joke-app-azure.vercel.app",
      github: "https://github.com/MambaXan/Joke-app",
    },
    {
      title: "Password Manager",
      description: "A simple and responsive password manager",
      tech: ["React", "localStorage", "CSS"],
      image: passwordManager,
      liveDemo: "https://password-manager-chi-azure.vercel.app",
      github: "https://github.com/MambaXan/password-manager",
    },
    {
      title: "ToDo App",
      description: "A simple and responsive ToDo App",
      tech: ["React", "localStorage", "SCSS"],
      image: todoApp,
      liveDemo: "https://todo-app-beta-murex-87.vercel.app/",
      github: "https://github.com/MambaXan/Todo-App",
    },
  ];

  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <h2 className="section__title">
          Featured Projects
          <span className="section__underline"></span>
        </h2>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="projects__card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = `0 15px 40px ${PRIMARY_COLOR}4D`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="projects__image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>
                <div className="projects__tech-stack">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="projects__badge">
                      {tech}
                    </span>
                  ))}
                </div>
                {(project.liveDemo || project.github) && (
                  <div className="projects__links">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link-btn"
                        onMouseEnter={(e) =>
                          (e.target.style.background = "rgba(0, 198, 255, 0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "transparent")
                        }
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__link-btn"
                        onMouseEnter={(e) =>
                          (e.target.style.background = "rgba(0, 198, 255, 0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "transparent")
                        }
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <h2 className="section__title">
          Let's Connect
          <span className="section__underline"></span>
        </h2>
        <p className="contact__subtitle">
          Let's build something amazing together.
        </p>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-wrapper">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="contact__input"
              onFocus={(e) => (e.target.style.borderColor = PRIMARY_COLOR)}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0, 198, 255, 0.3)")
              }
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="contact__input"
              onFocus={(e) => (e.target.style.borderColor = PRIMARY_COLOR)}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0, 198, 255, 0.3)")
              }
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="contact__textarea"
              onFocus={(e) => (e.target.style.borderColor = PRIMARY_COLOR)}
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(0, 198, 255, 0.3)")
              }
            />
            <button
              type="submit"
              className="btn btn--submit"
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = `0 0 30px ${PRIMARY_COLOR}80`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = `0 0 20px ${PRIMARY_COLOR}4D`;
              }}
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="contact__social-links">
          {[
            { name: "GitHub", url: "https://github.com/MambaXan" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/marlen-istambaev-944367350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
            { name: "Telegram", url: "https://t.me/+996507324626" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-icon"
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(0, 198, 255, 0.15)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(0, 198, 255, 0.05)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© 2025 Marlen — Built with JSX + SCSS</p>
    </footer>
  );
};

// Main App
const App = () => {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.fontFamily = "'Poppins', sans-serif";
    document.body.style.background = BACKGROUND_COLOR;
    document.body.style.color = TEXT_COLOR;
    document.body.style.overflowX = "hidden";

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `;
    document.head.appendChild(styleTag);

    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) document.head.removeChild(link);
      if (styleTag.parentNode) document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
