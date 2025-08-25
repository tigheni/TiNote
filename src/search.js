import cardNote from './cardNote.js';
import { noteList } from './index.js';
const notesCard = document.getElementById('notes-card');
function searchBar() {
    const searchInput = document.querySelector('.search-input');

    if (searchInput) {
        let debouncer;

        searchInput.addEventListener('input', function (e) {
            clearTimeout(debouncer);
            debouncer = setTimeout(() => {
                const searchTerm = e.target.value;
                filteredNotes(searchTerm);
            }, 300);
        });
    }
}

function filteredNotes(searchTerm) {
    const filtered = noteList.getAllNotes().filter((note) => {
        return (
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    if (filtered.length === 0) {
        notesCard.innerHTML = '<p class="no-notes">No notes found</p>';

        return;
    }
    notesCard.innerHTML = '';
    filtered.forEach((note) => {
        cardNote(note);
    });
}

export default searchBar;
