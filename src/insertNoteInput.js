import displayNoteInputs from "./displayNoteInputs.js";

const addBtn = document.querySelector(".btn-add-note");
export default function insertNoteInput(Note) {
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const welcomeNote = new Note(
            "New Note",
            "Start typing here...",
            new Date().toLocaleString()
        );
        displayNoteInputs(welcomeNote);

        if (
            welcomeNote.content !== "Start typing here..." &&
            welcomeNote.title !== "New Note"
        ) {
            noteList.add(welcomeNote, function () {
                // Update UI or render notes after adding a new note
                renderNotes(noteList);
                noItems();
            });
        }
    });
}
