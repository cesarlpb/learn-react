import { Link } from "react-router-dom";

function Header(){
  return (
    <>
      <Link to="/">Inicio</Link>  
      <Link to="acerca-de">Acerca de</Link>
        
      {/* Si usamos <a> recarga toda la página y los componentes se resetean
      y los estado TAMBIÉN (ojo) => es mejor usar Link en React para los enlaces
      - Es fancy? True */}

      {/* <a href="acerca-de">Acerca de</a> */}

      <Link to="otro-link">Otro Link</Link>
    </>
  )
}

export default Header