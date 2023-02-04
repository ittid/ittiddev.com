function FooterCopyRight() {
  let date = new Date();

  return (
    <>
      <p className="footer-copy">
        {date.getFullYear()} © Made by <strong> ittid</strong>.
      </p>
    </>
  );
}

export { FooterCopyRight };
