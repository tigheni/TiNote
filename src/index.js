import './style.css';
import deleteCardEventListener from './delete.js';
import insertNoteInput from './ui/insertNoteInput.js';
import saveNote from './note.js';
import renderNotesCard from './ui/renderNotesCard.js';
import reviewNoteCard from './ui/reviewNoteCard.js';
import PinNote from './pinNote.js';
import searchBar from './search.js';
import noItems from './ui/noItems.js';
import editNote from './editNote.js';
export class Note {
    constructor(title, content, date, tag) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.id =
            Date.now().toString() + Math.random().toString(36).substr(2, 9);
        this.tag = tag;
        this.isPinned = false;
    }
}

export class NoteList {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [];
        this.updateUI();
    }

    saveToLocalStorage(callback) {
        localStorage.setItem('notes', JSON.stringify(this.notes));
        if (callback) {
            callback();
        }
    }

    add(note, callback) {
        const newNote = new Note(note.title, note.content, note.date, note.tag);
        this.notes.push(newNote);
        this.saveToLocalStorage();
        this.updateUI();
        if (callback) callback();
    }

    remove(note, callback) {
        const idToRemove = note.id;
        const index = this.notes.findIndex((n) => n.id === idToRemove);

        if (index !== -1) {
            this.notes.splice(index, 1);

            this.saveToLocalStorage();
            this.updateUI();
            if (callback) {
                callback();
            }
        }
    }

    edit(note, title, content) {
        note.title = title;
        note.content = content;
        this.saveToLocalStorage();
        this.updateUI();
    }

    getAllNotes() {
        return this.notes;
    }
    updateUI() {
        renderNotesCard(this);
        noItems();
    }
    updateNote(updatedNote) {
        const index = this.notes.findIndex(
            (note) => note.id === updatedNote.id
        );

        if (index !== -1) {
            this.notes[index] = updatedNote;
            this.saveToLocalStorage();
            this.updateUI();
            return true;
        }
        return false;
    }
}
export const noteList = new NoteList();

export const Elements = {
    firstPage: document.querySelector('.first-page'),
    noteHead: document.querySelector('.note-head'),
    noteTitle: document.querySelector('.note-title-input'),
    noteArea: document.querySelector('.note-text'),
    notesCard: document.querySelector('#notes-card'),
    tag: document.querySelector('.note-tags-input'),
    submitBtn: document.querySelector('.submit-btn'),
    noteheading: document.querySelector('.note-heading'),
    noteresumé: document.querySelector('.note-resumé'),
    pinToggle: document.querySelector('.pin'),
};
PinNote(noteList);
insertNoteInput(Note);
saveNote(noteList);
reviewNoteCard();
deleteCardEventListener(noteList);
renderNotesCard(noteList);
searchBar();
