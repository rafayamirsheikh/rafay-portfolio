import { useState } from "react";
import "./App.css";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React",
  "Node.js", "Express.js", "MongoDB", "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "Student Management System",
    description:
      "A full-stack application to add, view, update and delete student records with database integration.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/rafayamirsheikh/student-management-system",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    description:
      "A responsive portfolio showcasing my skills, projects and journey as a developer.",
    tags: ["React", "CSS", "JavaScript"],
    link: "https://github.com/rafayamirsheikh",
  },
  {
    number: "03",
    title: "Creative Web Design",
    description:
      "A modern web experience focused on attractive interfaces and responsive layouts.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/rafayamirsheikh",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-icon">R</span>
          <span>rafay<span className="purple">.</span></span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              ASPIRING DEVELOPER
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Abdul Rafay
              <br />
              <span>Amir.</span>
            </h1>

            <h2 className="hero-role">
              Aspiring <span>Full-Stack Developer</span>
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly web experiences.
              I'm passionate about learning new technologies and turning
              creative ideas into reality through code.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work ↗
              </a>
              <a className="button button-outline" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/rafayamirsheikh"
                 target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rafay-amir-70885b423/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="mailto:rafayamiryt@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              <div className="profile-image-wrap">
                <img
                  src="/profile.jpg"
                  alt="Abdul Rafay Amir"
                  className="profile-image"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="profile-fallback">RA</div>
              </div>

              <div className="profile-caption">
                <span className="caption-line" />
                <div>
                  <strong>Abdul Rafay Amir</strong>
                  <p>Web Developer · Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="floating-card floating-top">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Creative Mind</strong>
                <p>Building ideas</p>
              </div>
            </div>

            <div className="floating-card floating-bottom">
              <span className="code-symbol">&lt;/&gt;</span>
              <div>
                <strong>Clean Code</strong>
                <p>Always learning</p>
              </div>
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-label">01 / ABOUT ME</span>
            <h2>
              Turning ideas into
              <br />
              <span>digital experiences.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm Abdul Rafay Amir, an aspiring web developer from Lahore,
                Pakistan. I enjoy creating websites that combine thoughtful
                design with useful functionality.
              </p>
              <p>
                I'm continuously improving my skills in frontend and backend
                development. My goal is to become a professional full-stack
                developer and contribute to meaningful digital projects.
              </p>
              <a className="text-link" href="#contact">
                Let's build something together <span>↗</span>
              </a>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <strong>08<span>+</span></strong>
                <p>Technologies I'm learning</p>
              </div>
              <div className="stat-card">
                <strong>03</strong>
                <p>Project showcases</p>
              </div>
              <div className="stat-card">
                <strong>100<span>%</span></strong>
                <p>Commitment to learning</p>
              </div>
              <div className="stat-card">
                <strong>01</strong>
                <p>Goal: keep improving</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading centered">
            <span className="section-label">02 / MY TOOLKIT</span>
            <h2>
              Skills & <span>Technologies.</span>
            </h2>
            <p>Tools I use and technologies I'm developing my skills in.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-name">{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <span className="section-label">03 / SELECTED WORK</span>
              <h2>
                Projects that
                <br />
                <span>show my journey.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/rafayamirsheikh"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <span>↗</span>
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title}`}
                    className="project-link"
                  >
                    ↗
                  </a>
                </div>

                <div className="project-art">
                  <span className="art-bracket">&lt;</span>
                  <span className="art-slash">/</span>
                  <span className="art-bracket">&gt;</span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="project-bottom-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Project <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <span className="section-label">04 / MY BACKGROUND</span>
            <h2>
              Education & <span>Growth.</span>
            </h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">ACADEMIC BACKGROUND</span>
                <h3>Matriculation / Secondary Education</h3>
                <p>Completed secondary education.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">TECHNICAL LEARNING</span>
                <h3>Web Development</h3>
                <p>
                  Learning web development at Arfa Tower, Lahore, and
                  building practical projects with modern technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <span className="section-label">05 / GET IN TOUCH</span>
            <h2>
              Have an idea?
              <br />
              <span>Let's talk.</span>
            </h2>
            <p>
              I'm always interested in learning, collaborating and exploring
              new opportunities. Feel free to reach out.
            </p>

            <a
              className="button button-primary"
              href="mailto:rafayamiryt@gmail.com?subject=Portfolio%20Inquiry"
            >
              Say Hello <span>↗</span>
            </a>

            <div className="contact-details">
              <div>
                <span className="contact-label">EMAIL</span>
                <a href="mailto:rafayamiryt@gmail.com">
                  rafayamiryt@gmail.com
                </a>
              </div>
              <div>
                <span className="contact-label">LOCATION</span>
                <p>Lahore, Pakistan</p>
              </div>
              <div>
                <span className="contact-label">LINKEDIN</span>
                <a
                  href="https://www.linkedin.com/in/abdul-rafay-amir-70885b423/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/abdul-rafay-amir-70885b423/
                </a>
              </div>
              <div>
                <span className="contact-label">GITHUB</span>
                <a
                  href="https://github.com/rafayamir"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/rafayamir
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-icon">R</span>
          <span>rafay<span className="purple">.</span></span>
        </a>
        <p>Designed & built with care by Abdul Rafay Amir.</p>
        <a href="#home" className="back-to-top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;