function openEditForm(id) {
  editNoteSection.style.display = "block";
  createNoteBtn.style.display = "none";
  backToNotesBtn.style.display = "block";

  noteToEdit = +document.getElementById(id).id;

  const getIndex = (id) => notes.findIndex((note) => note.id === id);
  const index = getIndex(noteToEdit);

  editCategory.value = notes[index].category;
  editCategory.setAttribute("disabled", "disabled");
  editTitle.value = notes[index].title;
  editDescription.value = notes[index].description;
  editDate.value = notes[index].date;
  notes[index].id = noteToEdit;
}

function editNote() {
  const index = getIndex(notes, noteToEdit);

  const newNote = (id) =>
    notes.map((note) => {
      if (note.id === id) {
        notes[index].category = editCategory.value;
        notes[index].title = editTitle.value;
        notes[index].description = editDescription.value;
        notes[index].date = editDate.value;
        notes[index].id = noteToEdit;
      }
    });

  newNote(noteToEdit);
}

function updateNote() {
  const note = document.getElementById(noteToEdit);
  console.log(note);

  const newTitle = note.querySelector("h3.title");
  newTitle.textContent = editTitle.value;

  const newDescription = note.querySelector("p.note-description");
  newDescription.textContent = editDescription.value;
  console.log(newDescription);

  const newDate = note.querySelector("p.note-date");
  newDate.textContent = editDate.value;
}

function addEditedNote(e) {
  e.preventDefault();

  editNote();

  updateNote();

  closeNoteForm(e);
}
