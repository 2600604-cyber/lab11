// Name: Soban Iqbal | Reg. No: 2600604

// "children" is whatever is written between <Section> and </Section>.
function Section({ heading, children }) {
  return (
    <section className="section">
      <h2>{heading}</h2>
      {children}
    </section>
  );
}

export default Section;
