import noItems from "./noItems.js";
export default function deleteCard(card) {
    const deleteBtn = document.querySelector("#delete");
    const deleteBtn2 = document.querySelector(".delete-btn");
    let her = [deleteBtn, deleteBtn2];
    her.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            card.classList.add("delete");

            noItems();
            /*       const notes = JSON.parse(localStorage.getItem("notes"));
            const me = notes.find((note) => note.id === card.id);
            const index = notes.indexOf(me);
            if (index !== -1) {
                notes.splice(index, 1);
                localStorage.setItem("notes", JSON.stringify(notes));
            } */
        });
    });
}
