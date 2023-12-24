// note.js

import { Note, NoteList } from "./index.js";
import cardNote from "./cardNote.js";

export default function setupEventListeners() {
    const noteList = new NoteList(); // Create NoteList instance

    document.addEventListener("DOMContentLoaded", function () {
        const save = document.querySelector(".submit-btn");
        const noteTitle = document.querySelector(".note-title-input");
        const noteText = document.querySelector(".note-text");

        save.addEventListener("click", function () {
            const currentDate = new Date();

            const options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            };
            let date = currentDate.toLocaleString("en-us", options);

            const note = new Note(noteTitle.value, noteText.value, date);
            noteList.add(note);

            // Update cardNote function to handle the new NoteList structure
            cardNote(note, noteList);

            // Clear input fields after adding a note
            noteTitle.value = "";
            noteText.value = "";
        });

        // Handle other event listeners...
    });
}
