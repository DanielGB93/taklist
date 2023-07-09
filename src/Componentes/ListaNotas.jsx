import { useEffect, useState } from "react";
import { Nota } from "./Nota";


export const ListaNotas = (props) => {
  const { list } = props;
  const [completados, setCompletados] =useState([]);

  const handleCompleteClick =(notecomp)=>{
    console.log(`tarea ${notecomp} completada`);

    let newCompletados = [...completados];

    if (!completados.includes(notecomp)){
      newCompletados = [...newCompletados, notecomp];
    }else{
      newCompletados = newCompletados.filter((n)=> notecomp != n);
    }

    setCompletados(newCompletados);
    localStorage.setItem("Completados", JSON.stringify(newCompletados));
  }
  
  useEffect(() => {
    const localStorageData = localStorage.getItem("Completados");
    if(localStorageData){
      try{
        const storedCompletados = JSON.parse(localStorageData);

        setCompletados(storedCompletados);
      }catch(err){
        console.err("Error parsing complete items from localStorage")
      }
    }
  }, []);

  return (
    <ul>
      {list.map((notita) => (
        <Nota note={notita} 
        onCompleteClick={handleCompleteClick}
        isComplete={completados.includes(notita)}/>
      ))}    
    </ul>
  );
};
export default ListaNotas;
