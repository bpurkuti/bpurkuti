import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Hello, My name is <code>Bishwo Purkuti</code>
        </p>

        {/* Linkedln link */}
        <a
          className="App-link"
          href="https://www.linkedin.com/in/bishwo-purkuti-a3b0101a3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedln
        </a>
      </header>
    </div>
  );
}

export default App;
