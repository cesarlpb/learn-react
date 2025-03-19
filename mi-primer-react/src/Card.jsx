import './Card.css';

export default function Card({
  title = "Título por defecto", 
  description = "Descripción por defecto", 
  src = "https://placehold.co/300x300?text=\"Hola, mundo\"", 
  alt = "alt por defecto"}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={src} alt={alt} />
    </div>
  );
}
