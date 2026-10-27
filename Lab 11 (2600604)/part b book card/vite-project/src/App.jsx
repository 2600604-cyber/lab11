// Name: Soban Iqbal | Reg. No: 2600604
import allBooks from "./data/books.js";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Section from "./components/Section.jsx";
import BookCard from "./components/BookCard.jsx";

// For the "empty array" screenshot: open the page with  /?empty  at the end of the URL
// (or simply change this line to:  const books = [];)
const books = window.location.search.includes("empty") ? [] : allBooks;

function App() {
  const totalBooks = books.length;
  const availableBooks = books.filter((book) => book.available).length;

  // Bonus: books of one category
  const programmingBooks = books.filter((book) => book.category === "Programming");

  return (
    <div>
      <Header title="Book Cards" subtitle="Our small library at a glance" />

      <Section heading="All Books">
        <div className="stats">
          <span>Total books: {totalBooks}</span>
          <span>Available: {availableBooks}</span>
        </div>

        {books.length === 0 ? (
          <p className="empty-message">No books found.</p>
        ) : (
          <div className="card-grid">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                year={book.year}
                available={book.available}
                category={book.category}
              />
            ))}
          </div>
        )}
      </Section>

      {/* Bonus: second Section with one category */}
      {programmingBooks.length > 0 && (
        <Section heading="Programming Books">
          <div className="card-grid">
            {programmingBooks.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                year={book.year}
                available={book.available}
                category={book.category}
              />
            ))}
          </div>
        </Section>
      )}

      <Footer name="Soban Iqbal (2600604)" />
    </div>
  );
}

export default App;
