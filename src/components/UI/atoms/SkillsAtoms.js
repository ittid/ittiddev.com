function SkillsAtoms(props) {
  return (
    <>
      <div className="atom-skill">
        <a href={"#" + props.name} className="button">
          {props.name}
        </a>
      </div>
    </>
  );
}

export { SkillsAtoms };
