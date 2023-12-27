import cardNote from "./cardNote.js";
export default function renderNotes(notelist) {
    const notesCard = document.querySelector("#notes-card");
    notelist.getAllNotes().forEach((note) => {
        cardNote(note);
    });
}
