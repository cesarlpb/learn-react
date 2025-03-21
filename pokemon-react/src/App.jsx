import './water.css'
import './App.css'; // esta hoja tiene prioridad (sobreescribe a la anterior)
import Container from './Container';
import { useState, useEffect } from 'react';

function App() {

  // Creamos un estado inicial para los pokemons:
  const [pokemons, setPokemons] = useState([]); 

  // Pedimos los datos del pokeAPI:
  const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPokemons(data.results))
  }, [])

  return (
    <>
      <div>
        <h1>Mi Pokédex</h1>
        <Container pokemons={pokemons} />
      </div>
    </>
  )
}

export default App
