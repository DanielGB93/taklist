import { useState } from "react";
import Header from "./Componentes/Header";
import ListaNotas from "./Componentes/ListaNotas";


function App() {
const [ListaNotas, setListaNotas]=useState([]);
const [newNote, setNewNote] = useState('');

  function agregarNota() {
    setListaNotas([...ListaNotas, newNote]);
  }
  return (
    <div className = "App">
      <Header />
      <input type="text" value={newNote} onChange={e => setNewNote(e.target.value)}/>
      <button onClick={agregarNota} >Agregar</button>
      <ListaNotas list= {ListaNotas}/>
    </div>
  );
}

export default App
