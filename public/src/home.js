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
function getMostPopularAuthors(books, authors) {
  books.forEach((book) => {
    let numberOfBorrows = book.borrows.length;
    let theAuthor = authors.find((person) => person.id === book.authorId);
    let authorName = `${theAuthor.name.first} ${theAuthor.name.last}`;
    book["name"] = authorName;
    book["count"] = numberOfBorrows
  })
  let newArray = books.map(({name, count}) => ({name, count}));
  let finalArray = [];
  newArray.forEach((item) => {
    if(finalArray.some((obj) => obj.name === item.name)) {
      for (let i = 0; i <finalArray.length; i++) {
        if(finalArray[i].name === item.name) {
          finalArray[i].count += item.count
        }
      }
    } else {
      let newObject = {};
      newObject.name = item.name;
      newObject.count = item.count;
      finalArray.push(newObject);
    }
  })
  finalArray.sort((a, b) => a.count < b.count ? 1 : -1);
  return finalArray.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
