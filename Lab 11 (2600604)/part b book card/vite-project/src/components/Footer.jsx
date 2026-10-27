// Name: Soban Iqbal | Reg. No: 2600604

function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>
        &copy; {year} {name}
      </p>
    </footer>
  );
}

export default Footer;
