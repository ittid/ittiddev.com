function InformationContact(props) {
  return (
    <>
      <div className="info">
        <h3>{props.name}</h3>
        {props.href ? (
          <p>
            <a href={props.href + props.details}>{props.details}</a>
          </p>
        ) : (
          <p>{props.details}</p>
        )}
      </div>
    </>
  );
}

export { InformationContact };
