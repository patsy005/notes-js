const createNoteBtn = document.querySelector(".create-note-btn");
const createNoteSection = document.querySelector(".create-note");
const backToNotesBtn = document.querySelector(".back-to-notes-btn");

const createNoteForm = document.querySelector(".form");
const otherNotesSection = document.querySelector(".other-notes");
const homeNotesSection = document.querySelector(".home-notes");
const workNotesSection = document.querySelector(".work-notes");


const selectCategory = document.querySelector("#category");
const titleInput = document.querySelector("#title");
const descriptionInput = document.querySelector("#description");
const dateInput = document.querySelector("#date");

const clearFormBtn = document.querySelector(".cancel");

const editCategory = document.querySelector("#edit-category");
const editTitle = document.querySelector("#edit-title");
const editDescription = document.querySelector("#edit-description");
const editDate = document.querySelector("#edit-date");

const errorMsg = document.querySelector(".msg");

const editNoteSection = document.querySelector(".edit-note");


const noteCategoriesHeadlines = document.querySelectorAll('.cat');
const noNotesHeadline = document.querySelector('.no-notes');

// let noteData = [{ category: "", title: "", description: "", date: "", id: '' }];
let noteData = [];
const notes = [];
let inputs = []
let noteId;
let noteToEdit;
let editNoteClass;




createNoteBtn.addEventListener("click", openNoteForm);
backToNotesBtn.addEventListener("click", closeNoteForm);
clearFormBtn.addEventListener("click", clearNoteForm);
createNoteForm.addEventListener("submit", addNote);
editNoteSection.addEventListener("submit", addEditedNote);