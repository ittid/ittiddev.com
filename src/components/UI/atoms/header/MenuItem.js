import { Link } from "react-router-dom";

function MenuItem() {
  const links = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/me" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {links.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        );
      })}
    </>
  );
}

export { MenuItem };
