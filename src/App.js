import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Use element prop for React Router v6 */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;