import { useState, useEffect } from 'react'

function Footer() {
  const [year, setYear] = useState(2024);
  useEffect(() => {
    console.log("Ha cambiado el estado year:", year)
    return;
  }, [year]);

  return <div>Footer &copy; {year}</div>
}

export default Footer