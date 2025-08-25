import displayNoteInputs from './ui/displayNoteInputs.js';

const notesCard = document.querySelector('#notes-card');

export default function deleteCardEventListener(noteList) {
    if (!notesCard) return;

    notesCard.addEventListener('click', async (e) => {
        const deleteBtn = e.target.closest('.delete-btn');
        if (!deleteBtn) return;
        const card = deleteBtn.closest('.card');
        if (!card || !card.id) return;

        try {
            await deleteNote(noteList, card.id);
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    });
}

export async function deleteNote(noteList, noteId) {
    try {
        const noteToDelete = noteList
            .getAllNotes()
            .find((note) => String(note.id) === String(noteId));

        if (noteToDelete) {
            await noteList.remove(noteToDelete);

            displayNoteInputs();
        }
    } catch (error) {
        console.error('Delete operation failed:', error);
        throw error;
    }
}
