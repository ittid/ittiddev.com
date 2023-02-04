import { ElivatorText } from "../UI/atoms/lead/ElivatorText";
import { ElivatorImage } from "../UI/atoms/lead/ElivatorImage";
import { Newsletter } from "../UI/organisms/Newsletter";
import { ProjectsSection } from "../UI/organisms/ProjectSection";
import { TitleView } from "../UI/atoms/TitleView";
import { Skills } from "../UI/organisms/Skills";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="lead">
          <ElivatorText />
          <ElivatorImage />
        </div>
        <div className="skills">
          <Skills />
        </div>
        <div className="projects_area">
          <TitleView name="Projects" view={true} link="/projects" />
          <ProjectsSection showRepos={5} />
        </div>
        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

export default Home;
