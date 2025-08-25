import renderNotes from './renderNotesCard.js';
import noItems from './noItems.js';
import { Elements } from './index.js';
import { editNote, editState, editeNote, exitEditMode } from './editNote.js';

function initializeNoteInput() {
    Elements.noteArea.value = '';
    Elements.tag.value = '';
    Elements.noteTitle.value = 'New Note';
}

function handleSaveClick(noteList) {
    if (editState.active) {
        return editNote(noteList);
    }
    if (!Elements.noteArea.value) return false;

    const note = {
        title: Elements.noteTitle.value || 'Untitled',
        content: Elements.noteArea.value,
        date: new Date().toLocaleString(),
        tag: Elements.tag.value || 'General',
    };

    noteList.add(note, () => {
        renderNotes(noteList);
    });

    initializeNoteInput();
}

export default function saveNote(noteList) {
    const save = document.querySelector('.submit-btn');

    const initializer = () => {
        save.addEventListener('click', () => {
            handleSaveClick(noteList);
        });
        noItems();
    };

    document.addEventListener('DOMContentLoaded', initializer);
}
