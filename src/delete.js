import noItems from "./noItems.js";
import displayNoteInputs from "./displayNoteInputs.js";
import renderNotes from "./renderNotesCard.js";

export default function deleteCardEventListener(noteList) {
    const notesCard = document.querySelector("#notes-card");

    notesCard.addEventListener("click", (e) => {
        const deleteBtn = e.target.closest(".delete-btn");

        if (deleteBtn) {
            e.preventDefault();
            const card = deleteBtn.closest(".card");

            if (card) {
                const notes = JSON.parse(localStorage.getItem("notes"));
                const checkingCard = notes.find((note) => note.id === card.id);

                if (checkingCard) {
                    noteList.remove(checkingCard, () => {
                        renderNotes(noteList);
                        noItems();
                    });
                    displayNoteInputs();
                }
            }
        }
        noItems();
    });
}
