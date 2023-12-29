import { Elements } from "./index.js";
export default function reviewNote() {
    window.addEventListener("DOMContentLoaded", function () {
        const notesCard = document.getElementById("notes-card");

        // Use event delegation on the parent element (notesCard)
        notesCard.addEventListener("click", function (e) {
            const card = e.target.closest(".card");

            e.preventDefault();
            if (!card) {
                return;
            }

            const notes = JSON.parse(localStorage.getItem("notes"));
            const me = notes.find((note) => note.id === card.id);
            Elements.firstPage.style.display = "none";
            Elements.noteHead.style.display = "block";
            Elements.noteArea.value = me.content;
            Elements.noteTitle.value = me.title;
            Elements.tag.value = me.tag;
        });
    });
}
