
module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};

function shelfBook(title, shelf) {
  const maxLength = 3;

  if (shelf.length < maxLength) {
  return shelf.unshift(title)
  };
};

function unshelfBook(title, shelf) {
 
}