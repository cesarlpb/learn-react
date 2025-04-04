import { useState } from 'react'
import './water.light.css'
import './App.css'

function App() {
  
  return (
    <>
      <div id="container">
        <nav>
            <ul>
                <li><a href="/"><span>🏠</span> <span>Inicio</span></a></li>
            </ul>
        </nav>

        <h1>Mis ToDos</h1>
        <form>
            <div>
            <label for="title">Título:</label>
            <input id="title" name="title" type="text" placeholder="¿Qué tienes que hacer?" />
            </div>

            <div>
                <label for="description">Descripción:</label>
                <textarea name="description" id="description" placeholder="Más detalle..."></textarea>
            </div>

            <div>
                <label for="date">Fecha:</label>
                <input type="date" name="date" id="date" />
            </div>

            <div id="submit-container">
                <input type="submit" value="Enviar" />
            </div>
        </form>

        <div id="lista">No hay todos creados aún.</div>
    </div>
    </>
  )
}

export default App
