import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={require('./portrait.jpg')} 
          className="portrait" 
          alt="portrait" 
        />
        <p>
          Nicole Quindara is a full-stack software developer in Seattle, WA.
        </p>
        <span>
          <img className="linkedin"
            src={require('./linkedin.webp')} 
            onClick={() => window.open('https://www.linkedin.com/in/quindaraczarinanicole/', "_blank")}
          />
        </span>
      </header>
    </div>
  );
}

export default App;
