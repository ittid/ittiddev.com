import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "../../rtk/slices/userSlice";
import { ProjectsSection } from "../UI/organisms/ProjectSection";
import { TitleView } from "../UI/atoms/TitleView";

function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  return (
    <div className="projects">
      <div className="container">
        <div className="projects_area">
          <TitleView name="Projects" view={false} link="" />
          <ProjectsSection showRepos="all" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
