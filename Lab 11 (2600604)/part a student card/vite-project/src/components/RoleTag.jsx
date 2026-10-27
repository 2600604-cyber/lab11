// Name: Soban Iqbal | Reg. No: 2600604

// Inline style: teal for "Teacher", gray for everything else
function RoleTag({ role }) {
  const style = {
    backgroundColor: role === "Teacher" ? "teal" : "gray",
    color: "white",
    padding: "2px 10px",
    borderRadius: "12px",
    fontSize: "0.85rem",
    display: "inline-block",
  };

  return <span style={style}>{role}</span>;
}

export default RoleTag;
