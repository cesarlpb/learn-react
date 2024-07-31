import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementarContador = () => setCount((count) => count - 1)
  const decrementarContador = () => setCount((count) => count + 1)

  useEffect(() => {
    // console.log("Ha cargado el componente. Hola, desde useEffect")
    if (count !== 0) {
        console.log("Ha cambiado count, ahora vale:", count);
    }
    return;
}, [count]);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Contador:</h1>
      <div className="card">
        <button onClick={incrementarContador}>
          restar 1: {count}
        </button>
        &nbsp;
        <button onClick={decrementarContador}>
          sumar 1: {count}
        </button>
      </div>
    </>
  )
}

export default App
