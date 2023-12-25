const notesCard = document.getElementById("notes-card");
const p = document.createElement("p");
export default function noItems() {
    if (notesCard.childElementCount == "0") {
        p.innerHTML = "No Notes Yet !";
        notesCard.appendChild(p);
        notesCard.classList.remove("items");
        notesCard.classList.add("no-items");
    } else {
        notesCard.classList.remove("no-items");
        notesCard.classList.add("items");
        notesCard.removeChild(p);
    }
}
