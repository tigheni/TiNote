import displayNoteInputs from "./notehead.js";
export default function reviewNote() {
    window.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("click", function (e) {
                const notes = JSON.parse(localStorage.getItem("notes"));
                let me = notes.find((note) => note.id === card.id);
                const { content, tag } = me;
                console.log(tag);
                displayNoteInputs(me, content, tag);
            });
        });
    });
}
