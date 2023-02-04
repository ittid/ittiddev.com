import { AboutText } from "../UI/atoms/AboutText";
import { AboutSidebar } from "../UI/organisms/AboutSidebar";

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <AboutText />
          <AboutSidebar />
        </div>
      </div>
    </>
  );
}

export default About;
