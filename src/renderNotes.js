import cardNote from "./cardNote.js";
export default function renderNotes(notelist) {
    notelist.getAllNotes().forEach((note) => {
        cardNote(note);
    });
}
