import { TitleView } from "../atoms/TitleView";

function Newsletter() {
  const validateEmailWithRegex = () => {
    document.getElementById("register").onsubmit = function (e) {
      let input = document.getElementById("email");
      let msgError = document.getElementById("error-msg");
      let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;

      if (!regex.test(input.value)) {
        msgError.innerText = "Error: please enter a valid email address";
        input.classList.add("error");
        return false;
      } else {
        msgError.innerText = " ";
        input.classList.remove("error");
        return true;
      }
    };
  };

  return (
    <>
      <TitleView name="Newsletter" view={false} link="" />
      <p>
        I write about things in tech and web development, If you like my stuff
        and hate spam, join other developers in receiving my email newsletter.
      </p>

      <form action="GET" className="form" id="register">
        <div className="enter">
          <input
            type="text"
            name="email"
            id="email"
            className="email"
            placeholder="Enter your email address"
          />
        </div>
        <small id="error-msg" className="error-msg"></small>
        <div className="submit">
          <button
            className="button"
            onClick={() => {
              validateEmailWithRegex();
            }}
          >
            Subscribe to the Newsletter
          </button>
        </div>
      </form>
    </>
  );
}

export { Newsletter };
