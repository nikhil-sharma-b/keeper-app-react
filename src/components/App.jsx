import React, { useState } from "react";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Note } from "./Note.jsx";
import { CreateArea } from "./CreateArea.jsx";

export const App = function () {
  const [notes, setNotes] = useState([]);

  const addNote = function (newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = function (id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};
