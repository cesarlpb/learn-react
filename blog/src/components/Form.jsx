import { useState } from 'react';
import '../assets/css/Form.css';

const Form = () => {
  const [title, setTitle] = useState(''); 
  const [subtitle, setSubtitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [img, setImg] = useState(''); 
  const [authorId, setAuthorId] = useState(1); 
  const [sectionId, setSectionId] = useState(1); 

  const handleTitle = (e) => {
    setTitle(e.target.value); 
  }
  const handleSubtitle = (e) => {
    setSubtitle(e.target.value); 
  }
  const handleContent = (e) => {
    setContent(e.target.value); 
  }
  const handleImg = (e) => {
    setImg(e.target.files[0].name);
    console.log("name:", e.target.files[0].name)
    console.log("type:", e.target.files[0].type)
    console.log("size (Bytes):", e.target.files[0]) 
  }
  const handleAuthorId = (e) => {
    setAuthorId(e.target.value); 
  }
  const handleSectionId = (e) => {
    setSectionId(e.target.value);
    // Datos del form
    console.group("Datos del formulario:")
    console.log("title:", title);
    console.log("subtitle:", subtitle);
    console.log("content:", content);
    console.log("img:", img)
    console.log("authorId:", authorId); 
    console.log("sectionId:", e.target.value);
    console.groupEnd()
  }
  const resetearCampos = () => {
    setTitle('');
    setSubtitle('');
    setContent('');
    setImg('');
    setAuthorId(1) // nunca cambia por ahora
    setSectionId(1)// valor por defecto
  }
  // Campos requeridos:
  // const required = [
  //   "title", "content", "authorId", "sectionId"
  // ]
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página

    // Envía los datos al servidor
    const url = "http://localhost:3000/posts";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({title, subtitle, content, img, authorId, sectionId})
    })
    .then(res => res.json())
    .then(data => console.log(data));

    resetearCampos();
    alert("Datos enviados");
  }

  return(
  <>
  <div id="form" className='pb-3'>
  <h2 className='py-3'>Crear Post</h2>
  <div id='form-container'>
    <form>
      {/* Título */}
      <div className='mb-3'>
      <label className='form-label'>Titulo *</label>
      <input className='form-control' id="title" type="text" placeholder="Escribe un título"
      value={title} 
      onChange={handleTitle} />
      </div>
      {/* Subtítulo */}
      <div className='mb-3'>
      <label className='form-label'>Subtítulo</label>
      <input className='form-control' id="subtitle" type="text" placeholder="Subtítulo" 
      value={subtitle} 
      onChange={handleSubtitle} />
      </div>
      {/* Contenido del post */}
      <div className='mb-3'>
        <label className='form-label'>Contenido *</label>
        <textarea id="content" className='form-control' placeholder="Contenido" 
        style={{height: "150px", width: "100%"}}
        defaultValue="Escribe el contenido..." 
        onChange={handleContent}></textarea>
      </div>
      {/* Autor del post - no se puede editar */}
      <div className='mb-3'>
        <label className='form-label'>Author</label>
        <input id="author" className='form-control' type="text" 
        placeholder="Pepe" 
        value={authorId == 1 ? "Pepe" : ""}
        onChange={handleAuthorId} readOnly/>
      </div>
      {/* Subida de imagen para el post */}
      <div className="mb-3">
      <label htmlFor="img" className="form-label">Selecciona una foto</label>
      <input className="form-control" type="file" id="img" 
      //  
      onChange={handleImg}/>
      </div>
      {/* Select para a sección */}
      <div className='mb-3'>
      <label htmlFor="section" className='form-label'>Elige la sección: *</label>
      <select name="section" id="section" className="form-select" 
      defaultValue={sectionId}
      onChange={handleSectionId}>
        {/* TODO: Bucle con datos del servidor */}
        <option value="1">Últimos posts</option>
        <option value="2">Sección 2</option>
        <option value="3">Sección 3</option>
      </select>
      </div>

      <button id="enviar-btn" onClick={handleSubmit}className='btn btn-secondary' disabled>Enviar</button>
    </form>
  </div>
  </div>
  </>)
}

export default Form;