import noItems from "./noItems.js";
import displayNoteInputs from "./displayNoteInputs.js";
import renderNotes from "./renderNotes.js";
export default function deleteCardEventListener(noteList) {
    const notesCard = document.querySelector("#notes-card");

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
                noteList.remove(me, function () {
                    card.remove();

                    renderNotes(noteList);
                    noItems();
                });
            }

            /*  window.location.reload(); */
            noItems();
            displayNoteInputs();
        }
        noItems();
    });
}
