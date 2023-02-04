import { useSelector } from "react-redux";

function ProjectsRepos(props) {
  const data = useSelector((user) => user.user);
  const user = data
    .filter((elm) => elm.id !== 315333876)
    .sort((a, b) => {
      return new Date(a.created_at) - new Date(b.created_at);
    });

  let arrUser = [];

  if (props.showRepos === "all") {
    for (let i = 0; i < user.length; i++) {
      if (user.length > 0) {
        arrUser.push(user[i]);
      }
    }
  } else {
    for (let i = 0; i <= props.showRepos; i++) {
      if (user.length > 0) {
        arrUser.push(user[i]);
      }
    }
  }

  return (
    <>
      <div className="projects_cards">
        {arrUser.map((card, index) => {
          return (
            <div className="anshored card" key={index}>
              <div className="star">
                <a
                  href={card.html_url + "/stargazers"}
                  target="_blank"
                  rel="noreferrer"
                >
                  {card.stargazers_count}
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  style={{ width: "1rem", height: "1rem", fill: "orange" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                  ></path>
                </svg>
              </div>
              <div>
                <time className="date">
                  {new Date(card.created_at).getFullYear()}
                </time>
                <a href={card.html_url} className="repos-name">
                  {card.name.replaceAll("-", " ")}
                </a>
                <p>{card.description.toLowerCase()}</p>
              </div>

              <div className="links">
                {card.homepage && (
                  <a
                    href={card.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={card.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { ProjectsRepos };
