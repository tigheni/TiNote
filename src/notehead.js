export default function displayNoteInputs(
    noteHead,
    noteTitle,
    noteArea,
    firstPage,
    welcomeNote
) {
    firstPage.style.display = "none";
    noteHead.style.display = "flex";
    noteTitle.value = welcomeNote.title;
    noteArea.placeholder = welcomeNote.content;
}
