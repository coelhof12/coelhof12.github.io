import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Projects.css';
import '../index.css';

const ProjectCard = ({ project, index }) => {
  const [inView, setInView] = useState(false);
  const [flip, setFlip] = useState(false); // For card flip
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
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
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
  <div className={`project-card-inner ${flip ? 'flipped' : ''}`}>
    <div className="project-card-front">
      <div className="project-header">
        <h2>{project.name}</h2>
        <span className="project-badge">Personal</span>
      </div>
      <p>{project.description || 'No description available'}</p>
      <p><strong>Technologies:</strong> {project.languages?.length ? project.languages.join(', ') : 'N/A'}</p>
      {project.image && <img src={project.image} alt={project.name} className="project-image" />}
        <a href={project.html_url} className="modern-button" target="_blank" rel="noopener noreferrer">
        View Project
        </a>
      </div>
      <div className="project-card-back">
        <p>Additional details from README or any custom content here...</p>
      </div>
    </div>
  </animated.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // To display errors

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/coelhof12/repos', {
          headers: {
            Authorization: `token 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`,
          },
        });
        if (!response.ok) {
          throw new Error(`GitHub API responded with a status of ${response.status}`);
        }

        const repos = await response.json();
        console.log('Fetched Repositories:', repos); // Log the fetched repos

        // Fetch languages and README for each repo
        const projectsWithDetails = await Promise.all(
          repos.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url, {
              headers: {
                Authorization: `token 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`,
              },
            });
            const languages = await languagesResponse.json();

            // Fetch README file
            const readmeResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, {
              headers: {
                Authorization: `token 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`,
              },
            });

            const readmeData = await readmeResponse.json();
            if (!readmeData.content) {
              console.warn(`No README found for ${repo.name}`);
              return null;
            }
            const readmeContent = atob(readmeData.content); // Decode base64

            // Extract image link from README content if exists
            const imageMatch = readmeContent.match(/!\[.*\]\((.*)\)/);
            const image = imageMatch ? imageMatch[1] : null;

            return {
              ...repo,
              languages: Object.keys(languages),
              image,
            };
          })
        );

        // Filter out null values (repos with missing README)
        const filteredProjects = projectsWithDetails.filter(Boolean);
        console.log('Processed Projects:', filteredProjects);
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching repositories:', error);
        setError(error.message); // Set error message for display
      }
    };

    fetchRepos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;