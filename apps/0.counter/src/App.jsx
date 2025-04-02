import { useState } from 'react'

import './App.css'

function App() {
  // Creamos el estado para el contador -> variable global
  const [counter, setCounter] = useState(0);

  const handleIncrement = function(){
    // counter += 1;        // no funciona
    // setCounter(++counter)// no funciona
    setCounter(prev => prev + 1)
  }
  const handleDecrement = function(){
    setCounter(prev => prev - 1)
  }
  const handleReset = function(){
    // window.location.reload()
    // Es mejor reiniciar el estado que recargar la página
    setCounter(0)
  }
  return (
    <div id="container">
      <h1>Counter</h1>
      <p id="display">{counter}</p>
      <p id="increment-btn" onClick={handleIncrement}>Incrementar</p>
      <p id="decrement-btn" onClick={handleDecrement}>Decrementar</p>
      <p id="reset-btn" onClick={handleReset}>Reiniciar</p>
    </div>
  )
}

export default App
