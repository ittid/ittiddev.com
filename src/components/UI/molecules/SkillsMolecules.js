import { SkillsAtoms } from "../atoms/SkillsAtoms";
function SkillsMolecules(props) {
  return (
    <>
      <div className="skills-section">
        <h3>{props.title}</h3>
        <div className="skills-elms">
          {props.skills.map((el, index) => {
            return <SkillsAtoms name={el} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export { SkillsMolecules };
