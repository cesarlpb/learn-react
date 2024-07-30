// Importaciones de funciones, hojas de estilo, img, etc.
import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import meme from '/img/meme.png'
import './App.css'
import './Footer'
import Footer from './Footer'

// Definimos nuestras funciones
export const MiBoton = () => <button onClick={() => alert("Hola!")}>Click me</button>

// función principal del componente que es el principal "return" del component y se llaman igual:
function App() {
  const [count, setCount] = useState(0)
  return (
    // Fragmento
    <>  
      <h1>Primer React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Likes {count}
        </button>
      </div>
      <p className="read-the-docs">
        Este es un proyecto de React 🚀
      </p>

      {/* Meme */}
      <div>
        <img src={meme} alt="meme" width={300} style={{ margin: "0 auto", border: "3px solid black"}}/>
        <br />
        <MiBoton/>
      </div>

      {/* Usamos Footer */}
      <Footer/>
    </>
  )
}
// Es necesario colocar export de la función principal, en este caso App, para que podamos utilizarla desde otro archivo
export default App
