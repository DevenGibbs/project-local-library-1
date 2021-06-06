function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let allCheckOutIdsArray = [];
  books.forEach((book) => {book.borrows.forEach((borrow) => allCheckOutIdsArray.push(borrow.id)) });
  let idMatches = allCheckOutIdsArray.filter((anId) => anId === account.id);
  const checkOuts = idMatches.length;
  return checkOuts;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id === account.id && !item.returned)) {
      result.push(book);
    }
  })
  result.forEach((book) => {
    let theAuthor = authors.find((person) => person.id === book.authorId);
    book['author'] = theAuthor;
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
