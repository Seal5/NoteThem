import React, {useState} from "react";

function CreateArea() { 
const [note, getNote] = useState({
    title: "",
    content: ""
})

function changeNote(event){
    const {name, value} = event.target;
    getNote(prev => {
        return{
        ...prev, 
        [name] : value};
    });
}
function submitNote(event){

}
  return (
    <div>
      <form>
        <input onChange = {changeNote} name="title" placeholder="Title" value={note.title} />
        <textarea onChange = {changeNote} name="content" placeholder="Take a note..." rows="3" value={note.context} />
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
