// note.js

import { Note, NoteList } from "./index.js";
import cardNote from "./cardNote.js";

export default function setupEventListeners() {
    const noteList = new NoteList(); // Create NoteList instance

    document.addEventListener("DOMContentLoaded", function () {
        const save = document.querySelector(".submit-btn");
        const noteTitle = document.querySelector(".note-title-input");
        const noteText = document.querySelector(".note-text");
        const noteTags = document.querySelector(".note-tags-input");

        save.addEventListener("click", function (e) {
            if (!noteText.value) return e.preventDefault();
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

            const note = new Note(
                noteTitle.value,
                noteText.value,
                date,
                noteTags
            );
            noteList.add(note);

            // Update cardNote function to handle the new NoteList structure
            cardNote(note, noteList);

            // Clear input fields after adding a note

            noteText.value = "";
        });
        // Handle other event listeners...
    });
}
