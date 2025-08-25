import { Elements } from './index.js';
import noItems from './ui/noItems.js';
import renderNotes from './ui/renderNotesCard.js';

export const editState = {
    active: false,
    noteId: null,
};
export function enterEditMode(note) {
    editState.noteId = note.id;
    editState.active = true;

    Elements.noteTitle.value = note.title;
    Elements.noteArea.value = note.content;
    Elements.tag.value = note.tag || '';
}
export function exitEditMode() {
    editState.active = false;
    editState.noteId = null;
    Elements.submitBtn.textContent = 'Add Note';
    Elements.noteTitle.value = 'New Note';
    Elements.noteArea.value = '';
    Elements.tag.value = '';
    noItems();
}

export function editNote(noteList) {
    const updatedNote = {
        id: editState.noteId,
        title: Elements.noteTitle.value || 'untitled',
        content: Elements.noteArea.value,
        date: new Date().toLocaleString(), // Update date when edited
        tag: Elements.tag.value || 'General',
        isPinned: false,
    };
    const updated = noteList.updateNote(updatedNote);
    if (updated) {
        renderNotes(noteList);
        exitEditMode();
        return true;
    }
    return false;
}
