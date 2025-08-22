import renderNotes from './renderNotesCard.js';
import noItems from './noItems.js';
import { Elements } from './index.js';

function initializeNoteInput() {
    Elements.noteArea.value = '';
    Elements.tag.value = '';
    Elements.noteTitle.value = 'New Note';
}

function handleSaveClick(noteList) {
    if (!Elements.noteArea.value) return false;
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    const date = currentDate.toLocaleString('en-us', options);

    const note = {
        title: Elements.noteTitle.value,
        content: Elements.noteArea.value,
        date,
        tag: Elements.tag.value,
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
