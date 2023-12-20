export function noItems(notesCard) {
    if (notesCard.childElementCount === 0) {
        notesCard.classList.remove("items");
        notesCard.classList.add("no-items");
        notesCard.innerHTML = "no items";
        console.log("no items");
    } else {
        return false;
    }
}
