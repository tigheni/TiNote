// note.js
import noItems from "./noItems.js";
import renderNotes from "./renderNotesCard.js";
import { Elements } from "./index.js";

export default function saveNote(noteList) {
    document.addEventListener("DOMContentLoaded", () => {
        const save = document.querySelector(".submit-btn");

        save.addEventListener("click", (e) => {
            if (!Elements.noteArea.value) return e.preventDefault();
            const currentDate = new Date();

            const options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            };
            const date = currentDate.toLocaleString("en-us", options);
            const note = {
                title: Elements.noteTitle.value,
                content: Elements.noteArea.value,
                date,
                tag: Elements.tag.value,
            };

            noteList.add(note, () => {
                renderNotes(noteList);
            });

            // Clear input fields after adding a note
            Elements.noteArea.value = "";
            Elements.tag.value = "";
            Elements.noteTitle.value = "New Note";
            noItems();
            return undefined;
        });
        noItems();
    });
}
