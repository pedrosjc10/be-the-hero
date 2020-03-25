import React from 'react';
import download from './download.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={download} className="App-logo" alt="logo" />
        
        <p className= "Paragrafo">
         Hello Pedro Dias
        </p>

        <p className= "Subtext">
         Pedro Bom de Bola
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
