import { FooterCopyRight } from "../atoms/footer/FooterCopyRight";
import { FooterMenu } from "../atoms/footer/FooterMenu";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <FooterMenu />
          <FooterCopyRight />
          <span className="use">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <FaReact className="react" />
            </a>
            <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
              <SiRedux className="redux" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
