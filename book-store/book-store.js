//@ts-check
//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 *
 * @param {number[]} books
 */
export function cost(books) {
  return pricePerGroup(books);
}

function pricePerGroup(books) {
  const SINGLE_BOOK_PRICE = 800;
  let booksCount = books.length;
  let total = SINGLE_BOOK_PRICE * booksCount;
  return total - total * getDiscount(booksCount);
}

function getDiscount(bookCount) {
  switch (bookCount) {
    case 2:
      return 0.05;
    case 3:
      return 0.1;
    case 4:
      return 0.2;
    case 5:
      return 0.25;
    default:
      return 0;
  }
}

[1, 2, 3, 4, 5, 1, 2, 3, 4];
