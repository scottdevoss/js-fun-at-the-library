

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};

function createLibrary(library) {
  return {
    name: library,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book);
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book);
  }
}

function checkoutBook(library, title, genre) {
  let shelf = library.shelves[genre];

  for (let i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
      return `You have now checked out ${title} from the ${library.name}.`;
    }
  }

  return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
}

function takeStock(library, genre) {
  if (genre) {
    let shelfCount = library.shelves[genre].length;
    return `There are a total of ${shelfCount} ${genre} books at the ${library.name}.`;
  } else {
    let totalCount = 0;
    for (let key in library.shelves) {
      totalCount += library.shelves[key].length;
    }
    return `There are a total of ${totalCount} books at the ${library.name}.`;
  }
}