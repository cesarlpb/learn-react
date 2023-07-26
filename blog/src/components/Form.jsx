import { useState } from 'react';
import '../assets/css/Form.css';

const Form = () => {
  const [title, setTitle] = useState(''); 
  const [subtitle, setSubtitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [img, setImg] = useState(''); // string -> nombre de archivo
  const [file, setFile] = useState(null) // archivo de img
  const [authorId, setAuthorId] = useState(1); 
  const [sectionId, setSectionId] = useState(1); 
  const [canSubmit, setCanSubmit] = useState(false);
  const [contentType, setContentType] = useState("");

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
    setImg(e.target.files[0].name); // filename, string
    setFile(e.target.files[0])      // archivo
    const extValidas = ['image/jpeg', 'image/png']
    const ext = e.target.files[0].type.toLowerCase()
    let contentTypeActual = ""
    if(extValidas.includes(ext)){
      setContentType(ext) // 'image/jpeg' o 'image/png'
      contentTypeActual = ext;
    }
    verificarDatos();
    // Datos de la imagen:
    console.group("Datos de la img:")
    console.log("File:", e.target.files[0])
    console.log("name:", e.target.files[0].name)
    console.log("type:", e.target.files[0].type)
    console.log("size (Bytes):", e.target.files[0].size)
    console.log("contentType:", contentTypeActual) 
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

    // Envía los datos al servidor -> endpoint /posts
    
    const postsEndpoint = "http://localhost:3000/posts";
    // req para crear post
    fetch(postsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(
        {
          title, 
          subtitle, 
          content, 
          img, 
          authorId, 
          sectionId
        }),
    })
    .then(res => res.json())
    .then(data => console.log(data));
    
    // IMG
    
    const uploadEndpoint = "http://localhost:3000/upload";
    /*
    console.log("req:", {
      method: "POST",
      headers: {
        "Content-Type": contentType,
        'Access-Control-Allow-Origin': '*'
      },
      file:file
    })
    fetch(uploadEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": contentType,
        'Access-Control-Allow-Origin': '*'
      },
      file:file
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }*/
  var formdata = new FormData();
formdata.append("file", file, file.name);

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost:3000/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
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