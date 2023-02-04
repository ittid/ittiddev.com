import { Menu } from "../molecules/Menu";

const handleScrollNavbar = () => {
  const header = document.getElementById("header");
  if (header) {
    if (window.scrollY > 5) {
      header.classList.add("nav-scroll");
    } else {
      header.classList.remove("nav-scroll");
    }
  }
};

window.addEventListener("scroll", handleScrollNavbar);

function Header() {
  return (
    <>
      <div className="navigation" id="header">
        <div className="container">
          <Menu />
        </div>
      </div>
    </>
  );
}

export { Header };
