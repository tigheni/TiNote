import "./style.css";
// import bin from "./delete.js";
import insertNoteInput from "./insertNoteInput.js";
import setupEventListeners from "./note.js";
import reviewNote from "./reviewNote.js";
/* import bin from "./bin.js"; */

export class Note {
    constructor(title, content, date, tag) {
        this.title = title;
        this.content = content;
        this.date = date;
        this.id = Math.random().toString(36).substr(2, 9);
        this.tag = tag;
        this.isPined = false;
    }
}

export class NoteList {
    constructor() {
        this.notes = JSON.parse(localStorage.getItem("notes")) || [];
    }
    saveToLocalStorage() {
        // Save the current notes to local storage
        localStorage.setItem("notes", JSON.stringify(this.notes));
    }

    add(note) {
        this.notes.push(note);
        this.saveToLocalStorage();
    }

    remove(note) {
        const index = this.notes.indexOf(note);
        if (index !== -1) {
            this.notes.splice(index, 1);
            this.saveToLocalStorage();
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

export const Elements = {
    firstPage: document.querySelector(".first-page"),
    noteHead: document.querySelector(".note-head"),
    noteTitle: document.querySelector(".note-title-input"),
    noteArea: document.querySelector(".note-text"),
    notesCard: document.getElementById("notes-card"),
    tag: document.querySelector(".note-tags-input"),
    submitBtn: document.querySelector(".submit-btn"),
    noteheading: document.querySelector(".note-heading"),
    noteresumé: document.querySelector(".note-resumé"),
    noteTagsInput: document.querySelector(".note-tags-input"),
    noteTextInput: document.querySelector(".note-text"),
    deleteBtn: document.querySelector("#delete-btn"),
    deleteBtn2: document.querySelector(".delete-btn"),
};

setupEventListeners();
reviewNote(Elements);
insertNoteInput(Note, NoteList);
// bin();
/* if (document.readyState !== "loading") {
    console.log("document is already ready, just execute code here");
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("document was not ready, place code here");
    });
} */
