import { useState, useEffect } from 'react'
import Post from './Post';
import json from '../assets/json/posts.json';

const PostContainer = (props) => {
  const {sectionId, id, title} = props
  const [posts, setPosts] = useState([])
  const rand = () => {
    return `key-${parseInt(Math.random()*1000)}`
  }
  useEffect(() => {
  {/* 1. Leer el JSON y seleccionar un section a partir del id que me pasan por props */}
  // id -> identificador de seccion (1, 2, 3)
  const section = json.filter(section => section.id == id) // Filtramos el section que tiene el id que nos han pasado

  // Observación: json.filter(...) devuelve un array.
  setPosts(section[0].posts) // Actualizamos el estado de los posts. Accedemos al array de posts de este section
  
  }, []) // [] -> no hay condición para volver a ejecutar el useEffect(...)
  return (
  <>
  <div className='container py-3'>
    {title && <h2>{title}</h2>}
    {/* Idea: Crear un componente <Post id="1" seoTitle="lorem" descripcion="seo" variant=""> */}
    {/* 2. Bucle en ese array */}
    {posts && <div key="1" className='row g-3 py-0'>
      {posts.map(post => <Post 
        key={`${sectionId}-${post.id}`}
        id={post.id}
        title={post.title}
        subtitle={post.subtitle}
        img={post.image}
      />)}
    </div>}
    {/* 3. Si no hay contenido "Aún no hay posts" */}
    {!posts && <p className='mx-auto text-center'>Aún no hay posts en esta sección.</p>}
  </div>
  </>
)}

export default PostContainer;