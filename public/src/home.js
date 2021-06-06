function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => book.borrows[0].returned ? acc : ++acc, 0);
}

function getMostCommonGenres(books) {
  const genresArray = [];
  books.forEach((book) => {
    if (genresArray.some((gen) => gen.name === book.genre)) {
      for (let i = 0; i < genresArray.length; i++) {
        if (genresArray[i].name === book.genre) {
          genresArray[i].count += 1
        }
      }
    } else {
      let newObject = {};
      newObject.name = book.genre;
      newObject.count = 1;
      genresArray.push(newObject);
    }
  })
  genresArray.sort((a, b) => b.count - a.count)
  return genresArray.slice(0,5);
}

function getMostPopularBooks(books) {
  let result = books.map((book) => {
    let newObject = {}
    newObject.name = book.title;
    newObject.count = book.borrows.length;
    return newObject
  })
  result.sort((a, b) => b.count - a.count);
  return result.slice(0,5);
}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
