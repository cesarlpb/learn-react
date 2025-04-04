import { useState } from 'react'
import './water.light.css'
import './App.css'
import { Todo } from './Todo'

function App() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = new Todo(title, description, date)
    console.log(newTodo)
    setTitle('')
    setDescription('')
    setDate('')
  }
  return (
    <>
      <div id="container">

        <nav>
          <ul>
            <li>
              <a href="/">
                <span>🏠</span> <span>Inicio</span>
              </a>
            </li>
          </ul>
        </nav>

        <h1>Mis ToDos</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título:</label>
            <input 
              id="title" 
              name="title" 
              type="text" 
              placeholder="¿Qué tienes que hacer?" 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>

          <div>
            <label htmlFor="description">Descripción:</label>
            <textarea 
              name="description" 
              id="description" 
              placeholder="Más detalle..."
              onChange={(e) => setDescription(e.target.value)}
              ></textarea>
          </div>

          <div>
            <label htmlFor="date">Fecha:</label>
            <input 
              type="date" 
              name="date" 
              id="date" 
              onChange={(e) => setDate(e.target.value)}
            />
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
