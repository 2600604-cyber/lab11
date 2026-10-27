// Name: Soban Iqbal | Reg. No: 2600604

// Small component styled with an INLINE style (green = available, red = borrowed).
function BookStatus({ available }) {
  const style = {
    backgroundColor: available ? "green" : "red",
    color: "white",
    padding: "2px 10px",
    borderRadius: "12px",
    fontSize: "0.85rem",
    display: "inline-block",
  };

  return <span style={style}>{available ? "Available" : "Borrowed"}</span>;
}

export default BookStatus;
