export const Nota = (props) =>{
    const {note}=props;
    return (
        <>
        <p> <input type="checkbox"/>{note}</p>
        </>
    );
};
export default Nota;
