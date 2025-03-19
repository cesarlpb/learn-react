import './MyButton.css';

function MyButton2({ texto = "Click me" }) {
  return (
    <button>
      <span className="button-text">{texto}</span>
      <span className="button-overlay" />
    </button>
  )
}
export default MyButton2;