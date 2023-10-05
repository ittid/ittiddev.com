import { TitleView } from "../atoms/TitleView";
import { SkillsMolecules } from "../molecules/SkillsMolecules";
function Skills() {
  return (
    <>
      <TitleView show={false} name={"Skills"} link={""} />
      <div className="skills-preview">
        <SkillsMolecules
          title="JavaScript"
          skills={["JavaScript", "TypeScript", "React", "Vue.js", "Redux", "Jest"]}
        />
        <SkillsMolecules
          title="Front-End"
          skills={[
            "HTML5",
            "CSS3",
            "Sass",
            "Pug.js",
            "Bootstrap",
          ]}
        />
        <SkillsMolecules title="Back-End" skills={["Node.js", "Express.js", "mongodb"]} />
        <SkillsMolecules
          title="Tools"
          skills={["Git & GitHub", "Gulp.js",]}
        />
      </div>
    </>
  );
}

export { Skills };
