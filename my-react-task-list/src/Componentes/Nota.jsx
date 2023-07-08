export const Nota = (props) =>{
    const {note}=props;
    return (
        <>
        <p> <input type="checkbox" id="coding" name="interest" value="coding" />{note}</p>
        </>
    );
};
export default Nota;
