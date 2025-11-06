const books = [
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960,
  },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925,
  },
];

function sortByYear(bookA, bookB) {
  if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  } else if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);

/*

const books = [
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 }
];

// Optionally, use spread (...books) if you want to preserve the original array
let sorted = [...books].sort((bookA, bookB)=> bookA.releaseYear - bookB.releaseYear)

const filtered = sorted.filter((book)=> book.releaseYear <= 1950);

console.log(filtered)


*/
