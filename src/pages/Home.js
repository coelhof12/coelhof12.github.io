import React from "react";
import "../styles/Home.css";
import "../index.css";

function Home() {
  return (
    <div className="home">
      {/* Banner Image */}
      <div className="banner-container">
        <img
          src="../assets/images/me_banner.jpg"
          alt="Francisco Coelho Banner"
          className="banner-image"
        />
      </div>

      {/* Strong statement and brief introduction */}
      <section className="intro-section">
        <h1>
          I build web solutions that combine creativity and functionality.
        </h1>
        <p>
          As a full-stack developer, I specialize in creating efficient,
          scalable web applications that deliver both visually and functionally.
        </p>
        <div className="cta-buttons">
          <a href="#/projects" className="modern-button">
            View my Work
          </a>
          <a href="#/contact" className="modern-button">
            Get in Touch
          </a>
          <a
            href="/assets/my-cv.pdf"
            className="modern-button download-cv"
            download
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Visualizing Development Process Section */}
      <section className="development-process">
        <h2>How I Work</h2>
        <div className="process-grid">
          <div className="process-step">
            <img src="/assets/images/icons/research.jpg" alt="Research Icon" />
            <h3>Research</h3>
            <p>Understanding the requirements and gathering information.</p>
          </div>
          <div className="process-step">
            <img src="/assets/images/icons/design.jpg" alt="Design Icon" />
            <h3>Design</h3>
            <p>
              Creating wireframes and prototypes that outline user experience.
            </p>
          </div>
          <div className="process-step">
            <img src="/assets/images/icons/develop.jpg" alt="Develop Icon" />
            <h3>Develop</h3>
            <p>
              Writing code and building the application’s core functionality.
            </p>
          </div>
          <div className="process-step">
            <img src="/assets/images/icons/test.jpg" alt="Test Icon" />
            <h3>Test</h3>
            <p>Ensuring the product is free from bugs and works as expected.</p>
          </div>
          <div className="process-step">
            <img src="/assets/images/icons/deploy.jpg" alt="Deploy Icon" />
            <h3>Deploy</h3>
            <p>Launching the product and making it available to users.</p>
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <div className="github-stats">
        <h2>My GitHub Stats</h2>
        <img
          src="https://github-readme-stats.vercel.app/api?username=coelhof12&show_icons=true&hide_border=true&bg_color=1D1D1D&title_color=34626c&text_color=F5F5F5&icon_color=34626c"
          alt="GitHub Stats"
        />
      </div>

      {/* GitHub Top Languages Section */}
      <div className="github-languages">
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=coelhof12&layout=compact&hide_border=true&bg_color=1D1D1D&title_color=34626c&text_color=F5F5F5&icon_color=34626c"
          alt="Top Languages"
        />
      </div>
    </div>
  );
}

export default Home;
