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
          </div>
          <p>{project.description || 'No description available'}</p>
          <p><strong>Technologies:</strong> {project.languages?.length ? project.languages.join(', ') : 'N/A'}</p>
          {project.image && <img src={project.image} alt={project.name} className="project-image" />}
          <a href={project.html_url} className="modern-button" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        <div className="project-card-back">
          <p>{project.additionalInfo || 'No additional information available'}</p>
        </div>
      </div>
    </animated.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/coelhof12/repos', {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        if (!response.ok) {
          throw new Error(`GitHub API responded with a status of ${response.status}`);
        }

        const repos = await response.json();

        const projectsWithDetails = await Promise.all(
          repos.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url, {
              headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
              },
            });
            const languages = await languagesResponse.json();

            const readmeResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, {
              headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
              },
            });

            const readmeData = await readmeResponse.json();
            if (!readmeData.content) {
              console.warn(`No README found for ${repo.name}`);
              return { ...repo, languages: Object.keys(languages), image: null, additionalInfo: null };
            }

            const readmeContent = atob(readmeData.content);
            const imageMatch = readmeContent.match(/!\[.*\]\((.*)\)/);
            const additionalInfoMatch = readmeContent.match(/## Additional Information([\s\S]*?)(##|$)/);

            const image = imageMatch ? imageMatch[1] : null;
            const additionalInfo = additionalInfoMatch ? additionalInfoMatch[1].trim() : null;

            return {
              ...repo,
              languages: Object.keys(languages),
              image,
              additionalInfo,
            };
          })
        );

        setProjects(projectsWithDetails.filter(Boolean));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRepos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
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
          <p>Loading GitHub Repositories...</p>
        )}
      </div>
    </div>
  );
};

export default Projects;