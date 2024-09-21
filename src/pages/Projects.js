// Projects.js

import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "../styles/Projects.css";
import "../index.css";

// Try importing the githubData.json file; if it fails, fallback to an empty array
let githubData = [];
try {
  githubData = require("../githubData.json");
} catch (error) {
  console.warn("githubData.json not found. Using fallback data.");
}

const ProjectCard = ({ project, index }) => {
  const [inView, setInView] = useState(false);
  const [flip, setFlip] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) scale(1)"
      : "translateY(50px) scale(0.95)",
    config: { tension: 220, friction: 30 },
    delay: index * 200,
  });

  return (
    <animated.div
      ref={cardRef}
      style={fadeIn}
      className="project-card"
      onClick={() => setFlip(!flip)} // Flip the card on click
    >
      <div className={`project-card-inner ${flip ? "flipped" : ""}`}>
        <div className="project-card-front">
          <div className="project-header">
            <h2>{project.name}</h2>
          </div>
          <p>{project.description || "No description available"}</p>
          <p>
            <strong>Technologies:</strong>{" "}
            {project.languages?.length ? project.languages.join(", ") : "N/A"}
          </p>
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
          )}
          <a
            href={project.html_url}
            className="modern-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project-card-back">
          <p>
            {project.additionalInfo || "No additional information available"}
          </p>
        </div>
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const [projects] = useState(githubData); // Initialize projects with the imported data

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))
        ) : (
          <p>No projects to display. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
