function noNotes(notes) {
  for (const cat of noteCategoriesHeadlines) {
    if (notes.length === 0) {
      cat.style.display = "none";
    } else {
      cat.style.display = "block";
      noNotesHeadline.style.display = 'none';
    }
  }

  console.log(notes);
}

noNotes(notes);
