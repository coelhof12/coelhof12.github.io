import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const timelineRef = useRef(null);

  // Syntax to display when hovering over each skill
  const skillSyntax = {
    HTML: "<div>Hello World</div>",
    CSS: "body { color: red; }",
    JavaScript: "console.log('Hello World');",
    MySQL: "SELECT * FROM users;",
    Java: "public class Main { public static void main(String[] args) { System.out.println('Hello World'); } }",
  };

  // Adjusting the durations to make other skills faster
  const skillDurations = {
    HTML: "5s",
    CSS: "4s",
    JavaScript: "6s",
    MySQL: "4s",
    Java: "16s",
  };

  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro">
        <h1>About Me</h1>
        <p>
          Hello! I'm Francisco Coelho, a creative and driven Full-Stack
          Developer with expertise in building efficient, scalable web
          applications. My journey began in design, where I developed a deep
          understanding of user experience and interface design, but I
          transitioned to full-stack development to pursue my passion for
          creating functional, scalable solutions.
        </p>
      </section>

      {/* Skills Overview */}
      <section className="about-skills">
        <h2>Skills Overview</h2>
        <div className="skills-grid">
          {Object.keys(skillSyntax).map((skill) => (
            <div
              key={skill}
              className={`skill-item ${skill.toLowerCase()}`}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {hoveredSkill === skill ? (
                <span
                  className="typing-animation"
                  style={{ animationDuration: skillDurations[skill] }}
                >
                  {skillSyntax[skill]}
                </span>
              ) : (
                skill
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <h2>My Journey</h2>
        <div ref={timelineRef} className="timeline">
          <div className="timeline-item">
            <h3>2024</h3>
            <p>
              <strong>Completed 32-Week Full-Stack Coding Bootcamp</strong> at
              Code for All
            </p>
            <ul>
              <li>
                Focus: Java & JavaScript, with a deep dive into object-oriented
                programming and concurrent programming.
              </li>
              <li>
                Frontend: HTML, CSS, JavaScript, and React for building dynamic,
                responsive web applications.
              </li>
              <li>
                Backend: Java, Spring Framework, REST APIs for server-side
                development.
              </li>
              <li>
                Databases: Relational databases, Java Persistence (JDBC), and
                database management systems.
              </li>
              <li>
                Tools & Testing: Version Control (Git), Build Systems,
                Debugging, and Automated Testing.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>2017</h3>
            <p>
              <strong>Degree in Design (Half Completed)</strong> at University
              of Aveiro
            </p>
            <ul>
              <li>
                Explored key design principles, but ultimately found a passion
                for problem-solving in programming.
              </li>
              <li>
                Design skills inform my front-end development, giving me a
                deeper understanding of user experience and interface design.
              </li>
              <li>
                Transitioned to full-stack development, driven by a desire to
                create scalable, functional applications.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>June 2023 – Present</h3>
            <p>
              <strong>Digital Communication Director</strong> at Cértoma -
              Indústria Funerária
            </p>
            <ul>
              <li>
                Proposed and presented the company’s web-based stock management
                system project, which was approved by the board and is set for
                development in the coming months.
              </li>
              <li>
                Solely responsible for managing the company’s communication
                strategy, website content, and all product photography.
              </li>
              <li>
                Led social communication strategies across multiple channels
                (Facebook, LinkedIn, Instagram), enhancing brand presence and
                client engagement.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Jan 2019 – Jan 2021</h3>
            <p>
              <strong>Vice President for Communication and Image</strong> at
              Associação Académica da Universidade de Aveiro
            </p>
            <ul>
              <li>
                Led a small team responsible for managing all internal and
                public communication for the institution, ensuring cohesive
                messaging and effective outreach.
              </li>
              <li>
                Developed and implemented communication strategies that improved
                student engagement and strengthened the institution's public
                image.
              </li>
              <li>
                Acted as a key decision-maker in meetings, addressing issues and
                proposing solutions to enhance the association’s operational
                efficiency.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Feb 2018 – Sept 2020</h3>
            <p>
              <strong>Sales Assistant</strong> at Vodafone
            </p>
            <ul>
              <li>
                Integrated into a high-performing team, achieving strict monthly
                sales targets in a highly demanding environment.
              </li>
              <li>
                Adapted to fast-paced conditions while meeting managerial
                expectations for increased sales performance.
              </li>
              <li>
                Provided technical support to customers, ensuring seamless
                integration of Vodafone services and addressing any issues
                promptly.
              </li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Nov 2016 – Nov 2017, Nov 2021 – Apr 2023</h3>
            <p>
              <strong>
                Pedagogical Council Member (Elected Student Representative)
              </strong>{" "}
              at University of Aveiro
            </p>
            <ul>
              <li>
                Contributed to the evaluation and improvement of pedagogical
                methods, participating in discussions about teaching strategies
                and assessment methods.
              </li>
              <li>
                Collaborated with professors and students to address educational
                challenges, propose necessary reforms, and provide feedback on
                academic performance.
              </li>
              <li>
                Played a role in shaping academic policies, including the
                creation of study cycles, examination schedules, and student
                evaluation regulations.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
