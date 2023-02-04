function AdditionalLink() {
  const githubLink = [
    {
      name: "GitHub",
      href: "https://www.github.com/ittid",
      target: "_blank",
      rel: "noreferrer",
    },
  ];

  return (
    <>
      {githubLink.map((elm, index) => {
        return (
          <li key={index} className="link">
            <a href={elm.href} target={elm.target} rel={elm.rel}>
              {elm.name}
            </a>
          </li>
        );
      })}
    </>
  );
}

export { AdditionalLink };
