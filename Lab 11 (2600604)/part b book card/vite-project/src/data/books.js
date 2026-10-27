// Name: Soban Iqbal | Reg. No: 2600604

// Two books (id 4 and id 6) have no "category" field on purpose,
// so BookCard falls back to its default value "General".
const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", year: 2008, available: true, category: "Programming" },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999, available: false, category: "Programming" },
  { id: 3, title: "Database System Concepts", author: "Abraham Silberschatz", year: 2019, available: true, category: "Databases" },
  { id: 4, title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, available: true },
  { id: 5, title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2018, available: false, category: "Programming" },
  { id: 6, title: "The Alchemist", author: "Paulo Coelho", year: 1988, available: true },
  { id: 7, title: "Learning React", author: "Alex Banks", year: 2020, available: false, category: "Programming" },
];

export default books;
