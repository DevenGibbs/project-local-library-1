function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const notReturnedArray = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  const returnedArray = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  const result = [notReturnedArray, returnedArray];
  return result;
}

function getBorrowersForBook(book, accounts) {
  let borrowHistory = book.borrows.map((borrow) => {
    let accountInfo = findAuthorById(accounts, borrow.id);
    accountInfo.returned = borrow.returned;
  return accountInfo  
  }).slice(0,10);
  return borrowHistory
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
