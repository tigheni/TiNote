import { Elements } from "./index.js";
export default function reviewNote() {
    window.addEventListener("DOMContentLoaded", function () {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("click", function (e) {
                e.preventDefault();
                console.log("Card clicked:", card);
                /*      if (e.target.classList.contains("delete")) {
                    card.remove();
                }
                if (e.target.classList.contains("pin")) {
                    card.classList.toggle("pinned");
                }
                if (e.target.classList.contains("edit")) {
                    Elements.firstPage.style.display = "block";
                    Elements.noteHead.style.display = "none";
                } */
                /*    if (e.target.classList.contains("delete")) {
                    const notes = JSON.parse(localStorage.getItem("notes"));
                    const me = notes.find((note) => note.id === card.id);
                    const index = notes.indexOf(me);
                    if (index !== -1) {
                        notes.splice(index, 1);
                        localStorage.setItem("notes", JSON.stringify(notes));
                    }
                    card.remove();
                } */
                console.log("card.id:", card.id);
                const notes = JSON.parse(localStorage.getItem("notes"));
                const me = notes.find((note) => note.id === card.id);
                Elements.firstPage.style.display = "none";
                Elements.noteHead.style.display = "block";
                Elements.noteArea.value = me.content;
                Elements.noteTitle.value = me.title;
                Elements.tag.value = me.tag;
            });
        });
    });
}
