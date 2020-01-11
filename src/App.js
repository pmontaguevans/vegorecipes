import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
         Coming soon, until then stay tuned!
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/vego.recipes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on {' '}<span> Instagram</span>
          {/* Follow us on <img src={logo} className="App-logo" alt="logo" /> */}
        </a>
      </header>
    </div>
  );
}

export default App;
