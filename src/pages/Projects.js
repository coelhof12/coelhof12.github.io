import React, { useEffect, useState } from 'react';
import '../styles/Projects.css'; // Add styles as needed

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the JSON file
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Repository</a>
            {project.image && <img src={project.image} alt={project.title} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;