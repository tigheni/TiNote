import { Elements } from "./index.js";
export default function displayNoteInputs(welcomeNote) {
    Elements.noteTitle.value = welcomeNote.title;
    Elements.noteArea.placeholder = welcomeNote.content;
    if ((Elements.firstPage.style.display = "block")) {
        Elements.noteHead.style.display = "block";
        Elements.firstPage.style.display = "none";
    } else if ((Elements.firstPage.style.display = "none")) {
        Elements.noteHead.style.display = "none";
        Elements.firstPage.style.display = "block";
    }
    (Elements.noteArea.value = ""),
        (Elements.noteTagsInput.value = ""),
        (Elements.noteTitle.value = "New Note");
}
