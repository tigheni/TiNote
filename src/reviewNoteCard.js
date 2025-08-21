import { Elements } from './index.js';
import noItems from './noItems.js';
import toggleActive from './toggleActive.js';
import reviewingCard from './reviewingCard.js';
import { noteList } from './index.js';

function handleCardClick(e) {
    e.preventDefault();
    const clickedCard = e.target.closest('.card');

    if (!clickedCard) return noItems();
    const exterNote = noteList
        .getAllNotes()
        .find((note) => note.id === clickedCard.id);
    if (clickedCard && exterNote) {
        toggleActive(clickedCard);
        reviewingCard(exterNote);
    }
}
export default function reviewNoteCard() {
    window.addEventListener('DOMContentLoaded', () => {
        Elements.notesCard.addEventListener('click', handleCardClick);
    });
}
