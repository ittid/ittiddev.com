import { ProjectsRepos } from "../molecules/ProjectsRepos";

function ProjectsSection(props) {
  return (
    <>
      <ProjectsRepos showRepos={props.showRepos} />
    </>
  );
}

export { ProjectsSection };
