import { Elements } from "./index.js";
export default function reviewNote() {
    console.log("no note");

    window.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("click", function (e) {
                console.log("Card clicked:", card.id);
                e.preventDefault();

                const notes = JSON.parse(localStorage.getItem("notes"));
                console.log("Notes from local storage:", notes);
                const me = notes.find((note) => note.id === card.id);

                Elements.firstPage.style.display = "none";
                Elements.noteHead.style.display = "block";
                Elements.noteArea.value = me.content;
                Elements.noteTitle.value = me.title;
                Elements.tag.value = me.tag;

                // Update note
                Elements.noteArea.addEventListener("input", function () {
                    me.content = Elements.noteArea.value;
                    localStorage.setItem("notes", JSON.stringify(notes));
                });
            });
        });
    });
}
