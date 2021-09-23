import React, { useState } from "react";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Note } from "./Note.js";
import { CreateArea } from "./CreateArea.js";

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
