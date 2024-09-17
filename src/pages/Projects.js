import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Projects.css'; 

const ProjectCard = ({ project, index }) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef();

  // Use IntersectionObserver to detect when the card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
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

  // Define animation for the project card with staggered effect
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
    config: { tension: 220, friction: 30 },
    delay: index * 200, // Stagger animation based on index
  });

  return (
    <animated.div ref={cardRef} style={fadeIn} className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repository</a>
      {project.image && <img src={project.image} alt={project.title} />}
    </animated.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;