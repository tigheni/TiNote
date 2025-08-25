import { Elements } from './index.js';
import renderNotes from './ui/renderNotesCard.js';

const togglePinStatus = (noteList) => {
    const cardsArr = Array.from(document.querySelectorAll('.card'));
    const activeCard = cardsArr.find((card) =>
        card.classList.contains('active')
    );
    if (!activeCard) {
        return;
    }
    activeCard.classList.remove('active');
    const card = activeCard;

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
