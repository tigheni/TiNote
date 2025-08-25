import cardNote from './cardNote.js';

const notesCard = document.getElementById('notes-card');
export default function renderNotesCard(notelist) {
    notesCard.innerHTML = '';
    notelist.getAllNotes().forEach((note) => {
        cardNote(note);
    });
}
