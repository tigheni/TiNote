const notesCard = document.getElementById("notes-card");
export default function noItems() {
    if (notesCard.childElementCount === 0) {
        notesCard.classList.remove("items");
        notesCard.classList.add("no-items");
        notesCard.innerHTML = "no items";
    } else {
        return false;
    }
}
