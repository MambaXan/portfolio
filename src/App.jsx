import React, { useState, useEffect } from "react";
import "./App.scss";

import avatar from "./Images/avatar.jpg";
import jokeApp from "./Images/jokeApp.png";
import passwordManager from "./Images/PasswordManager.png";
import admissionCalculator from "./Images/admissionCalculator.png";
import todoApp from "./Images/todoApp.png";
import studentDeadlineManager from "./Images/studentDeadlineManager.png";
import rbMainPage from "./Images/rbMainPage.png";
import searchPage from "./Images/search-page.png"


const PRIMARY_COLOR = "#00C6FF";
const TEXT_COLOR = "#F5F5F5";
const BACKGROUND_COLOR = "#0D1117";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero__bg-effect"></div>
    <div className="hero__content">
      <h1 className="hero__title">
        Hi, I'm Marlen — <span className="highlight">Software Engineer</span>
      </h1>
      <p className="hero__subtitle">
        Building high-performance web applications with a focus on clean
        architecture and scalable solutions.
      </p>
      <div className="hero__buttons">
        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn--primary"
        >
          View Projects
        </button>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="btn btn--secondary"
        >
          Contact Me
        </button>
      </div>
    </div>
  </section>
);

const About = () => {
  const cards = [
    {
      title: "Architecture",
      desc: "Modular and maintainable systems from MVP to scale.",
    },
    {
      title: "Modern Stack",
      desc: "React 18, TypeScript, and robust state management.",
    },
    {
      title: "Performance",
      desc: "Optimized rendering and type-safe, testable code.",
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title">
          About Me<span className="section__underline"></span>
        </h2>
        <div className="about__content">
          <div className="about__image-container">
            <img src={avatar} alt="Marlen" className="about__avatar" />
          </div>
          <div className="about__info">
            <p className="about__text">
              I am a <span className="highlight">Software Engineer</span>{" "}
              specializing in <strong>React & TypeScript</strong>. I bridge the
              gap between complex requirements and elegant technical solutions.
            </p>
            <div className="about__cards">
              {cards.map((card, i) => (
                <div key={i} className="about__card">
                  <h3 className="about__card-title">{card.title}</h3>
                  <p className="about__card-text">{card.desc}</p>
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
    { name: "TypeScript / JS", icon: "🟦" },
    { name: "React Ecosystem", icon: "⚛️" },
    { name: "State Management", icon: "🏗️" },
    { name: "Modern SCSS", icon: "🎨" },
    { name: "API Integration", icon: "🔌" },
    { name: "Git & Workflow", icon: "🛠️" },
  ];

  return (
    <section id="skills" className="section section--skills">
      <div className="container">
        <h2 className="section__title">
          Technical Skills
          <span className="section__underline"></span>
        </h2>
        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div key={i} className="skills__card">
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
      title: "AI Resume Builder",
      description: "Simple AI Resume Builder",
      tech: ["React", "SCSS", "TypeScript", "Python", "FastAPI"],
      image: rbMainPage,
      liveDemo: "https://resume-builder-delta-smoky.vercel.app/",
      github: "https://github.com/MambaXan/AI-Resume-Builder",
    },
    {
      title: "LinkedIn Ghost Searcher",
      description:
        "Tool for “invisible” search on LinkedIn without a commercial limit",
      tech: ["React", "SCSS", "TypeScript", "Python", "FastAPI"],
      image: searchPage,
      liveDemo: "https://linkedin-ghost-searcher.vercel.app/",
      github: "https://github.com/MambaXan/linkedin-ghost-searcher",
    },
    {
      title: "Student Deadline Manager",
      description: "A deadline manager that is built especially for students",
      tech: ["React", "SCSS", "TypeScript", "Python", "FastAPI"],
      image: studentDeadlineManager,
      liveDemo: "https://student-deadline-manager.vercel.app",
      github: "https://github.com/MambaXan/Student-Deadline-Manager",
    },
    {
      title: "Admission Chance Calculator",
      description: "React platform for assessing admission chances",
      tech: ["React", "SCSS", "db.json"],
      image: admissionCalculator,
      liveDemo: "https://admission-chance-calculator.vercel.app",
      github: "https://github.com/yourusername/admission-calculator",
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
      title: "Joke App",
      description: "Intuitive todo app with drag-and-drop functionality",
      tech: ["React", "SCSS", "LocalStorage"],
      image: jokeApp,
      liveDemo: "https://joke-app-azure.vercel.app",
      github: "https://github.com/MambaXan/Joke-app",
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
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/marlen-istambaev-944367350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
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
