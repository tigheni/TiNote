const firstPage = document.querySelector(".first-page");
const noteHead = document.querySelector(".note-head");
const noteTitle = document.querySelector(".note-title-input");
const noteArea = document.querySelector(".note-text");

export default function displayNoteInputs(welcomeNote) {
    noteTitle.value = welcomeNote.title;
    noteArea.placeholder = welcomeNote.content;
    firstPage.style.display = "none";
    noteHead.style.display = "block";
}
