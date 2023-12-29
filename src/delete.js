import noItems from "./noItems.js";
import { Elements } from "./index.js";
export default function deleteCardEventListener() {
    const notesCard = document.getElementById("notes-card");

    notesCard.addEventListener("click", function (e) {
        const deleteBtn = e.target.closest(".delete-btn");
        if (deleteBtn) {
            e.preventDefault();
            const card = deleteBtn.closest(".card");

            if (!card) {
                return;
            }

            const notes = JSON.parse(localStorage.getItem("notes"));
            const me = notes.find((note) => note.id === card.id);
            const index = notes.indexOf(me);

            if (index !== -1) {
                notes.splice(index, 1);
                localStorage.setItem("notes", JSON.stringify(notes));
            }

            card.remove();
            noItems();
            /*  window.location.reload(); */
        }
    });
}
