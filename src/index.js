import "./style.css";
import deleteCardEventListener from "./delete.js";
import insertNoteInput from "./insertNoteInput.js";
import saveNote from "./note.js";
import renderNotes from "./renderNotes.js";
import reviewNote from "./reviewNote.js";
/* import bin from "./bin.js"; */

export class Note {
    constructor(title, content, date, tag) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.id =
            Date.now().toString() + Math.random().toString(36).substr(2, 9);
        this.tag = tag;
        this.isPined = false;
    }
}

export class NoteList {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem("notes")) || [];
    }

    saveToLocalStorage(callback) {
        localStorage.setItem("notes", JSON.stringify(this.notes));
        if (callback) {
            callback();
        }
    }

    add(note, callback) {
        const newNote = new Note(note.title, note.content, note.date, note.tag);
        this.notes.push(newNote);
        this.saveToLocalStorage(callback);
    }

    remove(note, callback) {
        const idToRemove = note.id;
        const index = this.notes.findIndex((n) => n.id === idToRemove);

        if (index !== -1) {
            this.notes.splice(index, 1);

            this.saveToLocalStorage();
            if (callback) {
                callback();
            }
        }
    }
    edit(note, title, content) {
        note.title = title;
        note.content = content;
        this.saveToLocalStorage();
    }
    getAllNotes() {
        return this.notes;
    }
}
const noteList = new NoteList();

export const Elements = {
    firstPage: document.querySelector(".first-page"),
    noteHead: document.querySelector(".note-head"),
    noteTitle: document.querySelector(".note-title-input"),
    noteArea: document.querySelector(".note-text"),
    notesCard: document.querySelector("#notes-card"),
    tag: document.querySelector(".note-tags-input"),
    submitBtn: document.querySelector(".submit-btn"),
    noteheading: document.querySelector(".note-heading"),
    noteresumé: document.querySelector(".note-resumé"),
};

insertNoteInput(Note);
renderNotes(noteList);
saveNote(noteList);
deleteCardEventListener(noteList);
reviewNote();
