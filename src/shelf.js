
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

function shelfBook(title, shelf) {
  const maxLength = 3;

  if (shelf.length < maxLength) {
  return shelf.unshift(title)
  };
};

function unshelfBook(title, shelf) {
  
  // Find the index of the book to remove
  const indexToRemove = shelf.findIndex(book => book.title === title);

  // If the book is found, remove it from the shelf
  if (indexToRemove !== -1) {
    shelf.splice(indexToRemove, 1);
  }
}

function listTitles(shelf) {
  return shelf.map(function(book) {
    return book.title;
  }).join(', ');
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}