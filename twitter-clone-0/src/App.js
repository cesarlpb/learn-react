import logo from './assets/img/logo.png';
import './App.css';
import tweet from './assets/json/ejemplo.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter clone v0</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Últimos tweets</h2>
        <div>
          Tweets coming soon
          {/* Tweets desde JSON */}
          <p>
          {tweet.id}: {tweet.content}
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
