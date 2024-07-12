import { Elements } from './index.js';

export default function reviewingCard(exterNote) {
    Elements.submitBtn.style.display = 'none';
    Elements.firstPage.style.display = 'none';
    Elements.noteHead.style.display = 'block';
    Elements.noteArea.value = exterNote.content;
    Elements.noteTitle.value = exterNote.title;
    Elements.tag.value = exterNote.tag;
}
