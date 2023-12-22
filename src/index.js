import "./style.css";
import { noItems } from "./noItems.js";
import insertNoteInput from "./playme.js";

const notesCard = document.getElementById("notes-card");

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

insertNoteInput(Note, NoteList);
