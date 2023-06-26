import { Nota } from "./Nota";

export const ListaNotas = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((notita) => (
        <Nota note={notita} />
      ))}    
    </ul>
  );
};
export default ListaNotas;
