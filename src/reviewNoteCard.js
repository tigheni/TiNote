import { Elements } from './index.js';
import noItems from './noItems.js';
import toggleActive from './toggleActive.js';
import reviewingCard from './reviewingCard.js';

// Define event callback functions
function handleCardClick(e) {
  e.preventDefault();
  const card = e.target.closest('.card');
  const notes = JSON.parse(localStorage.getItem('notes'));

  if (card) {
    const exterNote = notes.find((note) => note.id === card.id);
    if (exterNote) {
      toggleActive(card);
      reviewingCard(exterNote);
    }
  }
  noItems();
}

export default function reviewNoteCard() {
  window.addEventListener('DOMContentLoaded', () => {
    // Use event delegation on the parent element (notesCard)
    Elements.notesCard.addEventListener('click', handleCardClick);
  });
}
