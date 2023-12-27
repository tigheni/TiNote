import { Elements } from "./index.js";
export default function displayNoteInputs(welcomeNote) {
    Elements.noteTitle.value = welcomeNote.title;
    Elements.noteArea.placeholder = welcomeNote.content;
    Elements.firstPage.style.display = "none";
    Elements.noteHead.style.display = "block";
}
