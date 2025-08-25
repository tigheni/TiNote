import noItems from './noItems.js';
import displayNoteInputs from './displayNoteInputs.js';
import renderNotes from './renderNotesCard.js';

export async function deleteNote(noteList, noteId) {
    const noteToDelete = noteList
        .getAllNotes()
        .find((note) => String(note.id) === String(noteId));
    if (noteToDelete) {
        await noteList.remove(noteToDelete);
        displayNoteInputs();
    }
}

export default function deleteCardEventListener(noteList) {
    const notesCard = document.querySelector('#notes-card');
    if (!notesCard) return;

    notesCard.addEventListener('click', async (e) => {
        const deleteBtn = e.target.closest('.delete-btn');
        if (deleteBtn) {
            e.preventDefault();
            const card = deleteBtn.closest('.card');
            if (card && card.id) {
                await deleteNote(noteList, card.id);
            }
        }
    });
}
