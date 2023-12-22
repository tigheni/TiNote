import displayNoteInputs from "./notehead.js";
const firstPage = document.querySelector(".first-page");
const noteHead = document.querySelector(".note-head");
const noteTitle = document.querySelector(".note-title-input");
const addBtn = document.querySelector(".btn-add-note");
const noteText = document.querySelector(".note-text");
export default function insertNoteInput(Note, NoteList) {
    addBtn.addEventListener("click", () => {
        const welcomeNote = new Note(
            "New Note",
            "This is a new note",
            new Date().toLocaleString()
        );
        const noteList = new NoteList();
        noteList.add(welcomeNote);
        // notesCard(note); make the notewel appear on the notes cards
        displayNoteInputs(
            noteHead,
            noteTitle,
            noteText,
            firstPage,
            welcomeNote
        );
    });
}
