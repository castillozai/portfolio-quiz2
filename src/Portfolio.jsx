import React from 'react';
import './Style.css';

const Portfolio = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <h1>My Portfolio</h1>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Welcome to My Portfolio</h1>
            <p>
              I am Zaresh Castillo, a BSIT student. Despite being in IT, I’m not very good at coding. Aside from being a student, I also enjoy watching movies.
            </p>
          </div>
          <div className="hero-img">
            <img src="/images/profile.jpg" alt="Zaresh Castillo" />
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>Hi, I'm Zairesh Castillo, currently studying at Dalubhasaan ng Lungsod ng Lucena. I’m in my second year as a BSIT student and passionate about achieving my goals.</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Experience</h2>
          <ul>
            <li>Dancing</li>
            <li>Working at Church</li>
          </ul>
          <p>Future Job: Undecided</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <ul>
            <li>UI and UX Designing</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Email: @zaicastillo.com</p>
          <p>Phone: 639 480 043 155</p>
          <p>Socials:
            <a href="#"> Facebook</a> |
            <a href="#"> GitHub</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; Zairesh_Castillo.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;