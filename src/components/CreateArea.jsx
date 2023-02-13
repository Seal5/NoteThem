import React, {useState} from "react";

function CreateArea() {
    const[note, setNote]= useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prev => {
            return{
                [name] : value,
                [name] : value
            };
        })
    }

    function handleClick(note){
        props.OnAdd(note)
        eventPreventDefault();
    }

    return (
        <div>
        <form>
            <input onChange ={handleChange} name="title" placeholder="Title" value= {note.title} />
            <textarea onChange = {handleChange} name="content" placeholder="Take a note..." rows="3" value = {note.content}/>
            <button onClick = {handleClick}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;



