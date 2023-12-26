import displayNoteInputs from "./notehead.js";

const addBtn = document.querySelector(".btn-add-note");
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
        displayNoteInputs(welcomeNote);
    });
}
