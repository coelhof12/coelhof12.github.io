import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page. Feel free to explore my projects and learn more about me.</p>
      
      <div className="github-stats">
        <h2>My GitHub Stats</h2>
        <img src="https://github-readme-stats.vercel.app/api?username=coelhof12&show_icons=true&hide_border=true&bg_color=1D1D1D&title_color=E63946&text_color=F5F5F5&icon_color=E63946" alt="GitHub Stats" />
      </div>

      <div className="github-languages">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=coelhof12&layout=compact&hide_border=true&bg_color=1D1D1D&title_color=E63946&text_color=F5F5F5&icon_color=E63946" alt="Top Languages" />
      </div>

    </div>
  );
}

export default Home;