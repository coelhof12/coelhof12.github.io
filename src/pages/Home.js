import React from 'react';
import '../styles/Home.css';
import '../index.css';

function Home() {
  return (
    <div className="home">
      
      {/* Banner Image */}
      <div className="banner-container">
        <img src="../assets/images/me_banner.png" alt="Francisco Coelho Banner" className="banner-image" />
      </div>

      {/* Strong statement and brief introduction */}
      <section className="intro-section">
        <h1>I build web solutions that combine creativity and functionality.</h1>
        <p>
          As a full-stack developer, I specialize in creating efficient, scalable web applications that deliver both visually and functionally.
        </p>
        <div className="modern-button">
          <a href="/projects" className="modern-button">View my Work</a>
          <a href="/contact" className="modern-button">Get in Touch</a>
        </div>
      </section>

      {/* Key Skills Highlight Section */}
      <section className="skills-highlight">
        <h2>Key Skills Highlight</h2>
        <ul>
          <li>JavaScript & React</li>
          <li>Node.js & Express</li>
          <li>MySQL & Database Management</li>
          <li>RESTful APIs</li>
        </ul>
      </section>

      {/* Personal Branding Section */}
      <section className="personal-branding">
        <h2>Personal Branding</h2>
        <p>Francisco Coelho, a creative and driven Full-Stack Developer with a keen eye for design and functionality.</p>
      </section>

      {/* Featured Project Highlight Section */}
      <section className="featured-project">
        <h2>Featured Project: My SPA Portfolio</h2>
        <p>This website itself is a demonstration of my skills in React, CSS Grid, API integration, and responsive web design.</p>
        <a href="/projects" className="modern-button">Learn More</a>
      </section>
      {/* GitHub Stats Section */}
      <div className="github-stats">
        <h2>My GitHub Stats</h2>
        <img src="https://github-readme-stats.vercel.app/api?username=coelhof12&show_icons=true&hide_border=true&bg_color=1D1D1D&title_color=E63946&text_color=F5F5F5&icon_color=E63946" alt="GitHub Stats" />
      </div>

      {/* GitHub Top Languages Section */}
      <div className="github-languages">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=coelhof12&layout=compact&hide_border=true&bg_color=1D1D1D&title_color=E63946&text_color=F5F5F5&icon_color=E63946" alt="Top Languages" />
      </div>
    </div>
  );
}

export default Home;