function fetchNoteData(e, note) {
  e.preventDefault();

  noteId = Math.floor(Math.random() * 1000);

  const formData = new FormData(e.target);
  const choosenCategory = formData.get("category");
  const enteredTitle = formData.get("title");
  const enteredDescription = formData.get("description");
  const choosenDate = formData.get("date");

  noteData.category = choosenCategory;
  noteData.title = enteredTitle;
  noteData.description = enteredDescription;
  noteData.date = choosenDate;
  noteData.id = +noteId;

  note = {
    category: choosenCategory,
    title: enteredTitle,
    description: enteredDescription,
    date: choosenDate,
    id: +noteId,
  };

  noteData.push(note);
  notes.push(...noteData);
}

function createNoteList(note) {
  const notesList = document.createElement("ul");
  notesList.classList.add("notes-boxes");
  notesList.setAttribute("id", `${noteData.id}`);

  if (notes.id === noteData.id) {
    return;
  }

  const noteListElement = document.createElement("li");
  noteListElement.classList.add("note-box", `${noteData.category}`);
  noteListElement.setAttribute("id", `${noteData.id}`);
  editNoteClass = `edit-${noteData.id}`;

  noteListElement.innerHTML += `
            <div class="box-header box-header-${noteData.category}">
              <h3 class="note-category ${editNoteClass}">${noteData.category}</h3>
              <div class="box-btns">
                <button class="edit btn btn-other" onClick="openEditForm(${noteData.id})">Edit</button>
                <button class="delete btn btn-other" onClick="deleteNote(${noteData.id})">Delete</button>
              </div>
            </div>
            <div class="underline"></div>
            <div class="box-content">
              <h3 class="title ${editNoteClass}">${noteData.title}</h3>
              <p class="note-description ${editNoteClass}" id="body">
                ${noteData.description}
              </p>
              <div class="date-box">
                <p class="date-text">Date:</p>
                <p class="date note-date ${editNoteClass}">${noteData.date}</p>
              </div>
            </div>
        `;

  notesList.appendChild(noteListElement);

  return notesList;
}

function checkForm(category, title, description, date) {
  const select = "select";
  const enter = "enter";

  if (
    category === "none" ||
    title === "" ||
    description === "" ||
    date === ""
  ) {
    addError(selectCategory, select, selectCategory.name);
    addError(titleInput, enter, titleInput.name);
    addError(descriptionInput, enter, descriptionInput.name);
    addError(dateInput, select, dateInput.name);
  } else {
    inputs = [selectCategory, titleInput, descriptionInput, dateInput];
    for (const input of inputs) {
      removeError(input);
    }
  }

  if (category === "none") {
    addError(selectCategory, select, selectCategory.name);
  } else {
    removeError(selectCategory);
  }

  if (title === "") {
    addError(titleInput, enter, titleInput.name);
  } else {
    removeError(titleInput);
  }

  if (description === "") {
    addError(descriptionInput, enter, descriptionInput.name);
  } else {
    removeError(descriptionInput);
  }

  if (date === "") {
    addError(dateInput, select, dateInput.name);
  } else {
    removeError(dateInput);
  }

  return;
}

function addNoteToSection(section) {
  if (selectCategory.value === "work") {
    workNotesSection.appendChild(section);
  } else if (selectCategory.value === "home") {
    homeNotesSection.appendChild(section);
  } else if (selectCategory.value === "other") {
    otherNotesSection.appendChild(section);
  }
}

function addNote(e) {
  e.preventDefault();
  fetchNoteData(e, noteData);

  inputs = [selectCategory, titleInput, descriptionInput, dateInput];

  if (
    selectCategory.value === "" ||
    titleInput.value === "" ||
    descriptionInput.value === "" ||
    dateInput === ""
  ) {
    checkForm(
      selectCategory.value,
      titleInput.value,
      descriptionInput.value,
      dateInput.value
    );
  } else {
    const noteListElement = createNoteList(notes);
    addNoteToSection(noteListElement);

    noNotes(notes);

    closeNoteForm(e);
  }
}
