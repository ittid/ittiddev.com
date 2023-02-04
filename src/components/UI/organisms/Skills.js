import { TitleView } from "../atoms/TitleView";
import { SkillsMolecules } from "../molecules/SkillsMolecules";
function Skills() {
  return (
    <>
      <TitleView show={false} name={"Skills"} link={""} />
      <div className="skills-preview">
        <SkillsMolecules
          title="JavaScript"
          skills={["JavaScript", "React", "Vue", "Redux", "Jest", "AJAX"]}
        />
        <SkillsMolecules
          title="Front-End"
          skills={[
            "HTML5",
            "CSS3",
            "Sass",
            "Pug.js",
            "Gulp.js",
            "jQuery",
            "Bootstrap",
          ]}
        />
        <SkillsMolecules title="Back-End" skills={["Node.js"]} />
        <SkillsMolecules
          title="Tools"
          skills={["Git & GitHub", "Firebase"]}
        />
      </div>
    </>
  );
}

export { Skills };
