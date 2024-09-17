import React from 'react';
import '../styles/App.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro">
        <h1>About Me</h1>
        <p>
          Hello! I'm Francisco Coelho, a creative and driven Full-Stack Developer with expertise in building efficient, scalable web applications. My journey began in design, where I developed a deep understanding of user experience and interface design, but I transitioned to full-stack development to pursue my passion for creating functional, scalable solutions.
        </p>
      </section>

      {/* Skills Overview */}
      <section className="about-skills">
        <h2>Skills Overview</h2>
        <div className="skills-grid">
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">CSS & HTML</div>
          <div className="skill-item">Git</div>
          {/* Add more skills as necessary */}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <h2>My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>2024 - Present</h3>
            <p>Digital Communication Director at Cértoma</p>
          </div>
          <div className="timeline-item">
            <h3>2023</h3>
            <p>Completed Full-Stack Developer Course</p>
          </div>
          <div className="timeline-item">
            <h3>2017</h3>
            <p>Started exploring programming</p>
          </div>
          {/* Add more timeline events as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;