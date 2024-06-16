import { Elements } from './index.js';
export default function displayNoteInputs(welcomeNote) {
    if (Elements.firstPage && welcomeNote) {
        Elements.noteHead.style.display = 'block';
        Elements.firstPage.style.display = 'none';
        Elements.noteTitle.value = welcomeNote.title;
        Elements.noteArea.value = '';
        Elements.tag.value = '';
        Elements.noteArea.placeholder = welcomeNote.content;
    } else {
        Elements.firstPage.style.display = 'block';
        Elements.noteHead.style.display = 'none';
        Elements.noteTitle.value = 'New Note';
        Elements.noteArea.value = '';
        Elements.tag.value = '';
        Elements.noteArea.placeholder = 'Start typing here...';
    }
    setTimeout(() => {
        document.getElementById('note-text').focus();
    }, 0);
}
