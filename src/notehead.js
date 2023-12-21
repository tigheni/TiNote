export default function displayNoteInputs(
    noteHead,
    noteTitle,
    noteArea,
    firstPage,
    welcomeNote
) {
    firstPage.style.display = "none";
    noteHead.style.display = "block";
    noteTitle.value = welcomeNote.title;
    noteArea.placeholder = welcomeNote.content;
}
