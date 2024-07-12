import { Elements } from './index.js';
import noItems from './noItems.js';
import toggleActive from './toggleActive.js';
import reviewingCard from './reviewingCard.js';

function handleCardClick(e) {
    e.preventDefault();
    const clickedCard = e.target.closest('.card');
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (!clickedCard) return noItems();
    const exterNote = notes.find((note) => note.id === clickedCard.id);
    if (clickedCard && exterNote) {
        toggleActive(clickedCard);
        reviewingCard(exterNote);
    }
}
export default function reviewNoteCard() {
    window.addEventListener('DOMContentLoaded', () => {
        // Use event delegation on the parent element (notesCard)
        Elements.notesCard.addEventListener('click', handleCardClick);
    });
}
