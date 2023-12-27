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

        welcomeNote.content !== "Start typing here..." &&
        welcomeNote.title !== "New Note"
            ? noteList.add(welcomeNote)
            : false;
        // notesCard(note); make the notewel appear on the notes cards
    });
}
