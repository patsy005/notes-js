function openNoteForm() {
  createNoteSection.style.display = "block";
  createNoteBtn.style.display = "none";
  backToNotesBtn.style.display = "block";
}

function openEditForm() {
  editNoteSection.style.display = "block";
  createNoteBtn.style.display = "none";
  backToNotesBtn.style.display = "block";
}

function closeNoteForm(e) {
  e.preventDefault();
  createNoteSection.style.display = "none";
  createNoteBtn.style.display = "block";
  backToNotesBtn.style.display = "none";

  editNoteSection.style.display = "none";

  inputs = [titleInput, dateInput, descriptionInput];
  for (const input of inputs) {
    input.value = "";
  }

  selectCategory.value = "none";

  inputs = [selectCategory, titleInput, descriptionInput, dateInput];
  for (const input of inputs) {
    removeError(input);
  }
}

function clearNoteForm(e) {
  e.preventDefault();

  inputs = [titleInput, dateInput, descriptionInput];
  for (const input of inputs) {
    input.value = "";
  }

  selectCategory.value = "none";

  inputs = [selectCategory, titleInput, descriptionInput, dateInput];
  for (const input of inputs) {
    removeError(input);
  }
}

function deleteNote(id) {
  const noteToDelete = document.getElementById(id);
  noteToDelete.remove();
}

function addError(input, message, type) {
  input.classList.add("error");
  input.nextElementSibling.classList.add("error-p");
  input.nextElementSibling.textContent = `Please ${message} a ${type} `;
}

function removeError(input) {
  input.classList.remove("error");
  input.nextElementSibling.classList.remove("error-p");
  input.nextElementSibling.textContent = "";
}



const getIndex = (arr, id) => arr.findIndex((el) => +el.id === id);
