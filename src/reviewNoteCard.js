import { Elements } from './index.js';
import toggleActive from './toggleActive.js';
import reviewingCard from './reviewingCard.js';
import { noteList } from './index.js';
import { enterEditMode } from './editNote.js';

function handleCardClick(e) {
    e.preventDefault();
    const clickedCard = e.target.closest('.card');
    if (!clickedCard) return;
    const exterNote = noteList
        .getAllNotes()
        .find((note) => note.id === clickedCard.id);
    if (clickedCard && exterNote) {
        toggleActive(clickedCard);
        enterEditMode(exterNote);
        reviewingCard(exterNote);
    }
}
export default function reviewNoteCard() {
    window.addEventListener('DOMContentLoaded', () => {
        Elements.notesCard.addEventListener('click', handleCardClick);
    });
}
