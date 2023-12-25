export default function renderNotes(notelist) {
    const notesCard = document.querySelector("#notes-card");
    notelist.getAllNotes().forEach((note) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.setAttribute("id", note.id);

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-bars");
        cardDiv.appendChild(icon);

        const contentDiv = document.createElement("div");

        const noteTitle = document.createElement("h2");
        noteTitle.classList.add("note-heading");
        noteTitle.innerHTML = note.title;

        const noteContent = document.createElement("h5");
        const truncatedContent = note.content.slice(0, 35);
        noteContent.innerHTML = truncatedContent + "...";
        noteContent.classList.add("note-resumé");
        const noteDate = document.createElement("p");
        noteDate.classList.add("note-date");
        noteDate.innerHTML = note.date;
        contentDiv.append(noteTitle, noteContent, noteDate);
        cardDiv.appendChild(contentDiv);
        notesCard.appendChild(cardDiv);
        const hrElement = document.createElement("span");
        hrElement.classList.add("hrByMe");
        notesCard.appendChild(hrElement);
    });
}
