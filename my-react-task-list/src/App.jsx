import { useState } from "react";
import Header from "./Componentes/Header";
import ListaNotas from "./Componentes/ListaNotas";


function App() {
const [Lista, setLista]=useState([]);
const [newNote, setNewNote] = useState('');

  function agregarNota() {
    setLista([...Lista, newNote]);
  }
  return (
    <div className = "App">
      <Header />
      <input type="text" value={newNote} onChange={e => setNewNote(e.target.value)}/>
      <button onClick={agregarNota} >Agregar</button>
      <ListaNotas list= {Lista}/>
    </div>
  );
}

export default App
