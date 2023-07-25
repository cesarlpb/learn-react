import { useState } from 'react';
import '../assets/css/Form.css';

const Form = () => {
  const [title, setTitle] = useState(''); 
  const [subtitle, setSubtitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [img, setImg] = useState(''); 
  const [authorId, setAuthorId] = useState(1); 
  const [sectionId, setSectionId] = useState(1); 
  const [canSubmit, setCanSubmit] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value); 
    verificarDatos();
  }
  const handleSubtitle = (e) => {
    setSubtitle(e.target.value);
    verificarDatos(); 
  }
  const handleContent = (e) => {
    setContent(e.target.value);
    verificarDatos(); 
  }
  const handleImg = (e) => {
    setImg(e.target.files[0].name);
    verificarDatos();
    // Datos de la imagen:
    console.group("Datos de la img:")
    console.log("name:", e.target.files[0].name)
    console.log("type:", e.target.files[0].type)
    console.log("size (Bytes):", e.target.files[0]) 
    console.groupEnd()
  }
  const handleAuthorId = (e) => {
    setAuthorId(e.target.value); 
    verificarDatos();
  }
  const handleSectionId = (e) => {
    setSectionId(e.target.value);
    verificarDatos();
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
    document.getElementById("img").value = "";
    document.getElementById("content").value = "";
    setAuthorId(1) // nunca cambia por ahora
    setSectionId(1)// valor por defecto
  }
  const verificarDatos = () => {
  // Campos requeridos:
  // "title", "content", "authorId", "sectionId"
    if(title.length > 0 && 
      content.length > 0 && 
      authorId && sectionId){
      setCanSubmit(true);
    }else{
      setCanSubmit(false);
    }
  }
  
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
        <label htmlFor="content" className='form-label'>Contenido *</label>
        <textarea id="content" className='form-control' placeholder="Escribe el contenido..." 
        style={{height: "150px", width: "100%"}}
        // defaultValue="Escribe el contenido..." 
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

      {canSubmit && <button id="enviar-btn" onClick={handleSubmit}className='btn btn-primary'>Enviar</button>}
      {!canSubmit && <button id="enviar-btn" onClick={handleSubmit}className='btn btn-secondary' disabled>Enviar</button>}
      
    </form>
  </div>
  </div>
  </>)
}

export default Form;