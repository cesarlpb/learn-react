import './App.css'

function MiParrafo1() {
  return <p>Mi párrafo 1</p>;
}

const MiParrafo2 = () => <p>Mi párrafo 2</p>;

function MisParrafos() {
  return (
    <>
      <p id="p1">Mi párrafo 3.1</p>
      <p className="p2">Mi párrafo 3.2</p>
      <p style={{ color: "red" }}>Mi párrafo con estilos inline 3.3</p>
    </>
  );
}

function App() {
  const string = "React";
  return (
    <>
      <h1>
        Hola, mundo <em>{string}</em>
      </h1>

      <MiParrafo1 />

      <MiParrafo2 />

      <MisParrafos />
    </>
  );
}

export default App;
