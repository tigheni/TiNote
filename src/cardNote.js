const notesCard = document.querySelector("#notes-card");

export default function cardNote(note) {
    // Create card container
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.setAttribute("id", note.id);

    // Create icon
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-bars");
    cardDiv.appendChild(icon);

    // Create content container
    const contentDiv = document.createElement("div");

    // Create and append title
    const noteTitle = document.createElement("h2");
    noteTitle.classList.add("note-heading");
    noteTitle.innerHTML = note.title;

    // Create and append truncated content
    const noteContent = document.createElement("h5");
    const truncatedContent = note.content.slice(0, 35);

    noteContent.innerHTML = truncatedContent + "...";
    noteContent.classList.add("note-resumé");

    // Create and append date
    const noteDate = document.createElement("p");
    noteDate.classList.add("note-date");
    noteDate.innerHTML = note.date;

    // Append title, truncated content, and date to contentDiv
    contentDiv.append(noteTitle, noteContent, noteDate);

    // Append contentDiv to cardDiv
    cardDiv.appendChild(contentDiv);

    // Append cardDiv to notesCard
    notesCard.appendChild(cardDiv);

    // Create and append horizontal line
    const hrElement = document.createElement("span");
    hrElement.classList.add("hrByMe");
    notesCard.appendChild(hrElement);
}
