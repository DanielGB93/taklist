export const Nota = (props) =>{
    const {note, onCompleteClick, isComplete}=props;

    const handleClick=() =>{
         onCompleteClick(note);
    }
    var today = new Date();
    var now = today.toLocaleString();
    return (
        < >
          <span id={now}> <button onClick={handleClick}>{isComplete ?  "✔" : "✖"}</button>{note}</span>
          
        </>
    );
};
export default Nota;