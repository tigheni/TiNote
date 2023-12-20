import "./style.css";
import { noItems } from "./noItems.js";
import displayNoteInputs from "./notehead.js";
const addBtn = document.querySelector(".btn-add-note");
const rightSection = document.querySelector(".right-section");
const firstPage = document.querySelector(".first-page");
const noteHead = document.querySelector(".note-head");
const notesCard = document.getElementById("notes-card");
const noteText = document.querySelector(".note-text");
const noteTitle = document.querySelector(".note-title-input");
function playme() {
    addBtn.addEventListener("click", () => {
        const welcomeNote = new Note(
            "New Note",
            "This is a new note",
            new Date().toLocaleString()
        );
        const noteList = new NoteList();
        noteList.add(welcomeNote);
        // notesCard(note); make the notewel appear on the notes cards
        displayNoteInputs(
            noteHead,
            noteTitle,
            noteText,
            firstPage,
            welcomeNote
        );
    });
}
playme();
noItems(notesCard);

export class Note {
    constructor(title, content, date) {
        this.title = title;
        this.date = date;
        this.content = content;
    }
}

class NoteList {
    constructor() {
        this.notes = [];
    }

    add(note) {
        this.notes.push(note);
    }

    remove(note) {
        this.notes.splice(this.notes.indexOf(note), 1);
    }

    edit(note, title, content) {
        note.title = title;
        note.content = content;
    }
}
