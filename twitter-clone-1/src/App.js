import logo from './assets/img/logo.png';
import './App.css';
import tweets from './assets/json/tweets.json';
import Tweet from './Tweet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Twitter clone v0</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
      <h2>Últimos tweets</h2>
        <div>
          {/* Añadimos el operador && para que en caso de que no haya tweets la expresión no se ejecute -> el div aparece sin contenido */}
          {tweets && tweets.map(({id, content, created_on, author}) => (
            <Tweet key={id} author={author} content={content} created_on={created_on}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
