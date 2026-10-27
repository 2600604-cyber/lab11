// Name: Soban Iqbal | Reg. No: 2600604
import styles from "./BookCard.module.css";
import BookStatus from "./BookStatus.jsx";

// category has a default value of "General"
function BookCard({ title, author, year, available, category = "General" }) {
  // Bonus: red border when the book is borrowed (ternary inside className)
  const cardClass = available ? styles.card : `${styles.card} ${styles.borrowed}`;

  return (
    <article className={cardClass}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>by {author}</p>
      <p className={styles.meta}>
        {year} &bull; {category}
      </p>
      <BookStatus available={available} />
    </article>
  );
}

export default BookCard;
