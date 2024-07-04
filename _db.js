const books = [
  {
    id: "1",
    name: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    available: true,
  },
  {
    id: "2",
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    available: false,
  },
  {
    id: "3",
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    available: true,
  },
];

const members = [
  {
    id: "1",
    name: "John Doe",
    email: "j9Hg9@example.com",
  },
  {
    id: "2",
    name: "Jane Doe",
    email: "j9Hg9@example.com",
  },
];

const loans = [
  {
    id: "1",
    book_id: "1",
    member_id: "1",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

export { books, members, loans };
