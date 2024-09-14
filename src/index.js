import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this file exists, or change it
import App from './App'; // Main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Make sure your public/index.html has a <div id="root"></div>
);