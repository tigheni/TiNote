import displayNoteInputs from './displayNoteInputs.js';
import { Elements } from './index.js';

const addBtn = document.querySelector('.btn-add-note');
export default function insertNoteInput(Note) {
  const clickToAddNote = (e) => {
    e.preventDefault();
    const welcomeNote = new Note(
      'New Note',
      'Start typing here...',
      new Date().toLocaleString()
    );
    Elements.submitBtn.style.display = 'inline-block';
    displayNoteInputs(welcomeNote);
  };
  addBtn.addEventListener('click', clickToAddNote);
}
