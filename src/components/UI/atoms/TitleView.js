function TitleView(props) {
  return (
    <>
      <h2 className="h2_title">
        <div>
          <div className="title">{props.name}</div>
        </div>
        {props.view && (
          <a href={props.link} className="button">
            View all
          </a>
        )}
      </h2>
    </>
  );
}

export { TitleView };
