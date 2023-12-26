const firstPage = document.querySelector(".first-page");
const noteHead = document.querySelector(".note-head");
const noteTitle = document.querySelector(".note-title-input");
const noteArea = document.querySelector(".note-text");
const tags = document.querySelector(".note-tags-input");
export default function displayNoteInputs(welcomeNote, con) {
    firstPage.style.display = "none";
    noteHead.style.display = "block";
    noteTitle.value = welcomeNote.title;
    noteArea.value = welcomeNote.content;
}
