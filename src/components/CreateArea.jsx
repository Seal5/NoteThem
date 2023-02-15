import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }


  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  const [title , setTitle] = useState(false)
  function onAddNote() {
    setTitle(true);
  }
  return (
    <div>
      <form>
        {title ?
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={onAddNote}
          value={note.content}
          placeholder="Take a note..."
          rows = {title ? 3 : 1}
        />
        <button onClick={handleClick}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
