import './MyButton.css';

function MyButton() {
  return (
    <button>
      <span className="button-text">Click me</span>
      <span className="button-overlay" />
    </button>
  )
}
export default MyButton;