import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = setState([])

  function addNote(newNote){
    setNote(prev => {
      return([...prev, newNote]);
    })
``}

  function deleteNote(id){
    note.filter(prevNote => {
      return(
        preNote.id != id
      );
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote}/>
      {note.map((noteItem, index) => 
        {return(
          <Note 
            onDelete={deleteNote}
            key = {index}
            id = {index}
            title = {noteItem.title}
            content = {noteItem.content}
          />
        )}
      )}
      <Footer />
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import CreateArea from "./CreateArea";

// function App() {
//   const [notes, setNotes] = useState([]);

//   function addNote(newNote) {
//     setNotes((prevNotes) => {
//       return [...prevNotes, newNote];
//     });
//   }

//   function deleteNote(id) {
//     setNotes((prevNotes) => {
//       return prevNotes.filter((noteItem, index) => {
//         return index !== id;
//       });
//     });
//   }

//   return (
//     <div>
//       <Header />
//       <CreateArea onAdd={addNote} />
//       {notes.map((noteItem, index) => {
//         return (
//           <Note
//             key={index}
//             id={index}
//             title={noteItem.title}
//             content={noteItem.content}
//             onDelete={deleteNote}
//           />
//         );
//       })}
//       <Footer />
//     </div>
//   );
// }

// export default App;
