import deleteCard from "./delete.js";
import noItems from "./noItems.js";

export default function reviewNote(Elements) {
    window.addEventListener("DOMContentLoaded", function () {
        console.log("DOM content loaded");

        const notesCard = document.getElementById("notes-card");

        notesCard.addEventListener("click", function (e) {
            e.preventDefault();
            const allcards = document.querySelectorAll(".card");
            let cards = Array.from(allcards);
            console.log(cards);

            let card = e.target.parentElement.parentElement;
            if (card.classList.contains("tag-icon")) {
                card = card.parentElement;
            } else if (card.classList.contains("items")) {
                return;
            }
            deleteCard(card);

            if (card.classList.contains("delete")) {
                const notes = JSON.parse(localStorage.getItem("notes"));
                const me = notes.find((note) => note.id === card.id);
                const index = notes.indexOf(me);
                if (index !== -1) {
                    notes.splice(index, 1);
                    localStorage.setItem("notes", JSON.stringify(notes));
                }
                card.classList.add("delete");
                Elements.noteTitle.value = "New Note";
                Elements.noteArea.value = "";
                Elements.noteArea.placeholder = "Start writing here";
                Elements.tag.value = "";
                card.remove();
                noItems();
            }

            if (!card) {
                return;
            }

            const notes = JSON.parse(localStorage.getItem("notes"));
            const me = notes.find((note) => note.id === card.id);

            console.log(me);
            Elements.firstPage.style.display = "none";
            Elements.noteHead.style.display = "block";
            Elements.noteArea.value = me.content;
            Elements.noteTitle.value = me.title;
            Elements.tag.value = me.tag;

            // Empty the inputs
        });
    });
}
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
