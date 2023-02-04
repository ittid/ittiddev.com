import { MenuItem } from "../UI/atoms/header/MenuItem";

function Error() {
  return (
    <>
      <div className="error-page">
        <div className="container">
          <h1>404</h1>
          <p className="message">Content not found.</p>
          <p>Here are some helpful links:</p>
          <nav>
            <ul>
              <MenuItem />
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Error;
