import React from 'react';
import logo from './logo.svg';
import logo_text from './logo_text.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo-wrapper">
          <img src={logo} className="App-logo-text" alt="logo" />
          <img src={logo_text} className="App-logo" alt="logo" />
        </div>
        <p>
          Coming soon, until then stay tuned via
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/vego.recipes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Instagram</span>
        </a>
      </header>
    </div>
  );
}

export default App;
