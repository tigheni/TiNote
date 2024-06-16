import { Elements } from './index.js';
import renderNotes from './renderNotesCard.js';
const togglePinStatus = (noteList) => {
    const cards = document.querySelectorAll('.card');
    const cardArr = Array.from(cards);
    const activeCard = cardArr.filter((card) =>
        card.classList.contains('active'),
    );
    if (activeCard.length === 0) {
        return;
    }
    const card = activeCard[0];

    const pinned = card.classList.contains('pinned');
    if (pinned) {
        card.classList.remove('pinned');
    } else {
        card.classList.add('pinned');
    }
    const noteId = card.getAttribute('id');
    const note = noteList.notes.find((n) => n.id === noteId);
    note.isPinned = !note.isPinned;
    noteList.notes.sort((a, b) => b.isPinned - a.isPinned);
    renderNotes(noteList);
    noteList.saveToLocalStorage();
};
export default function PinNote(noteList) {
    const initializePinNote = (e) => {
        e.preventDefault();

        Elements.pinToggle.addEventListener('click', () => {
            togglePinStatus(noteList);
        });
    };
    document.addEventListener('DOMContentLoaded', initializePinNote);
}
