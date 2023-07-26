import logo from '/favicon.png'
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const Navbar = () => {
  
  const [mostrarBtn, setMostrarBtn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log("location:",location)
    console.log("URL:",location.pathname)
    
    const isHomeUrl = !location.pathname.includes('crear');
    
    if(!isHomeUrl){
      setMostrarBtn(false)
    }else{
      setMostrarBtn(true)
    }
  }, [location])
  
  return (
  <>
    <div id="navbar" className='d-flex py-2 px-3 justify-content-between align-items-center'>
      <Link to="/" className='d-flex justify-content-between align-items-center'>
        <img  className='mx-2' src={logo} alt="logo del blog" width={50}/>
        <h2 className='mx-2' >Mi Blog</h2>
      </Link>
      <ul className='d-flex align-items-center m-0' style={{listStyleType: 'none', paddingLeft: 0}}>
        <li className='d-inline-block mx-3'><a href='#' className='btn btn-secondary text-light disabled' role="button" aria-disabled="true">Link 1</a></li>
        <li className='d-inline-block mx-3'><a href='#' className='btn btn-secondary text-light disabled' role="button" aria-disabled="true">Link 2</a></li>
        <li className='d-inline-block mx-3'><a href='#' className='btn btn-secondary text-light disabled' role="button" aria-disabled="true">Link 3</a></li>
        <li className='d-inline-block mx-3'><a href='#' className='btn btn-secondary text-light disabled' role="button" aria-disabled="true">Link 4</a></li>
        
        { mostrarBtn &&
          <li className='d-inline-block mx-3'><Link to='crear' className='btn btn-primary text-light'>Crear Post</Link ></li>
        }
      </ul>
    </div> 
  </>
)}

export default Navbar;