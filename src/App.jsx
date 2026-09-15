import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    alert('Welcome to Paradise Nursery!');
  };

  return (
    <div className="App">
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful, low-maintenance houseplants.</p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
