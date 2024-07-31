import { useState, useEffect } from 'react'

function Footer( props ) {
  const [year, setYear] = useState(2024);
  useEffect(() => {
    console.log("Ha cambiado el estado year:", year)
    return;
  }, [year]);

  return (
    <div>{ props.descripcion ? props.descripcion : "Descripción genérica" } &copy; {year}</div>
  )
}

export default Footer