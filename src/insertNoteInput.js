import displayNoteInputs from "./displayNoteInputs.js";

const addBtn = document.querySelector(".btn-add-note");
export default function insertNoteInput(Note, NoteList) {
    addBtn.addEventListener("click", () => {
        const welcomeNote = new Note(
            "New Note",
            "Start typing here...",
            new Date().toLocaleString()
        );
        const noteList = new NoteList();
        displayNoteInputs(welcomeNote);
        // The setTimeout function is used to focus on the note-text input field
        setTimeout(function () {
            document.getElementById("note-text").focus();
        }, 0);
        // Add the welcome note to the noteList only if the user has add a new note
        welcomeNote.content !== "Start typing here..." &&
        welcomeNote.title !== "New Note"
            ? noteList.add(welcomeNote)
            : false;
    });
}
