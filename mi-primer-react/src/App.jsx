import './App.css';
import MyButton from './MyButton';
import MyButton2 from './MyButton2';
import Card from './Card';

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

      <MyButton />

      <MyButton2 texto='Otro texto' />
      
      <hr />
      
      {/* TODO: importar datos desde JSON */}

      <div style={{display: 'flex', justifyContent: "center"}}>
        <Card 
          title='Pikachu 1'
          description='Pokemon de tipo eléctrico'
          src='https://1.bp.blogspot.com/-vebFgy0dHCk/V1wrmTqMc5I/AAAAAAAAH00/O_9CLTyvoZAsPaz5_35jQjBtCiY_uGJeQCLcB/s1600/Pikatchu_Pokemon.png'
          alt='Es un Pikachu'
        />
        <Card 
          title='Pikachu 2'
          description='Pokemon de tipo eléctrico'
          src='https://1.bp.blogspot.com/-vebFgy0dHCk/V1wrmTqMc5I/AAAAAAAAH00/O_9CLTyvoZAsPaz5_35jQjBtCiY_uGJeQCLcB/s1600/Pikatchu_Pokemon.png'
          alt='Es un Pikachu'
        />
        <Card 
          title='Pikachu 3'
          description='Pokemon de tipo eléctrico'
          src='https://1.bp.blogspot.com/-vebFgy0dHCk/V1wrmTqMc5I/AAAAAAAAH00/O_9CLTyvoZAsPaz5_35jQjBtCiY_uGJeQCLcB/s1600/Pikatchu_Pokemon.png'
          alt='Es un Pikachu'
        />
      </div>
    </>
  );
}

export default App;
